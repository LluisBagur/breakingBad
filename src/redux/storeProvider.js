let store;

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
