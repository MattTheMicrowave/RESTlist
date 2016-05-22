$(document).ready(function() {
    var sodaForm = $('#soda-form');
    appendSodas();
    sodaForm.on('submit', function(event) {
        event.preventDefault();
        var value = $(event.currentTarget).find('input[type="text"]').val();
        $.ajax('/sodas', {
            method: 'POST',
            data: {
                soda: value
            },
            success: appendSoda,
            error: function(err) {
                console.log('err');
            }
        });

    });

    function addListener() {
      $('li').on('click', function(event) {
        var target = $(event.currentTarget);
        var id = target.data('id');

        $.ajax('/sodas/' + id, {
          method: 'DELETE',
          success: function(data) {
            target.detach();
          }
        })
      });

    }


    function appendSodas() {
      $.ajax('/sodas', {
        success: function(sodas) {
          sodas.forEach(function(soda) {
            appendSoda(soda);
          });
          addListener();
        }
      });
    }

    function appendSoda(soda) {
        $('#sodas-list').append('<li data-id ="' + soda._id + '">' + soda.soda + '</li>');
    }
});
