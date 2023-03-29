<template>
  <div class="row introduction">
    <AosContainer class="col-md-6 d-flex">
      <img class="m-auto" width="180" src="~/assets/img/jengkang.jpg" />
    </AosContainer>

    <AosContainer class="col-md-6 d-flex flex-column align-items-center">
      <h2 class="mt-4 introduction__title">{{ companyName }}</h2>
      <p>{{ content }}</p>
    </AosContainer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AosContainer from './AosContainer.vue'
import { I18nKeyPath } from '~/@types'

@Component({
  // eslint-disable-next-line no-undef
  components: {
    AosContainer,
  },
  name: 'IntroduceSection',
})
export default class extends Vue {
  /** 公司名稱 */
  get companyName() {
    const key: I18nKeyPath = 'company.name'
    return this.$tc(key)
  }

  get content() {
    const key: I18nKeyPath = 'company.content'
    return this.$tc(key)
  }
}
</script>

<style lang="scss" scoped>
.introduction {
  &__title {
    font-size: 1.8rem;
  }
}
</style>
