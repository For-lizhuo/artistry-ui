---
title: Switch
nav:
  title: Components
group:
  title: Inputs
mobile: false
toc: content
---

# Rating

Switches toggle the state of a single setting on or off.

## Basic usage

<code src="./demos/index1.tsx"></code>

## Default checked

You can set the initial default value through `defaultChecked` prop.

<code src="./demos/index2.tsx"></code>

## Custom color

Customize color of component through `checkedColor` and `unCheckedColor` props.

<code src="./demos/index3.tsx"></code>

## Custom size

Customize size of component through `size` prop.

<code src="./demos/index4.tsx"></code>

## Disable

Configure the disabled component.

<code src="./demos/index5.tsx"></code>

## Switch callback

When you click to switch, the `handleUpdateChecked` function is triggered. This function accepts one parameter, which represents the state "on" and "off".

<code src="./demos/index6.tsx"></code>

## Rating props

| Name                | Description                       | Type                     | Default     |
| ------------------- | --------------------------------- | ------------------------ | ----------- |
| className           | custom class name                 | `string`                 | `--`        |
| style               | custom styles                     | `CSSProperties`          | `--`        |
| size                | size of component                 | `string`                 | `30px`      |
| checkedColor        | color of componnet when checked   | `string`                 | `'#1976D2'` |
| unCheckedColor      | color of componnet when unchecked | `string`                 | `'#C0C0C0'` |
| defaultChecked      | whether default checked or not    | `boolean`                | `false`     |
| disabled            | disabled state                    | `boolean`                | `false`     |
| handleUpdateChecked | callback after switching          | `(state: boolean)=>void` | `--`        |
