export const pageMixin = {
  methods: {
    componentData(pageConfig, str) {
      let regexp = ''
      const objConfig = {}
      for (const key in pageConfig) {
        regexp = new RegExp(`${str}`, 'ig')
        if (regexp.test(key)) {
          const keyComponent = key.split('_').pop()
          objConfig[keyComponent] = pageConfig[key]
        }
      }
      return objConfig
    },
  },
}
