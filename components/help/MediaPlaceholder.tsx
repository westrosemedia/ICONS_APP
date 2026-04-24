export function MediaPlaceholder(props: { kind: "screenshot" | "video"; label: string }) {
  const label = props.kind === "screenshot" ? "Screenshot placeholder" : "Video placeholder";
  return (
    <div
      role="figure"
      aria-label={`${label}: ${props.label}`}
      className="my-8 flex min-h-[140px] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 text-center text-sm text-gray-600"
    >
      <span>
        <span className="font-medium text-gray-800">{label}</span>
        <span className="mt-2 block text-gray-600">{props.label}</span>
      </span>
    </div>
  );
}
