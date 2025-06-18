---
marp: true
title: Marpの使い方デモ
theme: myTheme
paginate: true
image: https://username.github.io/repo/example-slide/index.png
---

# Marpテンプレートの使い方

## 便利な拡張構文でスライド作成を効率化

---

## 基本的な使い方

### 1. テキストサイズの調整

通常のテキスト

大きいテキスト{.text-lg}

小さいテキスト{.text-sm}

とても小さいテキスト{.text-xs}

---

## 2. 色の変更

文の中の==特定の単語=={.red}だけ赤色にできます

==青い文字=={.blue}や==緑の文字=={.green}も簡単！

全体を色付けすることも可能{.blue}

---

## 3. カラムレイアウト

:::col
### 左側のコンテンツ
- リスト項目1
- リスト項目2
- リスト項目3

### 右側のコンテンツ
画像やグラフなどを配置できます
:::

---

## 4. コードブロックの表現

```typescript {data-name=app.ts}
// ファイル名が表示されます！
interface User {
  id: number;
  name: string;
  email: string;
}

const greetUser = (user: User): string => {
  return `Hello, ${user.name}!`;
};
```

---

## 5. グループスタイリング

:::_ {.blue .text-sm}
この中のテキストは全て

- 青色で
- 小さいサイズになります
- リストも含めて！
:::

---

## 6. 複雑なレイアウト

::::col
:::_ {.text-sm}
### 左カラム
小さいテキストで
複数行の説明を
書くことができます
:::

:::_
### 右カラム
==重要なポイント=={.red}を
強調しながら説明
:::
::::

---

## 開発のワークフロー

1. `npm run dev` で開発サーバー起動
2. ブラウザで `http://localhost:8080` を開く
3. Markdownを編集すると自動でリロード
4. `npm run build` で本番用にビルド

---

# まとめ

- **拡張構文**で効率的にスライド作成
- **ユーティリティクラス**で簡単スタイリング
- **リアルタイムプレビュー**で即座に確認
- **GitHub Pages**で簡単共有

質問はありますか？