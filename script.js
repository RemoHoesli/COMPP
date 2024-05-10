document.addEventListener('DOMContentLoaded', function () {

 /*   const root = document.documentElement;
    const gradient_1 = 0.7; const gradient_2 = 0.7; const gradient_3 = 0.7; const gradient_4 = 0.7; 

    var timer = setInterval(changeGradient1,1000);
    function changeGradient1() {
        change_1 = Math.random()*0.1-0.05;
        change_2 = Math.random()*0.1-0.05;
        change_3 = Math.random()*0.1-0.05;
        change_4 = Math.random()*0.1-0.05;
        root.style.setProperty('--gradient1', gradient_1+change_1);
        root.style.setProperty('--gradient2', gradient_2+change_2);
        root.style.setProperty('--gradient3', gradient_3+change_3);
        root.style.setProperty('--gradient4', gradient_4+change_4);
    }
*/
    


    document.getElementById("button").addEventListener("click", function() {
        const opa = document.getElementById("opa");
        const video = document.getElementById("video");
        const sound = document.getElementById("sound");
        button.style.transition = "2s";
        button.style.opacity = "0%";
        opa.style.transition = "2s";
        opa.style.opacity = "0%";
        //video.play();
        sound.volume = 0.2;
        //sound.play();
    });

});