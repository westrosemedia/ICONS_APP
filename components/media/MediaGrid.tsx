import React from "react";
import MediaItem from "./MediaItem";

type Media = {
  url: string;
  filename: string;
  date: string;
  type: "image" | "video";
  paid: boolean;
  onDownload: () => void;
};

type Props = {
  media: Media[];
  loading: boolean;
};

export default function MediaGrid({ media, loading }: Props) {
  if (loading) {
    return <div className="text-primary text-center py-8">Loading media...</div>;
  }
  if (!media.length) {
    return <div className="text-gray-400 text-center py-8">No media files found.</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {media.map((item, i) => (
        <MediaItem key={item.url + i} {...item} />
      ))}
    </div>
  );
} 