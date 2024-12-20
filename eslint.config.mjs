// @ts-check

import eslint from '@eslint/js';

export default [
	{
		// Настройки языка и парсера
		languageOptions: {

			ecmaVersion: 'latest', // Используем последний стандарт ECMAScript
			sourceType: 'module', // Модульный формат
			globals: {
				// Определяем глобальные переменные для браузера
				document: 'readonly',
				window: 'readonly',
				HTMLElement: 'readonly',
			},
		},
		files: ['**/*.ts', '**/*.tsx'], // Добавьте паттерны для TypeScript-файлов
		plugins: {

		},
		env: {
			browser: true, // Для браузерных API
			node: true,    // Для Node.js API
			es2021: true,  // Для современных возможностей ES2021
		},
		rules: {
			...eslint.configs.recommended.rules, // Базовые правила ESLint
			// Ваши кастомные правила
			'no-console': 'warn', // Предупреждать о console.log
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
];
