import { ActionTree } from 'vuex';
import { GroupState, Group } from './state';
import { RootState } from '@/store/state';
import { GroupService } from '@/data/group/group-service';

export const types = {
  LOAD_GROUPS: 'groups/loadGroups',
  ADD_GROUP: 'groups/add',
  UPDATE_GROUP: 'groups/update',
  REMOVE_GROUP: 'groups/remove',
};

const groupService = new GroupService();

export const actions: ActionTree<GroupState, RootState> = {
  async loadGroups({ commit }): Promise<void> {
    const groups = await groupService.getAll();
    commit('setGroups', groups);
  },
  async add(context, group: Group): Promise<void> {
    const addedGroup = await groupService.add(group);
    context.commit('add', addedGroup);
  },
  async update({ commit }, group: Group): Promise<void> {
    const updateGroup = await groupService.update(group);
    commit('update', updateGroup);
  },
  async remove({ commit }, groupId: number): Promise<void> {
    await groupService.remove(groupId);
    commit('remove', groupId);
  },
};
