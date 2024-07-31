<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PkgInputIcon',
  props: {
    modelValue: {
      type: String,
      default: '',
      required: false,
    },
    placeholder: {
      type: String,
      default: 'Search',
      required: false,
    }
  },
  setup: (props, _) => {
    const modelValue = ref(props.modelValue);
    const placeholder = ref(props.placeholder);

    return {
      modelValue,
      placeholder,
    }
  },
})
</script>

<template>
  <div class="pkg-input-icon">
    <IconField>
      <slot name="left"></slot>
      <InputText v-model="modelValue" :placeholder="placeholder" />
      <slot name="right"></slot>
    </IconField>
  </div>
</template>

<style scoped lang="scss">
.pkg-input-icon input {
  max-width: 250px;
  width: 250px;
}
</style>