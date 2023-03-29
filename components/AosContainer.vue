<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'AosContainer',
})
export default class extends Vue {
  @Prop({ type: String, default: 'fade-up' })
  aos!: 'fade-up'

  @Prop({ type: Boolean, default: true })
  once!: boolean
}
</script>
