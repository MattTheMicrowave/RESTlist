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
            success: function(soda) {
              appendSoda(soda);
              addListener();
            },
            error: function(err) {
                console.log('err');
            }
        });

    });

    function addTaskListener() {
      $('li form').on('submit', function(event){
        event.preventDefault();
        var value = $(event.currentTarget).find('input[type="text"]').val();
        var id = $(event.currentTarget).find('input[type="text"]').data('id');
        $.ajax('/sodas/' + id, {
          method: 'PUT',
          data: { soda : value },
          success: function(data) {
            console.log(data);
          }
        });
      });
    }

    // function addListener() {
    //   $('li').on('click', function(event) {
    //     var target = $(event.currentTarget);
    //     var id = target.data('id');
    //
    //     $.ajax('/sodas/' + id, {
    //       method: 'DELETE',
    //       success: function(data) {
    //         target.detach();
    //       }
    //     })
    //   });
    //
    // }


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
        var $li = $('<li></li>');
        // $li.append('<div class="plain-text">' + soda.soda + '</div>');
        $li.append('<form><input class="input" type="text" value="' + soda.soda + '" data-id="' + task._id + '"/></form>');
        $('#sodas-list').append($li);
    }
});
