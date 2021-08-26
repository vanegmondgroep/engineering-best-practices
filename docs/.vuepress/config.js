module.exports = {
    title: "Engineering Best Practices",
    description: "This guide dictates how we, as a company, engineer applications.",
    base: '/',
    dest: 'dist',

    //head: require('./head'),

    themeConfig: {
        logo: '/assets/img/logo.png',
        displayAllHeaders: true,
        activeHeaderLinks: false,
        searchPlaceholder: 'Press / to search',
        lastUpdated: false, // string | boolean
        sidebarDepth: 1,

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
            '/Docker',
            '/Git'
        ]
    },
}