export const toFormData = (obj, form, namespace) => {
  const fd = form || new FormData()
  let formKey

  for (const property in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(property) && obj[property]) {
      if (namespace) {
        formKey = namespace + '[' + property + ']'
      } else {
        formKey = property
      }

      // if the property is an object, but not a File, use recursivity.
      if (obj[property] instanceof Date) {
        fd.append(formKey, obj[property].toISOString())
      } else if (
        typeof obj[property] === 'object' &&
        !(obj[property] instanceof File)
      ) {
        toFormData(obj[property], fd, formKey)
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property])
      }
    }
  }

  return fd
}
