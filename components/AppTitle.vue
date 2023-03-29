<template>
  <h2 class="text-center mb-5">
    {{ title }}
  </h2>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'AppTitle',
})
export default class extends Vue {
  @Prop({ type: String, required: true })
  title!: string
}
</script>
