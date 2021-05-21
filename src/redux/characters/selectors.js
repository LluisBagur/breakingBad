export const selectInfoCharById = (state, id) =>{
return state.data.characters.find((x) => x.char_id === id)
}