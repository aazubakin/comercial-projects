<template>
  <div class="container mt-50">
    <div v-html="card"></div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: String,
      required: true,
    },
  },
}
</script>
