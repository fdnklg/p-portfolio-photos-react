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
  selectedProject: false,
  bg: false,
  setBg: action(state => state.bg = false),
  hoveredProject: false,
  setHoveredProject: action((state,payload) => {
    state.bg = idx(state.data, _ => _.projects[payload].media[0].path);
    state.hoveredProject = payload;
    state.selectedProject = idx(state.data, _ => _.projects[payload]);
  })
};

export default DataModel;
