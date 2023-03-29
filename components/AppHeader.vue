<template>
  <header class="fixed-top">
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container-fluid">
        <img
          class="d-block me-3 ms-3 logo"
          width="28"
          src="~/assets/img/jengkang.jpg"
          @click="$router.push(localePath('/'))"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarCollapse"
          ref="navbarCollapse"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav me-auto mb-0">
            <li v-for="item in headerTitle" :key="item.id" class="nav-item">
              <a
                href
                class="nav-link nav-link-title"
                aria-current="page"
                @click.prevent="handleClick(item)"
              >
                {{ $tc(item.name) }}
              </a>
            </li>
          </ul>

          <ul class="navbar-nav mb-2 mb-md-0 flex-row">
            <li
              v-for="(lang, index) in langs"
              :key="lang.value"
              class="nav-item"
            >
              <a
                href
                class="nav-link nav-link-title"
                :class="!index ? 'border-right pe-0' : ''"
                aria-current="page"
                @click.prevent="handleSwitchLang(lang.value)"
              >
                {{ lang.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Collapse } from 'bootstrap'
import { Component, Vue } from 'nuxt-property-decorator'
import { headerTitleList } from '~/data'

@Component
export default class extends Vue {
  get headerTitle() {
    return headerTitleList
  }

  navbarCollapse: any = null

  langs = [
    { title: 'TW', value: 'zh-TW' },
    { title: 'EN', value: 'en' },
  ]

  get pathWithoutHash() {
    const { fullPath, hash } = this.$route

    return hash ? fullPath.replace(hash, '') : fullPath
  }

  mounted() {
    this.navbarCollapse = new Collapse(this.$refs.navbarCollapse, {
      toggle: false,
    })
  }

  handleClick(item: any) {
    this.hideCollapse()
    this.$router.push(this.localePath(item.to || '/'))
  }

  handleSwitchLang(lang: string) {
    const path = this.localePath(this.pathWithoutHash, lang)

    this.hideCollapse()
    this.$router.push(path)
  }

  hideCollapse() {
    this.navbarCollapse.hide()
  }
}
</script>

<style lang="scss" scoped>
// scoped → 只單純影響這個components

nav {
  &:focus {
    outline: none;
  }

  background-color: #fff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);

  .navbar-toggler:focus {
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: none;
  }

  a {
    font-weight: bold;
  }

  .logo {
    cursor: pointer;
  }

  .navbar-nav {
    .nav-link-title {
      padding: 0.25rem 1rem;

      &:hover {
        color: #333;
      }
    }

    .border-right::after {
      content: '|';
      padding-left: 12px;
      color: #333;
    }
  }
}
</style>
