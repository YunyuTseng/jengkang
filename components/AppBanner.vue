<template>
  <div
    id="carouselExampleControls"
    class="carousel slide banner"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(img, index) in imgs"
        :key="index"
        class="carousel-item"
        :class="{ active: !index }"
      >
        <AppLazyload
          v-if="!index"
          :data-src="getImageUrl(img)"
          class="d-block w-100 mh-lg"
        />

        <img v-else :src="getImageUrl(img)" class="d-block w-100" />
      </div>
    </div>
    <button
      class="carousel-control-prev d-none"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next d-none"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AppLazyload from '~/components/AppLazyload.vue'

@Component({
  name: 'AppBanner',
  // eslint-disable-next-line no-undef
  components: {
    AppLazyload,
  },
})
export default class extends Vue {
  imgs = ['banner-1.png']

  getImageUrl(img) {
    return require(`~/assets/img/banners/${img}`)
  }
}
</script>
