/*jslint devel:true, browser:true, freeze:false */
/*global App, jQuery */
;(function ($) {
  "use strict";
  $.fn.initModules = function (namespace, initModuleToCall) {
    if (typeof (namespace) === 'undefined') { namespace = App; }
    if (typeof (initModuleToCall) === 'undefined') { initModuleToCall = 'initialize'; }

    // This is so we can use trim in IE8.
    if(typeof String.prototype.trim !== 'function') {
      String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, ''); 
      };
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
