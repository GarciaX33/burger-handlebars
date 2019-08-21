$(function () {
    
    $('.create-form').on('submit', function (event) {
        event.preventDefault();

        var newBurger = {
            name: $('#name')
                .val()
                .trim(),
            devoured: $('#devoured').val().trim()
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            console.log('created new burger')
        
            location.reload();
        });
    });
    
    $('.devour-burger').on('click', function (event) {
        event.preventDefault();
        var id = $(this).data('id');



        $.ajax('/api/burgers/' + id, {
            type: 'GET'
        }).then(function () {
            location.reload();
        });
    });
});