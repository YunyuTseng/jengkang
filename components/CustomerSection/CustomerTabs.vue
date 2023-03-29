<template>
  <div class="customer-tabs">
    <button
      v-for="category in list"
      :key="category.id"
      class="tab-button"
      :class="{ active: activeId === category.id }"
      @click="$emit('change', category.id)"
    >
      {{ category.name }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { customerCategoryList } from '~/data'

@Component({
  name: 'CustomerTabs',
})
export default class extends Vue {
  @Prop({ type: Number, required: true })
  activeId!: Number

  list = customerCategoryList
}
</script>

<style lang="scss" scoped>
$primary-color: #013d87;

.customer-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 767.9px) {
    max-width: 400px;
  }
}

.tab-button {
  width: 130px;
  color: $primary-color;
  background-color: #fff;
  border: 2px solid $primary-color;
  padding: 10px 5px;
  border-radius: 10px;
  margin: 5px;
  transition-duration: 0.2s;

  &.active,
  &:hover {
    color: #fff;
    background-color: $primary-color;
    border-color: $primary-color;
  }
}
</style>
