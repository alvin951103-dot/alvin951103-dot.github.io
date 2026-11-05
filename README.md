# 詹彥堂 Alvin Chan — 個人學術作品集網站 (Personal Academic Portfolio)

> 一位持續探索醫學、科學與科技的醫學生。  
> 目前就讀於中國醫藥大學醫學系。

![GitHub Pages Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-blue?style=flat-square&logo=github)
![Design System](https://img.shields.io/badge/Design-Minimalist%20Academic-navy?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)

---

## 🌟 網站特色 (Features)

1. **Minimalist Academic Design（極簡學術風）**
   - 採用國際頂尖醫學院與科研學者典範之深藍（Navy Blue `#1e3a8a`）、純白（White）與灰調（Slate Grey）配色。
   - 採用圓潤親和且兼具現代學術質感的無襯線與圓體排印（Nunito / Plus Jakarta Sans / Zen Maru Gothic / Noto Sans TC），呈現流暢、平易近人且高度專業的視覺氣質。
2. **完整收錄 8 大架構與個人檔案**
   - 首頁 Hero：動態打字機引言、核心理念箴言、個人照片專屬卡片。
   - 1. 基本資料：結構化欄位展現與一鍵複製快捷鍵。
   - 2. 個人背景：求學心路歷程與階段歷程時間軸。
   - 3. 學術興趣：基礎醫學、生命科學、生理與病理機制、神經科學（核心焦點）、醫學科技、科學研究等領域。
   - 4. 興趣嗜好：音樂與吉他演奏（含舞台現場演出照片焦點）、運動自律、科學探索、程式開發、AI 與終身學習。
   - 5. 特質與能力：7 大核心特質卡片（好奇心、主動學習、獨立思考、責任感、團隊合作、創新思維、適應能力）。
   - 6. 個人理念：以科學精神追求真理，以人文情懷關懷生命的三大支柱。
   - 7. 未來目標：六階段清晰規劃與「成為兼具醫學專業、科研能力、人文關懷與國際視野的醫師」長期願景。
   - 8. 聯絡資訊：電話、Email、Instagram、GitHub，支援一鍵撥打、發信與剪貼簿複製吐司提示（Toast）。
3. **無任何付費相依模組（100% Free & Open Source）**
   - 純原生 HTML5 + CSS3 + Vanilla JavaScript，無需 Node.js、React 或任何打包工具，加載極速、易於維護。
4. **深色 / 淺色模式（Dark & Light Theme）**
   - 支援右上角一鍵切換，自動偵測使用者系統偏好，並透過 `localStorage` 記憶設定。
5. **平滑捲動與微互動動效**
   - 頁面頂端閱讀進度條（Scroll Progress Bar）。
   - 視窗進入漸顯動效（IntersectionObserver Scroll Reveal）。
   - 導覽列毛玻璃效果（Glassmorphism）與滾動自動定位高亮。
   - 平滑捲動至各錨點，精準避開頂端導覽列遮蔽。
6. **響應式跨裝置支援（RWD）**
   - 完美適配桌面大螢幕、筆記型電腦、iPad 平板與 iPhone/Android 手機螢幕。
   - 手機版支援側邊抽屜式導覽選單（Hamburger Menu），流暢滑出。

---

## 📂 檔案目錄架構 (Project Architecture)

```
MyProfolio/
├── index.html               # 網站核心結構（語意化 HTML5，支援 SEO 與社群分享 Open Graph）
├── css/
│   └── style.css            # 完整樣式表（CSS 變數、深淺模式、字體、排版、微動效與 RWD）
├── js/
│   └── main.js              # 核心互動邏輯（深淺主題、打字機動效、導覽監聽、複製吐司通知）
├── assets/
│   └── images/
│       └── alvin-guitar.jpg # 詹彥堂吉他舞台演出照片
└── README.md                # 完整專案說明與部署指南
```

---

## 🚀 GitHub Pages 免費部署教學 (Deployment Guide)

本網站專為 **GitHub Pages** 打造，只需 3 分鐘即可免費上線！

### 步驟 1：建立 GitHub Repository
1. 登入您的 GitHub 帳號（`alvinechoing`）。
2. 點擊右上角 `+` → **New repository**。
3. Repository name 建議輸入：
   - 若作為使用者個人主頁：輸入 `alvinechoing.github.io`（部署後網址為 `https://alvinechoing.github.io/`，最乾淨專業！）
   - 或輸入專案名稱：`portfolio` 或 `MyProfolio`（部署後網址為 `https://alvinechoing.github.io/portfolio/`）。
4. 選擇 **Public**，點擊 **Create repository**。

### 步驟 2：上傳檔案至 GitHub
您可以透過終端機（Terminal）或 GitHub 網頁直接上傳：

#### 終端機推動方式（推薦）：
```bash
cd /Users/alvinechoing/Desktop/MyProfolio
git init
git add .
git commit -m "feat: Initial commit for Alvin Chan Personal Academic Portfolio"
git branch -M main
git remote add origin https://github.com/alvinechoing/YOUR-REPO-NAME.git
git push -u origin main
```

#### 網頁拖曳方式：
1. 在新建立的 GitHub 倉庫頁面中，點擊 **uploading an existing file**。
2. 將 `MyProfolio` 資料夾內的所有檔案（`index.html`、`css`、`js`、`assets`、`README.md`）拖曳至網頁中上傳。
3. 點擊 **Commit changes**。

### 步驟 3：啟用 GitHub Pages
1. 在 GitHub 倉庫中，點選上方標籤頁 **Settings**。
2. 左側選單點擊 **Pages**。
3. 在 **Build and deployment** > **Branch** 下：
   - 選擇 `main` 分支。
   - 資料夾選擇 `/ (root)`。
   - 點擊 **Save**。
4. 等候約 1–2 分鐘重新整理，上方即會出現您的專屬上線網址（例如：`https://alvinechoing.github.io/`）！

---

## ✏️ 日後修改與客製化說明 (Customization Guide)

所有程式碼皆附有清楚明瞭的中文註解，日後若有任何學業進展或新成果，修改非常直覺：

### 1. 修改聯絡資訊
打開 `index.html`：
- 電話：搜尋 `0970101103` 或 `0970-101-103` 進行更新。
- 信箱：搜尋 `alvin951103@gmail.com`。
- Instagram：搜尋 `alvin_echoing`。

### 2. 更新照片或新增證書
- 將新照片放置於 `assets/images/` 資料夾中。
- 在 `index.html` 中將 `<img src="assets/images/alvin-guitar.jpg" ...>` 的路徑換成新圖片檔名即可。

### 3. 新增學術研究或發表論文
在 `index.html` 中的 `<section id="research">` 區塊內，複製一份 `<article class="academic-card">...</article>` 即可輕鬆擴充新的研究領域或專題！

### 4. 調整配色或字體
打開 `css/style.css`，所有主要色彩皆定義於頂端的 `:root` 與 `[data-theme="dark"]` 中，更換色彩 Hex code 即可全站即時套用：
```css
:root {
  --clr-navy-700: #1e3a8a; /* 主要學術深藍 */
  --clr-blue-600: #2563eb; /* 重點藍色 */
  --clr-bg:       #f8fafc; /* 背景淡色 */
}
```

---

## 📜 授權協議 (License)

由 詹彥堂 (Alvin Chan) 版權所有 © 2026。保留所有權利。  
本網站設計專供個人作品集展示使用。
