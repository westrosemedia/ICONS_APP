import React from "react";

type Props = {
  url: string;
  filename: string;
  date: string;
  type: "image" | "video";
  paid: boolean;
  onDownload: () => void;
};

export default function MediaItem({ url, filename, date, type, paid, onDownload }: Props) {
  return (
    <div className="bg-white rounded shadow p-3 flex flex-col items-center space-y-2 border border-gray-100">
      <div className="w-full aspect-video flex items-center justify-center bg-gray-100 rounded overflow-hidden">
        {type === "image" ? (
          <img src={url} alt={filename} className="object-contain max-h-40 w-auto" />
        ) : (
          <video src={url} controls className="object-contain max-h-40 w-auto" />
        )}
      </div>
      <div className="w-full flex flex-col items-center mt-2">
        <div className="font-medium text-sm truncate w-full text-center" title={filename}>{filename}</div>
        <div className="text-xs text-gray-400">{date}</div>
      </div>
      {paid ? (
        <button
          className="w-full mt-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded font-semibold cursor-not-allowed"
          disabled
        >
          Locked &mdash; Purchase to Download
        </button>
      ) : (
        <button
          onClick={onDownload}
          className="w-full mt-2 bg-primary text-white px-3 py-1 rounded hover:bg-blue-600 font-semibold"
        >
          Download
        </button>
      )}
    </div>
  );
} 