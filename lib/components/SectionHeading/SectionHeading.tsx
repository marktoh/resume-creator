interface SectionHeadingProps {
  title: string;
}
function SectionHeading({ title }: SectionHeadingProps) {
  return <h3 className="text-color-primary text-base font-bold">{title}</h3>;
}

export default SectionHeading;
