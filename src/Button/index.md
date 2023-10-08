---
title: Button
nav:
  title: Components
group:
  title: Inputs
mobile: false
toc: content
---

# Button

Buttons allow users to take actions, and make choices, with a single tap.

## Basic usage

The most basic button has five types, each type corresponds to a different color.

<code src="./demos/index1.tsx"></code>

## Custom size button

Customize the width and height to configure different size buttons.

<code src="./demos/index2.tsx"></code>

## Circle button

Configure the Circle button. In this case, the height and width you set will take the smaller of the two values.

<code src="./demos/index3.tsx"></code>

## Disable button

Configure the disabled button.

<code src="./demos/index4.tsx"></code>

## Dashed button

Set buttons with dashed border.

<code src="./demos/index5.tsx"></code>

## Variant button

Determine the variant of button to use, which can influence the border and background property of button.
<code src="./demos/index6.tsx"></code>

## Icon button

Customize icon buttons through icon attributes.

<code src="./demos/index7.tsx"></code>

## Link button

Use the 'href' attribute to set a specific url that you can click to jump to.

<code src="./demos/index8.tsx"></code>

## Button props

| Name      | Description             | Type                                         | Default     |
| --------- | ----------------------- | -------------------------------------------- | ----------- |
| className | custom class name       | `string`                                     | `--`        |
| style     | custom styles           | `CSSProperties`                              | `--`        |
| theme     | the theme of button     | `primary / error / warning / info / success` | `primary`   |
| width     | width of component      | `string`                                     | `60px`      |
| height    | height in px units      | `string`                                     | `20px`      |
| variant   | the style of button     | `outlined /contained / text `                | `contained` |
| disabled  | disabled state          | `boolean`                                    | `false`     |
| circle    | circle button           | `boolean`                                    | `false`     |
| dashed    | button border is dashed | `boolean`                                    | `false`     |
| icon      | icon button             | `ReactNode`                                  | `--`        |
| href      | navigate to a url       | `string`                                     | `--`        |
