---
title: Badge
nav:
  title: Components
  path: /common
group:
  title: Data Display
mobile: false
toc: content
---

# Badge

Badge generates a small badge to the top-right of its child(ren).

## Basic usage

Examples of badges containing text, using primary and colors. The badge is applied to its children.

<code src="./demos/index1.tsx"></code>

## FontSize

You can change the fontSize of the Badge with the `fontSize` property.

<code src="./demos/index2.tsx"></code>

## Color

You can change the background color of the Badge through `color` prop.

<code src="./demos/index3.tsx"></code>

## Dot badge

The dot prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.

<code src="./demos/index4.tsx"></code>

## Badge visibility

The visibility of badges can be controlled using the invisible prop.

<code src="./demos/index5.tsx"></code>

The badge hides automatically when `count` is zero. You can override this with the `showZero` prop.

<code src="./demos/index6.tsx"></code>

## Maximum value

You can use the `max` prop to cap the value of the badge content.

<code src="./demos/index7.tsx"></code>

## Badge property

| Name      | Description                     | Type             | Default    |
| --------- | ------------------------------- | ---------------- | ---------- |
| style     | badge custom style              | `CSSProperties`  | `--`       |
| className | class name                      | `string`         | `--`       |
| count     | the content to display of badge | `number`         | `--`       |
| max       | max number to display           | `number`         | `99`       |
| fontSize  | badge fontSize                  | `string`         | `10px`     |
| variant   | type of component               | `dot / standard` | `standard` |
| color     | badge background-color          | `string`         | `#1976D2`  |
| showZero  | display when count is 0         | `boolean`        | `false`    |
| invisble  | visibility of badge             | `boolean`        | `false`    |
