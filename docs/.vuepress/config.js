module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': './assets'//点代表vuepress文档根目录，也就是vuepress dev docs这个命令里的docs目录（webpack打包用）
            }
        }
    },
    dest: './public',//点代表该nodejs工程根目录,这里制定docs里的内容打包后的路径（webpack打包用）

    title: 'VuePressTemplate',
    description: 'VuePressTemplate项目文档',

    base: '/',//这里配置的是url path 如http://xxx:xxxx/vuepress（浏览器打开url时用）
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},//这里是相对url path的路径（浏览器打开url时用）
            {text: 'Wiki', link: '/wiki/'},
            {text: 'About', link: '/about/'},
            {text: 'Github', link: 'https://github.com/vuejs/vuepress'},
        ],
        sidebar: [
            {
                title: 'Wiki',
                collapsable: false,
                children: [
                    '/wiki/',
                    '/wiki/first'
                ]
            }
        ],
        sidebarDepth: 3
    },
    head: [
        ['link', {rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon/favicon.ico'}]
        //没有配置域名，当以绝对路径访问项目时(即http://localhost:8081/favicon.ico没有path)，不能正常引入favicon.ico,所以这里多加一层favicon目录
    ]
}