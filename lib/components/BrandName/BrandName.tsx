interface BrandNameProps {
  title: string;
}
function BrandName({ title }: BrandNameProps) {
  return <h1 className="text-4xl font-extrabold">{title}</h1>;
}

export default BrandName;
