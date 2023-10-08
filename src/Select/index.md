---
title: Select
nav:
  title: Components
group:
  title: Inputs
mobile: false
toc: content
---

# Select

Select components are used for collecting user provided information from a list of options.

## Basic usage

Menus are positioned under their emitting elements.

<code src="./demos/index1.tsx"></code>

## Select with title

You can add a `title` to prompt users.

<code src="./demos/index2.tsx"></code>

## Custom color

Customize color of component through `color`.

<code src="./demos/index3.tsx"></code>

## Custom size

Customize size of component through `width` and `height`.

<code src="./demos/index4.tsx"></code>

## Default value

Set default value for component through the `defaultOption` property.

<code src="./demos/index5.tsx"></code>

## Select with search function

By setting the `searchable` property to true, you can endow select with a search box like function and default to support debounce optimize.

<code src="./demos/index6.tsx"></code>

## Select callback

When you select an option, the `handleSelectCallback` function is triggered. This function accepts two parameters, which are the label and value of the selected option.

<code src="./demos/index7.tsx"></code>

## Select props

| Name                 | Description                        | Type                                   | Default   |
| -------------------- | ---------------------------------- | -------------------------------------- | --------- |
| className            | custom class name                  | `string`                               | `--`      |
| style                | custom styles                      | `CSSProperties`                        | `--`      |
| options              | selector data                      | `Array<Option>`                        | `[]`      |
| width                | width of component                 | `string`                               | `120px`   |
| height               | height of component                | `string`                               | `40px`    |
| fontSize             | font-size of option                | `string`                               | `16px`    |
| color                | color of componnet                 | `string`                               | `#1976D2` |
| title                | show title above option            | `string`                               | `--`      |
| searchable           | whether to support search function | `boolean`                              | `false`   |
| handleSelectCallback | callback after selection           | `(label: string, value: string)=>void` | `--`      |

## Option type

| Name  | Description    | Type     | Default |
| ----- | -------------- | -------- | ------- |
| label | display label  | `string` | `--`    |
| value | selected value | `string` | `--`    |
