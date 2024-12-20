import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path, { resolve } from 'path';
import replaceImgWithPicturePlugin from './utils/replaceImgWithPicturePlugin';
import { convertImages } from './utils/convertImages';
import injectHTML from 'vite-plugin-html-inject';



const publicImagesDir = path.resolve(__dirname, 'public/images');
const outputImagesDir = path.resolve(__dirname, 'images-con');
convertImages(publicImagesDir, outputImagesDir);

export default defineConfig({
	base: './',
	css: {
		postcss: '/postcss.config.js',
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				about: resolve(__dirname, 'about.html'),
				blog: resolve(__dirname, 'blog.html'),
				portfolio: resolve(__dirname, 'portfolio.html'),
				text: resolve(__dirname, 'text.html'),
			},
		},
		outDir: './dist',
		assetsDir: 'assets',
	},
	plugins: [
		checker({
			// typescript: true,
		}),
		injectHTML(),
		viteStaticCopy({
			targets: [
				{
					src: 'images-con/*',
					dest: 'images',
				},
			],
		}),
		replaceImgWithPicturePlugin(),
	],
	envPrefix: 'APP_',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
