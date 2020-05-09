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
    dest: '.vuepress/dist',
    themeConfig: {
        nav: [
            { text: '前端基础', link: '/accumulate/' },
            { text: 'Mac配置相关', link: '/MacOsConfig/' },
            { text: '微博', link: 'https://baidu.com' }
        ],
        sidebar: 'auto',
        sidebarDepth: 2,
        sidebar: [{
                title: 'html5',
                collapsable: false,
                children: [
                    '/html&css/css',

                ]
            },
            {
                title: '前端基础',
                collapsable: false,
                children: [
                    '/javascript/数组去重',
                    '/javascript/arrayBaseMethods'

                ]
            },
            {
                title: 'Mac',
                collapsable: true,
                children: [
                    '/Mac/Mac命令',

                ]
            },
            {
                title: 'github',
                collapsable: false,
                children: [
                    '/github/index.md',

                ]
            },
            {
                title: 'Vue',
                collapsable: false,
                children: [
                    '/Vue/index',

                ]
            }
        ]

    }
}