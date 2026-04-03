"use client";

import { useEffect } from "react";

const SCRIPT_ID = "sprout_studio_form_script";
const SCRIPT_SRC = "https://sproutstudio.com/sprout_dynamic_lead_form.js";

export default function SproutStudioLeadForm() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.setAttribute(
      "data-api-key",
      "c1f5507bd4993dcdbff279522ec5dc614b1abac40a6053e5",
    );
    script.setAttribute("data-lead-form-id", "278335");
    script.setAttribute("data-base-hostname", "sproutstudio.com");

    const anchor = document.getElementById("sprout-lead-form-anchor");
    anchor?.appendChild(script);
  }, []);

  return (
    <div
      id="sprout-lead-form-anchor"
      className="w-full max-w-md mx-auto flex justify-center"
    />
  );
}
