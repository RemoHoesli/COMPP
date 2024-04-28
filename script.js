document.addEventListener('DOMContentLoaded', function () {


    document.getElementById("button").addEventListener("click", function() {
        const opa = document.getElementById("opa");
        const video = document.getElementById("video");
        const sound = document.getElementById("sound");
        button.style.transition = "2s";
        button.style.opacity = "0%";
        opa.style.transition = "2s";
        opa.style.opacity = "0%";
        video.play();
        sound.volume = 0.2;
        sound.play();
    });

});