# @jamilservices/sb-module-attachshadow

[![SimplyBuilder](https://img.shields.io/badge/Author-Gerv%C3%A1sio_J%C3%BAnior-brightgreen?style=flat-square&color=%23fedcba)](https://github.com/jamilservicos)
[![SimplyBuilder](https://img.shields.io/badge/SimplyBuilder-Module-brightgreen?style=flat-square&label=SimplyBuilder&color=%23fedcba)](https://simplybuilder.github.io)
[![SimplyBuilder - sb-module-attachshadow](https://img.shields.io/static/v1?label=SimplyBuilder&message=sb-module-attachshadow&color=blue&logo=github)](https://github.com/SimplyBuilder/sb-module-attachshadow/tree/main)
[![GitHub License](https://img.shields.io/github/license/SimplyBuilder/sb-module-attachshadow)](https://github.com/SimplyBuilder/sb-module-attachshadow/tree/main/LICENSE)

The `@jamilservices/sb-module-attachshadow` module provides a secure and immutable overlay for the `HTMLElement.prototype.attachShadow` method, ensuring that web components can leverage Shadow DOM capabilities in a safe environment, free from unauthorized modifications.

## CDN:
```text
https://cdn.skypack.dev/@jamilservices/sb-module-attachshadow@latest/lib/main.min.js

https://cdn.jsdelivr.net/npm/@jamilservices/sb-module-attachshadow@latest/lib/main.min.js

https://unpkg.com/@jamilservices/sb-module-attachshadow@latest/lib/main.min.js
```  

## Usage Examples
```html
<head>
    <script src="https://cdn.jsdelivr.net/npm/@jamilservices/sb-module-attachshadow@latest/lib/main.min.js"></script>
    <meta charset="UTF-8">
    <meta name="author" content="Jamil Services">
    <title>Simply Builder Module - AttachShadow Protection</title>
</head>
```

## Features
- **Shadow DOM Protection**: Ensures the `attachShadow` method cannot be tampered with by third-party scripts or malicious code.
- **Easy Integration**: Simply include the module via CDN in your project to enhance security for web components.
- **High Compatibility**: Works across all modern browsers that support Shadow DOM.

## Installation
No installation is required. Just include the script in your HTML document head as shown in the usage examples.

## Security Considerations       

This iife script copies the method of a read-only routine created separately within a Frame and then deletes it.
A symbol is used to keep the reference private and secure, and is then used within the "attachShadow" function.

Because it is a generic head script and freezes the standard and common "attachShadow" functions.
This script may not be completely safe on browsers with questionable extensions.
For a more complete security modality, see how it is done in ["SimplyBuilderCore"](https://github.com/SimplyBuilder/sb-core/blob/main/dom-module/src/main.js).            


### Contribution Guidelines

Interested in contributing? We welcome your contributions to enhance the backend capabilities of `@jamilservices/sb-module-attachshadow`. Please check our [Contribution Guidelines](https://github.com/SimplyBuilder/sb-module-attachshadow/tree/main/CONTRIBUTING.md) for more details.

### License

`@jamilservices/sb-module-attachshadow` is available under the [MIT License](https://github.com/SimplyBuilder/sb-module-attachshadow/tree/main/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).

- You are free to modify and reuse the code.
- The original license must be included with copies of this software.
- We encourage linking back to this repository if you use a significant portion of the source code.