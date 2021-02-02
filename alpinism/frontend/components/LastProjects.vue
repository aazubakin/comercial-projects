<template>
  <!-- start amazing projects section -->
  <section class="amazing-projects-section pt-100 pb-70 bg-secondary">
    <div class="container">
      <div class="row no-wrap">
        <div class="col-lg-5 col-md-12">
          <div class="projects-content">
            <h2>Последние выполненные работы</h2>
            <p></p>
            <div class="cta-btn">
              <nuxt-link to="/services/" class="primary-btn"
                >Наши услуги</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg-auto col-md-12 pr-0">
          <div class="amazing-projects-slider">
            <client-only>
              <carousel
                :loop="true"
                :items="3"
                :autowidth="false"
                :autoplay="true"
                :autoplay-hover-pause="true"
                :autoplay-timeout="8500"
                :smart-speed="450"
                :margin="5"
                :dots="false"
              >
                <div
                  v-for="item in sortOrder(projects)"
                  :key="item.id"
                  class="slider-item"
                >
                  <div class="image">
                    <img
                      :src="'https://api.specalp66.ru' + item.image"
                      alt="Demo Image"
                    />
                  </div>
                  <div class="overlay-content">
                    <h3>
                      <nuxt-link :to="'/services/' + item.service.id"
                        >{{ item.service.title }}
                      </nuxt-link>
                    </h3>
                  </div>
                </div>
              </carousel>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end amazing projects section -->
</template>
<script>
import { sortProp } from '~/mixins/sort'
export default {
  mixins: [sortProp],
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
.image {
  width: 400px;
  margin: 0 auto;
}

.owl-carousel .owl-item {
  width: 1000px !important;
}
</style>
