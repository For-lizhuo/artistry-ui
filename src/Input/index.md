---
title: Input
nav:
  title: Components
group:
  title: Inputs
mobile: false
toc: content
---

# Input

A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.

## Basic usage

<code src="./demos/index1.tsx"></code>

## Custom size Input

Customize the width and height to configure different size Inputs.

<code src="./demos/index2.tsx"></code>

## Disabled

Configure the disabled Input.

<code src="./demos/index3.tsx"></code>

## Prefix element

Configure the prefix element.

<code src="./demos/index4.tsx"></code>

## Suffix element

Configure the suffix element.

<code src="./demos/index5.tsx"></code>

## Password

You can set the `type` prop to password to support password input.

<code src="./demos/index6.tsx"></code>

## Max length

Configure `maxLength` prop to limit the input length.

<code src="./demos/index7.tsx"></code>

## Change callback

Once the files selected are changed, the `onChange` function is triggered. This function accepts one parameter, which is the value of input.

## Input props

| Name        | Description                                | Type                   | Default |
| ----------- | ------------------------------------------ | ---------------------- | ------- |
| className   | custom class name                          | `string`               | `--`    |
| style       | custom styles                              | `CSSProperties`        | `--`    |
| width       | width of input                             | `string`               | `120px` |
| height      | height of input                            | `string`               | `32px`  |
| type        | type of input                              | `password / text `     | `text`  |
| disabled    | disabled state                             | `boolean`              | `false` |
| fontSize    | font size                                  | `string`               | `16px`  |
| prefix      | prefix element                             | `ReactNode`            | `--`    |
| suffix      | suffix element                             | `ReactNode`            | `--`    |
| maxLength   | max length to enter                        | `number`               | `100`   |
| value       | default value of input                     | `string`               | `--`    |
| placeholder | alert text of inupt                        | `string`               | `--`    |
| showCount   | whether show length of input               | `boolean`              | `false` |
| onChange    | change callback after changing input value | `(value:string)=>void` | `--`    |