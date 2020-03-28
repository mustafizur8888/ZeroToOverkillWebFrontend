import { GroupState, Group } from './state';
import { MutationTree } from 'vuex';

let currentId: number = 4;

export const mutations: MutationTree<GroupState> = {
  setGroups(state: GroupState, groups: Group[]) {
    state.groups = [...groups];
  },
  add(state: GroupState, group: Group) {
    group.id = ++currentId;
    state.groups = [...state.groups, group];
  },

  update(state: GroupState, group: Group): void {
    const index = state.groups.findIndex(g => g.id == group.id);
    state.groups = [
      ...state.groups.slice(0, index),
      group,
      ...state.groups.slice(index + 1, state.groups.length),
    ];
  },

  remove(state: GroupState, groupId: number) {
    state.groups = state.groups.filter(g => g.id != groupId);
  },
};
