import stylistic from '@stylistic/eslint-plugin';
import vue from 'eslint-plugin-vue';
import { defineConfig, globalIgnores } from 'eslint/config';
import ts from 'typescript-eslint';

export default defineConfig(
  ...ts.configs.strictTypeChecked,
  ...vue.configs['flat/recommended'],
  stylistic.configs['recommended'],
  globalIgnores(['**/*.config.js', '**/*.config.mjs', '**/*.config.ts']),
  {
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        projectService: true
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/indent': ['error', 2, {
        ObjectExpression: 'first',
      }],

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
      ],

      'vue/html-quotes': ['error', 'single'],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/quote-props': ['error'],
      'vue/prefer-true-attribute-shorthand': ['error', 'always'],
      'vue/require-default-prop': 'off',

      'no-var': 'error',
      'no-new-object': 'error',
      'object-shorthand': 'error',
      'quote-props': ['error', 'as-needed'],
      'no-array-constructor': 'error',
      'prefer-destructuring': ['error',
        {
          array: true,
          object: false,
        },
        {
          enforceForRenamedProperties: true,
        }],
      'func-names': ['error', 'as-needed'],
      'no-loop-func': 'error',
      'prefer-rest-params': 'error',
      'brace-style': ['error', '1tbs', {
        allowSingleLine: false,
      }],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message: 'Use const assertion or a string union type instead.',
        },
      ],
      'no-console': [
        'warn',
        { allow: ['warn', 'error'] }
      ],
    },
  },
);
