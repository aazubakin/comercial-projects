<template>
  <PageOneCol :header-menu="headerMenuItems" :global-config="globalConfig">
    <PageTitle
      :title="page.config.page_title"
      :bg-image="page.config.bg_image"
      :breadcrumbs="page.breadcrumbs"
    />
    <AboutUs :about-data="aboutUsData" />
    <BenefitList :data-list="page.benefits_work" />
    <CountDown :indicators="main.indicators" />
    <ModalWindow />
    <Footer :config-data="globalConfig" />
    <go-top></go-top>
  </PageOneCol>
</template>

<script>
import PageOneCol from '@/components/PageOneCol'
import { API } from '@/utils/api'
import { globalFetchData, prepareAboutUs } from '@/utils/fetch'
import AboutUs from '@/components/pages/about/AboutUs'
import BenefitList from '@/components/pages/about/BenefitList'
import CountDown from '@/components/CountDown'
import ModalWindow from '@/components/Modal/Modalw'
import { seoMixin } from '~/mixins/seo'
import { getBGImage } from '~/utils/images'

export default {
  components: {
    PageOneCol,
    AboutUs,
    BenefitList,
    CountDown,
    ModalWindow,
  },
  mixins: [seoMixin],
  async asyncData({ $axios }) {
    const { globalConfig, headerMenuItems } = await globalFetchData($axios)
    const page = await $axios.$get(API.page('about'))
    const main = await $axios.$get(API.page('main'))
    page.config.bg_image = getBGImage(page.config)
    const aboutUsData = prepareAboutUs(page.config)
    page.breadcrumbs = [
      {
        title: 'Главная',
        to: {
          name: 'index',
        },
      },
      {
        title: 'О нас',
        to: {
          name: 'about',
        },
      },
    ]
    return { page, globalConfig, headerMenuItems, aboutUsData, main }
  },

  data() {
    return {
      dropdown: false,
    }
  },
}
</script>
