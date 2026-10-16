import assert from 'node:assert/strict'

type Link = { href: string }
type Section = { links?: Link[] }
export type Content = { navigation: Link[]; pages: { path: string; sections: Section[] }[] }
export const requiredPaths = ["/docs/getting-started", "/download"]

export function validateNavigation(content: Content) {
  const pages = new Map(content.pages.map(page => [page.path, page]))
  const links = (path: string) => pages.get(path)!.sections.flatMap(section => section.links ?? [])
  const reached = new Set<string>()
  const pending = ['/', ...content.navigation.map(link => link.href)]
  while (pending.length) {
    const path = pending.pop()!
    if (path === '/sitemap' || reached.has(path)) continue
    const page = pages.get(path)
    if (!page) continue
    reached.add(path)
    pending.push(...links(path).map(link => link.href))
  }
  for (const path of requiredPaths) assert.ok(reached.has(path), `unreachable without sitemap: ${path}`)
  assert.ok(links('/download').every(link => !link.href.startsWith('/')), 'purpose: unavailable download cannot return to concepts')
  assert.ok(pages.get('/docs/getting-started')!.sections.length >= 3 && links('/docs/getting-started').some(link => link.href === '/download'), 'purpose: example needs steps and distribution status')
}
