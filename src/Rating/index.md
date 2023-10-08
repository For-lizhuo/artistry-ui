---
title: Rating
nav:
  title: Components
group:
  title: Inputs
mobile: false
toc: content
---

# Rating

Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.

## Basic usage

<code src="./demos/index1.tsx"></code>

## Default value

You can set the initial default value through `defaultValue` prop.

<code src="./demos/index2.tsx"></code>

## Custom color

Customize color of component through `color` prop.

<code src="./demos/index3.tsx"></code>

## Custom size

Customize size of component through `size` prop.

<code src="./demos/index4.tsx"></code>

## Disable

Configure the disabled rating.

<code src="./demos/index5.tsx"></code>

## Variant

You can modify the type of icon through `variant` prop , the default is `star`.

<code src="./demos/index6.tsx"></code>

## Half allow

Set the `allowHalf` attribute so that the minimum rating unit is 0.5.

<code src="./demos/index7.tsx"></code>

## Rating callback

When you click to rate, the `handleSelectCallback` function is triggered. This function accepts one parameter, which represents the score, range from 0 to 5.

<code src="./demos/index8.tsx"></code>

## Rating props

| Name                 | Description                      | Type                    | Default     |
| -------------------- | -------------------------------- | ----------------------- | ----------- |
| className            | custom class name                | `string`                | `--`        |
| style                | custom styles                    | `CSSProperties`         | `--`        |
| size                 | size of component                | `string`                | `30px`      |
| color                | color of componnet               | `string`                | `'#FAAF00'` |
| defaultValue         | default value of rating          | `number`                | `0`         |
| variant              | detemine the style of icon       | `star / heart / fire`   | `star`      |
| disabled             | disabled state                   | `boolean`               | `true`      |
| allowHalf            | detemine the minimum rating unit | `false`                 | `true`      |
| handleRatingCallback | callback after rating            | `(value: number)=>void` | `--`        |
