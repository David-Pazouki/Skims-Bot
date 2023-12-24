const delay = ms => new Promise(res => setTimeout(res,ms));

const DelayFunction = async () => {
    await delay(5000);

    window.location.href = 'destination.html';
}


function displayRadioValue() {
    var ele_cup = document.getElementsByName('cup_size');
    for (i = 0; i < ele_cup.length; i++) {
        if (ele_cup[i].checked) {
            var cup_result = ele_cup[i].value;
            
        }

    }

    var elem_band = document.getElementsByName('options2');
    for (j = 0; j < elem_band.length; j++) {
        if (elem_band[j].checked) {
            var band_result = elem_band[j].value;
            
        }
    }

    var elem_color = document.getElementsByName('options');
    for (x = 0; x < elem_color.length; x++) {
        if (elem_color[x].checked) {
            var color_result = elem_color[x].value;

        }

    }

    var params = {
        cup: cup_result,
        band: band_result,
        color: color_result
    }

    const serviceID = "service_nmeupq8";
    const templateID = "template_oz73m8e";


    emailjs.send(serviceID, templateID, params).then((res) => {
        console.log(res);
    })
    .catch(err=>console.log(err));


    DelayFunction();

}







