import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // User Guide sidebar
  userSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'user/getting-started/intro',
        'user/getting-started/installation',
        'user/getting-started/configuration'
      ],
    },
    {
      type: 'category',
      label: 'Add LLMs',
      items: [
        'user/providers/alibaba',
        'user/providers/anthropic',
        'user/providers/deepseek',
        'user/providers/google',
        'user/providers/minimax',
        'user/providers/moonshot',
        'user/providers/openai',
        'user/providers/tencent',
        'user/providers/xai',
        'user/providers/xiaomi',
        'user/providers/zai',
      ],
    },
    {
      type: 'category',
      label: 'Configure LLM Apps',
      items: [
        'user/llm-apps/claude-code',
        'user/llm-apps/claude-desktop',
        'user/llm-apps/claude-office',
        'user/llm-apps/codex',
        'user/llm-apps/opencode',
        'user/llm-apps/openclaw',
        'user/llm-apps/workbuddy'
      ],
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
