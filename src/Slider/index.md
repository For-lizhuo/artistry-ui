---
title: Slider
nav:
  title: Components
group:
  title: Inputs
mobile: false
toc: content
---

# Slider

Sliders allow users to make selections from a range of values.

## Basic usage

<code src="./demos/index1.tsx"></code>

## Custom Color

It supports both default and custom theme colors.

<code src="./demos/index2.tsx"></code>

## Custom Size

Customize the size of component by setting `width` and `thickness` props.

<code src="./demos/index3.tsx"></code>

## Label display

Customize the state of label by setting `labelDisplay` property.

<code src="./demos/index4.tsx"></code>

## Custom range ,default value and unit

Customize the range of value by setting `min` and `max` props. You can also set the initial default value through `defaultvalue` prop. To set the minimum unit, you can use the `step` attribute.

<code src="./demos/index5.tsx"></code>

## Disabled

Configure disable state.

<code src="./demos/index6.tsx"></code>

## Change callback

When you click to check a radio, the `onChange` function is triggered. This function accepts one parameter, which represents the `value` of slider.

<code src="./demos/index7.tsx"></code>

## Slider props

| Name         | Description                    | Type                   | Default   |
| ------------ | ------------------------------ | ---------------------- | --------- |
| className            | custom class name                | `string`                | `--`        |
| style        | custom styles                  | `CSSProperties`        | `--`      |
| color        | color of component             | `string`               | `#1976D2` |
| width        | width of component             | `string`               | `200px`   |
| thickness    | thickness of component         | `string`               | `8px`     |
| max          | max value                      | `number`               | `100`     |
| min          | min value                      | `number`               | `0`       |
| defaultValue | default value                  | `number`               | `50`      |
| step         | minium unit                    | `number`               | `1`       |
| labelDisplay | whether display label or not   | `boolean`              | `false`   |
| disabled     | disabled state                 | `boolean`              | `false`   |
| onChange     | callback when value is changed | `(value:number)=>void` | `--`      |
