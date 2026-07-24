"use client";

import CourseEnrollButton from "@/components/CourseEnrollButton";
import { GROW_LIKE_YOU_MEAN_IT } from "@/lib/courses/grow-like-you-mean-it";

interface GrowLikeYouMeanItClientProps {
  label?: string;
  className?: string;
}

export default function GrowLikeYouMeanItClient({
  label = "I'm In",
  className,
}: GrowLikeYouMeanItClientProps) {
  return (
    <CourseEnrollButton
      courseId={GROW_LIKE_YOU_MEAN_IT.id}
      priceId={GROW_LIKE_YOU_MEAN_IT.stripePriceId}
      label={label}
      className={
        className ||
        "px-10 py-4 bg-[#1a1a1a] text-[#f5f1ea] rounded-lg font-medium hover:bg-[#2d2d2d] transition-colors text-base tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
      }
      cancelPath={GROW_LIKE_YOU_MEAN_IT.salesPath}
    />
  );
}
