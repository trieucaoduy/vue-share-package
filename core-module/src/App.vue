<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Button from 'primevue/button';
import Column from 'primevue/column';

export default defineComponent({
  components: {
    Column,
    Button,
  },
  setup: () => {
    const selected = ref();
    const cities = ref([
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ]);
    const CART_API_URL = 'https://dummyjson.com/users';
    const data = ref([]);
    const isLoading = ref(false);

    const getUsers = async () => {
      isLoading.value = true;
      await fetch(CART_API_URL)
        .then(res => res.json())
        .then((res) => {
          data.value = res.users;
        })
        .catch((err) => console.log(err));
      isLoading.value = false;
    }

    onMounted(async () => {
      await getUsers();
    })

    return { selected, cities, data, isLoading }
  }
})
</script>

<template>
  <PkgSelect
    :modelValue="selected"
    :listOptions="cities"
    :optionLabel="'name'"
  />
  <PkgTable
    :data="data"
    :loading="isLoading"
  >
    <template #column>
      <Column header="Avatar" style="width: 5%">
        <template #body="{ data }">
          <img :src="data.image" width="35" height="35" />
        </template>
      </Column>
      <Column field="username" sortable header="Username" style="width: 5%"></Column>
      <Column field="firstName" header="Full Name" sortable style="width: 15%">
        <template #body="{ data }">
          {{ `${data.firstName} ${data.lastName}` }}
        </template>
      </Column>
      <Column field="email" sortable header="Email" style="width: 25%"></Column>
      <Column field="birthDate" sortable header="Date of birth" style="width: 10%"></Column>
      <Column field="role" sortable header="Role" style="width: 10%"></Column>
    </template>
  </PkgTable>
</template>

<style scoped lang="scss">
.pkg-select__wrapper {
  :deep(.p-select) {
    width: 200px;
  }
}
</style>
