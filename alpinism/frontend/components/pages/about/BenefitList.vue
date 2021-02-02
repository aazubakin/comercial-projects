<template>
  <section class="about-services-section pt-100 pb-70">
    <div class="container">
      <div class="row">
        <div v-for="item in dataList" :key="item.id" class="col-lg-4">
          <div class="service-item-single">
            <i>
              <img :src="item.icon" :alt="item.icon" />
            </i>
            <h3>{{ item.title }}</h3>
            <p>{{ item.short_description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BenefitList',
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
}
</script>
