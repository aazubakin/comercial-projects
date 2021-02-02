<template>
  <section class="about-section about-style-three pt-100 pb-70 bg-secondary">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="about-img-content">
            <div class="row">
              <div
                v-for="(items, index) in aboutData.images"
                :key="index"
                class="col-lg-6 col-sm-6 col-6"
              >
                <div
                  v-for="(item, ind) in items"
                  :key="`${index}_${ind}`"
                  class="about-image"
                >
                  <img :src="item" :alt="item" />
                </div>
              </div>
            </div>
            <div class="overlay-content">
              <h3>{{ aboutData.years }}+</h3>
              <span>{{ plural(aboutData.years, ['год', 'года', 'лет']) }}</span>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="about-content">
            <h2 class="color-secondary">{{ aboutData.title }}</h2>
            <div v-html="aboutData.text" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { pluralize } from '@/utils/pluralize'

export default {
  name: 'AboutUs',
  props: {
    aboutData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    plural: (count, words) => {
      return pluralize(count, words)
    },
  },
}
</script>
