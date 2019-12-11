
function validateLogin() {
    var msg = "";
    var email = document.getElementById("inputEmail").value;

    if (email === "") {
        msg += "Prazno pole";
        alert(msg);
        return false;
    } else {

        var regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (regex.test(email) === false) {
            msg = "ne valid";
            alert(msg);
        }
    }
}
 

$(document).ready( function() {
    $(document).on('change', '.btn-file :file', function() {
    var input = $(this),
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [label]);
    });

    $('.btn-file :file').on('fileselect', function(event, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = label;
        
        if( input.length ) {
            input.val(log);
        } else {
            // if( log ) alert(log);
        }
    
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#img-upload').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function(){
        readURL(this);
    }); 	
});
 
function readURL(input) {

    if (input.files && input.files[0]) {

        var reader = new FileReader();

        

        reader.onload = function (e) {

            $('#profile-img-tag').attr('src', e.target.result);

        }

        reader.readAsDataURL(input.files[0]);

    }

}

$("#profile-img").change(function(){

    readURL(this);

});

// Show and hide referal program
 
$(document).ready(function(){
    $('#subscribe').hide();

    $('#showsub').click(function(){
        $('#subscribe').toggle('slow');
    });
});
//  Active class on profile pafe menu
$('#navlist a').click(function(e) {
    e.preventDefault(); //prevent the link from being followed
    $('#navlist a').removeClass('ullinke-active');
    $(this).addClass('ullinke-active');
});
          