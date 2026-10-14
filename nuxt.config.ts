import { organizationSite } from '@nuxtjp/localized-site/organization'
export default defineNuxtConfig(organizationSite(import.meta.url, process.env.SITE_ID, { theme: 'semantic', scope: 'organization' }))
