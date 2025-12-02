import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([
    'dist/'
  ]),
  {
    files: ['**/*.{js,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  pluginReact.configs.flat.recommended
])
