const index = {
  state: {},

  mutations: {
    SET_STATE: (state, data) => {
      state = Object.assign(state, data);
    }
  },

  actions: {}
};

export default index;
