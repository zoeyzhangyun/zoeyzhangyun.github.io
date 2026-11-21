# Zoey Zhang — personal website

Portfolio and journal: https://zoeyzhangyun.github.io/

Built with Jekyll and GitHub Pages. The existing white, sky-blue, and soft-green design is shared by the homepage, projects, and journal entries.

## Editing content

| Content | File or directory |
| --- | --- |
| Profile, homepage headings, biography | `_data/profile.yml` |
| Journal entries | `_posts/YYYY-MM-DD-slug.md` |
| Projects | `_projects/slug.md` |
| Post images | `assets/images/posts/<slug>/` |
| Project images | `assets/images/projects/<slug>/` |
| Shared images | `assets/images/shared/` |
| Page templates | `_layouts/`, `_includes/` |
| Shared styling | `assets/css/site.css` |
| Copyable content templates | `templates/post.md`, `templates/project.md` |

Read the [Chinese publishing guide](docs/PUBLISHING.md) for browser-only instructions, image management, and troubleshooting.

Saving content to `main` triggers the existing GitHub Pages deployment. Articles and projects are listed automatically. There is no separate CMS or writing account.

Example entries inherited from the original homepage remain labeled. The `_drafts` and `templates` directories are not published as website pages, but their files are visible in this public repository.
