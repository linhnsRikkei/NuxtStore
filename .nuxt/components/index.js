export { default as Banner } from '../..\\components\\Banner.vue'
export { default as CartMain } from '../..\\components\\CartMain.vue'
export { default as Content } from '../..\\components\\Content.vue'
export { default as Favority } from '../..\\components\\Favority.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Login } from '../..\\components\\Login.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Search } from '../..\\components\\Search.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as CartInfor } from '../..\\components\\CartInfo\\CartInfor.vue'
export { default as ProductListContainer } from '../..\\components\\productList\\Container.vue'
export { default as ProductListHeaderProductList } from '../..\\components\\productList\\HeaderProductList.vue'
export { default as Menu } from '../..\\components\\Menu\\Menu.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
