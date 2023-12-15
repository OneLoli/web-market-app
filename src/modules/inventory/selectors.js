const selectFilteredArticles = (store) => store.articles["filteredList"];
const isEmptyList = (store) =>
  !Array.isArray(store.articles["list"]) || store.articles["list"].length === 0;

export { selectFilteredArticles, isEmptyList };
