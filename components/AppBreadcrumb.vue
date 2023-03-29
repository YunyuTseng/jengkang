<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <NuxtLink to="/">{{ $tc('header.home') }}</NuxtLink>
      </li>

      <li
        v-for="(item, index) in list"
        :key="index"
        class="breadcrumb-item"
        :aria-current="index === list.length - 1"
      >
        <NuxtLink v-if="item.to" :to="item.to">
          {{ item.title }}
        </NuxtLink>

        <template v-else>
          {{ item.title }}
        </template>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { BreadcrumbItem } from '~/@types'

@Component({
  name: 'AppBreadcrumb',
})
export default class extends Vue {
  @Prop({ type: Array, default: () => [] })
  list!: BreadcrumbItem[]
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  .breadcrumb-item {
    color: #000;
    font-size: 0.875rem;

    a {
      color: #7d8a94;
      text-decoration-line: none !important;
    }
  }
}
</style>
