# initmodules

  A jQuery plugin that helps you initialize your modules using data attributes in your HTML.

## Installation

  Install with [component](https://github.com/component/component):

    $ component install gunnarhafdal/initmodules

  Install with [bower](http://bower.io):

    $ bower install initmodules

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

Init Modules takes two parameters: namespace and initModuleToCall. They default to App and 'initialize' respectively.

So if your modules start with `var Valtech = Valtech || {}` then you would do `$(document).initModules(Valtech)`.
And if you use `init` instead of `initialize` then you would call `$(document).initModules(App, 'initialize')`.

The reason I'm not calling it on the document.body is because it uses `.find()` which only searches descendants
and you might want to run global modules by putting data-js-initialize on the body. If you never do that you can
change it to `$( document.body ).initModules()`

## License

  This is free and unencumbered software released into the public domain.

  Anyone is free to copy, modify, publish, use, compile, sell, or
  distribute this software, either in source code form or as a compiled
  binary, for any purpose, commercial or non-commercial, and by any
  means.

  In jurisdictions that recognize copyright laws, the author or authors
  of this software dedicate any and all copyright interest in the
  software to the public domain. We make this dedication for the benefit
  of the public at large and to the detriment of our heirs and
  successors. We intend this dedication to be an overt act of
  relinquishment in perpetuity of all present and future rights to this
  software under copyright law.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
  OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.

  For more information, please refer to <http://unlicense.org>
