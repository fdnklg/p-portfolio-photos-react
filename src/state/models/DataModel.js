import { action, thunk, computed } from "easy-peasy";

const DataModel = {
  data: null,
  loadDataSuccess: action((state, payload) => {
    state.data = payload;
  }),
  loadDataFail: action((state) => {
    state.data = null;
  }),
  loadData: thunk(async (actions) => {
    try {
      const response = await fetch("/data/data.json");
      const data = await response.json();
      actions.loadDataSuccess(data);
    } catch (_) {
      actions.loadDataFail();
    }
  }),
};

export default DataModel;
