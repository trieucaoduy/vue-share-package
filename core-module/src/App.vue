<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup: () => {
    const selected = ref();
    const cities = ref([
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ]);

    return { selected, cities }
  }
})
</script>

<template>
  <PkgSelect
    :modelValue="selected"
    :listOptions="cities"
    :optionLabel="'name'"
  />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
