import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _08942b70 = () => interopDefault(import('..\\pages\\Admin.vue' /* webpackChunkName: "pages/Admin" */))
const _6fda2b64 = () => interopDefault(import('..\\pages\\Admin\\Dashboard\\index.vue' /* webpackChunkName: "pages/Admin/Dashboard/index" */))
const _506ffc2c = () => interopDefault(import('..\\pages\\Admin\\LoaiSP\\index.vue' /* webpackChunkName: "pages/Admin/LoaiSP/index" */))
const _16f1bcbe = () => interopDefault(import('..\\pages\\Admin\\SanPham\\index.vue' /* webpackChunkName: "pages/Admin/SanPham/index" */))
const _740997c3 = () => interopDefault(import('..\\pages\\Admin\\LoaiSP\\ThemMoi.vue' /* webpackChunkName: "pages/Admin/LoaiSP/ThemMoi" */))
const _e0a024d2 = () => interopDefault(import('..\\pages\\Admin\\SanPham\\ThemMoi.vue' /* webpackChunkName: "pages/Admin/SanPham/ThemMoi" */))
const _011af49b = () => interopDefault(import('..\\pages\\Admin\\LoaiSP\\_id\\update.vue' /* webpackChunkName: "pages/Admin/LoaiSP/_id/update" */))
const _d98b7f22 = () => interopDefault(import('..\\pages\\Admin\\SanPham\\_id\\update.vue' /* webpackChunkName: "pages/Admin/SanPham/_id/update" */))
const _9b9d3bda = () => interopDefault(import('..\\pages\\Cart\\index.vue' /* webpackChunkName: "pages/Cart/index" */))
const _6add2230 = () => interopDefault(import('..\\pages\\Register\\index.vue' /* webpackChunkName: "pages/Register/index" */))
const _afb30a06 = () => interopDefault(import('..\\pages\\DanhMuc\\_id\\index.vue' /* webpackChunkName: "pages/DanhMuc/_id/index" */))
const _d6945534 = () => interopDefault(import('..\\pages\\ProductList\\_id\\index.vue' /* webpackChunkName: "pages/ProductList/_id/index" */))
const _5fb2b793 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Admin",
    component: _08942b70,
    name: "Admin",
    children: [{
      path: "Dashboard",
      component: _6fda2b64,
      name: "Admin-Dashboard"
    }, {
      path: "LoaiSP",
      component: _506ffc2c,
      name: "Admin-LoaiSP"
    }, {
      path: "SanPham",
      component: _16f1bcbe,
      name: "Admin-SanPham"
    }, {
      path: "LoaiSP/ThemMoi",
      component: _740997c3,
      name: "Admin-LoaiSP-ThemMoi"
    }, {
      path: "SanPham/ThemMoi",
      component: _e0a024d2,
      name: "Admin-SanPham-ThemMoi"
    }, {
      path: "LoaiSP/:id/update",
      component: _011af49b,
      name: "Admin-LoaiSP-id-update"
    }, {
      path: "SanPham/:id/update",
      component: _d98b7f22,
      name: "Admin-SanPham-id-update"
    }]
  }, {
    path: "/Cart",
    component: _9b9d3bda,
    name: "Cart"
  }, {
    path: "/Register",
    component: _6add2230,
    name: "Register"
  }, {
    path: "/DanhMuc/:id",
    component: _afb30a06,
    name: "DanhMuc-id"
  }, {
    path: "/ProductList/:id",
    component: _d6945534,
    name: "ProductList-id"
  }, {
    path: "/",
    component: _5fb2b793,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
