function Select({name, label, options, placeholder, className, disabled, defaultValue, required}){
  
  return(
    <div className='mb-3'>
      {label &&
        <label htmlFor={name} className='form-label'>{label}</label>
      }
      <select
        name={name}
        className={`form-control ${className}`}
        placeholder={placeholder ?? ''}
        disabled={disabled}
        required={required}
        defaultValue={defaultValue ?? ''}
      >
        <option value=''>{placeholder}</option>
        {options.map((el, i) =>
          <option key={i} label={el.label}>{el.value}</option>
        )}
      </select>
    </div>
  )
} export default Select;