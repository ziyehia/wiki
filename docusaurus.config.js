// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ARES-Hub',
  tagline: 'Bienvenue sur le wiki d\'ARES, l\'association de robotique et d\'électronique de l\'ENSEA !',
  favicon: '/img/Ares_Clear.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://AresEnsea.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/AresHubWiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AresEnsea', // Usually your GitHub org/user name.
  projectName: 'AresHubWiki', // Usually your repo name.

  trailingSlash: false,  // optional but recommended for GitHub Pages
  deploymentBranch: 'gh-pages',


  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ziyehia/wiki/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ziyehia/wiki/tree/main/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: '/img/Ares_Clear.jpeg',
        navbar: {
          title: 'ARES-Hub',
          logo: {
            alt: "Logo d'ARES",
            src: '/img/Ares_Clear.png',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Tutoriels',
            },
            {to: '/blog', label: 'Actualités', position: 'left'},
            {
              href: 'https://github.com/AresEnsea/',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Accueil',
              items: [
                {
                  label: 'Tutoriels',
                  to: '/docs/intro',
                },
                {
                  label: 'Actualités',
                  to: '/blog',
                },
              ],
            },
            {
              title: 'Contact',
              items: [
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/ares-ensea/',
                },
                {
                  label: 'Instagram',
                  href: 'https://www.instagram.com/aresensea/',
                },
                {
                  label: 'Facebook',
                  href: 'https://www.facebook.com/AresENSEA/',
                },
              ],
            },
            {
              title: 'Autres',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/AresEnsea/',
                },
                {
                  label: 'Site web',
                  href: 'https://ares.asso-ensea.fr/',
                },
                {
                  label: 'Ancien Wiki',
                  href: 'https://wiki.ares.asso-ensea.fr/index.php/Bienvenue_sur_le_Wiki_d%27Ares_!',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} ARES, ENSEA`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;
