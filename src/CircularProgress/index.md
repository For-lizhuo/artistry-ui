---
title: CircularProgress
nav:
  title: Components
  path: /common
group:
  title: Feedback
mobile: false
toc: content
---

# CircularProgress

Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.

## Basic usage

<code src="./demos/index1.tsx"></code>

## Custom Color

It supports both default and custom theme colors

<code src="./demos/index2.tsx"></code>

## Custom size

Customize the size of the component by setting `size` property, which supports the pixel unit.

<code src="./demos/index3.tsx"></code>

## Thickness of circle

Customize the thickness of circle by setting `thickness` property, which supports the pixel unit.
<code src="./demos/index4.tsx"></code>

## Variant

Indeterminate indicators visualize an unspecified wait time.
Determinate indicators display how long an operation will take.

The `value` of the progress indicator for the determinate variant. Value between 0 and 100.

<code src="./demos/index5.tsx"></code>

## Display label

When you need to display progress, set the `label` to true.

<code src="./demos/index6.tsx"></code>

## CircularProgress props

| Name      | Description                     | Type                          | Default          |
| --------- | ------------------------------- | ----------------------------- | ---------------- |
| className | custom class name               | `string`                      | `--`             |
| style     | custom styles                   | `CSSProperties`               | `--`             |
| color     | color of component              | `string`                      | `#1976D2`        |
| size      | size of component               | `number`                      | `40`             |
| thickness | thickness of circle             | `number`                      | `4`              |
| varient   | type of component               | `indeterminate / determinate` | `inderterminate` |
| value     | process value of component      | `number`                      | `75`             |
| label     | whether display progress or not | `boolean`                     | `false`          |
