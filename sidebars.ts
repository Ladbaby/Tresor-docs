import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // User Guide sidebar
  userSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['user/getting-started/intro', 'user/getting-started/installation', 'user/getting-started/configuration'],
    },
    {
        type: 'category',
        label: 'Configure LLM Apps',
        items: ['user/llm-apps/claude-code', 'user/llm-apps/codex'],
    },
    'user/web-ui',
    'user/cli-reference',
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
