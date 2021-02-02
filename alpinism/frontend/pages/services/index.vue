<template>
  <PageOneCol :header-menu="headerMenuItems" :global-config="globalConfig">
    <PageTitle
      :title="page.config.page_title"
      :bg-image="page.config.bg_image"
      :breadcrumbs="page.breadcrumbs"
    />
    <ServiceList
      :items="services"
      :title="page.config.b_service_list_title"
      :description="page.config.b_service_list_text"
    />
    <ModalWindow />
    <Footer :config-data="globalConfig" />
    <go-top></go-top>
  </PageOneCol>
</template>

<script>
import PageOneCol from '@/components/PageOneCol'
import ServiceList from '@/components/Services/ServiceList'
import { API } from '@/utils/api'
import { prepareServiceList, globalFetchData } from '@/utils/fetch'
import ModalWindow from '~/components/Modal/Modalw'
import { seoMixin } from '~/mixins/seo'
import { getBGImage } from '~/utils/images'

export default {
  components: {
    PageOneCol,
    ServiceList,
    ModalWindow,
  },
  mixins: [seoMixin],
  async asyncData({ $axios }) {
    const { globalConfig, headerMenuItems } = await globalFetchData($axios)
    const page = await $axios.$get(API.page('services'))
    const serviceListData = await $axios
      .$get(API.serviceList())
      .then((d) => prepareServiceList(d))
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
    return { page, services: serviceListData, globalConfig, headerMenuItems }
  },

  data() {
    return {
      dropdown: false,
    }
  },
}
</script>
