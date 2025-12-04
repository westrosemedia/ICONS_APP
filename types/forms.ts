export type Field =
  | { type: "text"; name: string; label: string; placeholder?: string; required?: boolean; help?: string }
  | { type: "textarea"; name: string; label: string; placeholder?: string; required?: boolean; help?: string; rows?: number }
  | { type: "email"; name: string; label: string; required?: boolean }
  | { type: "tel"; name: string; label: string }
  | { type: "number"; name: string; label: string; min?: number; max?: number; required?: boolean }
  | { type: "select"; name: string; label: string; options: string[]; required?: boolean; help?: string }
  | { type: "multiselect"; name: string; label: string; options: string[]; required?: boolean; help?: string }
  | { type: "radio"; name: string; label: string; options: string[]; required?: boolean; help?: string }
  | { type: "checkbox"; name: string; label: string; required?: boolean; help?: string }
  | { type: "note"; name: string; label: string };

export type Section = { title: string; fields: Field[] };

export type IntakeSpec = { pkg: "spotlight" | "immersion" | "icon"; sections: Section[] };

export const INTAKE_COPY: IntakeSpec[] = [
  {
    pkg: "spotlight",
    sections: [
      {
        title: "Contact",
        fields: [
          { type: "text", name: "contact.fullName", label: "Full name", required: true },
          { type: "email", name: "contact.email", label: "Email", required: true },
          { type: "tel", name: "contact.phone", label: "Phone" },
          { type: "text", name: "brand.name", label: "Brand or company name", required: true },
          { type: "text", name: "brand.website", label: "Website or IG handle", placeholder: "yourbrand.com or @handle" }
        ]
      },
      {
        title: "Shoot details",
        fields: [
          {
            type: "select",
            name: "city",
            label: "City",
            options: ["Calgary", "Vancouver", "Toronto", "Other"],
            required: true,
            help: "Calgary, Vancouver, and Toronto have no travel fee. Other cities will include a travel quote."
          },
          {
            type: "select",
            name: "shootType",
            label: "Shoot type",
            options: ["Headshots", "Lifestyle", "Brand", "Editorial", "Mixed"],
            required: true
          },
          {
            type: "text",
            name: "preferredDate",
            label: "Preferred date",
            placeholder: "MM/DD/YYYY",
            help: "We'll confirm availability and send you available time slots"
          },
          {
            type: "textarea",
            name: "specialRequests",
            label: "Special requests or notes",
            rows: 3,
            placeholder: "Any specific shots, locations, or requirements..."
          }
        ]
      },
      {
        title: "Brand & Vision",
        fields: [
          {
            type: "textarea",
            name: "brandDescription",
            label: "Tell us about your brand",
            rows: 4,
            required: true,
            placeholder: "What do you do? Who is your audience? What makes you unique?"
          },
          {
            type: "select",
            name: "brandTone",
            label: "Brand tone",
            options: ["Professional", "Creative", "Luxury", "Approachable", "Bold", "Minimalist"],
            required: true
          },
          {
            type: "multiselect",
            name: "contentGoals",
            label: "What will you use these images for?",
            options: ["Website", "Social Media", "Marketing Materials", "Press", "LinkedIn", "Speaking", "Other"],
            required: true
          }
        ]
      }
    ]
  },
  {
    pkg: "immersion",
    sections: [
      {
        title: "Contact",
        fields: [
          { type: "text", name: "contact.fullName", label: "Full name", required: true },
          { type: "email", name: "contact.email", label: "Email", required: true },
          { type: "tel", name: "contact.phone", label: "Phone" },
          { type: "text", name: "brand.name", label: "Brand or company name", required: true },
          { type: "text", name: "brand.website", label: "Website or IG handle", placeholder: "yourbrand.com or @handle" }
        ]
      },
      {
        title: "Shoot details",
        fields: [
          {
            type: "select",
            name: "city",
            label: "City",
            options: ["Calgary", "Vancouver", "Toronto", "Other"],
            required: true,
            help: "Calgary, Vancouver, and Toronto have no travel fee. Other cities will include a travel quote."
          },
          {
            type: "select",
            name: "shootType",
            label: "Shoot type",
            options: ["Headshots", "Lifestyle", "Brand", "Editorial", "Mixed"],
            required: true
          },
          {
            type: "text",
            name: "preferredDate",
            label: "Preferred date",
            placeholder: "MM/DD/YYYY"
          },
          {
            type: "textarea",
            name: "specialRequests",
            label: "Special requests or notes",
            rows: 3
          }
        ]
      },
      {
        title: "Brand & Vision",
        fields: [
          {
            type: "textarea",
            name: "brandDescription",
            label: "Tell us about your brand",
            rows: 4,
            required: true
          },
          {
            type: "select",
            name: "brandTone",
            label: "Brand tone",
            options: ["Professional", "Creative", "Luxury", "Approachable", "Bold", "Minimalist"],
            required: true
          },
          {
            type: "multiselect",
            name: "contentGoals",
            label: "What will you use these images for?",
            options: ["Website", "Social Media", "Marketing Materials", "Press", "LinkedIn", "Speaking", "Other"],
            required: true
          }
        ]
      },
      {
        title: "Content Strategy",
        fields: [
          {
            type: "textarea",
            name: "contentStrategy",
            label: "Describe your content strategy",
            rows: 4,
            help: "How do you currently create content? What's working? What's not?"
          },
          {
            type: "multiselect",
            name: "painPoints",
            label: "What are your biggest content challenges?",
            options: ["Time", "Consistency", "Quality", "Authenticity", "Engagement", "Brand Voice", "Other"]
          }
        ]
      }
    ]
  },
  {
    pkg: "icon",
    sections: [
      {
        title: "Contact",
        fields: [
          { type: "text", name: "contact.fullName", label: "Full name", required: true },
          { type: "email", name: "contact.email", label: "Email", required: true },
          { type: "tel", name: "contact.phone", label: "Phone" },
          { type: "text", name: "brand.name", label: "Brand or company name", required: true },
          { type: "text", name: "brand.website", label: "Website or IG handle", placeholder: "yourbrand.com or @handle" }
        ]
      },
      {
        title: "Shoot details",
        fields: [
          {
            type: "select",
            name: "city",
            label: "City",
            options: ["Calgary", "Vancouver", "Toronto", "Other"],
            required: true,
            help: "Calgary, Vancouver, and Toronto have no travel fee. Other cities will include a travel quote."
          },
          {
            type: "select",
            name: "shootType",
            label: "Shoot type",
            options: ["Headshots", "Lifestyle", "Brand", "Editorial", "Mixed"],
            required: true
          },
          {
            type: "text",
            name: "preferredDate",
            label: "Preferred date",
            placeholder: "MM/DD/YYYY"
          },
          {
            type: "textarea",
            name: "specialRequests",
            label: "Special requests or notes",
            rows: 3
          }
        ]
      },
      {
        title: "Brand & Vision",
        fields: [
          {
            type: "textarea",
            name: "brandDescription",
            label: "Tell us about your brand",
            rows: 4,
            required: true
          },
          {
            type: "select",
            name: "brandTone",
            label: "Brand tone",
            options: ["Professional", "Creative", "Luxury", "Approachable", "Bold", "Minimalist"],
            required: true
          },
          {
            type: "multiselect",
            name: "contentGoals",
            label: "What will you use these images for?",
            options: ["Website", "Social Media", "Marketing Materials", "Press", "LinkedIn", "Speaking", "Other"],
            required: true
          }
        ]
      },
      {
        title: "Content Strategy",
        fields: [
          {
            type: "textarea",
            name: "contentStrategy",
            label: "Describe your content strategy",
            rows: 4
          },
          {
            type: "multiselect",
            name: "painPoints",
            label: "What are your biggest content challenges?",
            options: ["Time", "Consistency", "Quality", "Authenticity", "Engagement", "Brand Voice", "Other"]
          }
        ]
      },
      {
        title: "Business Goals",
        fields: [
          {
            type: "textarea",
            name: "businessGoals",
            label: "What are your business goals for the next 6-12 months?",
            rows: 4,
            required: true
          },
          {
            type: "select",
            name: "revenueRange",
            label: "Current annual revenue range",
            options: ["Under $100k", "$100k - $500k", "$500k - $1M", "$1M - $5M", "$5M+"],
            required: true
          },
          {
            type: "multiselect",
            name: "growthAreas",
            label: "Where do you want to grow?",
            options: ["Brand Recognition", "Lead Generation", "Speaking Opportunities", "Media Coverage", "Partnerships", "Team Building", "Other"]
          }
        ]
      }
    ]
  }
];
