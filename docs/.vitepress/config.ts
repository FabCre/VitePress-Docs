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
      link: '/entretien/',
      children: [
        { text: 'Test', link: '/entretien/test' },
        { text: 'JavaScript', link: '/entretien/javascript' },
        { text: 'TypeScript', link: '/entretien/typescript' },
        { text: 'ReactJS', link: '/entretien/react' },
        { text: 'Angular', link: '/entretien/angular' },
        { text: 'Rxjs', link: '/entretien/rxjs' },
        { text: 'Api REST', link: '/entretien/restapi' },
        { text: 'Messaging', link: '/entretien/messaging' },
        { text: 'Git', link: '/entretien/git' },
        { text: 'CI/CD', link: '/entretien/cicd' },
        { text: 'Bonnes Pratiques', link: '/entretien/bonnespratiques' },
      ],
    },
  ];
}