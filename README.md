# vue-share-package
# Project Name

This project is built using Vite + Vue 3 with TypeScript. It consists of two modules: the core module and the share package. 

## Share Package

The share package contains common components, utilities, etc. that can be reused and installed in other projects.

To build the package:
1. Run `npm run build`
2. Run `npm pack` to create a .tgz module file

## Core Module

The core module installs the share package.

After creating the .tgz module file:
1. Copy the file to the `/libs/` folder in the core module
2. Edit the version in `package.json`
3. Run `npm i`

## Getting Started

To get started with the project, follow the steps for building the share package and integrating it into the core module as outlined above.

## License

This project is licensed under the [License Name] - see the LICENSE.md file for details.