<template>
  <Component
    :is="tag"
    v-bind="$attrs"
    class="lazyload"
    width="100%"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'AppLazyload',
  // eslint-disable-next-line no-undef
  inheritAttrs: false,
})
export default class extends Vue {
  @Prop({ type: String, default: 'img' })
  tag!: string
}
</script>

<style lang="scss" scoped>
.lazyload,
.lazyloading {
  min-height: 240px;

  &.mh-small {
    min-height: 134px;
  }

  &.mh-base {
    min-height: 312px;
  }

  &.mh-lg {
    min-height: 528px;
  }
}
</style>
