"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Package } from "@/types/package";
import { Customer, BookingDetails } from "@/types/booking";
import { createDraftBooking, calculatePricing } from "@/lib/booking";

// Form validation schema
const bookingSchema = z.object({
  // Customer fields
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().min(1, "Company or brand name is required"),
  instagram: z.string().min(1, "Instagram handle is required"),
  tiktok: z.string().min(1, "TikTok handle is required"),
  website: z.string().min(1, "Website is required"),
  
  // Common fields
  goals: z.string().min(1, "Goals are required"),
  brandStyle: z.string().min(1, "Visual style preference is required"),
  deliverablesFocus: z.enum(["photo", "video", "both"]),
  requestedDate: z.string().min(1, "Preferred date is required"),
  accessibilityNeeds: z.string().optional(),
  notes: z.string().optional(),
  acceptsTerms: z.boolean().refine(val => val === true, "You must accept the terms"),
  
  // Spotlight specific
  city: z.enum(["Calgary", "Vancouver", "Toronto", "Other"]).optional(),
  preferredNeighborhood: z.string().optional(),
  teamSize: z.number().min(1).optional(),
  
  // Lite specific
  monthlyBillingConfirmed: z.boolean().optional(),
  firstShootWindow: z.string().optional(),
  
  // Immersion specific
  eventLocation: z.string().optional(),
  eventDates: z.string().optional(),
  expectedHeadcount: z.number().min(1).optional(),
  participants: z.number().min(0).max(10).optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  packageData: Package;
  onSuccess: (bookingId: string) => void;
}

export default function BookingForm({ packageData, onSuccess }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      deliverablesFocus: "both",
      acceptsTerms: false,
    },
  });

  const watchedCity = watch("city");
  const watchedParticipants = watch("participants") || 0;

  const onSubmit = async (data: BookingFormData) => {
    try {
      setIsSubmitting(true);
      setError(null);

      // Build customer object
      const customer: Customer = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        instagram: data.instagram,
        tiktok: data.tiktok,
        website: data.website,
      };

      // Build booking details
      const details: BookingDetails = {
        goals: data.goals,
        brandStyle: data.brandStyle,
        deliverablesFocus: data.deliverablesFocus,
        requestedDate: data.requestedDate,
        accessibilityNeeds: data.accessibilityNeeds,
        notes: data.notes,
        acceptsTerms: data.acceptsTerms,
        city: data.city,
        preferredNeighborhood: data.preferredNeighborhood,
        teamSize: data.teamSize,
        monthlyBillingConfirmed: data.monthlyBillingConfirmed,
        firstShootWindow: data.firstShootWindow,
        eventLocation: data.eventLocation,
        eventDates: data.eventDates,
        expectedHeadcount: data.expectedHeadcount,
        participants: data.participants,
      };

      // Calculate pricing
      const basePrice = packageData.basePrice;
      let addOns = 0;

      if (packageData.type === "event" && data.participants && data.participants > 0) {
        const participantPrice = packageData.options?.participantPrice || 100000;
        addOns = data.participants * participantPrice;
      }

      const pricing = calculatePricing(basePrice, addOns);

      // Create draft booking
      const bookingId = await createDraftBooking(
        packageData.id,
        customer,
        details,
        pricing
      );

      onSuccess(bookingId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create booking");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCityCalendar = () => {
    if (!watchedCity || watchedCity === "Other") {
      return (
        <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
          <p className="text-gray-700">
            Travel fees apply and will be quoted after we confirm your location
          </p>
        </div>
      );
    }

    const calendarUrl = packageData.calendars?.[watchedCity.toLowerCase() as keyof typeof packageData.calendars];
    
    if (calendarUrl) {
      return (
        <div className="p-4 border border-gray-300 rounded-lg">
          <iframe
            src={calendarUrl}
            width="100%"
            height="600"
            frameBorder="0"
            title={`${watchedCity} Availability Calendar`}
          />
        </div>
      );
    }

    return (
      <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
        <p className="text-gray-700">Calendar loading...</p>
      </div>
    );
  };

  const renderPricingSummary = () => {
    if (packageData.type === "subscription") {
      return (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Pricing Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Monthly subscription:</span>
              <span>{(packageData.basePrice / 100).toFixed(2)} CAD</span>
            </div>
            <div className="text-sm text-gray-600">GST included</div>
            <div className="text-sm text-gray-600">
              First month collected at booking, then monthly billing
            </div>
          </div>
        </div>
      );
    }

    if (packageData.type === "event" && watchedParticipants > 0) {
      const participantPrice = packageData.options?.participantPrice || 100000;
      const basePrice = packageData.basePrice || 0;
      const addOns = watchedParticipants * participantPrice;
      const subtotal = basePrice + addOns;
      const gst = Math.round(subtotal * 0.05);
      const total = subtotal + gst;

      return (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Pricing Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Base package:</span>
              <span>{(basePrice / 100).toFixed(2)} CAD</span>
            </div>
            <div className="flex justify-between">
              <span>Participant content ({watchedParticipants}):</span>
              <span>{(addOns / 100).toFixed(2)} CAD</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between font-semibold">
                <span>Subtotal:</span>
                <span>{(subtotal / 100).toFixed(2)} CAD</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>GST (5%):</span>
                <span>{(gst / 100).toFixed(2)} CAD</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>{(total / 100).toFixed(2)} CAD</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">GST included</div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Limited availability banner */}
      <div className="bg-red-600 text-white text-center py-3 mb-8">
        <p className="font-semibold">Limited dates. Secure your spot now</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Customer Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                {...register("name")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                {...register("phone")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company or Brand Name *
              </label>
              <input
                type="text"
                {...register("company")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.company && (
                <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instagram Handle *
              </label>
              <input
                type="text"
                {...register("instagram")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.instagram && (
                <p className="text-red-600 text-sm mt-1">{errors.instagram.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                TikTok Handle *
              </label>
              <input
                type="text"
                {...register("tiktok")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.tiktok && (
                <p className="text-red-600 text-sm mt-1">{errors.tiktok.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website *
              </label>
              <input
                type="url"
                {...register("website")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.website && (
                <p className="text-red-600 text-sm mt-1">{errors.website.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold mb-6">Project Details</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your goals for this shoot or engagement *
              </label>
              <textarea
                {...register("goals")}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe what you hope to achieve..."
              />
              {errors.goals && (
                <p className="text-red-600 text-sm mt-1">{errors.goals.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What visual style are you drawn to? *
              </label>
              <textarea
                {...register("brandStyle")}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your preferred aesthetic, mood, or style..."
              />
              {errors.brandStyle && (
                <p className="text-red-600 text-sm mt-1">{errors.brandStyle.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deliverables focus *
              </label>
              <select
                {...register("deliverablesFocus")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="both">Photos and Videos</option>
                <option value="photo">Photos only</option>
                <option value="video">Videos only</option>
              </select>
              {errors.deliverablesFocus && (
                <p className="text-red-600 text-sm mt-1">{errors.deliverablesFocus.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ideal shoot date *
              </label>
              <input
                type="date"
                {...register("requestedDate")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.requestedDate && (
                <p className="text-red-600 text-sm mt-1">{errors.requestedDate.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accessibility or special requirements
              </label>
              <textarea
                {...register("accessibilityNeeds")}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any accessibility needs or special considerations..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional notes
              </label>
              <textarea
                {...register("notes")}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any other details you&apos;d like to share..."
              />
            </div>
          </div>
        </div>

        {/* Package-specific fields */}
        {packageData.id === "spotlight" && (
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Location & Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <select
                  {...register("city")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a city</option>
                  <option value="Calgary">Calgary</option>
                  <option value="Vancouver">Vancouver</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Other">Other</option>
                </select>
                {errors.city && (
                  <p className="text-red-600 text-sm mt-1">{errors.city.message}</p>
                )}
              </div>

              {watchedCity && watchedCity !== "Other" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred neighborhood or studio
                  </label>
                  <input
                    type="text"
                    {...register("preferredNeighborhood")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any specific area or studio preference..."
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team size on set
                </label>
                <input
                  type="number"
                  {...register("teamSize", { valueAsNumber: true })}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How many people will be on set?"
                />
              </div>

              {/* City Calendar */}
              {watchedCity && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Availability Calendar</h3>
                  {renderCityCalendar()}
                </div>
              )}
            </div>
          </div>
        )}

        {packageData.id === "lite" && (
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Subscription Details</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>Important:</strong> This package includes a shoot every other month 
                  (months 1, 3, 5, 7, 9, 11) for a total of 6 shoots per year.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred first shoot window
                </label>
                <select
                  {...register("firstShootWindow")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a month</option>
                  <option value="1">January</option>
                  <option value="3">March</option>
                  <option value="5">May</option>
                  <option value="7">July</option>
                  <option value="9">September</option>
                  <option value="11">November</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team size on set
                </label>
                <input
                  type="number"
                  {...register("teamSize", { valueAsNumber: true })}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How many people will be on set?"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  {...register("monthlyBillingConfirmed")}
                  id="monthlyBillingConfirmed"
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="monthlyBillingConfirmed" className="text-sm text-gray-700">
                  I understand this is billed monthly at 2400 CAD with a shoot every other month
                </label>
              </div>
              {errors.monthlyBillingConfirmed && (
                <p className="text-red-600 text-sm mt-1">{errors.monthlyBillingConfirmed.message}</p>
              )}
            </div>
          </div>
        )}

        {packageData.id === "immersion" && (
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Event Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event location address
                </label>
                <input
                  type="text"
                  {...register("eventLocation")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Full address of the event location..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dates of event
                </label>
                <input
                  type="text"
                  {...register("eventDates")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., March 15-16, 2024"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected headcount
                </label>
                <input
                  type="number"
                  {...register("expectedHeadcount", { valueAsNumber: true })}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Total number of people at the event"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Participant content (0-10 people)
                </label>
                <select
                  {...register("participants", { valueAsNumber: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Array.from({ length: 11 }, (_, i) => (
                    <option key={i} value={i}>
                      {i} participant{i !== 1 ? 's' : ''} - {i * 1000} CAD
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-600 mt-1">
                  Participant content is normally valued at 1300 per person which makes this a strong upsell
                </p>
              </div>
            </div>
          </div>
        )}

        {packageData.id === "icon" && (
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">ICON Society Access</h2>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-yellow-800">
                <strong>Included:</strong> This package includes free access to the ICON Society membership.
                You&apos;ll receive onboarding instructions after booking.
              </p>
            </div>
          </div>
        )}

        {/* Pricing Summary */}
        {renderPricingSummary()}

        {/* Terms and Conditions */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                {...register("acceptsTerms")}
                id="acceptsTerms"
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="acceptsTerms" className="text-sm text-gray-700">
                I agree to the Terms, GST included pricing, and limited availability policy
              </label>
            </div>
            {errors.acceptsTerms && (
              <p className="text-red-600 text-sm mt-1">{errors.acceptsTerms.message}</p>
            )}

            <div className="text-sm text-gray-600">
              <p>I agree to delivery timelines of photos in 1 week and videos in 10 days</p>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : "Secure your date"}
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Very limited dates. Do not wait
          </p>
        </div>
      </form>
    </div>
  );
} 