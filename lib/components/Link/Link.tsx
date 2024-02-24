import { ReactNode } from "react";
interface LinkProps {
  children: ReactNode;
  href?: string;
}
function Link({ children, href }: LinkProps) {
  return (
    <a
      href={href}
      className="cursor-pointer text-xs text-gray-700 hover:text-gray-800 hover:underline"
    >
      {children}
    </a>
  );
}

export default Link;
