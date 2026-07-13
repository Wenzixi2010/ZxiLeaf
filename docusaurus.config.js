const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

module.exports = {
  title: "Zxi's Leaf服务器教程文档",
  tagline: "包含Zxi's Leaf所有项目的文档",
  url: 'https://mc-docs.wenzixi.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: "Zxi's Leaf",
  projectName: "Zxi's Leaf Docs",

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic', 
      {
        docs: {
          routeBasePath: 'docs',
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
        },
        theme: { 
          customCss: require.resolve('./src/css/custom.css'), 
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: "ZxiLeafMC",
        path: "wiki/ZxiLeaf",
        routeBasePath: "wiki/ZxiLeaf",
        sidebarPath: require.resolve('./Config/sidebarsXavier.js'),
      }
    ],

    'docusaurus-plugin-zooming',
  ],

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  themeConfig: {
    algolia: {
      appId: '#',
      apiKey: '#',
      indexName: 'ZxiLeafMC',
      contextualSearch: false,
      externalUrlRegex: 'external\\.com|domain\\.com',
      searchParameters: {},
      searchPagePath: 'search'
    },
    navbar: {
      title: 'ZxiLeafMC',
      logo: {
        alt: 'ZxiLeafMC',
        src: 'img/logo-1080.png',
      },
      items: [
      ],
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
    },
    footer: {
      style: 'dark',
      copyright: `
        <div style="display:flex;justify-content:center;align-items:center;gap:24px;flex-wrap:wrap;">
          <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cloudflare.svg" alt="Cloudflare" width="20" height="20" style="filter:invert(56%) sepia(90%) saturate(1500%) hue-rotate(360deg);" />
            <span>Powered By Cloudflare</span>
          </a>
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg" alt="Vercel" width="20" height="20" style="filter:invert(1);" />
            <span>Powered By Vercel</span>
          </a>
        </div>
      `,
    },
  },
};