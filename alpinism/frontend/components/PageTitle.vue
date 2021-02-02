<template>
  <div class="page-title-area ptb-100">
    <div class="container">
      <div class="page-title-content">
        <h1>{{ title }}</h1>
        <ul>
          <li v-for="(item, index) in breadcrumbs" :key="index" class="item">
            <NuxtLink :to="item.to">
              <i
                v-if="!!breadcrumbs.lastIndexOf(item)"
                class="flaticon-play-button ml-0"
              />
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-image">
      <img :src="bgImage" :alt="bgImage" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
    bgImage: String,
    breadcrumbs: {
      type: Array,
    },
  },
}
</script>
