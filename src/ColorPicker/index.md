---
title: ColorPicker
nav:
  title: Components
group:
  title: Data Display
mobile: false
toc: content
---

# ColorPicker

ColorPicker allow you obtain the color of any pixel on the screen.

## Basic usage

<code src="./demos/index1.tsx"></code>

## Custom size

Customize size of button through `size` prop.

<code src="./demos/index2.tsx"></code>

## Text

Configure `hideText` prop to hide hexadecimal value.

<code src="./demos/index3.tsx"></code>

## Copy

Configure `showCopyBtn` prop to support one click color copying of hexadecimal value.

<code src="./demos/index4.tsx"></code>

## Change callback

Once the color is selected , the `onChange` function is triggered. This function accepts one parameter, which is the hexadecimal value of color.

## ColorPicker props

| Name        | Description                              | Type                   | Default |
| ----------- | ---------------------------------------- | ---------------------- | ------- |
| className   | custom class name                        | `string`               | `--`    |
| style       | custom styles                            | `CSSProperties`        | `--`    |
| size        | size of button                           | `string`               | `28px`  |
| showCopyBtn | display copy button                      | `boolean`              | `false` |
| hideText    | hide hexadecimal value                   | `boolean`              | `false` |
| onChange    | callback when selected files are changed | `(files:File[])=>void` | `--`    |
