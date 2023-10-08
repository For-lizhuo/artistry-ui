---
title: Pagination
nav:
  title: Components
group:
  title: Navigation
mobile: false
toc: content
---

# Pagination

The Pagination component enables the user to select a specific page from a range of pages.

## Basic pagination

<code src="./demos/index1.tsx"></code>

## Custom color

Customize color of component through `color`.

<code src="./demos/index2.tsx"></code>

## Custom size

Customize size of each button through `size`.

<code src="./demos/index3.tsx"></code>

## Outlined pagination

There are two kinds of pagination, you can decide it by `variant` prop.

<code src="./demos/index4.tsx"></code>

## Rounded pagination

There are two kinds of shape for each button, you can decide it by `shape` prop.

<code src="./demos/index5.tsx"></code>

## Buttons

You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons.

<code src="./demos/index6.tsx"></code>

## Pagination ranges

You can specify how many digits to display either side of current page with the `siblingCount` prop, and adjacent to the start and end page number with the `boundaryCount` prop.

<code src="./demos/index7.tsx"></code>

## Change callback

When you click to open or fold , the `onChange` function is triggered. This function accepts one parameter, which represents the current page.

<code src="./demos/index8.tsx"></code>

## Pagination props

| Name            | Description                                                      | Type                  | Default    |
| --------------- | ---------------------------------------------------------------- | --------------------- | ---------- |
| className       | custom class name                                                | `string`              | `--`       |
| style           | custom styles                                                    | `CSSProperties`       | `--`       |
| color           | color of component                                               | `string`              | `#1976D2`  |
| size            | font size of component                                           | `string`              | `32px`     |
| variant         | the variant to use                                               | `text / outlined`     | `text`     |
| shape           | the shape of pagination items                                    | `circular / rounded`  | `circular` |
| count           | the total number of pages                                        | `number`              | `10`       |
| defaultPages    | the page selected by default                                     | `number`              | `1`        |
| hideNextButton  | whether hide the next-page button                                | `boolean`             | `false`    |
| hidePrevButton  | whether hide the prev-page button                                | `boolean`             | `false`    |
| showFirstButton | whether show the first-page button                               | `boolean`             | `false`    |
| showLastButton  | whether show the last-page button                                | `boolean`             | `false`    |
| siblingCount    | number of always visible pages before and after the current page | `number`              | `1`        |
| boundaryCount   | number of always visible pages at the beginning and end          | `number`              | `1`        |
| onChange        | callback after jumping to a new page                                | `(page:number)=>void` | `--`       |
