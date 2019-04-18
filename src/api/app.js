export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) {
        // eslint-disable-next-line no-mixed-spaces-and-tabs
        resolve({ code: 200, info: { appName: 'APInewAppName' } })
      } else {
        reject(err)
      }
    })
  })
}
