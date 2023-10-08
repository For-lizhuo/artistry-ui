---
title: LinearProgress
nav:
  title: Components
  path: /common
group:
  title: Feedback
mobile: false
toc: content
---

# LinearProgress

Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.

## Basic usage

The most basic component has four thems, each theme corresponds to a different color.

<code src="./demos/index1.tsx"></code>

## Custom Color

It supports both default and custom theme colors.

<code src="./demos/index2.tsx"></code>

## Thickness

Customize the thickness of component by setting `thickness` property, which supports the pixel unit.
<code src="./demos/index3.tsx"></code>

## Linear determinate

Determinate indicators display how long an operation will take.

<code src="./demos/index4.tsx"></code>

## Linear buffer

This can help you display the buffer progress in component.

<code src="./demos/index5.tsx"></code>

## Display label

When you need to display progress, set the `label` to true.The `value` of the progress indicator for the determinate variant. Value between 0 and 100.

<code src="./demos/index6.tsx"></code>

## LinearProgress props

| Name      | Description                     | Type                                   | Default          |
| --------- | ------------------------------- | -------------------------------------- | ---------------- |
| className | custom class name               | `string`                               | `--`             |
| style     | custom styles                   | `CSSProperties`                        | `--`             |
| theme     | theme of component              | `primary / secondary / success/ error` | `primary`        |
| color     | color of component              | `string`                               | `#1976D2`        |
| thickness | thickness of component          | `string`                               | `5px`            |
| varient   | type of component               | `indeterminate / determinate / buffer` | `inderterminate` |
| value     | process value of component      | `number`                               | `50`             |
| buffer    | buffer value of component       | `number`                               | `--`             |
| label     | whether display progress or not | `boolean`                              | `false`          |
