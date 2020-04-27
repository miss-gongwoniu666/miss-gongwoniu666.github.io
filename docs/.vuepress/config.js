module.exports = {
    title: 'Gong\'s blog',
    description: '个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'manifest', href: '/photo.jpg' }],
        ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
    ],
    serviceWorker: true,
    base: '/',
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        nav: [
            { text: '前端基础', link: '/accumulate/' },
            { text: '算法题库', link: '/algorithm/' },
            { text: '微博', link: 'https://baidu.com' }
        ],
        sidebar: 'auto',
        sidebarDepth: 2
    }
}