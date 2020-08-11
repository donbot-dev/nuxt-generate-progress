# Nuxt Generate Progress
A simple module to show the progress of the number of generated pages during the run of the `nuxt generate` command.

![Module working progress](https://user-images.githubusercontent.com/3786627/80711907-6b4a3c00-8af1-11ea-885b-dc8cb1286bbb.gif)

## Setup
Add `nuxt-generate-progress` dependency to your project

```bash
npm i -D nuxt-generate-progress
```

Add `nuxt-generate-progress` to the `modules` section of `nuxt.config` file.

```typescript
export default {
  modules: [
    'nuxt-generate-progress',
  ]
}
```

## Thx
Inspired by https://github.com/nuxt/nuxt.js/pull/7292

Based on this code https://github.com/nuxt/nuxt.js/pull/7292#issuecomment-621933195
