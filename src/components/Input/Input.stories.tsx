import { Meta, StoryObj } from "@storybook/react";

import Input, { InputProps } from "./Input";

const meta: Meta<InputProps> = {
  title: "Molecules/Input",
  component: Input,
  argTypes: {},
};

export default meta;

export const InputPrimary: StoryObj<InputProps> = {
  args: {
    value: "input",
  },
};

export const TextAreaPrimary: StoryObj<InputProps> = {
  args: {
    value: "input",
    multiline: true,
  },
};

export const InputDisabled: StoryObj<InputProps> = {
  args: {
    value: "input",
    disabled: true,
  },
};

export const TextAreaDisabled: StoryObj<InputProps> = {
  args: {
    value: "input",
    disabled: true,
    multiline: true,
  },
};

export const InputPrimaryLabel: StoryObj<InputProps> = {
  args: {
    value: "input",
    label: "label",
  },
};

export const TextAreaPrimaryLabel: StoryObj<InputProps> = {
  args: {
    value: "input",
    multiline: true,
    label: "label",
  },
};

export const InputDisabledLabel: StoryObj<InputProps> = {
  args: {
    value: "input",
    disabled: true,
    label: "label",
  },
};

export const TextAreaDisabledLabel: StoryObj<InputProps> = {
  args: {
    value: "input",
    disabled: true,
    multiline: true,
    label: "label",
  },
};
