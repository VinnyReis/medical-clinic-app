function Input({name, label, type, disabled, defaultValue, required}){

  return(
    <div className='mb-3'>
      <label htmlFor={name} className='form-label'>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className='form-control'
        required={required}
        disabled={disabled}
        defaultValue={defaultValue ?? ''}
      />
    </div>
  );
} export default Input;