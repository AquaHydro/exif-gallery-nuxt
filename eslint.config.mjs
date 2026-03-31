// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  pnpm: true,
  formatters: true,
  ignores: [
    'server/db/migrations/*',
    'app/components/ui/**/*',
  ],
  rules: {
    'node/prefer-global/process': 'off',
    'e18e/prefer-static-regex': 'off',
  },
})
