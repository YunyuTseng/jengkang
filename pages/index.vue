<template>
  <!-- Banner -->
  <div>
    <AppBanner />

    <!-- 產品介紹 -->
    <AppAnchor id="productCategoryAnchor" />
    <ProductCategorySection />

    <div class="container">
      <!-- 公司簡介 -->
      <AppAnchor id="introduceAnchor" />
      <AppTitle :title="$tc('company.title')" />
      <IntroduceSection />

      <AppDivider />

      <!-- 合作廠商 -->
      <AppAnchor id="cooperationAnchor" />
      <AppTitle :title="$tc('cooperation.title')" />
      <CooperationSection />

      <AppDivider />

      <!-- 案例經驗 -->
      <AppAnchor id="customerAnchor" />
      <AppTitle :title="$tc('customer.title')" />
      <CustomerSection />

      <AppDivider />

      <!-- 聯絡我們 -->
      <AppAnchor id="contactUsAnchor" />
      <AppTitle :title="$tc('contactUs.title')" />
      <AppMap />

      <AppAnchor id="contactUsAnchor" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import {
  AppAnchor,
  AppBanner,
  AppDivider,
  AppTitle,
  AppMap,
  CooperationSection,
  CustomerSection,
  IntroduceSection,
  ProductCategorySection,
} from '~/components'
import 'bootstrap/scss/bootstrap.scss'

@Component({
  // eslint-disable-next-line no-undef
  components: {
    AppAnchor,
    AppBanner,
    AppDivider,
    AppTitle,
    AppMap,
    CooperationSection,
    CustomerSection,
    IntroduceSection,
    ProductCategorySection,
  },
})
export default class extends Vue {}
</script>
