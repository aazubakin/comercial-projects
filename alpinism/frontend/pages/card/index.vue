<template>
  <PageOneCol :header-menu="headerMenuItems" :global-config="globalConfig">
    <PageTitle
      :title="page.config.page_title"
      :bg-image="page.config.bg_image"
      :breadcrumbs="page.breadcrumbs"
    />
    <CompanyCard :card="page.config.page_text" />
    <Footer :config-data="globalConfig" />
    <go-top></go-top>
  </PageOneCol>
</template>
<script>
import PageOneCol from '@/components/PageOneCol'
import { API } from '@/utils/api'
import { globalFetchData } from '@/utils/fetch'
import CompanyCard from '../../components/CompanyCard.vue'
import { seoMixin } from '~/mixins/seo'

export default {
  components: {
    PageOneCol,
    CompanyCard,
  },
  mixins: [seoMixin],
  async asyncData({ $axios }) {
    const { globalConfig, headerMenuItems } = await globalFetchData($axios)
    const page = await $axios.$get(API.page('company_card'))
    page.config.bg_image = '~/assets/img/page-title/service-grid-bg.jpg'
    page.breadcrumbs = [
      {
        title: 'Главная',
        to: {
          name: 'index',
        },
      },
      {
        title: 'Карточка предприятия',
        to: {
          name: 'card',
        },
      },
    ]
    return { page, globalConfig, headerMenuItems, contactData: page.config }
  },

  data() {
    return {
      dropdown: false,
    }
  },
}
</script>
