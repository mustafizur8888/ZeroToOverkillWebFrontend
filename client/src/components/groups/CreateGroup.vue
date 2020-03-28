
<template >
  <span v-if="creating">
    <input v-model="group.name" placeholder="Enter a name fro the group" />
    <button v-on:click="save()">Save</button>
    <button v-on:click="discard()">Discard</button>
  </span>
  <button v-else v-on:click="create()">Create</button>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { GroupViewModel } from './models';

@Component({
  components: {},
})
export default class CreateGroup extends Vue {
  private group: GroupViewModel | null = null;
  private creating: boolean = false;
  private create(): void {
    this.creating = true;
    this.group = { id: 0, name: '', rowVersion: '' };
  }
  private save(): void {
    this.$emit('add', this.group);
    this.discard();
  }
  private discard(): void {
    this.creating = false;
    this.group = null;
  }
}
</script>