import { SearchPlugin } from 'vitepress-plugin-search';
import { defineConfig } from 'vite';

const options = {
  previewLength: 62,
  buttonLabel: 'search',
  placeholder: 'Type to search...',
};
export default defineConfig({
  plugins: [SearchPlugin(options)],
});
