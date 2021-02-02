export const sortProp = {
  methods: {
    sortOrder(propsArrSort) {
      const sortArr = []
      propsArrSort.forEach((element) => {
        sortArr.push(element)
      })
      return sortArr.sort((a, b) => a.sort_order - b.sort_order)
    },
  },
}
