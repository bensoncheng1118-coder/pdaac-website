# PDAAC 帕金森氏症專用溝通板：介紹與下載網站

這是 PDAAC 軟體的介紹與下載網站，用純 HTML/CSS/JS 寫成，不需要安裝或編譯任何東西。
可以放在 **GitHub Pages**，也可以放在 **Render**，兩個都放也可以。

```
PDAAC_website/
├─ index.html          網站主頁
├─ assets/
│  ├─ config.js        ★ 下載連結設定（唯一要改的檔案）
│  ├─ site.js          下載按鈕程式
│  └─ style.css        外觀
├─ images/             圖示與軟體截圖
├─ render.yaml         Render 部署設定
├─ .nojekyll           GitHub Pages 用（讓檔案原樣顯示）
└─ .gitignore          避免把大型安裝檔放進倉庫
```

> **為什麼安裝檔不放在網站資料夾裡？**
> 安裝檔大約 87 MB。GitHub 網頁上傳單一檔案最多 25 MB，超過 50 MB 也會警告。
> 所以安裝檔要放在 GitHub 的 **Releases**（每個檔案上限 2 GB），網站的下載按鈕會自動連到那裡。

---

## 第 1 步：在 GitHub 建立倉庫

1. 登入 <https://github.com>，右上角 **＋** → **New repository**。
2. Repository name 輸入 `pdaac-website`（也可以取別的名字，但第 4 步要填一樣的）。
3. 選 **Public**，按 **Create repository**。

## 第 2 步：把整個資料夾上傳

1. 在新倉庫的頁面按 **uploading an existing file**（或 **Add file → Upload files**）。
2. 打開 `C:\PDAAC_website`，**把裡面所有檔案和資料夾全部選取**（Ctrl + A），拖到 GitHub 網頁上。
   - 注意：要拖「資料夾裡面的東西」，不要拖 `PDAAC_website` 這個資料夾本身，否則網站會多一層路徑。
3. 等檔案都列出來後，按最下面的 **Commit changes**。

## 第 3 步：建立 Release，放上安裝檔

1. 倉庫頁面右側 **Releases** → **Create a new release**（或 **Draft a new release**）。
2. **Choose a tag** 輸入 `v2.1.0`，按 **Create new tag**。
3. Release title 輸入 `PDAAC 2.1.0 離線完整版`。
4. 把安裝檔拖到下方「Attach binaries」區域：
   `C:\PDAAC_release\PDAAC-Offline-Setup-2.1.0.exe`
   （這是離線完整版安裝檔改成英文檔名的版本。檔名一定要是英文、完全一樣，網站的下載按鈕才找得到。）
5. 等上傳完成（87 MB 需要一點時間），按 **Publish release**。

## 第 4 步：設定下載連結（唯一要改的地方）

1. 在 GitHub 倉庫裡打開 `assets/config.js`，按右上角鉛筆圖示 ✏️ 編輯。
2. 把 `YOUR-GITHUB-NAME` 改成你的 GitHub 帳號名稱；如果倉庫不是叫 `pdaac-website`，`REPO` 也要改：
   ```js
   OWNER: '你的帳號',
   REPO: 'pdaac-website',
   ```
3. 按 **Commit changes**。

> 以後出新版：建立新的 Release，上傳新的安裝檔，再把 `config.js` 裡的 `FILE`、`VERSION`、`SIZE` 改成新的就好。

## 第 5 步（選擇一）：用 GitHub Pages 發布

1. 倉庫 **Settings** → 左側 **Pages**。
2. Source 選 **Deploy from a branch**，Branch 選 **main**、資料夾選 **/ (root)**，按 **Save**。
3. 等 1～2 分鐘，網址會是：`https://你的帳號.github.io/pdaac-website/`

## 第 5 步（選擇二）：用 Render 發布

1. 登入 <https://render.com>（可以用 GitHub 帳號登入）。
2. **New ＋** → **Static Site**，選你的 `pdaac-website` 倉庫。
3. 設定：
   - **Build Command**：留空（或填 `echo ok`）
   - **Publish Directory**：`.`（一個英文句點）
4. 按 **Create Static Site**，等它部署完，網址會是 `https://pdaac-website.onrender.com` 之類。

也可以用 **New ＋ → Blueprint** 選這個倉庫，Render 會自動讀取 `render.yaml`。

之後只要在 GitHub 更新檔案，GitHub Pages 和 Render 都會自動更新網站。

---

## 在自己電腦預覽

直接雙擊 `index.html` 就能看到網站。還沒做第 4 步時，按下載會顯示「還沒設定下載連結」的提示，這是正常的。
