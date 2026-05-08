"use client";

import { useEffect } from "react";

const SCRIPT_SRC = "https://sproutstudio.com/sprout_dynamic_lead_form.js";
const DEFAULT_API_KEY = "c1f5507bd4993dcdbff279522ec5dc614b1abac40a6053e5";

type SproutStudioLeadFormProps = {
  leadFormId: string;
  className?: string;
};

export default function SproutStudioLeadForm({
  leadFormId,
  className = "w-full max-w-md mx-auto flex justify-center",
}: SproutStudioLeadFormProps) {
  useEffect(() => {
    const scriptId = `sprout_studio_form_script_${leadFormId}`;
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.setAttribute("data-api-key", DEFAULT_API_KEY);
    script.setAttribute("data-lead-form-id", leadFormId);
    script.setAttribute("data-base-hostname", "sproutstudio.com");

    const anchor = document.getElementById(`sprout-lead-form-anchor-${leadFormId}`);
    anchor?.appendChild(script);
  }, [leadFormId]);

  return (
    <div
      id={`sprout-lead-form-anchor-${leadFormId}`}
      className={className}
    />
  );
}
