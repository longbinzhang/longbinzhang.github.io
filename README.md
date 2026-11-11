# Longbin Zhang Academic Website — 中文维护说明

## 最简单的更新方法（GitHub 网页）
1. 打开 https://github.com/longbinzhang/longbinzhang.github.io （仓库创建后）。
2. 点击 `content.js` → 右上角铅笔 **Edit this file**。
3. 修改相应文字。论文在 `publications`，项目在 `projects`，专利在 `patents`，奖励在 `awards`，研究方向在 `research_interests`。
4. 右上角 **Commit changes** → 确认保存。GitHub Pages 会自动发布更新，通常需等待一小段时间。

## 新增论文或项目
在相应数组里复制一条记录，修改 `title` 和 `details`。例如：
```js
{
  "title": "My New Paper Title",
  "details": "L. Zhang et al. · Journal Name, 2027."
},
```
注意英文双引号、逗号、花括号都要保留；最后一条后面不必加逗号。推荐在现有条目之间插入，避免误删括号。

## 修改照片和 CV
- 上传新照片到 `assets/profile.jpg`，替换原文件（保持相同文件名）。
- 上传新 CV 到 `assets/CV_Longbin_Zhang.pdf`，替换原文件。
- 这些文件可以通过 GitHub 的 **Add file → Upload files** 上传；若 GitHub 不允许直接覆盖，请先删除旧文件再上传同名新文件。

## 修改布局
- 日常更新只改 `content.js`。
- `style.css` 用于颜色、字体和版式；`index.html` 和 `site.js` 一般不需要修改。

## 初次发布
1. 在 GitHub 新建公开仓库 `longbinzhang.github.io`。
2. 将本 ZIP **解压后**的文件和 `assets` 文件夹上传到仓库根目录，确保 `index.html` 在根目录。
3. 仓库 Settings → Pages → Deploy from a branch → main → /(root) → Save。
4. 访问 https://longbinzhang.github.io/ 。

## 本地预览
双击 `index.html` 即可预览（无需本地服务器）。如更改后未生效，请刷新网页。

## 注意
- 网站是公开的，`content.js` 里的信息也会公开。不要放私人电话、密码、未公开项目材料。
- 当前论文、专利和项目来自已有 CV/对话，发布前请核对细节。个人网站和 CV PDF 不会自动同步，需要分别更新。
