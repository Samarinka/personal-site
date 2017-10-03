$(function(){
    $('form input[type=submit]').click(function(e){
        const form = $('form')[0];
        if(!form.checkValidity()){
             return;
        }
        e.preventDefault();
         $.ajax({
            url: 'https://formspree.io/savka.mari@gmail.com',
            method: 'POST',
            data: { 
                personName: $('#name').val(),
                personEmail: $('#email').val(),
                message: $('#message').val()
            },
            dataType: 'json'
        }).done(function(){
            form.reset();
            $('#message-box').html('Thank you!');
        }).fail(function() {
            $('#message-box').html('Error');
        });
    });
    
    
});