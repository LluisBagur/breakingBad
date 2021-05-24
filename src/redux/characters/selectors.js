export const selectInfoCharById = (state, id) =>{
    return state.data.characters.find((x) => x.char_id === id)
}
export const selectAllCharInfo = (state)=> state.data.characters;
export const selectIsLoading = (state) => state.data.loading;