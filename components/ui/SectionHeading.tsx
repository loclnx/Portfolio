type SectionHeadingProps = { index: string; label: string; title: string };

export function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return <div className="heading"><p className="eyebrow">{index} / {label}</p><h2>{title}</h2></div>;
}
