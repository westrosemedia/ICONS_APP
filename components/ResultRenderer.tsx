import React from "react";
import PpbUpsell from "./PpbUpsell";

type Result = "spotlight" | "wrm_lite" | "immersion" | "icon";

export default function ResultRenderer({ result }: { result: Result }) {
  return (
    <div>
      {/* Existing result sections with exact copy already implemented */}
      <div id="result-copy">
        {/* keep your exact Spotlight, WRM Lite, Immersion, ICON blocks here without changes */}
      </div>

      {(result === "spotlight" || result === "wrm_lite") ? <PpbUpsell /> : null}
    </div>
  );
}
