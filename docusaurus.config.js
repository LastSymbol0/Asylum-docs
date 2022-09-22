// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
   title: 'Asylum Documentation',
   tagline: 'Asylum Documentation',
   url: 'https://docs.asylum.space',
   baseUrl: '/',
   onBrokenLinks: 'throw',
   onBrokenMarkdownLinks: 'warn',
   favicon: 'img/favicon.svg',
   i18n: {
      defaultLocale: 'en',
      locales: ['en'],
   },

   presets: [
      [
         '@docusaurus/preset-classic',
         /** @type {import('@docusaurus/preset-classic').Options} */
         ({
            docs: {
               routeBasePath: '/',
               sidebarPath: require.resolve('./sidebars.js'),
               editUrl: 'https://gitlab.com/asylum-space/asylum-docs.git',
            },
            blog: false,
            theme: {
               customCss: require.resolve('./src/css/custom.css'),
            },
         }),
      ],
   ],

   themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
         colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false,
         },
         navbar: {
            logo: {
               alt: 'Asylum',
               src: 'img/logo.svg',
            },
            items: [
               {
                  to: '/',
                  position: 'left',
                  activeBaseRegex: '/$',
                  label: 'Intro',
               },
               {
                  to: '/category/asylum-ui',
                  activeBaseRegex: '(asylum-ui)|(/category/asylum-ui)',
                  position: 'left',
                  label: 'Asylum UI',
               },
               {
                  to: '/category/tutorials',
                  activeBaseRegex: '(tutorials)|(/category/tutorials)',
                  position: 'left',
                  label: 'Tutorials',
               },
               {
                  href: 'https://github.com/facebook/docusaurus',
                  label: 'GitHub',
                  position: 'right',
               },
            ],
         },
         footer: {
            style: 'dark',

            copyright: `Copyright © ${new Date().getFullYear()} Asylum`,
         },
         prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
         },
      }),
}

module.exports = config
