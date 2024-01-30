$(function() {
    jQuery.validator.addMethod("phoneUS", function (phone, element) {
        return this.optional(element) || phone.length > 9 && phone.length < 11;
    }, "Please specify a valid phone number");

    $("form[name='contactForm']").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
            },
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: true,
                phoneUS: true,
                number: true,
            },
            message: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must be at least 3 characters long"
            },
            email: {
                required: "Please enter an email",
            },
            phone: {
                required: "Please enter your phone number",
                phoneCA: "Please enter a valid Canadian or US phone number"
            },
            message: {
                required: "Please include a message",
            },
        },

    });
});