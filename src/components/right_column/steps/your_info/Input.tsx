interface Props {
  title: string;
  touched: boolean | undefined;
  errors: string | undefined;
  placeholder: string;
  id: string;
  type: string;
  required: boolean;

  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
  value: string | number | readonly string[] | undefined;
  maxLength?: number;
}
export default function Input({
  title,
  touched,
  errors,
  placeholder,
  id,
  type,
  required = false,
  onChange,
  onBlur,
  value,
  maxLength,
}: Props) {
  return (
    <div className="my-3">
      {" "}
      {touched && errors ? (
        <label className="text-red-strawberry block">{errors}</label>
      ) : (
        <label className="text-blue-marine">{title}</label>
      )}
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`block w-full p-2 border border-blue-pastel 
        text-blue-marine  rounded-lg`}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
      />
    </div>
  );
}
