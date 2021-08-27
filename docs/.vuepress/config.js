module.exports = {
    title: "Engineering Best Practices",
    description: "This guide dictates how we, as a company, engineer applications.",

    themeConfig: {
        logo: '/assets/img/logo.png',
        displayAllHeaders: true,
        activeHeaderLinks: false,
        searchPlaceholder: 'Press / to search',
        lastUpdated: true,
        sidebarDepth: 0,

        repo: 'vanegmondgroep/engineering-best-practices',

        docsRepo: 'vanegmondgroep/engineering-best-practices',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        docsBranch: 'main',

        nav: [
            { text: 'Home', link: '/', target: '_self' },
        ],

        sidebar: [
            '/',
            '/ubuntu',
            '/git',
            '/docker',
            '/docker-compose', 
            '/hyper-v',
            '/sip-stack'
        ]
    },
}