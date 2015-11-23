$(document).ready(function () {
    $('.my-loader').fakeLoader({
        timeToHide: 1400, //Time in milliseconds for fakeLoader disappear
        zIndex: 999, // Default zIndex
        spinner: "spinner4", //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
        bgColor: "#2fbc71", //Hex, RGB or RGBA colors
//        imagePath: "/images/fakeLoader/hotline_bling_dribbble.gif" //If you want can you insert your custom image
    });
});
