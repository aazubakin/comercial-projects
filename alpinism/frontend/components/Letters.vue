<template>
  <section class="blog-section ptb-100 bg-secondary">
    <div class="container">
      <div class="section-title">
        <h2>Благодарственные письма</h2>
      </div>
      <div class="row">
        <div class="col-12">
          <client-only>
            <LightGallery
              :images="images"
              :index="index"
              :disable-scroll="true"
              @close="index = null"
            />
            <carousel
              :class="`blog-slider`"
              :items="3"
              :autoplay="true"
              :autoplay-hover-pause="true"
              :autoplay-timeout="8500"
              :smart-speed="450"
              :margin="20"
              :loop="true"
              :nav="true"
              :dots="false"
              :auto-height="true"
            >
              <div
                v-for="(item, idx) in sortOrder(letters)"
                :key="item.id"
                class="slider-item"
              >
                <div class="blog-item-single">
                  <div class="blog-item-img">
                    <img :src="item.image" :alt="item.name" />
                    <div class="overlay-content" @click="index = idx"></div>
                  </div>
                  <div class="blog-item-content">
                    <p style="text-align: center">
                      {{ item.name }}
                    </p>
                  </div>
                </div>
              </div>
            </carousel>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { sortProp } from '~/mixins/sort'
export default {
  name: 'Letters',
  mixins: [sortProp],
  props: {
    letters: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      images: [],
      index: null,
    }
  },
  mounted() {
    this.letters.forEach((element) => {
      this.images.push({ title: element.name, url: element.image })
    })
  },
}
</script>
