module.exports = {
    title: 'vuepress-doc',
    description: '基于vuepress的组件文档库',
    base: '/vuepress-doc',
    dest: './docs/.vuepress/dist',
    theme: '@vuepress/default',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '笔记',
                items: [
                    {
                        text: '前端技术',
                        items: [
                            {
                                text: 'node',
                                link: '/node/'
                            },
                            {
                                text: 'deno',
                                link: '/deno/'
                            },
                            {
                                text: 'shell',
                                link: '/shell/'
                            }
                        ]
                    },
                    {
                        text: '其他',
                        items: [
                            {
                                text: 'mac & linux',
                                link: '/mac/'
                            }
                        ]
                    }
                ]
            },
            { text: '想法', link: '/idea/' },
            { text: '项目', link: '/projects/' },
            {
                text: '更多',
                items: [
                    {
                        text: '链接',
                        items: [
                            {
                                text: 'Github',
                                link: 'https://github.com/saqqdy',
                                target: '_blank'
                            },
                            {
                                text: 'HomePage',
                                link: 'https://github.com/saqqdy/vuepress-doc#readme',
                                target: '_blank'
                            },
                            {
                                text: 'Bugs',
                                link: 'https://github.com/saqqdy/vuepress-doc/issues',
                                target: '_blank'
                            }
                        ]
                    },
                    {
                        text: '作者',
                        items: [{ text: 'saqqdy', link: 'http://www.saqqdy.com' }]
                    }
                ]
            }
        ],
        sidebar: {
            '/node/': [
                {
                    title: 'Node',
                    path: '/node/',
                    collapsable: false,
                    sidebarDepth: 2,
                    sidebar: 'auto'
                }
            ],
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        {
                            title: '介绍',
                            path: '/guide/',
                            collapsable: false
                        },
                        {
                            title: '快速上手',
                            path: 'getting-start',
                            collapsable: false
                        },
                        {
                            title: '基本配置',
                            path: 'basic-config',
                            collapsable: false
                        },
                        {
                            title: '兼容性',
                            path: 'compatibility',
                            collapsable: false
                        }
                    ]
                }
            ]
        },
        lastUpdated: '最近更新',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/saqqdy/vuepress-doc.git',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://github.com/saqqdy/vuepress-doc',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    },

    plugins: [
        // 官方回到顶部插件
        '@vuepress/back-to-top',
        //官方图片放大组件 目前是所有img都可以点击放大。具体配置见https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
        ['@vuepress/medium-zoom', { selector: 'img' }],
        // vssue 一个借助issue的评论插件 具体配置见https://vssue.js.org/zh/
        [
            '@vssue/vuepress-plugin-vssue',
            {
                // 设置 `platform` 而不是 `api` 我这里是在github平台
                platform: 'github',
                // owner与repo配置 https://github.com/${owner}/${repo}
                owner: 'saqqdy',
                repo: 'vuepress-doc',
                // 填写自己的OAuth App 信息。详见https://vssue.js.org/zh/options/#repo
                clientId: '',
                clientSecret: '',
                locale: 'zh', //使用的语言  这里是简体中文
                baseURL: 'https://github.com' //平台的 base URL
            }
        ]
    ],
    markdown: {
        lineNumbers: true,
        toc: { includeLevel: [2, 3] }
    },
    sidebarDepth: 1,
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': require('path').join(__dirname, '../assets')
            }
        }
    }
}
