<template>
  <PageOneCol :header-menu="headerMenuItems" :global-config="globalConfig">
    <PageTitle
      :title="page.config.page_title"
      :bg-image="page.config.bg_image"
      :breadcrumbs="page.breadcrumbs"
    />
    <div class="service-details-area pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <aside class="widget-area">
              <request-order-form
                :key="`sidebar_form`"
                @handleResult="handleResult"
              />
            </aside>
          </div>
          <div class="col-lg-8 col-md-12">
            <div class="service-details-desc">
              <div class="content">
                <div class="image">
                  <img
                    :src="service.icon"
                    :alt="service.title"
                    class="service-image"
                  />
                </div>
                <h2>
                  {{ service.title }}
                </h2>
              </div>
              <div class="description" v-html="service.description"></div>
              <div class="service-details-slider mt-50">
                <client-only>
                  <carousel
                    :loop="true"
                    :items="1"
                    :nav="true"
                    :dots="false"
                    :autoplay="true"
                    :autoplay-hover-pause="true"
                    :autoplay-timeout="8500"
                    :smart-speed="450"
                  >
                    <div
                      v-for="foto in service.service_photos"
                      :key="foto.id"
                      class="slider-item"
                    >
                      <img :src="foto.icon" :alt="foto.title" />
                    </div>
                  </carousel>
                </client-only>
              </div>
              <HowWeWorks
                :workslist="service.how_work_orders"
                :config="componentData(main.config, 'how_work')"
                :view="`simple`"
              />
              <ServiceItemPrice
                v-if="service.prices.length > 0"
                :prices="service.prices"
                class="mt-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer :config-data="globalConfig" />
    <go-top></go-top>
  </PageOneCol>
</template>

<script>
import PageOneCol from '@/components/PageOneCol'
import { API } from '@/utils/api'
import { globalFetchData } from '@/utils/fetch'
import { seoMixin } from '~/mixins/seo'
import { pageMixin } from '~/mixins/page'
import { getBGImage } from '~/utils/images'
import { addTextToPrice } from '~/utils/prices'

export default {
  components: {
    PageOneCol,
  },
  mixins: [seoMixin, pageMixin],
  async asyncData({ $axios, params }) {
    const { globalConfig, headerMenuItems } = await globalFetchData($axios)
    const page = await $axios.$get(API.page('services'))
    const main = await $axios.$get(API.page('main'))
    const service = await $axios.$get(API.serviceItem({ id: params.slug }))
    addTextToPrice(service.prices, '', 'от ')
    page.config.bg_image = getBGImage(page.config)
    page.breadcrumbs = [
      {
        title: 'Главная',
        to: {
          name: 'index',
        },
      },
      {
        title: 'Услуги',
        to: {
          name: 'services',
        },
      },
    ]
    return { page, main, service, globalConfig, headerMenuItems }
  },

  data() {
    return {
      dropdown: false,
    }
  },
  mounted() {
    this.page.breadcrumbs.push({
      title: this.service.title,
      to: {
        name: this.$route.params.id,
      },
    })
  },
  methods: {
    handleResult(typeResult) {},
  },
}
</script>
<style scoped>
.description {
  text-align: justify;
}

.service-image {
  width: 100%;
}
</style>
