import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Tresor',
  tagline: 'A single-binary LLM gateway for switching providers at scale with one click.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages user repo: ladbaby.github.io/tresor-docs/
  url: 'https://ladbaby.github.io',
  baseUrl: '/tresor-docs/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: './docs-content',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ladbaby/tresor-docs/edit/main/docs-content/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Tresor',
      logo: {
        alt: 'Tresor Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'userSidebar',
          position: 'left',
          label: 'User Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'devSidebar',
          position: 'left',
          label: 'Developer Guide',
        },
        {
          href: 'https://github.com/ladbaby/tresor',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'User Guide',
          items: [
            {label: 'Getting Started', to: 'docs/user/intro'},
            {label: 'Configuration', to: 'docs/user/configuration/basics'},
            {label: 'CLI Reference', to: 'docs/user/cli-reference'},
            {label: 'Web UI', to: 'docs/user/web-ui'},
          ],
        },
        {
          title: 'Developer Guide',
          items: [
            {label: 'Architecture', to: 'docs/dev/architecture'},
            {label: 'Plugin System', to: 'docs/dev/plugin-system'},
            {label: 'Testing', to: 'docs/dev/testing'},
            {label: 'Contributing', to: 'docs/dev/contributing'},
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Tresor Source',
              href: 'https://github.com/ladbaby/tresor',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tresor. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['yaml', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
