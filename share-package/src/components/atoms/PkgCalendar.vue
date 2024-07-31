<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

type TViewMode = "date" | "month" | "year" | undefined;

export default defineComponent({
  name: 'PkgCalendar',
  props: {
    buttondisplay: {
      type: Date,
      default: null,
    },
    timeOnly: {
      type: Boolean,
      default: false,
    },
    viewMode: {
      type: String as PropType<TViewMode>,
      default: 'date',
    },
    dateFormat: {
      type: String,
      default: 'dd-mm-yy',
    },
    showButtonBar: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  setup: (props, _) => {
    const buttondisplay = ref(props.buttondisplay);
    const timeOnly = ref(props.timeOnly);
    const viewMode = ref(props.viewMode);
    const dateFormat = ref(props.dateFormat);
    const showButtonBar = ref(props.showButtonBar);
    const invalid = ref(props.invalid);
    const disabled = ref(props.disabled);

    return {
      buttondisplay,
      timeOnly,
      viewMode,
      dateFormat,
      showButtonBar,
      invalid,
      disabled,
    }
  }
});
</script>

<template>
  <div class="pkg-calendar">
    <DatePicker
      v-model="buttondisplay"
      :showOnFocus="false"
      :timeOnly="timeOnly"
      :view="viewMode"
      :dateFormat="dateFormat"
      :showButtonBar="showButtonBar"
      :invalid="invalid"
      :disabled="disabled"
      showIcon
      fluid
      iconDisplay="input"
    >
      <template #inputicon="slotProps" v-if="timeOnly">
        <i class="pi pi-clock" @click="slotProps.clickCallback" />
      </template>
    </DatePicker>
  </div>
</template>

<style scoped lang="scss">
.pkg-calendar {
  max-width: 250px;
}
</style>