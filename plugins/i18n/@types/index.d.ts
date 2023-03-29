import Vue from 'vue'
/* eslint-disable import/order */
/* eslint-disable import/no-duplicates */
declare module 'vue/types/vue' {
  import { I18nKeyPath } from '../../../@types'
  import VueI18n from 'vue-i18n/types'

  interface Vue {
    $tc(
      key: I18nKeyPath,
      choice?: VueI18n.Choice,
      values?: VueI18n.Values
    ): string

    $tc(
      key: I18nKeyPath,
      choice: VueI18n.Choice,
      locale: VueI18n.Locale,
      values?: VueI18n.Values
    ): string
  }
}

declare module '@nuxt/types' {
  import VueI18n from 'vue-i18n/types'
  import { I18nKeyPath } from '~/@types'

  interface NuxtAppOptions {
    $tc(
      key: I18nKeyPath,
      choice?: VueI18n.Choice,
      values?: VueI18n.Values
    ): string

    $tc(
      key: I18nKeyPath,
      choice: VueI18n.Choice,
      locale: VueI18n.Locale,
      values?: VueI18n.Values
    ): string
  }
}

declare module 'vuex/types/index' {
  import VueI18n from 'vue-i18n/types'
  import { I18nKeyPath } from '~/@types'

  interface Store<S> {
    $tc(
      key: I18nKeyPath,
      choice?: VueI18n.Choice,
      values?: VueI18n.Values
    ): string

    $tc(
      key: I18nKeyPath,
      choice: VueI18n.Choice,
      locale: VueI18n.Locale,
      values?: VueI18n.Values
    ): string
  }
}
