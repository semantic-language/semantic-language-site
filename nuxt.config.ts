import contactConfig from './contact-form.config.json'
import consentConfig from './consent.config.json'
import type { ModuleOptions as ContactOptions } from '@nuxtjp/contact-form'
import sitePages from './site/module'
import { organizationSite } from '@nuxtjp/localized-site/organization'
const shared = organizationSite(import.meta.url, process.env.SITE_ID, { theme: 'semantic', scope: 'product' })
const enableContact = !process.env.SITE_ID || process.env.SITE_ID === 'semantic-language'
export default defineNuxtConfig({ ...shared, contactForm: enableContact ? contactConfig as ContactOptions : undefined, modules: [...(enableContact ? [['@nuxtjp/localized-site/consent', { ...consentConfig, defaultLocale: 'ja' }] as [string, Record<string, unknown>], '@nuxtjp/contact-form'] : []),...shared.modules, sitePages], app: { head: { link: [{ rel: 'icon', type: 'image/png', href: '/brand/icon.png' }] } } })
