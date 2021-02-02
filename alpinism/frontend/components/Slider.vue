<template>
  <div class="home-banner-area banner-three">
    <div class="container-fluid">
      <!-- important to add no-ssr-->
      <client-only>
        <div class="banner-slider">
          <client-only>
            <carousel
              :loop="true"
              :items="1"
              :autoplay="true"
              :autoplay-hover-pause="true"
              :autoplay-timeout="8500"
              :smart-speed="450"
            >
              <div
                v-for="slide in slides"
                :key="slide.id"
                class="slider-item"
                :style="{
                  backgroundImage: 'url(' + slide.image + ') ',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-lg-7">
                      <div class="banner-content">
                        <h1>
                          <span>{{ slide.title }}</span>
                        </h1>
                        <p>{{ slide.description }}</p>
                        <div
                          v-if="!!slide.link && slide.link.length > 0"
                          class="cta-btn"
                        >
                          <a :href="slide.link" class="primary-btn">
                            Explore Services
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </carousel>
          </client-only>
        </div>
      </client-only>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
}
</script>
