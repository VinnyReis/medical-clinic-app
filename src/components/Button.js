function Button(props){
  return(
    <button {...props} className={`btn btn-${props.type ?? 'secondary'} btn-${props.size ?? 'md'}`}/>
  )
} export default Button;