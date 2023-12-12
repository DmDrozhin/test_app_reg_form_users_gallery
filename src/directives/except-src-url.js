export default {
  mounted(el, binds) {
    // console.log(binds.value)
    const exception = 'https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png'
    if (binds.value === exception) el.setAttribute('src', require('@/assets//images/photo-cover.svg'))
    else el.setAttribute('src', binds.value)
  },
  name: 'src-exceptions',
}
