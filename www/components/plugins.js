// This is a JavaScript file

$(document).on("click", "#camera", function(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    
    crossOriginIsolated: true,
    saveToPhotoAlbum: true
     });

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
});

