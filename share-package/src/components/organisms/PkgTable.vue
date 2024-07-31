<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import DataTable from 'primevue/datatable';

export default defineComponent({
  name: 'PkgTable',
  components: { DataTable },
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true,
    },
    showPaginator: {
      type: Boolean,
      default: () => true,
      required: false,
    },
    loading: {
      type: Boolean,
      default: () => false,
      required: false,
    },
    rowsPerPageOptions: {
      type: Array,
      default: () => [5, 10, 20, 50],
      required: false,
    },
    rows: {
      type: Number,
      default: () => 5,
      required: false,
    }
  },
  setup: (props, _) => {
    const data = computed(() => props.data);
    const loading = computed(() => props.loading);
    const rowsPerPageOptions = computed(() => props.rowsPerPageOptions);
    const showPaginator = computed(() => props.showPaginator);

    return {
      data,
      loading,
      rowsPerPageOptions,
      showPaginator,
    }
  }
});

</script>

<template>
  <div class="pkg-table">
    <DataTable
      :value="data"
      :paginator="showPaginator"
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      :loading="loading"
      showGridlines
      removableSort
      tableStyle="min-width: 50rem"
    >
        <slot name="header"></slot>
        <slot name="column"></slot>
        <slot name="body"></slot>
    </DataTable>
  </div>
</template>

<style lang="scss"></style>