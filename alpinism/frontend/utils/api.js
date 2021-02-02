import ENV from '~/envLocal'

export const API = {
  mainMenu: () => {
    return `${ENV.baseApiUrl}menu/`
  },
  page: (slug) => {
    return `${ENV.baseApiUrl}pages/?slug=${slug}`
  },
  serviceList: (page) => {
    let baseUrl = `${ENV.baseApiUrl}services/`
    if (page !== undefined) {
      baseUrl = baseUrl + `?page=${page}`
    }
    return baseUrl
  },
  priceList: (page) => {
    let baseUrl = `${ENV.baseApiUrl}prices/`
    if (page !== undefined) {
      baseUrl = baseUrl + `?page=${page}`
    }
    return baseUrl
  },
  serviceItem: ({ id }) => {
    return `${ENV.baseApiUrl}services/${id}/`
  },
  requestOrder: () => {
    return `${ENV.baseApiUrl}feedbacks/request_order/`
  },
  feedback: () => {
    return `${ENV.baseApiUrl}feedbacks/review/`
  },
}
