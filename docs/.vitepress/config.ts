import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Help and Remind',
  description: 'Helpers and reminders on a VitePress application',
  lang: 'fr-FR',
  base: '/VitePress-Docs/',
  themeConfig: {
    nav: getNavigationRoutes(),
    sidebar: {
      '/entretien/': getEntretienSidebarLinks(),
      '/git': [],
      '/cybersec': [],
      '/install/': [],
      '/veille': [],
      '/': getSidebarLinks(),
    },
  },
});

function getNavigationRoutes() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Entretien', link: '/entretien/' },
    { text: 'Git', link: '/git' },
    { text: 'CyberSec', link: '/cybersec/' },
    { text: 'Install', link: '/install/' },
    { text: 'Veille', link: '/veille' },
  ];
}

function getSidebarLinks() {
  return [
    { text: 'Table of contents', link: '/' },
  ];
}

function getEntretienSidebarLinks() {
  return [
    {
      text: 'Sujets',
      children: [
        { text: 'Test', link: '/entretien/test' },
      ],
    },
  ];
}