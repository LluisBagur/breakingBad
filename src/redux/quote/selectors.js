// export const selectRandomQuote = (state)=> state.quote.quote;
export const selectRandomQuote = (state) =>{
    return state.quote.quote.map(a => a.quote)
}
export const selectIsQuoteLoading = (state) => state.quote.loading;