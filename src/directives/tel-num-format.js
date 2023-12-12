export default {
  mounted(el, binds) {
    // console.log(el.innerHTML, binds)
    let n = el.innerHTML
    let x = n && n.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
    if (!x) return n
    let res = `+${x[1] ? x[1] + ' ' : ''}(${x[2] ? x[2] + ') ' : ''}${x[3]}${x[4] ? ` ${x[4]}` : ''}${x[5] ? ` ${x[5]}` : ''}`
    el.innerHTML = res
  },
  name: 'phone-format',
}
