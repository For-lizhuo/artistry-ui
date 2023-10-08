---
title: Radio
nav:
  title: Components
group:
  title: Inputs
mobile: false
toc: content
---

# Radio Group

The Radio Group allows the user to select one option from a set.

## Basic usage

RadioGroup is a helpful wrapper used to group Radio components that provides an easier API. Each Radio needs to set a `uid`.

<code src="./demos/index1.tsx"></code>

## Default value

Configure `defaultChecked` prop to set the initial default checked radio.

<code src="./demos/index2.tsx"></code>

## Direction

Custom the lay out of radios through `direction` prop, the default value is `row`.

<code src="./demos/index3.tsx"></code>

## Custom color

Customize color of component through `color` prop.

<code src="./demos/index4.tsx"></code>

## Custom size

Customize size of component through `size` prop.

<code src="./demos/index5.tsx"></code>

## Disable

Configure the disabled radio.

<code src="./demos/index6.tsx"></code>

## Change callback

When you click to check a radio, the `onChange` function is triggered. This function accepts one parameter, which represents the `uid` of radio.

<code src="./demos/index7.tsx"></code>

## RadioGroup Props

| Name           | Description                            | Type                  | Default |
| -------------- | -------------------------------------- | --------------------- | ------- |
| className      | custom class name                      | `string`              | `--`    |
| style          | custom styles                          | `CSSProperties`       | `--`    |
| defaultChecked | uid of default checked radio           | `number`              | `--`    |
| direction      | lay out of radios                      | `row / column`        | `row`   |
| onChange       | checked radio change callback function | `(uid:?number)=>void` | `--`    |

## Radio Props

| Name      | Description        | Type            | Default   |
| --------- | ------------------ | --------------- | --------- |
| className | custom class name  | `string`        | `--`      |
| style     | custom styles      | `CSSProperties` | `--`      |
| uid       | uid of radio       | `number`        | `--`      |
| value     | value              | `any`           | `--`      |
| disabled  | disabled state     | `boolean`       | `false`   |
| size      | size of component  | `string`        | `16px`    |
| color     | color of componnet | `string`        | `#1976D2` |
