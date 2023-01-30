export default function reducer(state, action) {
  if(action.type === 'ADD_ITEM'){
    return [...state, action.item];
  }
  if(action.type === 'DELETE_ITEM'){
    return [...state.filter(el => el.id !== action.id)];
  }
}