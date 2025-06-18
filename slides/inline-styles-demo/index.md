---
marp: true
title: Inline Styles Demo
theme: myTheme
paginate: true
---

# Inline Styles Demo

## Easier styling with custom shortcuts

---

## Basic Inline Styles

### Traditional Approach (still works)
This is ==important text=={.red} with attributes.

### New Shortcut Approach
This is ::highlight::important text:: with shortcuts.

---

## Available Style Shortcuts

::large::Large Text Examples:::
- ::highlight::Highlighted important text::
- ::accent::Accent color for positive emphasis::
- ::blue::Blue color for contrast or warnings::

::small::Small Text Examples:::
- ::comment::This is a comment or note::
- ::secondary::Secondary information::
- ::dim::Less important, dimmed text::

---

## Practical Examples

### Meeting Notes
::large::Key Decisions::

1. ::highlight::Budget approved:: for Q1 2024
2. Timeline: ::accent::3 months:: (::comment::subject to review::)
3. ::blue::Risk: Resource constraints:: need addressing

::dim::Meeting duration: 45 minutes::

---

## Combining Styles

You can combine multiple styles:

- ::large::::bold::Large and Bold::::
- ::small::::secondary::Small secondary text::::
- ::accent::::bold::Bold accent text::::

Or mix with traditional markdown:
- **::accent::Bold and accented::** combines markdown bold with accent color
- *::blue::Italic and blue::* combines markdown italic with blue color

---

## Design Principles in Action

### ::accent::Positive/Important:: vs ::blue::Negative/Contrast::

::large::Performance Results::

- Revenue: ::accent::+15%:: ::comment::(exceeded target)::
- Costs: ::blue::-8%:: ::comment::(over budget)::
- Customer Satisfaction: ::accent::92%:: ::dim::(previous: 87%)::

::secondary::Data as of December 2023::

---

## Benefits

1. **Cleaner Syntax**
   - Before: `text{.text-secondary .text-sm}`
   - After: `::comment::text::`

2. **Semantic Names**
   - `::highlight::` instead of `.red.bold`
   - `::comment::` instead of `.text-sm.gray`

3. **Consistency**
   - Predefined combinations ensure design alignment
   - No more guessing which classes to combine

---

## Summary

The new inline style shortcuts make it easier to:

- ::highlight::Emphasize important content::
- ::comment::Add subtle annotations::
- ::accent::Highlight positive information::
- ::blue::Indicate contrasts or warnings::
- ::dim::De-emphasize less important details::

All while maintaining ::bold::clean, readable markdown::!