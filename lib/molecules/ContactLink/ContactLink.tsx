import Link from "../../components/Link/Link";

interface ContactLinkProps {
  title: string;
  href?: string;
}
function ContactLink({ title, href }: ContactLinkProps) {
  return (
    <Link href={href}>
      <div className="flex items-center gap-1">
        <div>{title}</div>
      </div>
    </Link>
  );
}

export default ContactLink;
