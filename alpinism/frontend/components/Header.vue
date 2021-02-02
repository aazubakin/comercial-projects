<template>
  <header class="header-area header-three">
    <HeaderTop :global-config="globalConfig" />
    <HeaderMenu :menu="menu" />
  </header>
</template>
<script>
import HeaderTop from '~/components/HeaderTop.vue'
import HeaderMenu from '~/components/HeaderMenu.vue'
export default {
  components: {
    HeaderTop,
    HeaderMenu,
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
    globalConfig: {
      type: Object,
      required: true,
    },
  },
}
</script>
