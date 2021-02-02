import { API } from '@/utils/api'

export const prepareServiceListItem = (data) => {
  return {
    ...data,
    hasImg: !!data.icon,
    link: {
      name: 'services-slug',
      params: {
        slug: data.id,
      },
    },
  }
}

export const prepareServiceList = (resp) => {
  return resp.map((item) => prepareServiceListItem(item))
}

export const prepareMenu = (menu) => {
  menu.map((element) => (element.isClicked = false))
  return menu
}

export const prepareAboutUs = (data) => {
  return {
    title: data.b_title,
    text: data.b_text,
    years: data.years,
    images: [
      [data.b_photo_1, data.b_photo_2],
      [data.b_photo_3, data.b_photo_4],
    ],
  }
}

export const globalFetchData = async ($axios) => {
  const globalConfig = await $axios.$get(API.page('global'))
  const headerMenuItems = await $axios
    .$get(API.mainMenu())
    .then((data) => prepareMenu(data))
  return { globalConfig, headerMenuItems }
}
