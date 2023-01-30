function Input({name, label, type, placeholder, className, disabled, grouped, defaultValue, required, extra}){

  return(
    <div className={`${grouped ? 'input-group mb-3' : 'mb-3'}`}>
      {label &&
        <label htmlFor={name} className='form-label'>{label}</label>
      }
      <input
        id={name}
        name={name}
        type={type}
        className={`form-control ${className}`}
        required={required}
        disabled={disabled}
        defaultValue={defaultValue ?? ''}
        placeholder={placeholder ?? ''}
      />
      {extra}
    </div>
  );
} export default Input;