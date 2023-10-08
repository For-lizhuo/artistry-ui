---
title: Tabs
nav:
  title: Components
group:
  title: Navigation
mobile: false
toc: content
---

# Tabs

Tabs make it easy to explore and switch between different views.

## Basic usage

A basic example with tab panels.

<code src="./demos/index1.tsx"></code>

## Colored tab

Configure `color` prop to set the color of selected tab.

<code src="./demos/index2.tsx"></code>

## Disabled tab

Configure the disabled tab.

<code src="./demos/index3.tsx"></code>

## Default selected tab

You can detemine the default selected tab by assign uid of tab to `defaultSelected` prop.

<code src="./demos/index4.tsx"></code>

## Centered

Configuer `centered` prop to center the title of tab.

<code src="./demos/index5.tsx"></code>

## Vertical tabs

Configure `vertical` prop to make vertical tabs instead of default horizontal ones.

<code src="./demos/index6.tsx"></code>

## Icon tabs

Tab labels may be either all icons or all text.

<code src="./demos/index7.tsx"></code>

## Change callback

When you click to select a tab, the `onChange` function is triggered. This function accepts one parameter, which represents the `uid` of selected tab.

<code src="./demos/index8.tsx"></code>

## Tabs Props

| Name            | Description                            | Type                  | Default   |
| --------------- | -------------------------------------- | --------------------- | --------- |
| className       | custom class name                      | `string`              | `--`      |
| style           | custom styles                          | `CSSProperties`       | `--`      |
| defaultSelected | uid of default selected tab            | `number`              | `--`      |
| vertical        | vertical tabs                          | `boolean`             | `false`   |
| centered        | centered tabs                          | `boolean`             | `false`   |
| color           | color of selected tab                  | `string`              | `#1976D2` |
| onChange        | checked radio change callback function | `(uid:?number)=>void` | `--`      |

## TabItem Props

| Name      | Description       | Type            | Default |
| --------- | ----------------- | --------------- | ------- |
| className | custom class name | `string`        | `--`    |
| style     | custom styles     | `CSSProperties` | `--`    |
| label     | label to display  | `ReactNode`     | `--`    |
| uid       | uid of tab        | `number`        | `--`    |
| disabled  | disabled state    | `boolean`       | `false` |
