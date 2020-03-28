<template>
  <GroupList v-bind:groups="groups" />
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
}
</script>