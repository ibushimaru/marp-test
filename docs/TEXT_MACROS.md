# Text Macros for Marp

This document describes the text macro shortcuts available in this Marp template.

## Quick Reference

### Style Macros
| Macro | Expansion | Description |
|-------|-----------|-------------|
| `@important{text}` | `**text**{.important}` | Orange bold text for important points |
| `@negative{text}` | `**text**{.negative}` | Blue bold text for negative/contrast |
| `@positive{text}` | `**text**{.positive}` | Orange text for positive content |
| `@warning{text}` | `⚠️ text{.negative}` | Warning with icon and blue color |

### Status Macros
| Macro | Expansion | Description |
|-------|-----------|-------------|
| `@done{text}` | `✓ text` | Checkmark with text |
| `@done` | `✓ Completed` | Checkmark with default text |
| `@pending{text}` | `○ text` | Circle with text |
| `@pending` | `○ Pending` | Circle with default text |
| `@todo{text}` | `[ ] text` | Checkbox with text |
| `@todo` | `[ ] TODO` | Checkbox with default text |

### Date/Time Macros
| Macro | Expansion | Description |
|-------|-----------|-------------|
| `@date` | Current date (YYYY/MM/DD) | Today's date in Japanese format |
| `@year` | Current year | e.g., 2024 |
| `@month` | Current month | e.g., 6 |

### Japanese Presentation Macros
| Macro | Expansion | Description |
|-------|-----------|-------------|
| `@thanks` | ご清聴ありがとうございました | Thank you for listening |
| `@questions` | ご質問はありますか？ | Any questions? |
| `@contact` | お問い合わせ | Contact us |
| `@nextslide` | → 次のスライドで詳しく説明 | Details on next slide |
| `@summary` | まとめ | Summary |
| `@agenda` | 本日の内容 | Today's agenda |

## Usage Examples

```markdown
## Project Status

@todo{Implement user authentication}
@done{Database schema design}
@pending{API documentation}

---

## Financial Report @year

Revenue: @positive{+15%}
Costs: @negative{-8%}
@warning{Budget review needed}

---

## @summary

Key points:
- @important{AI adoption is accelerating}
- @negative{Security risks must be addressed}
- @positive{New opportunities emerging}

@nextslide

---

# @thanks

@questions

Updated: @date
```

## Benefits

1. **Consistency**: Ensures uniform styling for common patterns
2. **Speed**: Faster than typing full markdown + attributes
3. **Semantic**: Macro names describe intent
4. **Maintainable**: Easy to update styling in one place
5. **Localization**: Japanese phrases ready to use

## Combining with Inline Styles

Macros and inline styles can be used together:

```markdown
::large::@important{Critical Update}::

::comment::Updated on @date::

@warning{::small::Please read carefully::}
```

## Custom Macros

To add new macros, edit `plugins/text-macros-plugin.mjs`:

```javascript
const macros = {
  // Add your macro here
  'custom': (content) => `Your expansion ${content}`,
  'simple': () => 'Simple text replacement',
};
```

## Design Principles Alignment

The macros follow the color system from DESIGN_PRINCIPLES.md:
- `@important`, `@positive` → Orange (positive, important)
- `@negative`, `@warning` → Blue (negative, contrast)
- Default text → Primary color