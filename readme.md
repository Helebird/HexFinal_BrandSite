# ReadMe

六角學院 2025 體驗營 - 最終任務 - 個人部落格網站設計  
[成果網站](https://helebird.github.io/hexfinal_brandsite/)

## 設計稿

[Figma設計稿連結](https://www.figma.com/design/oRjeruqYQpWATSibzNIxnn/2025ver.-%E9%AB%94%E9%A9%97%E7%87%9F%E5%AD%B8%E7%94%9F%E8%A8%AD%E8%A8%88%E7%A8%BF--Copy-?node-id=236-2026&t=JnEhFaZXqw6PFd1N-0)  
[Figma設計稿：結構與標籤規劃](https://www.figma.com/board/WzCYz3kEsDR9JDgOeXfhoL/%E6%9C%80%E7%B5%82%E4%BB%BB%E5%8B%99%E8%A8%AD%E8%A8%88%E7%A8%BF%E6%8E%92%E7%89%88?node-id=0-1&p=f&t=G3aYFqMJcGeYV19I-0)

## 網站架構與資源

### HTML
```
- index.html                | 網站首頁
- blog.html                 | 部落格首頁
blog
- 2407091.html              | 部落格文章頁面
```

### SCSS
```
- variables.scss            | 自定變數
- bootstrap-5.2.3           | 引入 Bootstrap 5.2.3 版本
- utilities                 | 抽象功能
- base.scss                 | 基本設定
- components.scss           | 可重複元件
- layout.scss               | 頁首、頁尾
pages
- home.scss                 | index.html 專用樣式
- blog.scss                 | blog.html 專用樣式
- post.scss                 | blog/文章 專用樣式
```

### JS
```
- jquery-3.7.0.min.js       | 引入 jQuery 3.7.0 版本
- bootstrap.bundle.min.js   | 引入 Bootstrap 5.2.3 版本
- script.js                 | 自訂網頁功能
```

### 外部資源
```
樣式
- Font Awesome
- Swiper

功能
- Swiper

其他
- utterances
- Google Anlytics
```