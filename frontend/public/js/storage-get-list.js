var storage = firebase.storage();
var storageRef = storage.ref();

var i = 0;
var max_img = 180;

storageRef.child('gallery/').listAll().then(function (result) {
    result.items.forEach(function (imageRef) {
        i++
        if (i <= max_img) {
            displayImage(i, imageRef);
        }
    });
});

function displayImage(image_num, images) {
    images.getDownloadURL().then(function (url) {
        let new_html = '';
        new_html += '<div class="photo img-' + image_num + '" onclick="setLargeImage(' + image_num + ')">';
        new_html += '<ion-icon name="ios-expand"></ion-icon>';
        new_html += '</div>'
        $('.image-gallery').append(new_html);
        $('.img-' + image_num + '').css("background-image", "url('" + url + "')");
    });
}

function setLargeImage(image_num) {
    let image = document.getElementsByClassName('img-' + image_num);
    document.getElementById('body-large-img').style.visibility = "visible";
    document.getElementById('body-large-img').style.opacity = "1";
    document.getElementById('large-img').style.backgroundImage = getComputedStyle(image[0]).backgroundImage;
    document.getElementById('large-img').style.width = '85vw';
    document.getElementById('large-img').style.height = '47.7vw';
}

function screenDefault() {
    document.getElementById('body-large-img').style.visibility = "hidden"
    document.getElementById('body-large-img').style.opacity = "0";
    document.getElementById('large-img').style.width = "8.5vw"
    document.getElementById('large-img').style.height = "4.8vw";
}
