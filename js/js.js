$('.slider1').slick({
    slidesToShow: 1,
    dots: true
})

$(document).on("click",".input-number_min",function (){
    let total = $(this).next();
    if (total.val()>1){
        total.val(+total.val()-1)
    }
});

$(document).on("click",".input-number_pl",function (){
    let total = $(this).prev();
        total.val(+total.val()+1)

});

document.querySelectorAll(".input-number_in").forEach(function (el){
    el.addEventListener('keydown',function (event){
        if (event.keyCode=== 46 || event.keyCode === 8 || event.keyCode === 9 ||
            ( event.keyCode === 65 && event.ctrlKey === true) || event.keyCode >=35 &&
            (event.keyCode <= 39)){
        return;
        } else {
            if (event.keyCode < 48 || event.keyCode > 57 &&
            (event.keyCode < 96 || event.keyCode>105)){

                event.preventDefault()
            }
        }


    })
})