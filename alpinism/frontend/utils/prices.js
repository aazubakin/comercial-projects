export const addTextToPrice = (priceObj, searchStr, addStr) => {
  const regex = new RegExp(`${searchStr}`, 'gi')
  priceObj.map((element) => {
    element.value = String(element.value)
    if (regex.test(element.title)) {
      element.value = addStr + element.value
    }
  })
}
