<p align="center">
  <img src="./images/logo.png" alt="kuc-logo" align="center" height="100" style="margin: 30px; 0;">
</p>

---

<p align="center">
kintone UI Component is UI Component for kintone customization.<br />
It supports you to develop kintone customization and kintone plugin.<br />
<strong>The document page is <a href="https://kintone-ui-component.netlify.app" rel="noopener" target="_blank">here. </a></strong>
</p>

<p align="center">
  English | <a href="./README-JP.md">日本語</a>
</p>


## Table of contents
- [Table of contents](#table-of-contents)
- [Installation](#installation)
  - [UMD](#umd)
  - [CDN](#cdn)
  - [npm](#npm)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [v0 Usage](#v0-usage)
- [Migration Guide](#migration-guide)
- [Contributing](#contributing)
- [License](#license)

## Installation
kintone UI Component is available as UMD, CDN and npm package.

### UMD
Please use `kuc.min.js` downloaded from [releases page](https://github.com/kintone-labs/kintone-ui-component/releases).
```
./umd/kuc.min.js
```

### CDN
Please use these CDN link.

- If you want to load the latest version of kintone UI Component:
  ```
  https://unpkg.com/kintone-ui-component/umd/kuc.min.js
  ```

- If you want to specify the version and load it (specify the version number after the project name):
  ```
  https://unpkg.com/kintone-ui-component@1.0.0/umd/kuc.min.js
  ```

> unpkg is not supported by Cybozu. We recommend you to use it for verification.
> In a production environment, please use UMD to avoid the possible effects of unpkg technical obstacle and glitches.

### npm
Please install and use `kintone-ui-component` with npm.
```bash
npm install kintone-ui-component
```

## Usage

```javascript
// UMD
const text = new Kuc.Text({
  value: "this is text!"
});
```

```javascript
// ES modules
import { Text } from "kintone-ui-component/lib/text";

const text = new Text({
  value: "this is text!"
});
text.addEventListener("change", event => {
  console.log(`text value is changed to ${event.detail.value}`);
});


```

## Browser Support

<table>
  <tr>
    <th>Chrome</th>
    <th>Safari</th>
    <th>Firefox</th>
    <th>Edge</th>
    <th>IE11</th>
  </tr>
  <tr>
    <td>○</td>
    <td>○</td>
    <td>○</td>
    <td>○</td>
    <td>△</td>
  </tr>
</table>

> We confirmed the operation with the latest version of each compatible browser.
> kintone UI Component is not worked well at IE11 browser.

## v0 Usage
If you want to use kintone UI Component v0.x.x, please refer to these pages.
- [GitHub repository](https://github.com/kintone-labs/kintone-ui-component/tree/v0_dev)
- [Document page](https://kintone-labs.github.io/kintone-ui-component/latest)

> With the release of kintone UI Component v1, we will continue to mainly fix bugs and update libraries for v0.
> We don't plan to develop new functions for now.

## Migration Guide
There are differences in specifications and interfaces between v0 and v1.
Please be sure to verify enough when you updating.
For more details, please refer to the articles below.
- [The difference of the way to code between v0 and v1](https://kintone-ui-component.netlify.app/docs/guides/comparison-v0-v1)
- [v1.0.0 Release Notes](https://kintone-ui-component.netlify.app/blog/2021/03/04/v1.0.0-release-notes)

## Contributing
We welcome contributions to kintone UI Component.
If you have a question, feature request, please register [GitHub issue](https://github.com/kintone-labs/kintone-ui-component/issues/new/choose).

## License
[MIT LICENSE](./LICENSE)
