import { ReactNode } from "react";
interface LinkProps {
  children: ReactNode;
  href?: string;
}
function Link({ children, href }: LinkProps) {
  return (
    <a
      href={href}
      className="cursor-pointer text-sm text-blue-800 hover:text-blue-700 hover:underline"
    >
      {children}
    </a>
  );
}

export default Link;
