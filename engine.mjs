import container from 'markdown-it-container';
import attrs from 'markdown-it-attrs';
import mark from 'markdown-it-mark';
import prism from 'markdown-it-prism';
import inlineStylesPlugin from './plugins/inline-styles-plugin.mjs';
import textMacrosPlugin from './plugins/text-macros-plugin.mjs';

/**
 * @type {import('@marp-team/marp-cli').Config<typeof import('@marp-team/marpit').Marpit>["engine"]}
 */
export default ({ marp }) => marp
  .use(mark)
  .use(attrs)
  .use(prism)
  .use(inlineStylesPlugin)
  .use(textMacrosPlugin)
  .use(container, 'col')
  .use(container, '_');