---
marp: true
title: My Awesome Presentation
description: An awesome presentation using Marp
theme: myTheme
paginate: true
image: https://username.github.io/repo/{{PATH}}/index.png
---

# My Awesome Presentation

## Subtitle goes here

---

## Agenda

1. Introduction
2. Main Content
3. Conclusion

---

## Text Size Examples

Regular text

Larger text{.text-lg}

Smaller text{.text-sm}

---

## Color Examples

This text is ==red=={.red}

This text is ==blue=={.blue}

This text is ==green=={.green}

---

## Column Layout

:::col
### Left Column
This content is on the left

### Right Column  
This content is on the right
:::

---

## Code Example

```tsx {data-name=component.tsx}
interface Props {
  value: string;
  onSubmit: (v: string) => void;
}

export const Component: FC<Props> = ({ value, onSubmit }) => (
  <button type="button" onClick={() => onSubmit(value)}>
    {value}
  </button>
);
```

---

## Grouped Styling

:::_ {.blue .text-sm}
All this text is blue and small

Including this line

And this one too
:::

---

# Thank You!

Questions?