import { action, thunk, computed } from "easy-peasy";
import idx from 'idx';

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
  bg: false,
  setBg: action(state => state.bg = false),
  hoveredProject: false,
  setHoveredProject: action((state,payload) => {
    let bgImg = idx(state.data, _ => _.projects[payload].media[0].path);
    state.bg = bgImg;
    state.hoveredProject = payload;
  })
};

export default DataModel;
