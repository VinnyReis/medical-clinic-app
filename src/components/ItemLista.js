function ItemLista(props){
  let classList = `${props.selected && 'active'} ${props.className ?? ''} list-group-item list-group-item-action d-flex gap-3 py-2 pe-4 align-items-center`

  return(
    <div {...props} aria-current='true'className={classList}>
      {props.children}
      {props.extra}
    </div>
  )
} export default ItemLista;