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
        sidebar: [{ text: 'The workflow', items: [{"text":"01 · Understand and split the task","link":"/guide/task-scope"},{"text":"02 · Implement one stage","link":"/guide/implementation"},{"text":"03 · Compare and refine visuals","link":"/guide/visual-review"},{"text":"04 · Test behavior and review code","link":"/guide/testing"},{"text":"05 · Commit and deliver","link":"/guide/delivery"},{"text":"06 · Debug and resume work","link":"/guide/continuity"}] }],
        outline: { label: 'On this page' }
      }
    },
    fa: {
      label: 'فارسی', lang: 'fa', dir: 'rtl', link: '/fa/',
      themeConfig: {
        nav: [{ text: 'شروع مطالعه', link: '/fa/guide/task-scope' }],
        sidebar: [{ text: 'مسیر اجرا', items: [{"text":"۰۱ · شناخت و تقسیم تسک","link":"/fa/guide/task-scope"},{"text":"۰۲ · اجرای یک مرحله","link":"/fa/guide/implementation"},{"text":"۰۳ · مقایسه و اصلاح ظاهر","link":"/fa/guide/visual-review"},{"text":"۰۴ · تست رفتار و بررسی کد","link":"/fa/guide/testing"},{"text":"۰۵ · کامیت و تحویل","link":"/fa/guide/delivery"},{"text":"۰۶ · رفع باگ و ادامه گفتگو","link":"/fa/guide/continuity"}] }],
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
