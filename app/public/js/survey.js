$(function () {

    const submit = function (e) {
        e.preventDefault();
        const newEmployee = {
            name: $('#exampleFormControlInput1').val().trim(),
            photo: $('#exampleFormControlInput2').val().trim(),
            scores: [
                $('#exampleFormControlSelect1').val(),
                $('#exampleFormControlSelect2').val(),
                $('#exampleFormControlSelect3').val(),
                $('#exampleFormControlSelect4').val(),
                $('#exampleFormControlSelect5').val(),
                $('#exampleFormControlSelect6').val(),
                $('#exampleFormControlSelect7').val(),
                $('#exampleFormControlSelect8').val(),
                $('#exampleFormControlSelect9').val(),
                $('#exampleFormControlSelect10').val()

            ]
        };

        $.ajax({
            method: 'POST',
            url: '/api/employees',
            data: newEmployee
        });

        $('.submit').on('click', console.log(submit));
    };

});