# jengkang 

## 1. 注意事項

* 請使用 VS Code 內建 Markdown 閱讀器查看本文件。
  1. 在 Vs Code 內使用 CTRL + SHIFT + P 快捷鍵。
  2. 選擇 Markdown: Open Preview。

* 使用 VS Code 開啟專案時，右下角會提示本專案推薦套件，請確認安裝。

---

## 2. 建置及開發說明
### 專案建構

```bash
# 安裝專案依賴包
$ npm install

# 複製 .env.example 建立 .env
$ cp .env.example .env

# 編輯 .env 內 FTP 環境變數

# 依照開發或生產環境執行相關指令
```

### 開發環境

```bash
# 在 localhost:3000 啟動開發環境服務
$ npm run dev
```

### 生產環境 - 啟動服務

```bash
# 打包代碼提供生產環境使用
$ npm run build

# 使用打包後的代碼啟動服務
$ npm run start
```

### 生產環境 - 靜態頁面

```bash
# 產生靜態頁面檔
$ npm run generate
```

---

## 3. 套件介紹

### [aos](https://michalsnik.github.io/aos)

### [bootstrap 5](https://getbootstrap.com)

### [dotenv](https://github.com/motdotla/dotenv)

### [ftp](https://github.com/mscdex/node-ftp)

### [lazysizes](https://github.com/aFarkas/lazysizes)

### [nuxt-i18n](https://i18n.nuxtjs.org)

### [nuxt-property-decorator](https://github.com/nuxt-community/nuxt-property-decorator)

### [smoothscroll-polyfill](https://github.com/iamdustan/smoothscroll)


<!-- For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org). -->
