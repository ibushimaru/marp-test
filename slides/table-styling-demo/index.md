---
marp: true
title: Marp Table Styling Demo
description: Comprehensive demonstration of all table styling options in Marp
theme: minimalTheme
paginate: true
---

<!-- _class: title -->

# Marp Table Styling Demo

Comprehensive demonstration of all table styling options

A complete guide to creating beautiful tables in Marp presentations

---

## Basic Markdown Tables

### Standard Table with Alignment

| Left Aligned | Center Aligned | Right Aligned |
|--------------|:--------------:|--------------:|
| Data 1       | Data 2         | $100.00       |
| Data 3       | Data 4         | $200.00       |
| Data 5       | Data 6         | $300.00       |

**Alignment Options:**
- Left: Default alignment
- Center: `:----:`
- Right: `----:`

---

## Built-in Theme Classes

### Important Table (Orange Accent)

| Feature | Standard | **Premium**{.important} |
|---------|----------|------------------------|
| Users   | 10       | **Unlimited**{.important} |
| Storage | 100GB    | **1TB**{.important}    |
| Support | Email    | **24/7 Phone**{.important} |
{.important}

### Contrast Table (Blue Accent)

| Metric | Last Year | This Year |
|--------|-----------|-----------|
| Revenue | $500K    | $750K     |
| Growth  | 15%      | 50%       |
{.contrast}

---

## Inline Styling in Tables

### Highlighting Specific Cells

| Product | Status | Priority | Action |
|---------|--------|----------|--------|
| Product A | **Active**{.highlight} | High | Review |
| Product B | **Pending**{.negative} | **Critical**{.important} | **Urgent**{.contrast} |
| Product C | Inactive | Low | Archive |

### Mixed Styling

| Category | **Good**{.highlight} | **Warning**{.important} | **Bad**{.negative} |
|----------|---------------------|------------------------|-------------------|
| Performance | 95% | 80% | 60% |
| Availability | **99.9%**{.highlight} | **95%**{.important} | **90%**{.negative} |

---

## Striped Tables (Zebra Pattern)

<style scoped>
table tr:nth-child(even) {
  background-color: #f8f9fa;
}
table tr:nth-child(odd) {
  background-color: #ffffff;
}
</style>

| ID | Product Name | Category | Price | Stock |
|----|--------------|----------|-------|-------|
| 001 | Laptop Pro | Electronics | $1,299 | 45 |
| 002 | Wireless Mouse | Accessories | $49 | 120 |
| 003 | USB-C Hub | Accessories | $79 | 85 |
| 004 | Monitor 4K | Electronics | $599 | 32 |
| 005 | Keyboard Mechanical | Accessories | $129 | 67 |

---

## Hover Effects

<style scoped>
table tr:hover {
  background-color: #e7f1ff;
  transition: background-color 0.2s ease;
}
table tr:hover td {
  color: var(--color-accent-orange);
}
</style>

| Task | Assignee | Status | Due Date |
|------|----------|--------|----------|
| Design mockups | Alice | In Progress | Dec 15 |
| Backend API | Bob | Completed | Dec 10 |
| Testing | Charlie | Pending | Dec 20 |
| Documentation | David | In Progress | Dec 18 |

*Hover over rows to see the effect*

---

## Compact Tables

<style scoped>
table {
  font-size: 16px;
}
th, td {
  padding: 6px 10px;
}
</style>

| Country | Capital | Population | Area (km²) | Language |
|---------|---------|------------|------------|----------|
| Japan | Tokyo | 125.8M | 377,975 | Japanese |
| Germany | Berlin | 83.2M | 357,022 | German |
| France | Paris | 67.4M | 643,801 | French |
| Italy | Rome | 60.3M | 301,340 | Italian |
| Spain | Madrid | 47.4M | 505,990 | Spanish |
| UK | London | 67.5M | 242,495 | English |

---

## Borderless Tables

<style scoped>
table {
  border: none;
}
th {
  border-bottom: 3px solid var(--color-accent-orange);
  padding: 12px;
}
td {
  border: none;
  padding: 12px;
}
tr:hover {
  background-color: rgba(255, 102, 26, 0.1);
}
</style>

| Service | Basic | Pro | Enterprise |
|---------|-------|-----|------------|
| Cloud Storage | 10GB | 100GB | Unlimited |
| API Calls | 1,000/day | 10,000/day | Unlimited |
| Support | Community | Email | Dedicated |
| Price | Free | $29/mo | Custom |

---

## Responsive Tables with Scroll

<style scoped>
.table-wrapper {
  overflow-x: auto;
  margin: 20px 0;
  border: 1px solid var(--color-border);
  border-radius: 8px;
}
table {
  min-width: 800px;
  margin: 0;
}
</style>

<div class="table-wrapper">

| Department | Q1 Budget | Q1 Actual | Q2 Budget | Q2 Actual | Q3 Budget | Q3 Actual | Q4 Budget | Q4 Actual |
|------------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
| Marketing | $50,000 | $48,500 | $60,000 | $59,200 | $55,000 | $54,800 | $70,000 | $68,900 |
| Engineering | $200,000 | $195,000 | $220,000 | $218,500 | $210,000 | $209,000 | $250,000 | $248,000 |
| Sales | $80,000 | $82,000 | $90,000 | $92,500 | $85,000 | $87,000 | $100,000 | $103,000 |

</div>

---

## Financial Report Table

<style scoped>
table.financial th {
  background-color: #2C3E50;
  color: white;
  text-align: center;
}
table.financial td:not(:first-child) {
  text-align: right;
}
table.financial tr:last-child {
  font-weight: bold;
  border-top: 3px double #2C3E50;
  background-color: #ecf0f1;
}
</style>

| Quarter | Revenue | Expenses | **Profit**{.important} |
|---------|--------:|---------:|----------------------:|
| Q1 2024 | $250,000 | $180,000 | $70,000 |
| Q2 2024 | $300,000 | $200,000 | $100,000 |
| Q3 2024 | $280,000 | $190,000 | $90,000 |
| Q4 2024 | $320,000 | $210,000 | $110,000 |
| **Total** | **$1,150,000** | **$780,000** | **$370,000**{.important} |
{.financial}

---

## Alternative: Two-Column Comparison

<div class="columns">
<div>

### Traditional Approach
- Manual processes
- Paper-based records
- Limited scalability
- Higher error rates
- Time-consuming
- Difficult to audit

</div>
<div>

### Modern Solution
- **Automated workflows**{.important}
- **Digital records**{.important}
- **Unlimited scale**{.important}
- **99.9% accuracy**{.highlight}
- **Real-time processing**{.highlight}
- **Full audit trail**{.highlight}

</div>
</div>

---

## Alternative: Card-Style Data

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
}
.card {
  background: var(--color-surface);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent-orange);
}
.card h4 {
  margin: 0 0 15px 0;
  color: var(--color-accent-orange);
}
.card ul {
  margin: 0;
  padding-left: 20px;
}
</style>

<div class="cards">
<div class="card">

#### Starter Plan
- 5 Users
- 10GB Storage
- Email Support
- **$10/month**{.important}

</div>
<div class="card">

#### Professional
- 50 Users
- 100GB Storage
- Priority Support
- **$50/month**{.important}

</div>
<div class="card">

#### Enterprise
- Unlimited Users
- 1TB Storage
- Dedicated Support
- **Custom Pricing**{.important}

</div>
</div>

---

## Alternative: Progress Indicators

<style scoped>
.progress-table {
  width: 100%;
  margin: 20px 0;
}
.progress-bar {
  background: #e0e0e0;
  border-radius: 10px;
  height: 20px;
  overflow: hidden;
  position: relative;
}
.progress-fill {
  background: var(--color-accent-orange);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  color: white;
  font-size: 14px;
  font-weight: bold;
}
</style>

<div class="progress-table">

**Project Milestones**

| Milestone | Progress | Status |
|-----------|----------|--------|
| Planning | <div class="progress-bar"><div class="progress-fill" style="width: 100%">100%</div></div> | **Complete**{.highlight} |
| Design | <div class="progress-bar"><div class="progress-fill" style="width: 85%">85%</div></div> | In Progress |
| Development | <div class="progress-bar"><div class="progress-fill" style="width: 60%">60%</div></div> | In Progress |
| Testing | <div class="progress-bar"><div class="progress-fill" style="width: 20%">20%</div></div> | **Pending**{.negative} |

</div>

---

## Alternative: Definition Lists

<style scoped>
dl {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 15px;
  margin: 30px 0;
  background: var(--color-surface);
  padding: 30px;
  border-radius: 8px;
}
dt {
  font-weight: 600;
  color: var(--color-accent-orange);
  border-right: 2px solid var(--color-border);
  padding-right: 15px;
  text-align: right;
}
dd {
  margin: 0;
  padding-left: 15px;
}
</style>

<dl>
<dt>Performance</dt>
<dd>Optimized for speed with 99.9% uptime guarantee and sub-second response times</dd>
<dt>Security</dt>
<dd>Enterprise-grade encryption, SOC 2 certified, and regular security audits</dd>
<dt>Scalability</dt>
<dd>Auto-scaling infrastructure that grows with your business needs</dd>
<dt>Integration</dt>
<dd>REST API, webhooks, and native integrations with 100+ popular tools</dd>
</dl>

---

## Complex Data: Skills Matrix

<style scoped>
table.skills th:first-child {
  background: #34495e;
  color: white;
  position: sticky;
  left: 0;
}
.expert { background: #27ae60; color: white; }
.proficient { background: #3498db; color: white; }
.intermediate { background: #f39c12; color: white; }
.beginner { background: #95a5a6; color: white; }
td.skill-level {
  text-align: center;
  font-weight: bold;
}
</style>

| Team Member | JavaScript | Python | React | Node.js | DevOps |
|-------------|------------|--------|-------|---------|--------|
| Alice Chen | <span class="expert skill-level">Expert</span> | <span class="proficient skill-level">Proficient</span> | <span class="expert skill-level">Expert</span> | <span class="proficient skill-level">Proficient</span> | <span class="intermediate skill-level">Intermediate</span> |
| Bob Smith | <span class="proficient skill-level">Proficient</span> | <span class="expert skill-level">Expert</span> | <span class="intermediate skill-level">Intermediate</span> | <span class="proficient skill-level">Proficient</span> | <span class="expert skill-level">Expert</span> |
| Carol Davis | <span class="intermediate skill-level">Intermediate</span> | <span class="proficient skill-level">Proficient</span> | <span class="proficient skill-level">Proficient</span> | <span class="intermediate skill-level">Intermediate</span> | <span class="beginner skill-level">Beginner</span> |
{.skills}

---

## Interactive-Style Tables

<style scoped>
.feature-table td:last-child {
  text-align: center;
}
.check { color: #27ae60; font-size: 24px; }
.cross { color: #e74c3c; font-size: 24px; }
.feature-table tr:hover {
  transform: translateX(5px);
  transition: transform 0.2s;
  background: linear-gradient(to right, transparent, rgba(255, 102, 26, 0.1));
}
</style>

| Feature | Description | Free | Pro | Enterprise |
|---------|-------------|:----:|:---:|:----------:|
| Basic Analytics | Track page views and users | <span class="check">✓</span> | <span class="check">✓</span> | <span class="check">✓</span> |
| Advanced Reports | Custom dashboards and exports | <span class="cross">✗</span> | <span class="check">✓</span> | <span class="check">✓</span> |
| API Access | Programmatic data access | <span class="cross">✗</span> | <span class="check">✓</span> | <span class="check">✓</span> |
| White Label | Custom branding | <span class="cross">✗</span> | <span class="cross">✗</span> | <span class="check">✓</span> |
| Priority Support | 24/7 dedicated support | <span class="cross">✗</span> | <span class="cross">✗</span> | <span class="check">✓</span> |
{.feature-table}

---

## Best Practices Summary

### Do's ✓
- Keep tables simple (3-4 columns max)
- Use semantic class names
- Test readability at different sizes
- Include clear headers
- Consider mobile viewers

### Don'ts ✗
- Avoid excessive styling
- Don't use too many colors
- Avoid tiny fonts
- Don't forget accessibility
- Never skip table headers

---

<!-- _class: title -->

# Thank You!

## Questions?

This demo covered all major table styling options in Marp

**Resources:**
- [Marp Documentation](https://marpit.marp.app/)
- [Theme CSS Reference](/themes/minimalTheme.css)
- [Table Styling Guide](/docs/marp-table-styling-guide.md)