import sitePages from './site/module'
import { organizationSite } from '@nuxtjp/localized-site/organization'
const shared = organizationSite(import.meta.url, process.env.SITE_ID, { theme: 'semantic', scope: 'product' })
export default defineNuxtConfig({ ...shared, modules: [...shared.modules, sitePages], app: { head: { link: [{ rel: 'icon', type: 'image/png', href: '/brand/icon.png' }] } } })
