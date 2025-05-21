# Read

釐清空間

## 設計稿

[Figma設計稿連結](https://www.figma.com/design/oRjeruqYQpWATSibzNIxnn/2025ver.-%E9%AB%94%E9%A9%97%E7%87%9F%E5%AD%B8%E7%94%9F%E8%A8%AD%E8%A8%88%E7%A8%BF--Copy-?node-id=236-2026&t=JnEhFaZXqw6PFd1N-0)

## HTML 架構
```
- index.html        | 網站首頁
- blog.html         | 部落格首頁
- blog/2407091.html | 部落格文章頁面
```

---

## SCSS 架構  
```
style.scss
- \_variables.scss  | 自訂變數
- bootstrap-5.2.3   | 
- \_base.scss       | 基本設定
- \_components.scss | 可重複元件
- \_layout.scss     | 頁首、頁尾
- pages/\_home.scss | index.html 專用樣式
- pages/\_blog.scss | blog.html 專用樣式
```

## JS 架構
```
- bootstrap.bundle.min.js   |
- jquery-3.7.0.min.js       |
- script.js                 |
- title.js                  | 每頁title設定
```