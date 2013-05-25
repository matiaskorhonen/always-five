Zepto(function($) {
  var form = $("#searchForm_form");
  if ( form.length > 0 ) {
    var nroutes = $(form).find("select[name='nroutes']");
    if ( nroutes.length > 0 ) {
      nroutes.val("5");
    } else {
      nroutes = $("<input type='hidden' name='nroutes' value='5'></input>");
      form.append(nroutes);
    };
  };
});
