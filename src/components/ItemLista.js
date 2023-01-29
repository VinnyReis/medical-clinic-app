function ItemLista(props){
  let classList = `${props.selected && 'active'} list-group-item list-group-item-action d-flex gap-3 py-2 align-items-center`

  return(
    <div aria-current='true'className={classList} {...props}>
      {props.children}
    </div>
  )
} export default ItemLista;