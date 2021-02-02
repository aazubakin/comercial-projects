import { pageMeta } from '~/utils/pageMeta'

export const seoMixin = {
  head() {
    return pageMeta(this)
  },
}
