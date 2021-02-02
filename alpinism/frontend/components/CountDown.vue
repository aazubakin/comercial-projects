<template>
  <!-- start countdown section -->
  <section class="count-section pt-100 pb-70">
    <div class="container">
      <div class="row">
        <div
          v-for="item in indicators"
          :key="item.id"
          class="col-lg-3 col-md-6"
        >
          <div class="content">
            <h2>
              <span class="counter">{{ item.value }}</span
              >+
            </h2>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end countdown section -->
</template>
<script>
export default {
  props: {
    indicators: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
.content {
  height: 250px;
}
</style>
