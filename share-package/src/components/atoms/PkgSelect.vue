<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Select from 'primevue/select';

export default defineComponent({
  components: { Select },
  props: {
    listOptions: {
      type: Array,
      default: () => [],
      required: false,
    },
    modelValue: {
      type: String || Number || null,
      default: () => null,
      required: false,
    },
    label: {
      type: String,
      default: () => 'Please select an options',
      required: false,
    },
    optionLabel: {
      type: String,
      default: () => 'name',
      required: false,
    }
  },
  setup: (props, _) => {
    const defaultLabel = ref(props.label);
    const labelOption = ref(props.optionLabel);

    const selected = ref(props.modelValue ?? null);
    const datas = computed(() => props.listOptions ?? [{ value: null, name: null }]);

    return {
      selected,
      defaultLabel,
      labelOption,
      datas
    }
  }
})
</script>

<template>
  <div class="pkg-select__wrapper">
    <Select
      v-model="selected"
      :options="datas" 
      :optionLabel="labelOption"
      :placeholder="defaultLabel"
      class="w-full md:w-56">
    </Select>
  </div>
</template>

<style scoped>
.pkg-select__wrapper {
  .p-select {
    width: 200px;
  }
}
</style>
