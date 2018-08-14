var myVar;

function loaderFunction() {

    document.getElementById('afterLoad').style.display = "none";

    var animation = bodymovin.loadAnimation({
        container: document.getElementById('loading'), // Required
        path: '../assets/data.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "Loading", // Name for future reference. Optional.
    });

    myVar = setTimeout(showPage, 2000);
}

function showPage() {

    document.getElementById('loading_wrapper').style.display = "none";
    document.getElementById('afterLoad').style.display = "block";

}
