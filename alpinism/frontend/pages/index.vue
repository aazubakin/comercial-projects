<template>
  <PageOneCol :header-menu="headerMenuItems" :global-config="globalConfig">
    <Slider :slides="page.slides" />
    <ServiceList
      :items="services"
      :config="componentData(page.config, 'service')"
      :read-more-link="{
        name: 'services',
      }"
    />
    <LastProjects :projects="page.last_projects" />
    <HowWeWorks
      :workslist="page.how_work"
      :config="componentData(page.config, 'how_work')"
    />
    <CountDown :indicators="page.indicators" />
    <Feedbacks :items="page.reviews" />
    <Letters
      v-if="!!page.thank_letters && page.thank_letters.length > 0"
      :letters="page.thank_letters"
    />
    <ModalWindow />
    <Clients :clients="page.clients" />
    <Footer :config-data="globalConfig" />
    <go-top></go-top>
  </PageOneCol>
</template>

<script>
import PageOneCol from '~/components/PageOneCol'
import Slider from '~/components/Slider'
import ServiceList from '~/components/Services/ServiceList'
import { prepareServiceList, globalFetchData } from '~/utils/fetch'
import { API } from '~/utils/api'
import LastProjects from '~/components/LastProjects'
import HowWeWorks from '~/components/HowWeWorks'
import CountDown from '~/components/CountDown'
import Feedbacks from '~/components/Feedbacks'
import Footer from '~/components/Footer'
import ModalWindow from '~/components/Modal/Modalw'
import Clients from '~/components/Clients'
import Letters from '~/components/Letters'
import { seoMixin } from '~/mixins/seo'
import { pageMixin } from '~/mixins/page'

export default {
  components: {
    PageOneCol,
    Slider,
    ServiceList,
    LastProjects,
    HowWeWorks,
    CountDown,
    Feedbacks,
    Footer,
    Letters,
    ModalWindow,
    Clients,
  },
  mixins: [seoMixin, pageMixin],
  async asyncData({ $axios }) {
    const { globalConfig, headerMenuItems } = await globalFetchData($axios)
    const page = await $axios.$get(API.page('main'))
    const serviceListData = await $axios
      .$get(API.serviceList('main'))
      .then((d) => prepareServiceList(d))
    return { page, headerMenuItems, globalConfig, services: serviceListData }
  },
  data() {
    return {
      dropdown: false,
    }
  },
}
</script>
<style>
.page {
  position: relative;
  width: 100%;
  min-height: 100%;
}

.show-modal-button {
  text-align: center;
}
.modal-button {
  width: 200px;
  margin: 0 auto;
}

.service-details-area .service-details-desc .content h2,
.terms-area .service-details-desc .content h2,
.privacy-area .service-details-desc .content h2 {
  text-transform: none !important;
}
</style>
