import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: [
      'dist/**',
      'build/**',
      'coverage/**',
      'node_modules/**'
    ]
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn'
    }
  }
];