<template>
  <div class="outer-wrapper position-relative" :class="version">
    <!-- header -->
    <AppHeader />

    <!-- content -->
    <Nuxt />

    <!-- footer -->
    <AppFooter class="footer" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free'

@Component
export default class extends Vue {
  get version() {
    const version = process.env.version
      ? process.env.version.replaceAll('"', '')
      : ''

    return `app-version-v${version}`
  }

  mounted() {
    setTimeout(() => {
      this.setWrapperPaddingTop()
    })
    window.addEventListener('resize', this.setWrapperPaddingTop)
  }

  destroyed() {
    window.removeEventListener('resize', this.setWrapperPaddingTop)
  }

  /** 依照 Header 高度調整頁面 padding-top 高度 */
  setWrapperPaddingTop() {
    const nav: HTMLElement | null = document.querySelector('nav')
    const navCollapse: HTMLElement | null = document.querySelector(
      '#navbarCollapse.show'
    )
    const wrapper: HTMLElement | null = document.querySelector('.outer-wrapper')
    const footer: HTMLElement | null = document.querySelector('footer')

    if (nav && wrapper && footer) {
      const paddingTop = nav.clientHeight - (navCollapse?.clientHeight || 0)
      wrapper.style.paddingTop = `${paddingTop}px`
      wrapper.style.paddingBottom = `${footer.clientHeight + 15}px`
      wrapper.style.minHeight = `100vh`
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
