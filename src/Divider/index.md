---
title: Divider
nav:
  title: Components
  path: /common
group:
  title: Layout
mobile: false
toc: content
---

# Divider

<p>Document divider that separates content.</p>

## When to use

- Segmentation of text paragraphs in different chapters.

- Splits inline text / links, such as table action columns.

## Basic usage

Basic split line component.

<code src="./demos/index1.tsx"></code>

## Divider with text

You can also render a divider with content.

<code src="./demos/index2.tsx"></code>

## Font size

Customize font size via `fontSize`.

<code src="./demos/index3.tsx"></code>

## Alignment

Alignment is selected via `align`, which defaults to `center`.

<code src="./demos/index4.tsx"></code>

## Color

Use the `color` attribute to customize the color of the provider, supporting hexadecimal and color names.

Use the `fontColor` attribute to customize the color of the text, supporting hexadecimal and color names.

<code src="./demos/index5.tsx"></code>

## Type

Use the `type` attribute to select the type of provider, including dashed and dotted lines etc.

<code src="./demos/index6.tsx"></code>

## Thickness

Use the `thickness` attribute to set the thickness of divider, you can use any unit of length like px, rem etc.

<code src="./demos/index7.tsx"></code>

## Vertical divider

Add the `vertcal` attribute to the provider, and you will get a vertical direction divider.

<code src="./demos/index8.tsx"></code>

## Divider props

| Name      | Description                | Type                      | Default   |
| --------- | -------------------------- | ------------------------- | --------- |
| className | custom class name          | `string`                  | `--`      |
| style     | custom styles              | `CSSProperties`           | `--`      |
| fontSize  | font size in px units      | `number`                  | `14`      |
| align     | alignment                  | `left / right / center`   | `center`  |
| color     | the color of divider       | `string`                  | `#E0E0E0` |
| fontColor | the color of text          | `string`                  | `#1C2025` |
| type      | divider type               | `solid / dotted / dashed` | `solid`   |
| width     | the thickness of divider   | `string`                  | `1px`     |
| vertical  | the orientation of divider | `boolean`                 | `false`   |
