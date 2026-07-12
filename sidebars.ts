import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // User Guide sidebar
  userSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['user/getting-started/intro', 'user/getting-started/installation', 'user/getting-started/configuration'],
    },
    'user/cli-reference',
    'user/web-ui',
    {
      type: 'category',
      label: 'Use Cases',
      items: ['user/use-cases/ab-testing'],
    },
  ],

  // Developer Guide sidebar
  devSidebar: [
    'dev/architecture',
    'dev/plugin-system',
    'dev/testing',
    'dev/contributing',
  ],
};

export default sidebars;
