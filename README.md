# Minimal Marp Template for Professional Presentations

Marpを使用したシンプルで洗練されたプレゼンテーションテンプレートです。情報デザインの原則に基づき、アイコンを排除しタイポグラフィとレイアウトで表現力を高めています。

## 特徴

- 🎨 情報デザイン原則に基づいたミニマルテーマ
- 📝 BIZ UDPゴシックフォント対応
- 🎯 オレンジ（重要・ポジティブ）と青（対比・ネガティブ）の配色
- 💡 コメント・注釈用の簡単な記法
- 📤 PPTX形式へのエクスポート対応

## インストール

```bash
npm install
```

## 使い方

### 開発サーバーの起動

```bash
npm run dev
```

### ビルド

```bash
npm run build
```

### PPTX形式でエクスポート

```bash
# 標準のPPTX（画像ベース）
npx marp slides/your-slide/index.md --pptx

# 編集可能なPPTX（実験的機能）
npx marp slides/your-slide/index.md --pptx-editable
```

## コメント・注釈の記法

### 1. クラス記法（推奨）

```markdown
これはコメントです{.comment}
これは小さい文字です{.small}
これは灰色の文字です{.gray}
```

### 2. インラインスタイル

```html
<span style="color: #7F8C8D; font-size: 20px;">これはコメントです</span>
```

## テーマのカスタマイズ

`themes/minimalTheme.css` を編集することで、色やフォントなどをカスタマイズできます。

### 主要な色変数

```css
--color-accent-orange: #FF6B35;  /* メインカラー：オレンジ */
--color-accent-blue: #3498DB;    /* アクセントカラー：青 */
```

## プロジェクト構造

```
.
├── slides/                      # スライドディレクトリ
│   └── generative-ai-translation-minimal/  # サンプルスライド
├── themes/                      # テーマファイル
│   └── minimalTheme.css        # ミニマルテーマ
├── scripts/                     # ユーティリティスクリプト
├── engine.mjs                   # Marpエンジン設定
└── .marprc.yml                 # Marp設定ファイル
```

## ライセンス

MIT