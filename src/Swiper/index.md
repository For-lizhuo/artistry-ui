---
title: Swiper
nav:
  title: Components
group:
  title: Data Display
mobile: false
toc: content
---

# Swiper

Swiper is typically used to display a series of images and supports automatic and manual switching.

## Basic usage

Save the link of the image to be displayed in an array and assign it to the `imgList` attribute

<code src="./demos/index1.tsx"></code>

## Custom size

Custom size of component through `width` and `height` props.

<code src="./demos/index2.tsx"></code>

## Auto player

Configure `autoPlayer` prop to make the image automatically switch. You can set the time interval for image switching through `interval` prop.

<code src="./demos/index3.tsx"></code>

## Round dot

Configure `showRoundDot` prop to manually switch to the specified image.

<code src="./demos/index4.tsx"></code>

## ObjectFit

The `objectFit` property sets how the picture should be resized to fit its container. Reference: [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

<code src="./demos/index5.tsx"></code>

## Switch button

Configure `hideSwitchBtn` prop to hide the two arrow buttons.

<code src="./demos/index6.tsx"></code>

## API

| Name          | Description         | Type            | Default |
| ------------- | ------------------- | --------------- | ------- |
| className     | custom class name   | `string`        | `--`    |
| style         | custom styles       | `CSSProperties` | `--`    |
| imgList       | image source list   | `Array<string>` | `[]`    |
| width         | width of component  | `number`        | `450px` |
| height        | height of component | `number`        | `250px` |
| autoPlayer    | auto play           | `boolean`       | `false` |
| showRoundDot  | show round dots     | `boolean`       | `false` |
| interval      | auto play interval  | `number`        | `2000`  |
| hideSwitchBtn | hide switch buttons | `boolean`       | `false` |
