interface SectionHeadingProps {
  title: string;
}
function SectionHeading({ title }: SectionHeadingProps) {
  return <h3 className="text-xs font-medium underline">{title}</h3>;
}

export default SectionHeading;
