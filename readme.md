# Saviah Icon

應用伯致力為土木營建相關產業開發應用軟體，為了設計符合這個產業的介面，所以我們開始了這組圖示套件，未來將繼續增加相關的圖示。

## 使用方法

這份說明預期使用者了解 node.js 與 npm 的基本用法，所以這邊沒有說明。
如果使用遇到困難歡迎開 issue

1. 在 package.json 引入

```
"devDependencies": {
  "saviah-icon": "git@github.com:appapeh/saviah-icon.git"
}
```

2. 執行 command line

```
npm install
```

3. 在專案手動引入 CSS 🙈

```
<link rel="stylesheet" href="./node_modules/saviah-icon/icon-dist/icons.css">
```

4. 請對照專案內的圖示列表 `saviah-icon/icon-dist/icons.html`

5. 在網頁中使用圖示的語法範例如下：

```
<i class="icon icon-appapeh"></i>
```

 <iframe src="https://appapeh.github.io/saviah-icon/icon-dist/icons.html" title="Saviah Icons" width="100%" height="370px"></iframe> 
