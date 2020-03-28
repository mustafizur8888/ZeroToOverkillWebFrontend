import { ActionTree } from 'vuex';
import { GroupState, Group } from './state';
import { RootState } from '@/store/state';

export const types = {
  LOAD_GROUPS: 'groups/loadGroups',
  ADD_GROUP: 'groups/add',
  UPDATE_GROUP: 'groups/update',
  REMOVE_GROUP: 'groups/remove',
};

export const actions: ActionTree<GroupState, RootState> = {
  loadGroups({ commit }): void {
    const groups = [
      { id: 1, name: 'Smaple Group 1', rowVersion: 'aaa' },
      { id: 2, name: 'Smaple Group 2', rowVersion: 'bbb' },
      { id: 3, name: 'Smaple Group 3', rowVersion: 'ccc' },
    ];
    commit('setGroups', groups);
  },
  add(context, group: Group): void {
    context.commit('add', group);
  },
  update({ commit }, group: Group): void {
    commit('update', group);
  },
  remove({ commit }, groupId: number): void {
    commit('remove', groupId);
  },
};
