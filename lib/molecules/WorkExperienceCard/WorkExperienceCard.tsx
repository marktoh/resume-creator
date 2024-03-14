import Plus from "../../../assets/icons/Plus";
import Briefcase from "../../../assets/icons/Briefcase";
import BuildingOffice from "../../../assets/icons/BuildingOffice";
import Calendar from "../../../assets/icons/Calendar";

interface WorkExperienceCardProps {
  title: string;
  startDate?: string | null;
  endDate?: string | null;
  role?: string;
  description: string | null;
  statements: Array<String>;
  location?: string;
}
function WorkExperienceCard({
  title,
  startDate,
  endDate,
  role,
  description,
  statements,
  location,
}: WorkExperienceCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <h3 className="text-color-primary text-base font-semibold">{title}</h3>
        {role && (
          <span className="text-color-secondary ml-1.5 mt-0.5 flex items-center gap-0.5 rounded px-1 py-1 text-[12px] font-medium leading-4 tracking-wide">
            <Briefcase /> {role}
          </span>
        )}
        {startDate && endDate && (
          <span className="text-color-secondary ml-1.5 mt-0.5 flex items-center gap-0.5 text-[12px] font-medium tracking-wide">
            <Calendar /> {`${startDate} - ${endDate}`}
          </span>
        )}
        {location && (
          <span className="text-color-secondary ml-1.5 mt-0.5 flex items-center gap-0.5 text-[12px] font-medium tracking-wide">
            <BuildingOffice /> {location}
          </span>
        )}
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
