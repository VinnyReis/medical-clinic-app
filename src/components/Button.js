function Button(props){
  return(
    <button {...props} className={`btn btn-${props.type ?? 'secondary'}`}/>
  )
} export default Button;