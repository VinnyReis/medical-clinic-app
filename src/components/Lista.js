function Lista(props){
  return(
    <div className='list-group w-auto' {...props}>
      {props.children}
    </div>
  )
} export default Lista;