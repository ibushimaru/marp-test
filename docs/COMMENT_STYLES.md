# コメント・注釈スタイルの使い方

## 3つの簡単な記法

### 1. ダブルコロン記法 `::style::テキスト::`
```markdown
::comment::これはコメントです::
::note::これは注釈です::
::small::これは小さい文字です::
```

### 2. マクロ記法 `@macro{テキスト}`
```markdown
@comment{これはコメントです}
@note{これは注釈です}
@important{これは重要です}
```

### 3. クラス記法（既存）
```markdown
これは重要です{.important}
これは否定的です{.negative}
```

## 利用可能なスタイル

### コメント・注釈系
- `::comment::` / `@comment{}` - 灰色の小さいコメント（編集メモ用）
- `::note::` / `@note{}` - イタリック体の注釈
- `::small::` - 小さい文字

### 強調系
- `::highlight::` / `@important{}` - オレンジ色で強調
- `::accent::` - 青色でアクセント
- `::critical::` / `@warning{}` - 赤色で警告

### 実用例

```markdown
## スライドのタイトル
::comment::※後で修正する::

### 重要なポイント
- 通常のテキスト
- @important{これは重要です}
- 補足説明 ::note::（省略可能）::

プレゼンの日付：@date
```

## 従来のインラインスタイル（互換性のため）
```html
<span style="color: #7F8C8D; font-size: 20px;">これも使えます</span>
```