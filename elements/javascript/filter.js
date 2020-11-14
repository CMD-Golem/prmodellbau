// https://stackoverflow.com/a/45146800


var getFilter = function(category) {
  var filter = $("#filters ." + category + ":checked").map(function() {
    return '[class*="' + this.id + '"]';
  }).get().join(",");
  filter = (filter.length > 0) ? filter : "*";
  return filter;
}

$("#filters :checkbox").click(function() {
  var all = $("article");
  var tgts = all.filter(getFilter("scale")).filter(getFilter("vehicle")).filter(getFilter("holder")).filter(getFilter("producer"));
  all.not(tgts).hide();
  tgts.show();
});