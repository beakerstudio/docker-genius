import fields from "../styles/Field.module.css";

export default function FieldText({
  errors = null,
  label,
  maxLength = null,
  name,
  placeholder = null,
  register = null,
  validate = null,
  value = null,
}) {
  const hasError = errors && errors[name];
  return (
    <label className={fields.Field + (hasError ? ` ${fields['-error']}` : '')}>
      <div className={fields.Field_label}>{label}</div>
      <input
        className={fields.Field_text}
        defaultValue={value}
        maxLength={maxLength}
        onKeyDown={event => {
          if (event.key === "Enter") {
            event.preventDefault();
          }
        }}
        placeholder={placeholder}
        type="text"
        {...(validate ? register(name, validate) : register(name))}
      />
      {hasError && (
        <div className={fields.Field_error}>{errors[name].message}</div>
      )}
    </label>
  );
}
