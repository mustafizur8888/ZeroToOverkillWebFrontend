<template>
  <GroupList v-bind:groups="groups" v-on:update="onUpdate" v-on:remove="onRemove" v-on:add="onAdd" />
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
  private currentId: number = 0;
  private groups: GroupViewModel[] = [
    { id: ++this.currentId, name: 'Smaple Group 1', rowVersion: 'aaa' },
    { id: ++this.currentId, name: 'Smaple Group 2', rowVersion: 'bbb' },
    { id: ++this.currentId, name: 'Smaple Group 3', rowVersion: 'ccc' },
  ];
  private onUpdate(group: GroupViewModel): void {
    const index = this.groups.findIndex(g => g.id == group.id);
    this.groups = [
      ...this.groups.slice(0, index),
      group,
      ...this.groups.slice(index + 1, this.groups.length),
    ];
  }
  private onAdd(group: GroupViewModel): void {
    group.id = ++this.currentId;
    this.groups = [...this.groups, group];
  }
  private onRemove(groupId: number): void {
    this.groups = this.groups.filter(g => g.id != groupId);
  }
}
</script>