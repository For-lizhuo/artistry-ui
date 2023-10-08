## Introduce

Artistry-UI is a lightweight **React** UI component library. It focuses on supporting the introduction of various personalized components outside of traditional components.

## Documentation

Visit [artistry-ui](https://for-lizhuo.github.io/artistry-ui/) to view the full documentation.

## Characteristics

- 📦 High quality React components out of the box.

- 🛡 Developed using **TypeScript** to provide a complete type definition file.

- 🎨 The ability to customize topics in depth for each detail.

- 💡 Vscode code hint highlighting support.

## Installation

Run one of the following commands to add artistry-ui to your project:

```bash
npm install artistry-ui
```

```bash
yarn add artistry-ui
```

```bash
pnpm add artistry-ui
```

## Usage

Create a new tsx file in the project and write it to:

```ts
import React from 'react';
import { Button } from 'artistry-ui';

const App: React.FC = () => {
  return (
    <div>
      <Button>Button</Button>
    </div>
  );
};
export default App;
```