import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Molecules/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    disabled: {
      type: "boolean",
      defaultValue: true,
    },
    className: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
  },
};

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    className: "theme-violet",
  },
};
