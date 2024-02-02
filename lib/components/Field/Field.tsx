interface FieldProps {
  label: string;
  value: string;
}
function Field({ label, value }: FieldProps) {
  return (
    <div className="grid grid-cols-[5rem_1fr] items-center gap-2">
      <div className="text-color-primary self-start text-xs font-medium">
        {label}
      </div>
      <div className="text-color-secondary w-full text-xs font-normal">
        {value}
      </div>
    </div>
  );
}

export default Field;
