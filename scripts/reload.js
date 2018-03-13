(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;
  var CheckList = App.CheckList;
  var CHECKLIST_SELECTOR = "[data-coffee-order=\"checklist\"]";
  var checkList = new CheckList(CHECKLIST_SELECTOR);

  function Reload(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  Reload.prototype.reloadPage = function() {
    $.ajax(this.serverUrl, {
      type: "GET",
      dataType: "json",
      success: function(serverResponse) {
        /* eslint-disable no-console */
        console.log(serverResponse);
        for (var i = 0; i < serverResponse.length; i++) {
          var coffeeOrder = {
            "coffee": serverResponse[i].coffee,
            "emailAddress": serverResponse[i].emailAddress,
            "flavor": serverResponse[i].flavor,
            "size": serverResponse[i].size,
            "strength": serverResponse[i].strength
          };
          checkList.addRow.call(checkList, coffeeOrder);
        }
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
  };

  App.Reload = Reload;
  window.App = App;
})(window);