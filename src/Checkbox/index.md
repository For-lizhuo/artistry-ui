---
title: Checkbox
nav:
  title: Components
group:
  title: Inputs
mobile: false
toc: content
---

# Checkbox

Checkboxes allow the user to select one or more items from a set.

## Basic usage

CheckboxGroup is a helpful wrapper used to group Checkbox components that provides an easier API. Each Checkbox needs to set a `uid`.

<code src="./demos/index1.tsx"></code>

## Default value

Configure `defaultChecked` prop to set the initial default checked Checkbox.

<code src="./demos/index2.tsx"></code>

## Direction

Custom the lay out of Checkboxs through `direction` prop, the default value is `row`.

<code src="./demos/index3.tsx"></code>

## Custom color

Customize color of component through `color` prop.

<code src="./demos/index4.tsx"></code>

## Custom size

Customize size of component through `size` prop.

<code src="./demos/index5.tsx"></code>

## Disable

Configure the disabled Checkbox.

<code src="./demos/index6.tsx"></code>

## Check/UnCheck all

The variant property can help you to achieve a 'check/uncheck all' effect. Add uid of Checkboxes you want to controll by a Checkbox to its `controll` prop.

<code src="./demos/index7.tsx"></code>

## Change callback

When you click to check a Checkbox, the `onChange` function is triggered. This function accepts one parameter, which represents the `uid` of Checkbox.

<code src="./demos/index8.tsx"></code>

## CheckboxGroup Props

| Name           | Description                               | Type                      | Default |
| -------------- | ----------------------------------------- | ------------------------- | ------- |
| className      | custom class name                         | `string`                  | `--`    |
| style          | custom styles                             | `CSSProperties`           | `--`    |
| defaultChecked | uid of default checked Checkbox           | `number`                  | `--`    |
| direction      | lay out of Checkboxs                      | `row / column`            | `row`   |
| onChange       | checked Checkbox change callback function | `(uidArr:number[])=>void` | `--`    |

## Checkbox Props

| Name      | Description                       | Type                | Default   |
| --------- | --------------------------------- | ------------------- | --------- |
| className | custom class name                 | `string`            | `--`      |
| style     | custom styles                     | `CSSProperties`     | `--`      |
| uid       | uid of checkbox                   | `number`            | `--`      |
| value     | value                             | `any`               | `--`      |
| disabled  | disabled state                    | `boolean`           | `false`   |
| size      | size of component                 | `string`            | `16px`    |
| color     | color of componnet                | `string`            | `#1976D2` |
| variant   | type of componnet                 | `normal / checkAll` | `normal`  |
| controll  | uid list of Checkboxes controlled | `number[]`          | `--`      |
