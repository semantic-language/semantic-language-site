# Semantic Language website

Canonical source for the public Semantic Language website at
<https://sem-lang.taiper.org>. Private Semantic Language source is excluded from
the published site.

The current presentation uses `@nuxtjp/localized-site` with bilingual MDC
documents in `site/documents/`. Site-owned components supply the declarative UI;
the shared module owns common components and styles. HTML, raw Markdown,
robots.txt, sitemap.xml and llms.txt come from the same published selection.
Search, AI input and model training are allowed by the published Content-Signal.

Production version `0.1.7`, source `fb041e1f80b543f524e454a0e9de3110f8ea135e`,
was accepted by [the owner release workflow](https://github.com/semantic-language/semantic-language-site/actions/runs/40601646106).
That run verified 108 public assets and all 28 Markdown routes while preserving
DNS/domain bindings and keeping workers.dev and preview URLs disabled. This
documentation update does not deploy a new version.

Run the locked owner checks with `pnpm install --frozen-lockfile`, `pnpm test`,
`pnpm typecheck` and `pnpm build`. Production tags, target identity and required
CI are declared in `.github/site-release.json`; use the existing owner release
workflow and protected Environment.

[OSS responsibility and source completion](docs/oss-source-contract.md) defines the supported package boundary and required acceptance. It does not declare unexecuted source, distribution or production checks complete.

Dependency updates: [repository policy](docs/dependency-updates.md).
