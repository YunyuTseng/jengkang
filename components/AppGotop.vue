<template>
  <Transition name="fade">
    <div v-if="isShow" id="appGotop" @click="clickHandler" />
  </Transition>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'AppGoTop',
})
export default class extends Vue {
  isShow = false

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  }

  clickHandler() {
    console.log('!')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onScroll() {
    this.isShow = document.documentElement.scrollTop >= 300
  }
}
</script>

<style lang="scss" scoped>
#appGotop {
  background-image: url('../assets/img/gotop.svg');
  background-size: 70%;
  background-position-x: 50%;
  background-position-y: 50%;
  background-repeat: no-repeat;
  background-color: rgb(51, 51, 51);
  box-shadow: rgb(0 0 0 / 30%) 1px 1px 2px;
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 30px;
  height: 50px;
  width: 50px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
