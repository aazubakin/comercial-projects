<template>
  <PageOneCol :header-menu="headerMenuItems" :global-config="globalConfig">
    <PageTitle
      :title="page.config.page_title"
      :bg-image="page.config.bg_image"
      :breadcrumbs="page.breadcrumbs"
    />
    <PriceTable :price="price" />
    <ModalWindow />
    <Footer :config-data="globalConfig" />
    <go-top></go-top>
  </PageOneCol>
</template>

<script>
import PageOneCol from '@/components/PageOneCol'
import PriceTable from '@/components/PriceTable'
import { API } from '@/utils/api'
import { globalFetchData } from '@/utils/fetch'
import ModalWindow from '~/components/Modal/Modalw.vue'
import { seoMixin } from '~/mixins/seo'
import { getBGImage } from '~/utils/images'
import { addTextToPrice } from '~/utils/prices'

export default {
  components: {
    PageOneCol,
    PriceTable,
    ModalWindow,
  },
  mixins: [seoMixin],
  async asyncData({ $axios }) {
    const { globalConfig, headerMenuItems } = await globalFetchData($axios)
    const page = await $axios.$get(API.page('prices'))
    const price = await $axios.$get(API.priceList())
    addTextToPrice(price, '', 'от ')
    page.config.bg_image = getBGImage(page.config)
    page.breadcrumbs = [
      {
        title: 'Главная',
        to: {
          name: 'index',
        },
      },
      {
        title: 'Прайс',
        to: {
          name: 'price',
        },
      },
    ]
    return { page, globalConfig, headerMenuItems, price }
  },

  data() {
    return {
      dropdown: false,
    }
  },
}
</script>
