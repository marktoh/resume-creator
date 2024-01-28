import Field from "@/lib/components//Field/Field";
interface SkillProps {
  label: string;
  value: string;
}
function Skills({ skills }: { skills: Array<SkillProps> }) {
  return (
    <div>
      {skills?.map((e) => (
        <Field key={e.label} label={e.label} value={e.value} />
      ))}
    </div>
  );
}

export default Skills;
