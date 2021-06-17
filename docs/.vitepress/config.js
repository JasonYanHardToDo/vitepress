// 文档
const { version } = require('../../package.json');


//导航栏
let nav = [
    { text: '主页', link: '/' },
    {
        text: 'vue',
        link: '/vue/',
    },
    {
        text: '更多',
        link: '',
        items: [
            {
                text: 'emoji 表情',
                link: '/other/emoji',
            },
            { text: '图标库iconfont', link: "/other/iconfont" },
            { text: '码云', link: 'https://gitee.com/' },
            { text: 'Github', link: 'https://github.com/' },
            { text: 'NPM lib', link: 'https://www.npmjs.com/' },
        ],
    },
]

let sidebar = {
    '/vue/': [
        { text: 'What is Vue', link: '/vue/index' },
        { text: '项目构建', link: '/vue/start' },
        { text: 'mobile', link: '/vue/mobile' }
    ],
    '/': [
        {
            text: '首页',
            link: '/',
        },
        // {
        //     text: 'Vue',
        //     children: [
        //         { text: 'What is Vue', link: '/vue/index' },
        //         { text: '项目构建', link: '/vue/start' },
        //         { text: 'vant', link: '/vue/vant' }
        //     ]
        // },
        {
            text: 'react',
            children: [
                { text: 'What is React', link: '/react/index' },
            ]
        }
    ]
}

module.exports = {
    // base: '/base/', // 简单说如下配置就会让你的项目的路径从 `https://domain.com/` 变成 `https://domain.com/base/`
    // lang: 'en-US', // 页面 HTML 的 lang 属性 `<html lang="en-US">`
    title: 'Vitepress' + version, // 页面标题，也会显示在 navbar 上
    description: 'A VitePress site', // 渲染成页面的 `<meta name="description" content="A VitePress site">`

    themeConfig: {
        docsDir: 'docs',
        logo: '/img/logo.png',
        // 编辑连接
        editLink: true,
        nextLinks: true,
        prevLinks: true,
        // 导航栏
        sidebar: true, // 'auto',
        nav,
        sidebar,
    }
}



// function getConfigSidebar() {
//     return [
//         {
//             text: 'App Config',
//             children: [{ text: 'Basics', link: '/config/basics' }]
//         },
//         {
//             text: 'Theme Config',
//             children: [
//                 { text: 'Homepage', link: '/config/homepage' },
//                 { text: 'Algolia Search', link: '/config/algolia-search' },
//                 { text: 'Carbon Ads', link: '/config/carbon-ads' }
//             ]
//         }
//     ]
// }