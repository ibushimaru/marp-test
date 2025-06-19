---
marp: true
title: Advanced Charts and Tables in Marp
description: 高品質な表とグラフのデモンストレーション
theme: minimalTheme
paginate: true
---

<style>
/* すべてのスライドでh2タイトルの位置を固定 */
section:not(.title) h2 {
  position: absolute;
  top: 40px;
  left: 60px;
  right: 60px;
  margin: 0;
  padding-bottom: 16px;
  z-index: 10;
}

/* h2の後のコンテンツの位置調整 */
section:not(.title) h2 ~ * {
  position: relative;
  top: 100px;
}

/* h3の位置調整 */
section:not(.title) h3 {
  position: relative;
  top: 80px;
  margin-bottom: 20px;
}
</style>

<!-- _class: title -->

# Advanced Charts & Tables
# in Marp

高品質な表とグラフのデモンストレーション

Loglass風のプロフェッショナルなデザインを目指して

---

## CSS Grid を使った高度な表

<style scoped>
.growth-table {
  display: grid;
  grid-template-columns: 150px repeat(6, 1fr);
  gap: 0;
  margin: 30px 0;
  font-size: 18px;
}
.growth-table > div {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
}
.growth-table .header {
  background: #f8f9fa;
  font-weight: bold;
  color: #333;
}
.growth-table .year {
  background: #f8f9fa;
  font-weight: 600;
}
.growth-table .value {
  font-size: 24px;
  font-weight: bold;
  color: #0066FF;
}
.growth-table .latest {
  background: #e3f2fd;
}
</style>

### 従業員数の推移

<div class="growth-table">
  <div class="header">年度</div>
  <div class="header">2019</div>
  <div class="header">2020</div>
  <div class="header">2021</div>
  <div class="header">2022</div>
  <div class="header">2023</div>
  <div class="header latest">2024</div>
  
  <div class="year">従業員数</div>
  <div class="value">3</div>
  <div class="value">9</div>
  <div class="value">35</div>
  <div class="value">63</div>
  <div class="value">128</div>
  <div class="value latest">201</div>
</div>

---

## Pure CSS 棒グラフ

<style scoped>
.bar-chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 300px;
  margin: 40px 0;
  padding: 0 20px;
  border-left: 2px solid #333;
  border-bottom: 2px solid #333;
}
.bar {
  width: 60px;
  background: linear-gradient(to top, #0066FF, #4d94ff);
  border-radius: 4px 4px 0 0;
  position: relative;
  transition: all 0.3s ease;
}
.bar:hover {
  background: linear-gradient(to top, #0052cc, #0066FF);
  transform: translateY(-5px);
}
.bar::before {
  content: attr(data-value);
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 18px;
  color: #0066FF;
}
.bar::after {
  content: attr(data-year);
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #666;
}
</style>

### 売上推移（億円）

<div class="bar-chart">
  <div class="bar" style="height: 20%;" data-value="10" data-year="2019"></div>
  <div class="bar" style="height: 35%;" data-value="25" data-year="2020"></div>
  <div class="bar" style="height: 50%;" data-value="40" data-year="2021"></div>
  <div class="bar" style="height: 65%;" data-value="58" data-year="2022"></div>
  <div class="bar" style="height: 85%;" data-value="78" data-year="2023"></div>
  <div class="bar" style="height: 100%;" data-value="100" data-year="2024"></div>
</div>

---

## 円グラフ風の表示

<style scoped>
.pie-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px 0;
}
.pie-chart {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient(
    #0066FF 0deg 126deg,
    #4d94ff 126deg 216deg,
    #80b3ff 216deg 288deg,
    #b3d1ff 288deg 360deg
  );
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 102, 255, 0.2);
}
.pie-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.pie-center .value {
  font-size: 36px;
  font-weight: bold;
  color: #0066FF;
}
.pie-center .label {
  font-size: 14px;
  color: #666;
}
.legend {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.legend-color {
  width: 20px;
  height: 20px;
  border-radius: 4px;
}
</style>

### 事業セグメント別売上構成

<div class="pie-container">
  <div class="pie-chart">
    <div class="pie-center">
      <div class="value">100%</div>
      <div class="label">Total</div>
    </div>
  </div>
  
  <div class="legend">
    <div class="legend-item">
      <div class="legend-color" style="background: #0066FF;"></div>
      <span>エンタープライズ (35%)</span>
    </div>
    <div class="legend-item">
      <div class="legend-color" style="background: #4d94ff;"></div>
      <span>中堅企業 (25%)</span>
    </div>
    <div class="legend-item">
      <div class="legend-color" style="background: #80b3ff;"></div>
      <span>スタートアップ (20%)</span>
    </div>
    <div class="legend-item">
      <div class="legend-color" style="background: #b3d1ff;"></div>
      <span>その他 (20%)</span>
    </div>
  </div>
</div>

---

## プログレスバー風の表

<style scoped>
.progress-container {
  margin: 40px 0;
}
.progress-item {
  margin: 25px 0;
}
.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.progress-label {
  font-weight: 600;
  color: #333;
}
.progress-value {
  font-weight: bold;
  color: #0066FF;
}
.progress-bar {
  width: 100%;
  height: 30px;
  background: #f0f0f0;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #0066FF, #4d94ff);
  border-radius: 15px;
  transition: width 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  color: white;
  font-weight: bold;
  font-size: 14px;
}
</style>

### 目標達成率

<div class="progress-container">
  <div class="progress-item">
    <div class="progress-header">
      <span class="progress-label">売上目標</span>
      <span class="progress-value">92%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 92%;">92%</div>
    </div>
  </div>
  
  <div class="progress-item">
    <div class="progress-header">
      <span class="progress-label">顧客満足度</span>
      <span class="progress-value">88%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 88%;">88%</div>
    </div>
  </div>
  
  <div class="progress-item">
    <div class="progress-header">
      <span class="progress-label">従業員満足度</span>
      <span class="progress-value">95%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 95%;">95%</div>
    </div>
  </div>
</div>

---

## 比較表（カード形式）

<style scoped>
.comparison-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 40px 0;
}
.card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}
.card.featured {
  border-color: #0066FF;
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 102, 255, 0.2);
}
.card-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}
.card-price {
  font-size: 48px;
  font-weight: bold;
  color: #0066FF;
  margin: 20px 0;
}
.card-price span {
  font-size: 18px;
  color: #666;
}
.card-features {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}
.card-features li {
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}
.card-button {
  background: #0066FF;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}
.card-button:hover {
  background: #0052cc;
}
</style>

### プラン比較

<div class="comparison-cards">
  <div class="card">
    <div class="card-title">Starter</div>
    <div class="card-price">¥0<span>/月</span></div>
    <ul class="card-features">
      <li>5ユーザーまで</li>
      <li>基本機能</li>
      <li>メールサポート</li>
    </ul>
    <button class="card-button">開始する</button>
  </div>
  
  <div class="card featured">
    <div class="card-title">Professional</div>
    <div class="card-price">¥50,000<span>/月</span></div>
    <ul class="card-features">
      <li>無制限ユーザー</li>
      <li>全機能利用可能</li>
      <li>優先サポート</li>
    </ul>
    <button class="card-button">開始する</button>
  </div>
  
  <div class="card">
    <div class="card-title">Enterprise</div>
    <div class="card-price">要相談</div>
    <ul class="card-features">
      <li>カスタマイズ可能</li>
      <li>専任サポート</li>
      <li>SLA保証</li>
    </ul>
    <button class="card-button">お問い合わせ</button>
  </div>
</div>

---

## 線グラフ風の表示

<style scoped>
.line-chart {
  position: relative;
  height: 300px;
  margin: 40px 0;
  border-left: 2px solid #333;
  border-bottom: 2px solid #333;
}
.line-chart::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(180deg, #f0f0f0 0%, #f0f0f0 1px, transparent 1px),
    linear-gradient(90deg, #f0f0f0 0%, #f0f0f0 1px, transparent 1px);
  background-size: 100% 60px, 16.66% 100%;
}
.line-path {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.line-path svg {
  width: 100%;
  height: 100%;
}
.data-point {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #0066FF;
  border-radius: 50%;
  transform: translate(-50%, 50%);
  box-shadow: 0 0 0 3px white, 0 0 0 5px #0066FF;
}
.data-label {
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: #0066FF;
  transform: translate(-50%, -150%);
}
</style>

### 月間アクティブユーザー数推移

<div class="line-chart">
  <div class="line-path">
    <svg viewBox="0 0 600 300" preserveAspectRatio="none">
      <path d="M 0,280 L 100,240 L 200,180 L 300,140 L 400,60 L 500,20" 
            stroke="#0066FF" stroke-width="3" fill="none"/>
    </svg>
  </div>
  <div class="data-point" style="left: 0%; bottom: 7%;"></div>
  <div class="data-label" style="left: 0%; bottom: 7%;">1.2K</div>
  
  <div class="data-point" style="left: 20%; bottom: 20%;"></div>
  <div class="data-label" style="left: 20%; bottom: 20%;">2.5K</div>
  
  <div class="data-point" style="left: 40%; bottom: 40%;"></div>
  <div class="data-label" style="left: 40%; bottom: 40%;">5.2K</div>
  
  <div class="data-point" style="left: 60%; bottom: 53%;"></div>
  <div class="data-label" style="left: 60%; bottom: 53%;">8.1K</div>
  
  <div class="data-point" style="left: 80%; bottom: 80%;"></div>
  <div class="data-label" style="left: 80%; bottom: 80%;">12.5K</div>
  
  <div class="data-point" style="left: 100%; bottom: 93%;"></div>
  <div class="data-label" style="left: 100%; bottom: 93%;">15.8K</div>
</div>

---

## まとめ：Marpでできること

### Pure CSS で実現可能
- **CSS Grid** による高度なレイアウト
- **Flexbox** による柔軟な配置
- **CSS変数** でのテーマ管理
- **疑似要素** でのデコレーション
- **グラデーション** での視覚効果

### 制限事項
- JavaScriptは基本的に使用不可（PDFエクスポート時）
- 動的なアニメーションは限定的
- 外部ライブラリの利用は困難

### 推奨アプローチ
1. **シンプルなデザイン**を心がける
2. **CSSの力**を最大限活用
3. **視覚的な工夫**で情報を伝える

---

<!-- _class: title -->

# Thank You!

Marpでも工夫次第で高品質な表とグラフが作れます

Pure CSSの可能性を探求しましょう