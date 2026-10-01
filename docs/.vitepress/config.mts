import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI UI Playbook',
  description: 'A practical bilingual handbook for AI-assisted UI development.',
  base: '/ai-ui-playbook/',
  cleanUrls: true,
  lastUpdated: true,
  locales: {
    root: {
      label: 'English', lang: 'en', link: '/',
      themeConfig: {
        nav: [{ text: 'Start reading', link: '/guide/task-scope' }],
        sidebar: [{ text: 'The workflow', items: [{ text: '01 · Understand and split the task', link: '/guide/task-scope' }] }],
        outline: { label: 'On this page' }
      }
    },
    fa: {
      label: 'فارسی', lang: 'fa', dir: 'rtl', link: '/fa/',
      themeConfig: {
        nav: [{ text: 'شروع مطالعه', link: '/fa/guide/task-scope' }],
        sidebar: [{ text: 'مسیر اجرا', items: [{ text: '۰۱ · شناخت و تقسیم تسک', link: '/fa/guide/task-scope' }] }],
        outline: { label: 'در این صفحه' },
        docFooter: { prev: 'قبلی', next: 'بعدی' },
        returnToTopLabel: 'بازگشت به بالا',
        sidebarMenuLabel: 'فهرست راهنما',
        darkModeSwitchLabel: 'تغییر ظاهر',
        langMenuLabel: 'تغییر زبان',
        lastUpdated: { text: 'آخرین ویرایش' }
      }
    }
  },
  themeConfig: {
    logo: '/mark.svg',
    siteTitle: 'AI UI Playbook',
    socialLinks: [{ icon: 'github', link: 'https://github.com/reydi-dev/ai-ui-playbook' }],
    search: { provider: 'local', options: { locales: { fa: { translations: {
      button: { buttonText: 'جست‌وجو', buttonAriaLabel: 'جست‌وجو در راهنما' },
      modal: { noResultsText: 'نتیجه‌ای پیدا نشد', resetButtonTitle: 'پاک کردن جست‌وجو',
        footer: { selectText: 'انتخاب', navigateText: 'جابجایی', closeText: 'بستن' } }
    } } } } }
  }
})
