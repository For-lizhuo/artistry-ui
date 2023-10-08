---
title: Layout
nav:
  title: Components
group:
  title: Layout
mobile: false
toc: content
---

# Layout

Handling the overall layout of a page.

## Component Overview

- `Layout`: The layout wrapper, in which Header Sider Content Footer or Layout itself can be nested, and can be placed in any parent container.

- `Header`: The top layout with the default style, in which any element can be nested, and must be placed in Layout.

- `Sider`: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in Layout.

- `Content`: The content layout with the default style, in which any element can be nested, and must be placed in Layout.

- `Footer`: The bottom layout with the default style, in which any element can be nested, and must be placed in Layout.

## Usage

<code src="./demos/index1.tsx"></code>

<code src="./demos/index2.tsx"></code>

<code src="./demos/index3.tsx"></code>

<code src="./demos/index4.tsx"></code>

## Layout props

| Name      | Description       | Type            | Default |
| --------- | ----------------- | --------------- | ------- |
| className | custom class name | `string`        | `--`    |
| style     | custom styles     | `CSSProperties` | `--`    |
