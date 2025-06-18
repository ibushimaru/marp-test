# BIZ UDPゴシックフォントの設定

## 概要
BIZ UDPゴシック（帳票 UDPゴシック）は、ビジネス文書に適した高い可読性を持つ日本語フォントです。
- GitHubリポジトリ: https://github.com/jz5/FORM-UDPGothic
- ライセンス: SIL Open Font License

## インストール済みフォント

### システムフォント
```bash
# インストール場所
/usr/share/fonts/truetype/bizudpgothic/
  - FORMUDPGothic-Regular.ttf
  - FORMUDPGothic-Bold.ttf

# フォント名
- 英語名: FORM UDPGothic
- 日本語名: 帳票 UDPゴシック
```

### 確認方法
```bash
# インストール済みフォントの確認
fc-list | grep -i udp

# フォントキャッシュの更新
fc-cache -fv
```

## Marpテーマでの使用

### minimalTheme.css での設定
```css
/* フォントファミリーの指定 */
font-family: 'FORM UDPGothic', '帳票 UDPゴシック', 'BIZ UDPGothic', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans JP', sans-serif;
```

### 適用される優先順位
1. `FORM UDPGothic` - 英語フォント名
2. `帳票 UDPゴシック` - 日本語フォント名
3. `BIZ UDPGothic` - 別名
4. システムデフォルトフォント

## 各形式での反映

### 1. PDF出力
```bash
npx marp slides/index.md --pdf -o output.pdf
```
- システムフォントとして自動的に適用
- 日本語の可読性が向上

### 2. PPTX出力
```bash
# 通常のPPTX（画像として埋め込み）
npx marp slides/index.md --pptx -o output.pptx

# 編集可能なPPTX（LibreOffice経由）
npx marp slides/index.md --pptx --pptx-editable -o output-editable.pptx
```
- 通常のPPTX: フォントが画像に埋め込まれる
- 編集可能PPTX: システムフォントへの参照（要フォントインストール）

### 3. Python-pptx での使用
```python
# フォント名の指定
p.font.name = 'FORM UDPGothic'
```
- PowerPointファイルにフォント名が記録される
- 閲覧環境にフォントがインストールされている必要がある

## トラブルシューティング

### フォントが反映されない場合

1. **フォントキャッシュの更新**
```bash
fc-cache -fv
```

2. **CSSの確認**
- font-familyの記述順序を確認
- フォント名の大文字小文字を確認

3. **システムフォントの確認**
```bash
fc-match "FORM UDPGothic"
```

### PowerPointでフォントが表示されない場合

1. **Windows環境での対応**
- BIZ UDPゴシックをWindowsにインストール
- https://github.com/jz5/FORM-UDPGothic からダウンロード

2. **代替フォントの設定**
- PowerPointの「フォントの置換」機能を使用
- 游ゴシックやメイリオに置換

## 推奨事項

1. **配布時の注意**
- PDFは問題なし（フォント埋め込み）
- PPTXは閲覧環境にフォントが必要
- 必要に応じてフォントファイルも配布

2. **フォールバック設定**
- CSSで複数のフォントを指定
- 環境に依存しない表示を確保

3. **テスト環境**
- 異なるOS（Windows/Mac/Linux）でテスト
- 異なるブラウザでHTMLプレビューを確認