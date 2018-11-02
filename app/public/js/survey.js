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

        console.log(newEmployee.scores);
        console.log("HEY")

        $.post("/api/employees", newEmployee, function (response) {
            console.log(response);
            $(".modal").modal();
            $(".modal-body").append(`<h1>${response.name}<h1>`);
            console.log(response.photo);
            $(".modal-image").append(`<img src = "${response.photo}"></img>`);
        });


    };

    $('#submit').on('click', submit);

});