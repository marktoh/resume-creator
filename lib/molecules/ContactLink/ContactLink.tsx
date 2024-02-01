import Link from "../../components/Link/Link";
import ArrowUpRight from "../../../assets/icons/ArrowUpRight";

interface ContactLinkProps {
  title: string;
  href?: string;
}
function ContactLink({ title, href }: ContactLinkProps) {
  return (
    <Link href={href}>
      <div className="flex items-center gap-0">
        <div>{title}</div>
        <ArrowUpRight />
      </div>
    </Link>
  );
}

export default ContactLink;
