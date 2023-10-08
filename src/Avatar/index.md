---
title: Avatar
nav:
  title: Components
  path: /common
group:
  title: Data Display
mobile: false
toc: content
---

# Avatar

Avatars are found throughout material design with uses in everything from tables to dialog menus.

## Basic usage

Image avatars can be created by passing `src` property.

<code src="./demos/index1.tsx"></code>

## Size

You can change the size of the avatar with the `size` property.

<code src="./demos/index2.tsx"></code>

## Custom element avatar

Avatars containing icon or characters can be created by passing a string as children.

<code src="./demos/index3.tsx"></code>

## Background Color

You can change the background color of the avatar when you are using avatar with icon or characters.

<code src="./demos/index4.tsx"></code>

## Shape

If you need square or rounded avatars, use the `shape` property.

<code src="./demos/index5.tsx"></code>

## Fallback

If there is an error loading the avatar image, the component falls back to an alternative component.

<code src="./demos/index6.tsx"></code>

## ObjectFit

The `objectFit` property sets how the picture should be resized to fit its container. Reference: [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

<code src="./demos/index7.tsx"></code>

## Avatar property

| Name      | Description                      | Type                                         | Default    |
| --------- | -------------------------------- | -------------------------------------------- | ---------- |
| style     | avatar custom style              | `CSSProperties`                              | `--`       |
| className | class name                       | `string`                                     | `--`       |
| size      | avatar size                      | `string`                                     | `40px`     |
| shape     | avatar shape                     | `circular / rounded / square`                | `circular` |
| bgColor   | avatar background-color          | `string`                                     | `#BDBDBD`  |
| fallback  | display when source is not found | `ReactNode`                                  | `--`       |
| objectFit | how picture resized              | `fill / cover / contain / none / scale-down` | `fill`     |
