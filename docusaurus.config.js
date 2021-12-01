const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "JS in FM!",
  tagline: "Build Awesome Widgets for your FileMaker Apps",
  url: "https://jsinfm.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Integrating Magic", // Usually your GitHub org/user name.
  projectName: "js-in-fm", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/jlbmagic/js-in-fm/edit/master",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: "A Blog about JS in FM from Jeremy Brown",
            description: "In which I talk about what's on my mind in terms of business creation and JS in FM and Claris FileMaker in general",
            copyright: `Copyright © ${new Date().getFullYear()} Integrating Magic LLC`,
          },
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "JS in FM",
        logo: {
          alt: "My Site Logo",
          src: "img/JSinFM.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro/intro",
            position: "left",
            label: "JS in FM Intro",
          },
          {
            type: "doc",
            docId: "js-dev-env/intro",
            position: "left",
            label: "JS Dev Environment",
          },
          {
            type: "doc",
            docId: "js-learning-path/intro",
            position: "left",
            label: "JS Learning Path",
          },
          { to: "/blog", label: "Blog", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "JS Dev Environment",
          //       to: "/docs/js-dev-env/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JS in FM`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
