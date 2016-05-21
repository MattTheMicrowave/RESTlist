$(document).ready(function() {
  var sodaForm = $('#soda-form');
  sodaForm.on('submit', function(event) {
    event.preventDefault();
    var value = $(event.currentTarget).find('input[type="text"]').val();
    $.ajax('/sodas', {
      method: 'POST',
      data: {soda: value},
      success: appendSoda,
      error: function(err) {
        console.log('err');
      }
});

  });
  function appendSoda(soda) {
    $('#sodas-list').append('<li>' + soda.soda + '</li>');
  }
});
