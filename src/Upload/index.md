---
title: Upload
nav:
  title: Components
group:
  title: Inputs
mobile: false
toc: content
---

# Upload

Upload component allows users to upload local files.

## Basic usage

<code src="./demos/index1.tsx"></code>

## Multiple

Configure `multiple` prop to support uploading multiple files.

<code src="./demos/index2.tsx"></code>

## Directory

Configure `directory` prop to support uploading file directory.

<code src="./demos/index3.tsx"></code>

## Files information display

Configure `hideFilesInfo` prop to hide information of file.

<code src="./demos/index4.tsx"></code>

## Draggable

Configure `draggable` prop to support drag and drop upload.

<code src="./demos/index5.tsx"></code>

## Change callback

Once the files selected are changed, the `onChange` function is triggered. This function accepts one parameter, which is an array of file type.

## Upload props

| Name          | Description                              | Type                   | Default |
| ------------- | ---------------------------------------- | ---------------------- | ------- |
| className     | custom class name                        | `string`               | `--`    |
| style         | custom styles                            | `CSSProperties`        | `--`    |
| multiple      | support uploading multiple files         | `boolean`              | `false` |
| directory     | support uploading directory              | `boolean`              | `false` |
| hideFilesInfo | hide information of files                | `boolean`              | `false` |
| draggable     | support drag and drop upload             | `boolean`              | `false` |
| onChange      | callback when selected files are changed | `(files:File[])=>void` | `--`    |
