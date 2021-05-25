let store;
// eslint-disable-next-line
export default { 
  init(configureStore) {
    store = configureStore;
  },
  getStore() {
    return store;
  },
  getState() {
    return store && store.getState();
  },
};
