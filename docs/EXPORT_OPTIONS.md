# Marpスライドのエクスポートオプション

## 生成されたファイルの比較

| 方法 | ファイルサイズ | 編集可能性 | 品質 | 備考 |
|------|--------------|-----------|------|------|
| 通常のPPTX | 3.6MB | × | 高（画像） | 各スライドが画像として埋め込まれる |
| 編集可能PPTX | 87KB | ◯ | 中 | LibreOffice経由、レイアウトが崩れる可能性 |
| Python-pptx | 55KB | ◯ | 低〜中 | カスタムスクリプト、シンプルな変換 |

## 1. 通常のPPTXエクスポート
```bash
npx marp slides/generative-ai-translation-minimal/index.md --pptx -o presentation.pptx
```
- **メリット**: 見た目が完全に保持される
- **デメリット**: 編集不可、ファイルサイズが大きい

## 2. 編集可能なPPTXエクスポート（実験的機能）
```bash
# LibreOfficeのインストールが必要
sudo apt-get install libreoffice

# 編集可能なPPTXを生成
npx marp slides/generative-ai-translation-minimal/index.md --pptx --pptx-editable -o presentation-editable.pptx
```
- **メリット**: PowerPointで編集可能
- **デメリット**: レイアウトが崩れる可能性、実験的機能

## 3. Python-pptxを使ったカスタム変換
```bash
# python-pptxのインストール
pip install python-pptx

# スクリプトの実行
python3 scripts/markdown-to-pptx.py
```
- **メリット**: 完全にカスタマイズ可能、軽量
- **デメリット**: デザインがシンプル、開発が必要

## 4. Googleスライドへの変換

### 方法1: PDFまたはPPTX経由
1. MarpでPDFまたはPPTXに変換
2. GoogleドライブにアップロードB
3. 「アプリで開く」→「Googleスライド」を選択
4. 画像として取り込まれるため、テキストの編集は制限される

### 方法2: Google Apps Script（GAS）を使用
```javascript
// Google Apps Scriptでカスタム変換ツールを作成
function createSlidesFromMarkdown(markdownText) {
  const presentation = SlidesApp.create('Generated Presentation');
  // Markdownを解析してスライドを生成
  // （実装が必要）
  return presentation.getUrl();
}
```

### 方法3: HTMLエクスポート + コピー&ペースト
1. MarpでHTMLに変換
2. ブラウザで開く
3. 各スライドの内容を手動でGoogleスライドにコピー

## 推奨される使用方法

### デザインを重視する場合
- 通常のPPTXエクスポート（画像形式）
- プレゼンテーション時のみの使用

### 編集可能性を重視する場合
1. **簡単な編集**: LibreOffice経由の編集可能PPTX
2. **高度なカスタマイズ**: Python-pptxスクリプト
3. **共同編集**: Googleスライドへの手動変換

### ワークフロー例
```bash
# 1. Marpでプレビュー・調整
npm run dev

# 2. 用途に応じてエクスポート
# プレゼン用
npx marp slides/index.md --pptx

# 編集用
npx marp slides/index.md --pptx --pptx-editable

# カスタム変換
python3 scripts/markdown-to-pptx.py

# 3. 必要に応じて後処理
# PowerPointのデザイナー機能で調整
# Googleスライドで共同編集
```

## 注意事項

1. **フォントの埋め込み**: システムフォントに依存しないよう注意
2. **画像パス**: 相対パスを使用し、画像が正しくエクスポートされることを確認
3. **アニメーション**: Marpのトランジション機能はPPTXでは再現されない
4. **カスタムCSS**: 編集可能PPTXではCSSスタイルが失われる可能性

## 今後の改善案

1. **テンプレートの作成**: PowerPointテンプレートを事前に用意
2. **自動化スクリプト**: 複数の形式に一括エクスポート
3. **品質チェック**: エクスポート後の自動検証
4. **バージョン管理**: Gitでマークダウンソースを管理