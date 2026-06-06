import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // User Guide sidebar
  userSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['user/intro', 'user/getting-started/installation'],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: ['user/configuration/basics', 'user/configuration/downstreams', 'user/configuration/rules', 'user/configuration/aliases', 'user/configuration/proxy-modes'],
    },
    'user/cli-reference',
    'user/web-ui',
    {
      type: 'category',
      label: 'Use Cases',
      items: ['user/use-cases/provider-switching', 'user/use-cases/model-aliasing', 'user/use-cases/ab-testing'],
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
