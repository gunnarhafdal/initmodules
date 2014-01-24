/*
Init Modules 2013-12-04

# Version history:

## 2014-01-22
* Updated jshint settings and the default values code so the file passes jshint with no issues

## 2013-12-04
* Updated documentation
* Added version history

## 2013-11-27
* Added the namespace parameter. It defaults to App

## 2013-09-04
* Initial release
* Not really, the first version didn't have the initModuleToCall parameter but can't remember when it was added.
* Nor did it prototype String.trim() if need be.

# Usage:

Add data-js-initialize attributes on elements with the module you want to load. E.g.: <div data-js-initialize="slider">.
This will then call App.slider.init(jQueryElement).

It also supports multiple modules per element like so: <div data-js-initialize="slider hest">.
It will then call App.slider.init(jQueryElement) and App.hest.init(jQueryElement).

Then in your jQuery(document).ready() you call the function on the document.

jQuery(document).ready(function($) {
  $( document ).initModules();
});

The reason I'm not calling it on the document.body is because it uses .find() which only searches descendants
and you might want to run global modules by putting data-js-initialize on the body. If you never do that you can
change it to $( document.body ).initModules();

InitModules takes two parameters: namespace and initModuleToCall. They default to App and 'initialize' respectively.

So if your modules start with 'var Valtech = Valtech || {}' then you would do $(document).initModules(Valtech).
And if you use 'init' instead of 'initialize' then you would call $(document).initModules(App, 'initialize').

 */

/*jslint devel:true, browser:true, freeze:false */
/*global App, jQuery */
(function ($) {

    $.fn.initModules = function (namespace, initModuleToCall) {
        if (typeof (namespace) === 'undefined') { namespace = App; }
        if (typeof (initModuleToCall) === 'undefined') { initModuleToCall = 'initialize'; }

        // This is so we can use trim in IE8.
        function _trim() {
            return this.replace(/^\s+|\s+$/g, '');
        }
        if (typeof String.prototype.trim !== 'function') {
            String.prototype.trim = _trim;
        }

        var initializers = this.find('[data-js-initialize]');
        for (var i = 0; i < initializers.length; i++) {
            var $this = $(initializers[i]),
                modulesList = $this.data('js-initialize');

            var modulesArray = modulesList.trim().split(/\s+/);

            for (var y = 0; y < modulesArray.length; y++) {
                var module = modulesArray[y];

                if (!namespace[module]) {
                    //console.log("Module not found: " + module);
                    continue;
                }

                try {
                    //console.log("Trying to call: "+module+"."+initModuleToCall);
                    namespace[module][initModuleToCall]($this); //some modules will need the context they are being called from
                }
                catch (e) {
                    //console.error("Failed to call: "+module+"."+initModuleToCall, e);
                }
            }
        }
    };
}(jQuery));
