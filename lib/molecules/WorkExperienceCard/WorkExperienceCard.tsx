import Plus from "../../../assets/icons/Plus";
interface WorkExperienceCardProps {
  title: string;
  startDate?: string | null;
  endDate?: string | null;
  role?: string;
  description: string | null;
  statements: Array<String>;
}
function WorkExperienceCard({
  title,
  startDate,
  endDate,
  role,
  description,
  statements,
}: WorkExperienceCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <h3 className="text-color-primary text-base font-semibold">{title}</h3>
        {role && (
          <span className="text-color-secondary ml-0.5 mt-0.5 rounded px-1 py-1 text-[13px] font-medium leading-4 tracking-wide">
            {role}
          </span>
        )}
        <span className="text-color-secondary ml-0.5 mt-0.5 text-[12px] font-medium tracking-wider">
          {startDate && endDate && `${startDate} - ${endDate}`}
        </span>
      </div>
      <div className="text-color-secondary">
        <p className="text-color-tertiary text-xs">{description}</p>
        <ul>
          {statements?.map((statement, idx) => (
            <li key={idx} className="flex items-start text-sm">
              <div className="mt-1">
                <Plus />
              </div>
              {statement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkExperienceCard;
