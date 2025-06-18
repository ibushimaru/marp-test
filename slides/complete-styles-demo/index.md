---
marp: true
title: Complete Inline Styles Demo
theme: myTheme
paginate: true
---

# Complete Inline Styles Demo

## All styling options in one place

@date

---

## @agenda

1. Traditional Marp Styling
2. New Inline Style Shortcuts (`::style::`)
3. Text Macros (`@macro`)
4. Combining All Methods
5. Real-World Examples

---

## 1. Traditional Marp Styling

### Using markdown-it-attrs

Plain text becomes ==highlighted=={.red}

Multiple classes: text{.blue .text-sm}

Bold emphasis: **important text**{.green}

### Container syntax
:::_ {.text-sm .blue}
This entire block is styled
with small blue text
:::

---

## 2. New Inline Style Shortcuts

### Basic Styles
- ::comment::This is a comment::
- ::highlight::This is highlighted::
- ::accent::Positive emphasis::
- ::blue::Negative contrast::

### Size Variations
- ::small::Small text for details::
- Normal text for comparison
- ::large::Large text for emphasis::

### Combined Effects
- ::bold::Bold text::
- ::dim::Dimmed text::
- ::secondary::Secondary information::

---

## 3. Text Macros

### Style Macros
- @important{Critical information}
- @negative{Problem or issue}
- @positive{Good news}
- @warning{Be careful}

### Status Indicators
- @todo{Implement feature}
- @done{Task completed}
- @pending{Under review}

### Auto-generated
- Today: @date
- Year: @year
- Standard closing: @thanks

---

## 4. Combining All Methods

### Mixed Syntax Example

::large::Project Status for @year::

**Traditional:** ==Phase 1=={.green} is complete

**Shortcuts:** ::highlight::Phase 2:: in progress

**Macros:** @important{Phase 3 starts next month}

**Combined:** ::small::@warning{Budget review pending}::

---

## 5. Real-World Example: Meeting Notes

# ::large::Q1 Planning Meeting::

::secondary::Date: @date::

## Key Decisions

1. @important{Budget increase approved}
   - Amount: ::accent::¥5,000,000::
   - ::comment::Subject to board review::

2. Timeline adjustments
   - @negative{2-week delay expected}
   - ::blue::Risk mitigation required::

## Action Items
@todo{Submit revised timeline}
@todo{Update stakeholders}
@done{Budget proposal}

---

## Comparison Table

| Method | Syntax | Best For |
|--------|--------|----------|
| **Traditional** | `{.class}` | Single attributes |
| **Inline Styles** | `::style::` | Semantic styling |
| **Macros** | `@macro` | Repeated patterns |

### When to use each:

- **Traditional**: When you need specific CSS classes
- **Inline Styles**: For semantic, readable styling
- **Macros**: For common phrases and patterns

---

## Performance Comparison

### Task: Style important text

#### Traditional (27 chars)
```markdown
**important**{.red .bold}
```

#### Inline Style (24 chars)
```markdown
::highlight::important::
```

#### Macro (19 chars)
```markdown
@important{important}
```

::comment::Macros are fastest for common patterns::

---

## Advanced Combinations

### Nested Styling
::large::::bold::Large Bold Title::::

### Macro in Shortcut
::comment::Last updated: @date::

### Multiple Attributes
**::accent::Bold and accented::**{.text-lg}

### Container with Shortcuts
:::col
::highlight::Left Column::
- @done{Task 1}
- @pending{Task 2}

::highlight::Right Column::
- ::small::Details here::
- ::dim::Less important::
:::

---

## Best Practices

### ✅ DO

- Use ::comment:: for annotations
- Use @important{} for key points  
- Use ::accent:: for positive emphasis
- Use ::blue:: for warnings/contrasts

### ❌ DON'T

- Mix too many styles
- Use color for decoration only
- Override design principles
- Create unclear hierarchies

---

## @summary

We now have **three powerful ways** to style content:

1. **Traditional**: `{.class}` - Full control
2. **Shortcuts**: `::style::` - Semantic & clean  
3. **Macros**: `@macro` - Fast & consistent

All methods:
- Work together seamlessly
- Follow design principles
- Improve writing speed
- Enhance readability

---

# @thanks

## @questions

::secondary::Complete documentation available in:::
- `/docs/INLINE_STYLES.md`
- `/docs/TEXT_MACROS.md`

::dim::@nextslide for technical details::