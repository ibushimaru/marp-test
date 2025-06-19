# CLAUDE.md - Marpプレゼンテーション作成プロジェクト

## プロジェクト概要

このプロジェクトは、**Marp（Markdown Presentation Ecosystem）を使用してプロフェッショナルなスライドを作成する**ことを目的としています。

### 主な目標
1. Markdownで簡単にプレゼンテーションを作成
2. 日本語を含む多言語対応
3. PDFおよびHTML形式での出力
4. カスタムテーマによる統一されたデザイン
5. 様々なスタイリングオプションの活用

## プロジェクト構成

```
marp-test/
├── .marprc.yml              # Marp設定ファイル
├── package.json             # Node.jsプロジェクト設定
├── engine.mjs               # Marpエンジンカスタマイズ
├── themes/                  # カスタムテーマ
│   ├── minimalTheme.css     # メインテーマ（情報デザイン重視）
│   └── fonts/               # カスタムフォント
│       ├── FORMUDPGothic-Bold.ttf
│       └── FORMUDPGothic-Regular.ttf
├── plugins/                 # Markdownプラグイン
│   ├── inline-styles-plugin.mjs  # インラインスタイル
│   └── text-macros-plugin.mjs    # テキストマクロ
├── slides/                  # スライドコンテンツ
│   ├── generative-ai-translation-minimal/  # AI翻訳プレゼン
│   ├── table-styling-demo/               # テーブルスタイルデモ
│   └── ...                              # その他のスライド
├── docs/                    # ドキュメント
│   ├── marp-table-styling-guide.md      # テーブルスタイルガイド
│   ├── INLINE_STYLES.md                 # インラインスタイル説明
│   └── ...
└── scripts/                 # ユーティリティスクリプト
    ├── new                  # 新規スライド作成
    └── check               # OGP画像チェック
```

## 基本的な使い方

### 1. 開発サーバーの起動
```bash
npm run dev
```
ブラウザで自動的にプレビューが開き、ファイル変更時に自動更新されます。

### 2. 新しいスライドの作成
```bash
npm run new my-presentation
# または
scripts/new my-presentation
```

### 3. PDF/HTML出力
```bash
# 単一ファイルの場合
marp slides/my-presentation/index.md --pdf
marp slides/my-presentation/index.md --html

# 全スライドのビルド
npm run build
```

## カスタムテーマ（minimalTheme）の特徴

### デザイン原則
- **情報デザインの原則**に基づいたミニマルなデザイン
- 装飾を最小限に抑え、コンテンツに焦点
- 読みやすさと理解しやすさを重視

### カラーシステム
- **オレンジ** (--color-accent-orange): 重要・ポジティブな情報
- **ブルー** (--color-accent-blue): 対比・ネガティブな情報
- グレースケールベースの落ち着いた配色

### 利用可能なクラス
```markdown
# インラインスタイル
**重要なテキスト**{.important}     # オレンジ色で強調
**対比テキスト**{.contrast}        # 青色で強調
**ハイライト**{.highlight}         # オレンジ色（importantと同じ）
**ネガティブ**{.negative}          # 青色（contrastと同じ）

# テーブルクラス
{.important}  # オレンジアクセントのテーブル
{.contrast}   # 青アクセントのテーブル

# セクションクラス
<!-- _class: title -->  # タイトルスライド（中央寄せ）
```

## PDFからPNG画像への変換方法

MarpのCLIツールには、PNG画像出力機能にバグがあるため、以下の手順でPDFからPNG画像を生成します。

### 前提条件
- `poppler-utils`パッケージのインストールが必要です
```bash
sudo apt-get update
sudo apt-get install poppler-utils
```

### 変換手順

1. **まずPDFを生成**
```bash
marp slides/your-presentation/index.md --pdf
```

2. **PDFからPNG画像を生成（通常解像度: 150 DPI）**
```bash
pdftoppm -png -r 150 slides/your-presentation/index.pdf slides/your-presentation/slide
```
これにより、`slide-01.png`, `slide-02.png`, ... というファイルが生成されます。

3. **高解像度版を生成する場合（300 DPI）**
```bash
pdftoppm -png -r 300 slides/your-presentation/index.pdf slides/your-presentation/slide-hires
```

### ファイル整理の推奨構成
```
slides/your-presentation/
├── index.md          # ソースファイル
├── index.pdf         # PDF出力
├── index.html        # HTML出力
└── png-output/       # PNG画像フォルダ
    ├── 150dpi/       # 通常解像度
    │   ├── slide-01.png
    │   ├── slide-02.png
    │   └── ...
    └── 300dpi/       # 高解像度
        ├── slide-hires-01.png
        ├── slide-hires-02.png
        └── ...
```

### 整理用コマンド例
```bash
# PNG出力フォルダの作成と整理
cd slides/your-presentation
mkdir -p png-output/150dpi png-output/300dpi
mv slide-[0-9]*.png png-output/150dpi/
mv slide-hires-*.png png-output/300dpi/
```

## 日本語フォントについて

- このプロジェクトでは`FORM UDPGothic`フォントを使用しています
- フォントファイルは`themes/fonts/`ディレクトリに配置されています
- システムへのフォントインストール手順：
```bash
mkdir -p ~/.fonts
cp themes/fonts/*.ttf ~/.fonts/
fc-cache -f -v
```

## テーブルスタイリング

詳細は`docs/marp-table-styling-guide.md`を参照してください。主な機能：

1. **基本的なテーブル**
   - 標準的なMarkdownテーブル
   - アライメント（左寄せ、中央、右寄せ）

2. **スタイルクラス**
   - `.important`: オレンジアクセント
   - `.contrast`: 青アクセント

3. **高度なスタイリング**
   - ストライプ（ゼブラパターン）
   - ホバーエフェクト
   - ボーダーレステーブル
   - レスポンシブテーブル

4. **代替レイアウト**
   - カードスタイル
   - 2カラム比較
   - 進捗インジケーター
   - 定義リスト

## プラグイン機能

### 1. インラインスタイルプラグイン
```markdown
**テキスト**{.class-name}
```
Markdownテキストに直接CSSクラスを適用できます。

### 2. テキストマクロプラグイン
```markdown
::note::メモ内容::
::comment::コメント内容::
```
特別な記法でスタイル付きテキストを挿入できます。

## トラブルシューティング

### 問題: 日本語が表示されない
1. フォントがシステムにインストールされているか確認
2. `fc-list | grep FORM`でフォントを確認
3. PDFビューアーの問題の可能性もあるため、別のビューアーで確認

### 問題: PNG出力が動作しない
- Marp CLIの`--image png`オプションにはバグがあります
- 上記のPDF経由でのPNG生成方法を使用してください

### 問題: スライドのスタイルが反映されない
1. `.marprc.yml`でテーマが正しく指定されているか確認
2. `npm run dev`で開発サーバーを再起動
3. ブラウザのキャッシュをクリア

## その他の注意事項

- Marp CLIの`--image png`オプションは現在正しく動作しません（PDF形式で出力されてしまいます）
- HTMLからのスクリーンショット取得は複雑なため、PDF経由でのPNG生成を推奨します
- OGP画像の自動生成機能があります（GitHub Pages用）
- PowerPoint形式への変換も可能です（`--pptx`オプション）

## 推奨ワークフロー

### スライド作成から出力までの流れ

1. **Markdown作成・編集**
   ```bash
   # 開発サーバーでプレビューしながら編集
   npm run dev
   ```

2. **プレビュー確認**
   - ブラウザでリアルタイムプレビュー
   - 表の見切れ、文字の配置を確認
   - 必要に応じてMarkdownを修正

3. **PDF生成**
   ```bash
   marp slides/your-presentation/index.md --pdf
   ```

4. **PNG生成（必要な場合）**
   ```bash
   # PDFから150 DPI PNG生成
   pdftoppm -png -r 150 slides/your-presentation/index.pdf slides/your-presentation/slide
   
   # 高解像度が必要な場合は300 DPI
   pdftoppm -png -r 300 slides/your-presentation/index.pdf slides/your-presentation/slide-hires
   ```

5. **最終確認**
   - 生成されたPDF/PNGを確認
   - 問題があればMarkdownに戻って修正

### Markdownでの注意点

1. **表の前後に十分な空行を入れる**
   ```markdown
   ## タイトル
   
   説明文
   
   | ヘッダー1 | ヘッダー2 |
   |-----------|-----------|
   | データ1   | データ2   |
   
   次の内容
   ```

2. **スライドのコンテンツ量を適切に**
   - 1スライドに詰め込みすぎない
   - 表が大きい場合は専用スライドに
   - 長い説明は複数スライドに分割

3. **見切れやすい要素の回避**
   - スライド最上部・最下部にコンテンツを配置しない
   - `::note::`などの注釈は余裕を持って配置
   - 大きな表は分割を検討

## 修正履歴

### 2024年12月19日 - レイアウト問題の修正

#### 発見された問題
1. **スライド6**: 表の直前に十分な余白がない
2. **スライド11**: 最下部のテキストがスライドの端に近すぎる
3. **スライド19, 20**: 表のサイズが大きすぎる（未修正）

#### 実施した修正
1. **スライド6の修正** ✓
   - 表の前後に`<br>`タグを追加して余白を確保
   - 行110と117に空行を挿入
   - 結果：表が正しく表示されるようになった

2. **スライド11の修正** ✓
   - 最下部のテキスト前に`<br>`タグを追加
   - 行216に空行を挿入
   - 結果：下部の文字切れが解消された

3. **スライド19の修正** ✓
   - カットオフ表の前後に`<br>`タグを追加
   - 行368と376に空行を挿入
   - 結果：表が適切に配置された

4. **スライド20の修正** ✓
   - 表の後に`<br>`タグを追加
   - 不要なコメントを削除してシンプル化
   - 結果：レイアウトが改善された

#### すべての問題が解決されました ✓

## スライド作成のベストプラクティス

### レイアウトのガイドライン
1. **表の配置**
   - 表の前後には必ず空行または`<br>`タグを入れる
   - 大きな表は分割または専用スライドに

2. **テキストの配置**
   - スライド最上部・最下部から1行分は空ける
   - 重要なコンテンツは中央寄りに配置

3. **コンテンツ量の調整**
   - 1スライドに10行以上のコンテンツは避ける
   - 表を含む場合は他のコンテンツを最小限に

## 今回の作業で学んだこと（2024年12月19日）

### 1. Marpのワークフロー最適化
- **問題の根本原因**：PNG画像の問題は、実はMarkdownソースの問題
- **解決アプローチ**：画像を修正するのではなく、ソースを修正する
- **確認フロー**：編集 → プレビュー → PDF → PNG の順で確認

### 2. レイアウトの改善テクニック
- `<br>`タグの活用：Markdownの空行だけでは不十分な場合に有効
- 表の前後の余白：視覚的な区切りを明確にする
- コメントの削除：不要な開発メモは本番では削除

### 3. ドキュメント管理の重要性
- **修正履歴の記録**：何を修正したか、結果どうなったかを記録
- **ベストプラクティスの文書化**：同じ問題を繰り返さないために
- **プロジェクト全体像の明確化**：新規参加者でも理解できるように

### 4. PDFからPNG変換の実用性
- `pdftoppm`コマンドの活用
- 解像度の選択（150 DPI vs 300 DPI）
- ファイル整理の自動化

### 5. 継続的改善のサイクル
1. 問題の発見（PNG画像の確認）
2. 原因の特定（Markdownソースの問題）
3. 解決策の実施（`<br>`タグの追加）
4. 結果の確認（修正版PNG生成）
5. 知識の文書化（CLAUDE.mdへの記録）