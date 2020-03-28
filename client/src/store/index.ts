import Vue from 'vue';
import Vuex, { StoreOptions, MutationTree, ActionTree } from 'vuex';
import { RootState } from './state';
import { groups } from './modules/groups';

Vue.use(Vuex);

const options: StoreOptions<RootState> = {
  state: {},
  modules: {
    groups,
  },
};
export default new Vuex.Store(options);
