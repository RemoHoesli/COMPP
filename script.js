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
    
    const opa = document.getElementById("opa");
    const circle = document.getElementById("circle");
    const smolcircle = document.getElementById("smolcircle");
    const jumpcircle = document.getElementById("jumpcircle");
    const hlin = document.getElementById("hlin");
    const hlhold = document.getElementById("hlhold");
    const hlout = document.getElementById("hlout");
    const video = document.getElementById("video");
    const sound = document.getElementById("sound");
    const buttonfree = document.getElementById("buttonfree");
    const buttonguided = document.getElementById("buttonguided");
    const buttonback = document.getElementById("buttonback");


    document.getElementById("buttonguided").addEventListener("click", function() {
        circle.style.animationPlayState = "running";
        smolcircle.style.animationPlayState = "running"; 
        jumpcircle.style.animationPlayState = "running";
        hlin.style.animationPlayState = "running";
        hlhold.style.animationPlayState = "running"; 
        hlout.style.animationPlayState = "running";
        buttonfree.style.transition = "1s";
        buttonfree.style.opacity = "0%";
        buttonfree.style.transform = "translatex(50vw)";
        buttonguided.style.transition = "1s";
        buttonguided.style.opacity = "0%";
        buttonguided.style.transform = "translatex(-50vw)";
        buttonback.style.opacity = "100%";
        opa.style.transition = "2s";
        opa.style.opacity = "0%";

        songArray = ["audio/audio1.mp3", "audio/audio2.mp3", "audio/audio3.mp3", "audio/audio4.mp3", "audio/audio5.mp3", "audio/audio6.mp3", "audio/audio7.mp3", "audio/audio8.mp3", "audio/audio9.mp3"];
        var num = Math.floor(Math.random() * songArray.length);
        var x = document.getElementById("sound");
        x.src = songArray[num]; 
        console.log("Song number: "+num);
     
        sound.volume = 0.1;
        sound.autoplay = true;
        sound.load();
        
               
    });

    document.getElementById("buttonfree").addEventListener("click", function() {
        circle.style.animationPlayState = "running";
        smolcircle.style.animationPlayState = "running"; 
        jumpcircle.style.animationPlayState = "running";
        hlin.style.animationPlayState = "running";
        hlhold.style.animationPlayState = "running"; 
        hlout.style.animationPlayState = "running";
        buttonfree.style.transition = "1s";
        buttonfree.style.opacity = "0%";
        buttonfree.style.transform = "translatex(50vw)";
        buttonguided.style.transition = "1s";
        buttonguided.style.opacity = "0%";
        buttonguided.style.transform = "translatex(-50vw)";
        buttonback.style.opacity = "100%";
        opa.style.transition = "2s";
        opa.style.opacity = "0%";

        songArray = ["audio/audio1.mp3", "audio/audio2.mp3", "audio/audio3.mp3", "audio/audio4.mp3", "audio/audio5.mp3", "audio/audio6.mp3", "audio/audio7.mp3", "audio/audio8.mp3", "audio/audio9.mp3"];
        var num = Math.floor(Math.random() * songArray.length);
        var x = document.getElementById("sound");
        x.src = songArray[num]; 
        console.log("Song number: "+num);
     
        sound.volume = 0.1;
        sound.autoplay = true;
        sound.load();       
    });

    document.getElementById("buttonback").addEventListener("click", function() {
        circle.style.animation = "none";
        smolcircle.style.animation = "none"; 
        jumpcircle.style.animation = "none";
        hlin.style.animation = "none";
        hlhold.style.animation = "none"; 
        hlout.style.animation = "none";

        circle.offsetHeight;
        smolcircle.offsetHeight;
        jumpcircle.offsetHeight;
        hlin.offsetHeight;
        hlhold.offsetHeight;
        hlout.offsetHeight;

        circle.style.animation = "circle 10s infinite ease paused";
        smolcircle.style.animation = "smolcircle 10s infinite ease paused"; 
        jumpcircle.style.animation = "jumpcircle 10s infinite ease paused";
        hlin.style.animation = "hlin 10s infinite ease paused";
        hlhold.style.animation = "hlhold 10s infinite ease paused"; 
        hlout.style.animation = "hlout 10s infinite ease paused";

        buttonfree.style.transition = "1s";
        buttonfree.style.opacity = "100%";
        buttonfree.style.transform = "translatex(0vw)";
        buttonguided.style.transition = "1s";
        buttonguided.style.opacity = "100%";
        buttonguided.style.transform = "translatex(0vw)";
        buttonback.style.transition = "1s";
        buttonback.style.opacity = "0%";
        opa.style.transition = "2s";
        opa.style.opacity = "100%";

        sound.pause();
    });

});