<template>
  <div class="partner-area ptb-70">
    <div class="container">
      <div class="section-title style-two">
        <h2 class="color-secondary">Наши клиенты</h2>
      </div>
      <div class="partner-slider">
        <client-only>
          <carousel
            :loop="true"
            :center="false"
            :items="5"
            :nav="false"
            :dots="false"
            :autoplay="true"
            :autoplay-hover-pause="true"
            :autoplay-timeout="8500"
            :smart-speed="450"
            :responsive="{
              0: {
                items: 1,
              },
              400: {
                items: 1,
              },
              600: {
                items: 2,
              },
              700: {
                items: 3,
              },
              1000: {
                items: 5,
              },
            }"
          >
            <div
              v-for="client in sortOrder(clients)"
              :key="client.id"
              class="slider-item"
            >
              <img :src="client.icon" :alt="client.name" />
              <img :src="client.icon" :alt="client.name" />
            </div>
          </carousel>
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
import { sortProp } from '~/mixins/sort'
export default {
  mixins: [sortProp],
  props: {
    clients: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
.slider-item {
  width: 150px;
}
</style>
