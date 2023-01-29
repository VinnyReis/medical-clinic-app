export default function reducer(state, action) {
  if(action.type === 'ADD_ITEM'){
    return [...state, action.item];
  }
}