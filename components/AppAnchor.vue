<template>
  <div class="anchor" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'AppAnchor',
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.anchor {
  position: relative;
  bottom: 95px;
}
</style>
