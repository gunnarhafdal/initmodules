# Init Module

## Usage

Add `data-js-initialize` attributes on elements with the module you want to load. E.g.: `<div data-js-initialize="slider">`.
This will then call `App.slider.initialize(element)`.

It also supports multiple modules per element like so: `<div data-js-initialize="slider hest">`.
It will then call `App.slider.initialize(element)` and `App.hest.initialize(element)`.

Then in your `jQuery(document).ready()` you call the function on the document.

```javascript
jQuery(document).ready(function($) {
  $( document ).initModules();
});
```

The reason I'm not calling it on the document.body is because it uses `.find()` which only searches descendants
and you might want to run global modules by putting data-js-initialize on the body. If you never do that you can
change it to `$( document.body ).initModules()`
