<template>
  <PageOneCol :header-menu="headerMenuItems" :global-config="globalConfig">
    <PageTitle
      :title="page.config.page_title"
      :bg-image="page.config.bg_image"
      :breadcrumbs="page.breadcrumbs"
    />
    <Contacts :contact-data="contactData" />
    <Footer :config-data="globalConfig" />
    <go-top></go-top>
  </PageOneCol>
</template>

<script>
import PageOneCol from '@/components/PageOneCol'
import { API } from '@/utils/api'
import { globalFetchData } from '@/utils/fetch'
import { seoMixin } from '~/mixins/seo'
import { getBGImage } from '~/utils/images'

export default {
  components: {
    PageOneCol,
  },
  mixins: [seoMixin],
  async asyncData({ $axios }) {
    const { globalConfig, headerMenuItems } = await globalFetchData($axios)
    const page = await $axios.$get(API.page('contact'))
    page.config.bg_image = getBGImage(page.config)
    page.breadcrumbs = [
      {
        title: 'Главная',
        to: {
          name: 'index',
        },
      },
      {
        title: 'Контакты',
        to: {
          name: 'contacts',
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
