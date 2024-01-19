import ArrowDownRight from "../../../constants/icons/ArrowDownRight";
interface WorkExperienceCardProps {
  title: string;
  startDate?: string | null;
  endDate?: string | null;
  statements: Array<String>;
}
function WorkExperienceCard({
  title,
  startDate,
  endDate,
  statements,
}: WorkExperienceCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <h3 className="text-color-primary text-base font-semibold">{title}</h3>
        <span className="text-color-tertiary mt-1 text-xs font-normal tracking-wider">
          {startDate && endDate && `${startDate} - ${endDate}`}
        </span>
      </div>
      <div className="text-color-secondary">
        <ul>
          {statements?.map((statement, idx) => (
            <li key={idx} className="flex items-start text-sm">
              <div className="mt-1">
                <ArrowDownRight />
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
