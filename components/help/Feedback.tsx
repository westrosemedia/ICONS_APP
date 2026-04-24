"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Feedback(props: { articleSlug: string; collection: string }) {
  const [done, setDone] = useState(false);

  async function send(helpful: boolean) {
    try {
      await fetch("/api/help/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          helpful,
          articleSlug: props.articleSlug,
          collection: props.collection,
        }),
      });
    } catch {
      // eslint-disable-next-line no-console
      console.warn("[help-feedback] request failed");
    }
    setDone(true);
  }

  return (
    <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 px-6 py-5">
      <p className="text-center text-sm font-medium text-gray-800">Was this helpful?</p>
      {done ?
        <p className="mt-3 text-center text-sm text-gray-600" role="status">
          Thanks for the feedback.
        </p>
      : <div className="mt-4 flex justify-center gap-3">
          <Button type="button" variant="outline" size="sm" onClick={() => send(true)}>
            Yes
          </Button>
          <Button type="button" variant="outline" size="sm" onClick={() => send(false)}>
            No
          </Button>
        </div>
      }
    </div>
  );
}
