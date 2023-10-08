---
title: Link
nav:
  title: Components
  path: /common
group:
  title: Navigation
mobile: false
toc: content
---

# Link

The Link component allows you to easily customize anchor elements with your theme colors and typography styles.

## Basic usage

<code src="./demos/index1.tsx"></code>

## Custom color

Customize color of component through `color`.

<code src="./demos/index2.tsx"></code>

## Underline

The `underline` prop can be used to set the underline behavior. The default is `always`.

<code src="./demos/index3.tsx"></code>

## Link with icon

You can add custom elements to the children of component to get an icon link.

<code src="./demos/index4.tsx"></code>

## Disabled

Add the disabled attribute to the component so that the link cannot be clicked.

<code src="./demos/index5.tsx"></code>

## Target

This property determines where to display the linked URL. The default is `_self`. Reference: [target](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/target)

<code src="./demos/index6.tsx"></code>

## Link props

| Name      | Description                     | Type                              | Default   |
| --------- | ------------------------------- | --------------------------------- | --------- |
| className | custom class name               | `string`                          | `--`      |
| style     | custom styles                   | `CSSProperties`                   | `--`      |
| href      | linked url                      | `string`                          | `--`      |
| color     | color of component              | `string`                          | `#1976D2` |
| size      | font size of component          | `string`                          | `16px`    |
| disabled  | disabled state                  | `boolean`                         | `false`   |
| underline | style of underline              | `always / hover / none`           | `always`  |
| target    | where to display the linked URL | `_self / _blank / _parent / _top` | `_self`   |
