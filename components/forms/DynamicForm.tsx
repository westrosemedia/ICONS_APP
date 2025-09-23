"use client";

import { useState } from "react";
import { Field, Section, IntakeSpec } from "@/types/forms";

interface DynamicFormProps {
  spec: IntakeSpec;
  onSubmit: (data: Record<string, any>) => void;
  className?: string;
}

export default function DynamicForm({ spec, onSubmit, className = "" }: DynamicFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    spec.sections.forEach(section => {
      section.fields.forEach(field => {
        if (field.type === "note") return; // Skip note fields
        
        const value = formData[field.name];
        
        if (field.required && (!value || (Array.isArray(value) && value.length === 0))) {
          newErrors[field.name] = `${field.label} is required`;
        }
        
        if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[field.name] = "Please enter a valid email address";
        }
      });
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const renderField = (field: Field) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      value: formData[field.name] || "",
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        handleInputChange(field.name, e.target.value);
      },
      className: `w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white/20 transition-all duration-200 font-body ${
        errors[field.name] ? "border-red-500 bg-red-900/20" : ""
      }`
    };

    switch (field.type) {
      case "text":
      case "email":
      case "tel":
        return (
          <input
            {...commonProps}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
          />
        );

      case "number":
        return (
          <input
            {...commonProps}
            type="number"
            min={field.min}
            max={field.max}
            required={field.required}
          />
        );

      case "textarea":
        return (
          <textarea
            {...commonProps}
            rows={field.rows || 4}
            placeholder={field.placeholder}
            required={field.required}
            className={`${commonProps.className} resize-none`}
          />
        );

      case "select":
        return (
          <select {...commonProps} required={field.required} className={`${commonProps.className} appearance-none bg-white/10`}>
            <option value="" className="bg-black text-white">Select an option</option>
            {field.options.map(option => (
              <option key={option} value={option} className="bg-black text-white">
                {option}
              </option>
            ))}
          </select>
        );

      case "multiselect":
        const selectedValues = Array.isArray(formData[field.name]) ? formData[field.name] : [];
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {field.options.map(option => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200">
                <input
                  type="checkbox"
                  checked={selectedValues.includes(option)}
                  onChange={(e) => {
                    const newValues = e.target.checked
                      ? [...selectedValues, option]
                      : selectedValues.filter((v: string) => v !== option);
                    handleInputChange(field.name, newValues);
                  }}
                  className="w-5 h-5 text-red-600 border-white/30 rounded focus:ring-red-500 bg-white/10"
                />
                <span className="text-white/90 font-body">{option}</span>
              </label>
            ))}
          </div>
        );

      case "radio":
        return (
          <div className="space-y-3">
            {field.options.map(option => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200">
                <input
                  type="radio"
                  name={field.name}
                  value={option}
                  checked={formData[field.name] === option}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  required={field.required}
                  className="w-5 h-5 text-red-600 border-white/30 focus:ring-red-500 bg-white/10"
                />
                <span className="text-white/90 font-body">{option}</span>
              </label>
            ))}
          </div>
        );

      case "checkbox":
        return (
          <label className="flex items-center space-x-3 cursor-pointer p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-200">
            <input
              type="checkbox"
              checked={formData[field.name] || false}
              onChange={(e) => handleInputChange(field.name, e.target.checked)}
              required={field.required}
              className="w-5 h-5 text-red-600 border-white/30 rounded focus:ring-red-500 bg-white/10"
            />
            <span className="text-white/90 font-body">{field.label}</span>
          </label>
        );

      case "note":
        return (
          <div className="p-6 bg-red-900/20 border border-red-500/30 rounded-xl">
            <p className="text-white/90 font-body">{field.label}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-8 ${className}`}>
      {spec.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              {section.title}
            </h3>
            <div className="w-24 h-px bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid gap-8">
            {section.fields.map((field, fieldIndex) => (
              <div key={fieldIndex} className="space-y-3">
                {field.type !== "checkbox" && field.type !== "note" && (
                  <label htmlFor={field.name} className="block text-lg font-heading font-semibold text-white">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-2">*</span>}
                  </label>
                )}
                
                {renderField(field)}
                
                {field.help && (
                  <p className="text-sm text-white/60 font-body">{field.help}</p>
                )}
                
                {errors[field.name] && (
                  <p className="text-sm text-red-400 font-body">{errors[field.name]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="pt-12">
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-heading font-bold py-6 px-8 rounded-xl text-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Secure Your Date
        </button>
      </div>
    </form>
  );
}
