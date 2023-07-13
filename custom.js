$("#formValidation").validate({
    rules:{
        name:{
            minlength: 2
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength:10,
            maxlength:10
        }
    },
    messages:{
        name:{
        required: "please enter your name",
        minlength:"Name at least 2 characters"
        },
        email:"please enter your email",
        phone:"please enter your phone",
        subject:"please enter your subject",
        fromMessage:"please enter your Message"

    },

    submitHandler: function(form){
        form.submit();
    }
});