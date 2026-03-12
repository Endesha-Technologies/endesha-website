interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold bg-gray-100 border border-gray-200 rounded-full text-gray-500 hover:text-primary hover:border-primary/30 transition-colors">
      {label}
    </span>
  );
}
