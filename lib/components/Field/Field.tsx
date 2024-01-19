interface FieldProps {
  label: string;
  value: string;
}
function Field({ label, value }: FieldProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-color-primary w-24 self-start text-xs font-medium">
        {label}
      </div>
      <div className="text-color-secondary w-full text-xs font-normal">
        {value}
      </div>
    </div>
  );
}

export default Field;
