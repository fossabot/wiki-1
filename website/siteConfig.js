/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
    title: 'ATLauncher Wiki',
    tagline: 'Wiki for ATLauncher',
    url: 'https://wiki.atlauncher.com',
    cname: 'wiki.atlauncher.com',
    baseUrl: '/',

    projectName: 'wiki',
    organizationName: 'ATLauncher',

    headerLinks: [
        { doc: 'doc1', label: 'Docs' },
        { doc: 'doc4', label: 'API' },
        { page: 'help', label: 'Help' },
        { blog: true, label: 'Blog' },
    ],

    headerIcon: 'img/favicon.ico',
    footerIcon: 'img/favicon.ico',
    favicon: 'img/favicon.ico',

    colors: {
        primaryColor: '#a48278',
        secondaryColor: '#725b54',
    },

    copyright: `Copyright © ${new Date().getFullYear()} ATLauncher`,

    highlight: {
        theme: 'default',
    },

    scripts: ['https://buttons.github.io/buttons.js'],

    onPageNav: 'separate',
    cleanUrl: true,

    ogImage: 'img/undraw_online.svg',
    twitterImage: 'img/undraw_tweetstorm.svg',

    editUrl: 'https://github.com/ATLauncher/wiki/edit/master/docs/',
    enableUpdateBy: true,
    enableUpdateTime: true,

    repoUrl: 'https://github.com/ATLauncher/wiki',
};

module.exports = siteConfig;
