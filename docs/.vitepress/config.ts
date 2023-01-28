import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Help and Remind',
  description: 'Helpers and reminders on a VitePress application',
  lang: 'fr-FR',
  base: '/VitePress-Docs/',
  themeConfig: {
    logo: '/manjaro.svg',
    nav: getNavigationRoutes(),
    sidebar: {
      '/entretien/': getEntretienSidebarLinks(),
      '/git': [],
      '/nvim/': getNvimSidebarLinks(),
      '/cybersec/': getCybersecSidebarLinks(),
      '/install/': [],
      '/veille': [],
      '/linux/': getLinuxSidebarLinks(),
      '/sensor/': getSensorSidebarLinks(),
    },
  },
});

function getNavigationRoutes() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Install', link: '/install/' },
    { text: 'Nvim', link: '/nvim/' },
    { text: 'Git', link: '/git' },
    { text: 'Linux', link: '/linux/' },
    { text: 'CyberSec', link: '/cybersec/' },
    { text: 'Entretien', link: '/entretien/' },
    { text: 'Sensor', link: '/sensor/' },
    { text: 'Veille', link: '/veille' },
  ];
}

function getEntretienSidebarLinks() {
  return [
    {
      text: 'Entretien',
      items: [
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

function getNvimSidebarLinks() {
  return [
    {
      text: 'NeoVim',
      items: [
        { text: 'Apprendre', link: '/nvim/learn' },
        { text: 'Raccourcis', link: '/nvim/raccourcis' },
      ],
    },
  ];
}

function getCybersecSidebarLinks() {
  return [
    {
      text: 'CyberSec',
      items: [
        { text: 'Rex Cci 2022', link: '/cybersec/rex2022' },
        { text: 'Mooc Anssi', link: '/cybersec/moocAnssi' },
      ],
    },
  ];
}

function getLinuxSidebarLinks() {
  return [
    {
      text: 'Linux',
      items: [
        { text: 'Command', link: '/linux/index' },
        { text: 'Systemd', link: '/linux/systemd' },
        { text: 'RAID', link: '/linux/raid' },
        { text: 'S.M.A.R.T', link: '/linux/smart' },
      ],
    },
  ];
}

function getSensorSidebarLinks() {
  return [
    {
      text: 'Sensor',
      items: [
        { text: 'Projet', link: '/sensor/index' },
        { text: 'Architecture', link: '/sensor/architecture' },
        { text: 'Hardware', link: '/sensor/hardware' },
      ],
    },
  ];
}
