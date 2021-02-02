<template>
  <section class="best-service-section service-two ptb-100">
    <div class="container">
      <div class="section-title style-two">
        <h2 v-if="!!title" class="color-secondary" v-html="title" />
        <p v-if="!!description" v-html="description" />
      </div>
      <div class="row">
        <ServiceItem v-for="item in items" :key="item.id" :item="item" />
      </div>
      <div v-if="!!readMoreLink" class="cta-btn text-center">
        <NuxtLink :to="readMoreLink" class="primary-btn">Подробнее</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceItem from './ServiceItem'

export default {
  name: 'ServiceList',
  comments: {
    ServiceItem,
  },
  props: {
    items: {
      type: Array,
      defaults: [],
    },
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    readMoreLink: {
      type: Object,
      required: false,
    },
  },
}
</script>
