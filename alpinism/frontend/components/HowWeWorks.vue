<template>
  <div class="our-works-section ptb-100 bg-secondary">
    <div class="container">
      <div class="row">
        <div :class="view === 'simple' ? 'col-lg-12' : 'col-lg-5'">
          <div class="works-content">
            <h2 class="color-secondary">{{ config.title }}</h2>
            <p>{{ config.text }}</p>
            <div class="works-item">
              <div
                v-for="(item, index) in sortOrder(workslist)"
                :key="item.id"
                class="works-item-single"
              >
                <i id="image"><img :src="item.icon" alt="Icon" /></i>
                <div class="content">
                  <h4>{{ index + 1 }}. {{ item.title }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="view !== 'simple'" class="col-lg-7">
          <div class="works-image">
            <img
              :src="
                '//img.youtube.com/vi/' +
                getNumberVideo(config.video) +
                '/sddefault.jpg'
              "
              alt="Demo Image"
            />
            <a :href="config.video" class="video-btn youtube-popup">
              <i class="flaticon-play-button"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { sortProp } from '~/mixins/sort'
export default {
  mixins: [sortProp],
  props: {
    workslist: {
      type: Array,
      required: true,
    },
    config: {
      type: Object,
      required: true,
    },
    view: {
      type: String,
      default: '',
    },
  },
  methods: {
    getNumberVideo(link) {
      return link.split('=').pop()
    },
  },
}
</script>
<style scoped>
#image {
  width: 60px;
  flex-shrink: 0;
}
#image > img {
  width: 90%;
}
</style>
