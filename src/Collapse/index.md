---
title: Collapse
nav:
  title: Components
group:
  title: Data Display
mobile: false
toc: content
---

# Collapse

Use Collapse to store contents which can be folded.

## Basic usage

Custom title and content.

<code src="./demos/index1.tsx"></code>

## Color

You can change the color of the Collapse through `color` prop.

<code src="./demos/index2.tsx"></code>

## Default open

You can configure `defaultOpen` prop to make the component expand content by default.

<code src="./demos/index3.tsx"></code>

## Disable

Configure the disabled component.

<code src="./demos/index4.tsx"></code>

## Change callback

When you click to open or fold , the `onChange` function is triggered. This function accepts one parameter, which represents the state "open" and "fold".

<code src="./demos/index5.tsx"></code>

## Collapse property

| Name        | Description                 | Type                        | Default   |
| ----------- | --------------------------- | --------------------------- | --------- |
| style       | Collapse custom style       | `CSSProperties`             | `--`      |
| className   | class name                  | `string`                    | `--`      |
| defaultOpen | default state of collapse   | `boolean`                   | `false`   |
| color       | color of collapse           | `string`                    | `#C0C0C0` |
| disabled    | disabled state              | `boolean`                   | `false`   |
| onChange    | callback after open or fold | `(openState:boolean)=>void` | `--`      |