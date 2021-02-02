<template>
  <div>
    <Header :menu="headerMenu" :global-config="globalConfig" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageOneCol',
  props: {
    headerMenu: {
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
