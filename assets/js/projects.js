$(document).ready(function () {

    $('.project').click(function () {
        const name = $(this).children('h2').html()

        switch (name) {
            case "Wizards and Whiteboards":
                $('.modal').modal();
                break;

            default:
                break;
        }
    })
})