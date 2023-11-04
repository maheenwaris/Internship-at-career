// countdown
let valueDisplay = document.querySelectorAll(".num");
let interval = 80;
valueDisplay.forEach((valueDisplays) => {
    let startvalue = 0;
    let endvalue = parseInt(valueDisplays.getAttribute('data-val'));
    console.log(endvalue);
    let duration = Math.floor(interval / endvalue);
    let counter = setInterval(function () {
        startvalue += 1;
        valueDisplays.textContent = startvalue;
        if(startvalue==endvalue){
            clearInterval(counter)
        }
    }, duration)
});


// password
const passwordEle = document.getElementById('password');
const toggleEle = document.getElementById('toggle');

toggleEle.addEventListener('click', function () {
    const type = passwordEle.getAttribute('type');
    passwordEle.setAttribute(
    'type',
    type === 'password' ? 'text' : 'password'
    );
});


// testimonial"
$(document).ready(function () {
    $("#owl-example").owlCarousel({
    itemsDesktop: [1499, 3],
    itemsDesktopSmall: [1199, 2],
    itemsTablet: [899, 2],
    itemsMobile: [599, 1],
    navigation: true,
    navigationText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
});
});