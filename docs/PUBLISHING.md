# 网页维护与发布指南

网站：https://zoeyzhangyun.github.io/

你可以直接在 GitHub 网页编辑 Markdown，不需要安装软件。当前是“在线编辑文本＋预览”的方式，没有另设可视化写作后台。

## 发布一篇文章

1. 打开仓库的 `templates/post.md`，复制全文。
2. 回到 `_posts` 文件夹，选择 **Add file → Create new file**。
3. 文件名使用 `年-月-日-英文短名.md`，例如 `2026-11-21-garden-visit.md`。日期必须补齐为两位月份和日期。不要重复已有文件名。
4. 粘贴模板，修改开头两行 `---` 之间的标题、日期、分类、标签和摘要，再编辑正文。字段名和冒号保留，日期不要设为未来，否则文章暂时不会显示。
5. 正文里的 `##` 是小标题。模板已自动显示文章标题，正文不用再重复一个一级标题。
6. 点击 GitHub 编辑器的 **Preview** 检查 Markdown 正文。这个预览不等同于网站最终版式。
7. 点击 **Commit changes…**，填写例如 `Add garden visit article`，提交到 `main`。等待 Actions 中的 Pages 构建完成，再打开网站检查。

新文章会自动出现在 Journal 页面和首页最近文章中，首页显示最新四篇。

文章链接取自文件名中的英文短名。例如 `2026-11-21-garden-visit.md` 对应 `/journal/garden-visit/`。不同文章请使用不同短名；修改标题不会改变链接，发布后尽量不要改文件名中的短名。

## 给文章配图

1. 先在 `assets/images/posts/` 下为这篇文章建立目录，例如 `garden-visit`。GitHub 网页可用 **Add file → Create new file** 新建 `garden-visit/.gitkeep` 来保留目录，然后回到该目录上传图片。
2. 使用 **Add file → Upload files**，上传 `overview.jpg`、`shared-table.webp` 等。提交图片后再写正文引用。
3. 在文章中使用：

```markdown
![花园全景]({{ '/assets/images/posts/garden-visit/overview.jpg' | relative_url }})
```

这张图片会按文章栏宽缩放。说明文字写在方括号里，也能帮助无法查看图片的读者。必须与文件名的大小写、格式后缀完全一致。

JPG、WebP、PNG 都可以；照片可先按长边约 1600–2000 像素导出再压缩，地图和图表以文字清晰为准。原始照片、GIS 数据和设计源文件另行保存，网站仓库放展示版本。图片已有文章引用后，移动或改名要同步修改链接。

## 添加一个项目

1. 复制 `templates/project.md` 到 `_projects/你的项目短名.md`。
2. 修改标题、摘要和正文，说明背景、个人贡献、数据方法与成果。
3. `category` 选择 `space`、`data` 或 `field`；`category_label` 是读者看到的分类名称。
4. `order` 控制项目顺序，数字小的在前。`featured: true` 表示可以出现在首页，首页显示按顺序排列的前三个精选项目。
5. 封面上传到 `assets/images/projects/项目短名/`，再在开头配置 `cover` 和 `cover_alt`（示例在模板里）。没有封面也可以发布。
6. 提交后，项目会自动加入 Work 页面并生成独立详情页。

## 修改个人介绍与网站标题

编辑 `_data/profile.yml`。这里保留了之前的 `browserTitle`、`brandName`、`introduction`、`portfolioTitle`、`journalTitle` 等字段，并集中保存个人介绍、技能和教育经历。姓名使用 Zoey Zhang；正式简历按需要使用 zhangyun，不显示中文姓名。

`show_notice: false` 可以隐藏网站顶部的示例说明。正式内容准备完成后再关闭比较合适。

## 管理草稿和示例

- `_drafts` 中的内容默认不显示在网站。发布时复制到 `_posts`，补齐日期文件名和日期字段。
- **仓库是公开的，草稿文件也能被别人从源码中看到。** 未公开或属于单位的材料不要存入这个目录。
- 原主页的三篇示例文章和三个示例项目已迁移，并保留 `sample: true` 标识。改成正式内容后，删除 `sample`、`sample_note` 和不再适用的 `label` 字段；正文也需要替换。
- `templates` 和 `docs` 不生成网站页面，是供你在 GitHub 内使用的模板和说明。

## 小改动和故障排查

- 只改文字：编辑对应 Markdown 文件并提交，不改 HTML 模板。
- 只改颜色：编辑 `assets/css/site.css` 开头的颜色变量。
- 提交后未更新：先看仓库 **Actions** 中的 Pages 构建是否成功，再刷新网页。
- 图片不显示：检查路径、大小写、扩展名，确认图片已经提交。
- 文章不出现：检查 `_posts` 文件名格式、开头 `---`、日期是否在未来，以及有没有 `published: false`。
- 页面有问题：通过 GitHub 文件历史查找上一个版本，不要直接删除仓库。

## 保存可下载文件

公开简历或小型 PDF 可放在 `assets/files/`，然后用普通 Markdown 链接，例如 `[Download CV]({{ '/assets/files/cv.pdf' | relative_url }})`。尚未添加 PDF 时不要使用这个示例链接。
