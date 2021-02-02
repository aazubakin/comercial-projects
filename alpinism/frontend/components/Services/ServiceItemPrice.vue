<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">№ п/п</th>
          <th scope="col">Услуга</th>
          <th scope="col">Цена</th>
          <th scope="col">Ед. изм.</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in prices" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.title }}</td>
          <td>{{ item.value }}</td>
          <td>{{ item.unit }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'ServiceItemPrice',
  props: {
    prices: {
      type: Array,
      required: true,
    },
  },
}
</script>
