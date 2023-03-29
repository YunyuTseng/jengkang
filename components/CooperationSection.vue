<template>
  <div class="row cooperation flex-column-reverse flex-md-row">
    <AosContainer class="col-md-6 d-flex flex-column align-items-center">
      <h2 class="mt-4 cooperation__title">{{ title }}</h2>
      <p>{{ content }}</p>
    </AosContainer>
    <AosContainer class="col-md-6 d-flex">
      <img width="240" class="m-auto" src="~/assets/img/logos/cobetter.png" />
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
  name: 'CooperationSection',
})
export default class extends Vue {
  get title() {
    const title: I18nKeyPath = 'cooperation.name'
    return this.$tc(title)
  }

  get content() {
    const content: I18nKeyPath = 'cooperation.content'
    return this.$tc(content)
  }
}
</script>

<style lang="scss" scoped>
.cooperation {
  &__title {
    font-size: 1.8rem;
  }
}
</style>
