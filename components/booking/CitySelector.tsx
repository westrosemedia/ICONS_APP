import React from "react";

type Props = {
  cities: string[];
  value: string;
  onChange: (city: string) => void;
};

export default function CitySelector({ cities, value, onChange }: Props) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">Select City</label>
      <select
        className="border rounded p-2 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Choose a city...</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
} 