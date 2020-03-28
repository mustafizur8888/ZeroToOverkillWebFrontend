<template>
  <GroupList v-bind:groups="groups" v-on:update="onUpdate" v-on:remove="onRemove" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GroupList from '@/components/groups/GroupList.vue';
import { GroupViewModel } from '../components/groups/models';
@Component({
  components: {
    GroupList,
  },
})
export default class Group extends Vue {
  private groups: GroupViewModel[] = [
    { id: 1, name: 'Smaple Group 1', rowVersion: 'aaa' },
    { id: 2, name: 'Smaple Group 2', rowVersion: 'bbb' },
    { id: 3, name: 'Smaple Group 3', rowVersion: 'ccc' },
  ];
  private onUpdate(group: GroupViewModel): void {
    const index = this.groups.findIndex(g => g.id == group.id);
    this.groups = [
      ...this.groups.slice(0, index),
      group,
      ...this.groups.slice(index + 1, this.groups.length),
    ];
  }
  private onRemove(groupId: number): void {
    this.groups = this.groups.filter(g => g.id != groupId);
  }
}
</script>