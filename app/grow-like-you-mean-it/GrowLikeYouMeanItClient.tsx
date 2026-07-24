"use client";

import CourseEnrollButton from "@/components/CourseEnrollButton";
import {
  GROW_LIKE_YOU_MEAN_IT,
  formatCoursePrice,
} from "@/lib/courses/grow-like-you-mean-it";

interface GrowLikeYouMeanItClientProps {
  label?: string;
  className?: string;
}

export default function GrowLikeYouMeanItClient({
  label = `Get Instant Access · ${formatCoursePrice(
    GROW_LIKE_YOU_MEAN_IT.priceAmount,
    GROW_LIKE_YOU_MEAN_IT.priceCurrency
  )}`,
  className,
}: GrowLikeYouMeanItClientProps) {
  return (
    <CourseEnrollButton
      courseId={GROW_LIKE_YOU_MEAN_IT.id}
      priceId={GROW_LIKE_YOU_MEAN_IT.stripePriceId}
      label={label}
      className={
        className ||
        "px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      }
      loginRedirect={GROW_LIKE_YOU_MEAN_IT.coursePath}
    />
  );
}
