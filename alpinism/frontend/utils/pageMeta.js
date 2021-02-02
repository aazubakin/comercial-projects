import _ from 'lodash'
import ENV from '~/envLocal'

export const pageMeta = (vm, item) => {
  // cards = typeof (cards) === 'undefined' ? true : cards
  let meta
  let title
  const postfixTitle = vm.globalConfig.title || ENV.metaSiteName
  if (!_.isNull(vm.service) && !_.isUndefined(vm.service)) {
    title = `${vm.service.seo_title} | ${postfixTitle}`
    meta = [
      {
        hid: 'description',
        name: 'description',
        content: vm.service.seo_description,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: vm.service.seo_keywords,
      },
    ]
  } else {
    title =
      vm.page.config.seo_title.length > 0
        ? `${vm.page.config.seo_title} | ${postfixTitle}`
        : postfixTitle
    meta = [
      {
        hid: 'description',
        name: 'description',
        content: vm.page.config.seo_description,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: vm.page.config.seo_keywords,
      },
    ]
  }

  return { title, meta }
}
