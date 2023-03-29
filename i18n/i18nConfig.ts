import { NuxtVueI18n } from 'nuxt-i18n'
import EN from './en-us'
import TW from './zh-tw'

const i18nConfig: NuxtVueI18n.Options.AllOptionsInterface = {
  locales: ['zh-TW', 'en'],
  defaultLocale: 'zh-TW',
  vueI18n: {
    fallbackLocale: 'zh-TW',
    // TODO: 型別處理
    messages: {
      'zh-TW': TW,
      en: EN,
    } as any,
  },
}

export default i18nConfig
