import fields from "../styles/Field.module.css";

export default function FieldText({
  errors = null,
  label,
  name,
  options,
  register = null,
  value = null,
}) {
  const hasError = errors && errors[name];
  return (
    <label className={fields.Field + (hasError ? ` ${fields['-error']}` : '')}>
      <div className={fields.Field_label}>{label}</div>
      <select
        className={fields.Field_select}
        defaultValue={value}
        {...register(name)}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      <svg aria-hidden="true" className={fields.Field_selectIcon} width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path d="M6.5,11.5 L14.5,20.5 M22.5,11.5 L14.5,20.5" stroke="#3297BD" strokeLinecap="round" />
        </g>
      </svg>
      {hasError && (
        <div className={fields.Field_error}>{errors[name].message}</div>
      )}
    </label>
  );
}
