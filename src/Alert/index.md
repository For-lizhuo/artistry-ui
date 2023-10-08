---
title: Alert
nav:
  title: Components
  path: /common
group:
  title: Feedback
mobile: false
toc: content
---

# Alert

When displaying warning information to users, the warning prompt displays the information that needs attention.

## Basic usage

Warning prompt, which shows the information that needs attention, is applicable to short warning prompts.

<code src="./demos/index1.tsx"></code>

## Different types

There are four types of warning prompts: ' info ', ' success ', ' warning ', and ' error '.

<code src="./demos/index2.tsx"></code>

## Closable

Use `closable` to determine whether the alert can be closed.

<code src="./demos/index3.tsx"></code>

## Custom Close Element

Use `closeElement` to customize the close button.

<code src="./demos/index4.tsx"></code>

## Title

Configure the title through `title`.

<code src="./demos/index5.tsx"></code>

## No icon

Set `showIcon` to decide whether to display icon.

<code src="./demos/index6.tsx"></code>

## Custom icon

Use `icon` to customize the icon of alert.

<code src="./demos/index7.tsx"></code>

## Alert props

| Name         | Description                               | Type                               | Default |
| ------------ | ----------------------------------------- | ---------------------------------- | ------- |
| className    | custom class name                         | `string`                           | `--`    |
| style        | custom styles                             | `CSSProperties`                    | `--`    |
| type         | type                                      | `info / success / warning / error` | `info`  |
| title        | alert title                               | `string`                           | `--`    |
| closable     | determine whether the alert can be closed | `boolean`                          | `true`  |
| showIcon     | decide whether to display icon            | `boolean`                          | `true`  |
| icon         | custom icon                               | `ReactNode`                        | `--`    |
| closeElement | custom close icon                         | `ReactNode/string`                 | `--`    |
