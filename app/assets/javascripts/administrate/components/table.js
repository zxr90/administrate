$(function() {
  var visitDataUrl = function(event) {
    if (event.type == "click") {

      if (event.target.href) {
        return;
      }

      var dataUrl = $(event.target).closest("tr").data("url");
      var selection = window.getSelection().toString();
      if (selection.length === 0 && dataUrl) {
        window.location = dataUrl;
      }
    }
  };

  $("table").on("click", ".js-table-row", visitDataUrl);
});
