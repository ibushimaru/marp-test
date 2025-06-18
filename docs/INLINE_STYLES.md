# Inline Styles Shortcuts for Marp

This document describes the custom inline style shortcuts available in this Marp template.

## Quick Reference

| Syntax | Description | CSS Classes Applied |
|--------|-------------|-------------------|
| `::comment::text::` | Comment-style text (small, secondary color) | `text-secondary text-sm` |
| `::highlight::text::` | Highlighted important text | `text-accent-orange font-bold` |
| `::small::text::` | Small text | `text-sm` |
| `::large::text::` | Large text | `text-lg` |
| `::primary::text::` | Primary colored text | `text-primary` |
| `::secondary::text::` | Secondary colored text | `text-secondary` |
| `::accent::text::` | Orange accent color (positive/important) | `text-accent-orange` |
| `::blue::text::` | Blue accent color (negative/contrast) | `text-accent-blue` |
| `::bold::text::` | Bold text | `font-bold` |
| `::dim::text::` | Dimmed text (70% opacity) | `opacity-70` |

## Usage Examples

```markdown
This is ::highlight::very important:: information.

::comment::Note: This is a side comment::

The ::accent::positive outcome:: versus the ::blue::negative impact::.

::small::Fine print goes here::

::large::Big statement::

::bold::Strong emphasis:: on this point.

::dim::Less important information::
```

## Combining with Existing Syntax

The new inline shortcuts can be combined with existing Marp/markdown-it-attrs syntax:

```markdown
# Traditional approach (still works)
This is ==highlighted text=={.red}

# New shortcut approach
This is ::highlight::highlighted text::

# Can be nested
::large::::bold::Large and bold text::::
```

## Design Principles Alignment

These shortcuts follow the design principles outlined in DESIGN_PRINCIPLES.md:

- **Orange (`::accent::`, `::highlight::`)**: For important points, positive content, emphasis
- **Blue (`::blue::`)**: For negative content, contrasts, warnings
- **Gray shades (`::secondary::`, `::dim::`)**: For supplementary information
- **Size variations (`::small::`, `::large::`)**: For visual hierarchy

## Adding Custom Shortcuts

To add new shortcuts, edit `plugins/inline-styles-plugin.mjs` and add entries to the `styleMap` object:

```javascript
const styleMap = {
  'comment': 'text-secondary text-sm',
  'highlight': 'text-accent-orange font-bold',
  // Add your custom style here:
  'custom': 'your-css-classes',
};
```

Then ensure the corresponding CSS classes exist in `themes/myTheme.css`.

## Benefits Over Traditional Approach

1. **Cleaner syntax**: `::comment::text::` vs `text{.text-secondary .text-sm}`
2. **Semantic naming**: Style names describe intent, not just appearance
3. **Consistency**: Predefined combinations ensure design consistency
4. **Faster typing**: Shorter syntax for common style combinations
5. **Design system alignment**: Shortcuts map directly to design principles

## Fallback

If the inline styles plugin is not loaded, the `::style::text::` syntax will be rendered as plain text, making it obvious that something is wrong rather than silently failing.