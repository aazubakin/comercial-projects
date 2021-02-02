<template>
  <div class="col-lg-4">
    <div class="service-item-single">
      <img class="item-image" :src="item.icon" :alt="item.title" />
      <!-- <i v-if="item.hasImg"><img :src="item.icon" :alt="item.title" /></i> -->
      <h3>
        <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
      </h3>
      <p>{{ item.short_description }}</p>
      <div class="cta-btn">
        <NuxtLink :to="item.link" class="read-more-btn">
          <i class="flaticon-play-button" /> Подробнее
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getBackground() {
      return {
        backgroundImage: 'url(' + this.item.icon + ') ',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }
    },
  },
}
</script>
<style>
.item-image {
  height: 200px;
}
</style>
