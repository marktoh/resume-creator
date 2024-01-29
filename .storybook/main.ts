import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../lib/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../lib/molecules/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../lib/pages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "storybook-addon-pseudo-states",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
