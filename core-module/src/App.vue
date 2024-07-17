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

<style scoped lang="scss">
.pkg-select__wrapper {
  :deep(.p-select) {
    width: 200px;
  }
}
</style>
