# AI UI Playbook

A bilingual English–Persian handbook for AI-assisted UI development, from understanding a Figma task to review and delivery.

راهنمای فارسی و انگلیسی توسعه رابط کاربری با ایجنت هوش مصنوعی؛ با پرامپت‌های آماده و مراحل قابل بررسی.

Built with support from [DevPact Team](https://github.com/devpactteam).

## Local development / اجرای محلی

Use Node.js 22 LTS.

```sh
npm ci
npm run docs:dev
```

Open the URL printed by VitePress, including the `/ai-ui-playbook/` base path.

```sh
npm run docs:build
npm run docs:preview
```

## Content / محتوا

- English: `docs/guide/`
- فارسی: `docs/fa/guide/`
- Shared theme: `docs/.vitepress/theme/`
- Configuration: `docs/.vitepress/config.mts`

Keep equivalent page paths in both languages so the language switch preserves the current chapter. Edit both translations together. Examples must be fictional and contain no private project data or links.

مسیر فصل‌های دو زبان را یکسان نگه دارید تا سوییچ زبان همان فصل را باز کند. مثال‌ها باید ساختگی و بدون اطلاعات خصوصی باشند.

This initial edition includes six paired chapters covering scope, implementation, visual review, testing, delivery, and continuity. GitHub Pages deploys automatically after pushes to main. Content licensing has not been selected yet.

## Published site / نسخه آنلاین

- [English](https://reydi-dev.github.io/ai-ui-playbook/)
- [فارسی](https://reydi-dev.github.io/ai-ui-playbook/fa/)

In repository Settings > Pages, select GitHub Actions as the source.
The deploy workflow builds the site and publishes it after each push to main.
Check the Actions tab for deployment results. Generated output is not committed.

با ورود تغییرات به main، سایت خودکار ساخته و منتشر می‌شود. نتیجه انتشار در تب Actions قابل مشاهده است.
