# Marp Table Styling Guide

This guide covers all available table styling options in Marp presentations, including built-in CSS classes, custom styling techniques, and alternative ways to present tabular data.

## Table of Contents
1. [Built-in Table Styles from minimalTheme.css](#built-in-table-styles)
2. [Basic Table Styling](#basic-table-styling)
3. [Advanced Table Features](#advanced-table-features)
4. [Alternative Table Presentations](#alternative-table-presentations)
5. [Best Practices](#best-practices)

## Built-in Table Styles from minimalTheme.css

The minimalTheme.css includes several pre-defined table styles:

### Basic Table Styling
```css
table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--space-md) 0;
  font-size: 20px;
}

th {
  background-color: var(--color-surface);
  font-weight: 600;
  text-align: left;
  padding: var(--space-sm);
  border-bottom: 2px solid var(--color-border);
}

td {
  padding: var(--space-sm);
  border-bottom: 1px solid var(--color-border);
}
```

### Special Table Classes

1. **Important Tables** (Orange accent)
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Data 1   | Data 2   |
{.important}
```

2. **Contrast Tables** (Blue accent)
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Data 1   | Data 2   |
{.contrast}
```

## Basic Table Styling

### Standard Markdown Table
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|:--------:|---------:|
| Left     | Center   | Right    |
| Data     | Data     | Data     |
```

### Inline Styling with Classes
```markdown
| **Bold Header**{.important} | Normal Header |
|----------------------------|---------------|
| **Important data**{.important} | Regular data |
| Normal cell | **Highlighted**{.highlight} |
```

## Advanced Table Features

### 1. Striped Rows (Zebra Pattern)
```markdown
<style scoped>
table tr:nth-child(even) {
  background-color: #f8f9fa;
}
table tr:nth-child(odd) {
  background-color: #ffffff;
}
</style>

| Product | Price | Stock |
|---------|-------|-------|
| Item A  | $100  | 50    |
| Item B  | $200  | 30    |
| Item C  | $150  | 45    |
```

### 2. Hover Effects
```markdown
<style scoped>
table tr:hover {
  background-color: #e7f1ff;
  transition: background-color 0.2s ease;
}
table tr:hover td {
  color: var(--color-accent-orange);
}
</style>
```

### 3. Compact Tables
```markdown
<style scoped>
table {
  font-size: 16px;
}
th, td {
  padding: 8px;
}
</style>
```

### 4. Borderless Tables
```markdown
<style scoped>
table {
  border: none;
}
th {
  border-bottom: 2px solid var(--color-accent-orange);
}
td {
  border: none;
}
</style>
```

### 5. Responsive Tables with Scroll
```markdown
<style scoped>
.table-wrapper {
  overflow-x: auto;
  margin: 20px 0;
}
table {
  min-width: 600px;
}
</style>

<div class="table-wrapper">

| Very Long Header 1 | Very Long Header 2 | Very Long Header 3 | Very Long Header 4 |
|--------------------|--------------------|--------------------|-------------------|
| Data               | Data               | Data               | Data              |

</div>
```

## Alternative Table Presentations

### 1. Two-Column Comparison
```markdown
<div class="columns">
<div>

### Option A
- Feature 1
- Feature 2
- Feature 3

</div>
<div>

### Option B
- Feature 1
- Feature 2
- Feature 3

</div>
</div>
```

### 2. Card-Style Data Presentation
```markdown
<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.card {
  background: var(--color-surface);
  padding: 20px;
  border-left: 4px solid var(--color-accent-orange);
}
</style>

<div class="cards">
<div class="card">

**Product A**
- Price: $100
- Stock: 50

</div>
<div class="card">

**Product B**
- Price: $200
- Stock: 30

</div>
<div class="card">

**Product C**
- Price: $150
- Stock: 45

</div>
</div>
```

### 3. Highlighted Sections for Data
```markdown
<div class="important-section">

**Key Metrics**
- Revenue: $1.2M
- Growth: +25%
- Users: 10,000

</div>

<div class="contrast-section">

**Comparison**
- Last Year: $960K
- Difference: +$240K
- Change: +25%

</div>
```

### 4. Definition Lists Style
```markdown
<style scoped>
dl {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  margin: 20px 0;
}
dt {
  font-weight: 600;
  color: var(--color-accent-orange);
}
dd {
  margin: 0;
  padding-left: 20px;
}
</style>

<dl>
<dt>Feature A</dt>
<dd>Description of feature A with details</dd>
<dt>Feature B</dt>
<dd>Description of feature B with details</dd>
<dt>Feature C</dt>
<dd>Description of feature C with details</dd>
</dl>
```

## Best Practices

### 1. Keep Tables Simple
- Limit to 3-4 columns for readability
- Use clear, concise headers
- Avoid excessive styling

### 2. Use Semantic Classes
```markdown
| **Revenue**{.important} | **Costs**{.negative} | **Profit**{.highlight} |
|------------------------|---------------------|----------------------|
| $100,000              | $60,000             | $40,000              |
```

### 3. Consider Mobile/Small Screens
- Test with different viewport sizes
- Use scrollable containers for wide tables
- Consider alternative presentations for complex data

### 4. Accessibility
- Always include table headers
- Use semantic HTML when possible
- Ensure sufficient color contrast

### 5. Performance
- Avoid overly complex CSS animations
- Use scoped styles to limit impact
- Keep table data reasonable in size

## Examples in Use

### Financial Report Table
```markdown
<style scoped>
table.financial th {
  background-color: #2C3E50;
  color: white;
}
table.financial tr:last-child {
  font-weight: bold;
  border-top: 2px solid #2C3E50;
}
</style>

| Quarter | Revenue | Expenses | **Profit**{.important} |
|---------|--------:|---------:|----------------------:|
| Q1      | $250K   | $180K    | $70K                  |
| Q2      | $300K   | $200K    | $100K                 |
| Q3      | $280K   | $190K    | $90K                  |
| Q4      | $320K   | $210K    | $110K                 |
| **Total** | **$1.15M** | **$780K** | **$370K**{.important} |
{.financial}
```

### Feature Comparison Table
```markdown
| Feature | **Basic**{.contrast} | **Pro**{.important} | **Enterprise** |
|---------|---------------------|-------------------|----------------|
| Users   | 5                   | 50                | Unlimited      |
| Storage | 10GB                | 100GB             | 1TB            |
| Support | Email               | Priority          | Dedicated      |
| Price   | $10/mo              | **$50/mo**{.important} | Custom    |
```

This guide provides comprehensive options for styling tables in Marp presentations, from basic formatting to advanced layouts and alternative presentations. Choose the approach that best fits your content and audience needs.