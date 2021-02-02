<template>
  <!-- start testimonial section -->
  <section class="testimonial-section testimonial-three ptb-100 bg-primary">
    <div class="container">
      <div class="section-title style-two">
        <h2 class="color-secondary">
          <span>Отзывы наших клиентов</span>
        </h2>
      </div>
      <div class="row">
        <div class="col-lg-10 m-auto">
          <div class="testimonial-slider">
            <client-only>
              <carousel
                :loop="true"
                :items="1"
                :autoplay="true"
                :autoplay-hover-pause="true"
                :autoplay-timeout="8500"
                :smart-speed="450"
              >
                <div v-for="item in items" :key="item.id" class="slider-item">
                  <i class="flaticon-quotation-mark"></i>
                  <p>
                    {{ item.text }}
                  </p>
                  <div class="client-info">
                    <h6>{{ item.user_name }}</h6>
                    <span v-if="!!item.company && item.company.lenght > 0">
                      {{ item.company }}
                    </span>
                  </div>
                </div>
              </carousel>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end testimonial section -->
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
