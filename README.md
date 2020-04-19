# jsbrowse
browse the web using js

## install
`npm install jsbrowse`

## example usage

### browse
```js
const jsbrowse = require("jsbrowse");
const browser = new jsbrowse.browse("http://justgone.uk/onebot/api");

browser.browse("index.html");
```

make sure the file you save to is html (unless you want to read the code, make it txt)

### status of stite
```js
const jsbrowse = require("jsbrowse");
const browser = new jsbrowse.browse("http://justgone.uk/onebot/api");

browser.status();
```