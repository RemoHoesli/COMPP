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
    const headline = document.getElementById("headline");
    const hl = document.getElementById("hl");
    const hlin = document.getElementById("hlin");
    const hlhold = document.getElementById("hlhold");
    const hlout = document.getElementById("hlout");
    const video = document.getElementById("video");
    const sound = document.getElementById("sound");
    const guide = document.getElementById("guide");
    const buttonfree = document.getElementById("buttonfree");
    const buttonguided = document.getElementById("buttonguided");
    const buttonback = document.getElementById("buttonback");
    const footerguided = document.getElementById("footerguided");
    const footerfree = document.getElementById("footerfree");
    const guidetext = document.getElementById("guidetext");
    var IsGuide = 0;


    document.getElementById("buttonguided").addEventListener("click", function() {
        circle.style.animationPlayState = "running";
        smolcircle.style.animationPlayState = "running"; 
        jumpcircle.style.animationPlayState = "running";
        
        headline.style.transition = "0.5s";
        headline.style.opacity = "0%";
        buttonfree.style.transition = "1s";
        buttonfree.style.opacity = "0%";
        buttonfree.style.transform = "translatex(50vw)";
        buttonguided.style.transition = "1s";
        buttonguided.style.opacity = "0%";
        buttonguided.style.transform = "translatex(-50vw)";
        buttonback.style.opacity = "100%";
        opa.style.transition = "2s";
        opa.style.opacity = "0%";
        guidetext.style.transition = "1s";
        guidetext.style.opacity = "100%";
        IsGuide = 1;

        songArray = ["audio/audio1.mp3", "audio/audio2.mp3", "audio/audio3.mp3", "audio/audio4.mp3", "audio/audio5.mp3", "audio/audio6.mp3", "audio/audio7.mp3", "audio/audio8.mp3", "audio/audio9.mp3"];
        var num = Math.floor(Math.random() * songArray.length);
        var x = document.getElementById("sound");
        x.src = songArray[num]; 
        console.log("Song number: "+num);
     
        sound.volume = 0.1;
        sound.autoplay = true;
        sound.load();
        
        guide.volume = 0.6;
        guide.autoplay = true;
        guide.load();

        if (IsGuide == 1) {
            var timerun = 0;
            var timerId = setInterval(countdown, 500);

            function countdown() {
                guidetext.innerHTML = '';
                if (timerun >= 1) { guidetext.innerHTML = 'Welcome to your mindfulness practice'; }
                if (timerun >= 4) { guidetext.innerHTML = 'Before we begin'; }
                if (timerun >= 5.5) { guidetext.innerHTML = 'I invite you to take a moment to find a comfortable seated position'; }
                if (timerun >= 12.5) { guidetext.innerHTML = 'either on a chair or on the floor'; }
                if (timerun >= 15) { guidetext.innerHTML = ''; }
                if (timerun >= 17.5) { guidetext.innerHTML = 'Gently close your eyes'; }
                if (timerun >= 19.5) { guidetext.innerHTML = 'or soften your gaze if that feels more comfortable'; }
                if (timerun >= 23) { guidetext.innerHTML = ''; }
                if (timerun >= 25.5) { guidetext.innerHTML = 'Allow your body to relax'; }
                if (timerun >= 28) { guidetext.innerHTML = 'releasing any tension in your shoulders, neck, and jaw'; }
                if (timerun >= 32.5) { guidetext.innerHTML = 'Let your hands rest naturally on your lap'; }
                if (timerun >= 36) { guidetext.innerHTML = ''; }
                if (timerun >= 38.5) { guidetext.innerHTML = 'Begin to notice your breath'; }
                if (timerun >= 39.5) { 
                    hlin.style.animationPlayState = "running";
                    hlhold.style.animationPlayState = "running"; 
                    hlout.style.animationPlayState = "running";
                }
                if (timerun >= 41.5) { guidetext.innerHTML = 'the gentle rise and fall of your chest'; }
                if (timerun >= 44.5) { guidetext.innerHTML = 'There is no need to change anything, just observe'; }
                if (timerun >= 48) { guidetext.innerHTML = ''; }
                if (timerun >= 49.5) { guidetext.innerHTML = 'This time is for you'; }
                if (timerun >= 52) { guidetext.innerHTML = ''; }
                if (timerun >= 53) { guidetext.innerHTML = 'A time to be present, to breathe'; }
                if (timerun >= 57.5) { guidetext.innerHTML = 'and to simply be'; }
                if (timerun >= 61) { 
                    guidetext.style.opacity = '0%'; 
                    clearTimeout(timerId);
                }
                timerun += 0.5;
                console.log("timerun: "+timerun);

                if (IsGuide == 0) {
                    clearTimeout(timerId);
                    timerun = 0;
                    guidetext.innerHTML = '';
                }
            }
        }
    });

    document.getElementById("buttonfree").addEventListener("click", function() {
        circle.style.animationPlayState = "running";
        smolcircle.style.animationPlayState = "running"; 
        jumpcircle.style.animationPlayState = "running";
        hlin.style.animationPlayState = "running";
        hlhold.style.animationPlayState = "running"; 
        hlout.style.animationPlayState = "running";
        headline.style.transition = "0.5s";
        headline.style.opacity = "0%";
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

        textArray = ["Take a breather", "When are you taking time for yourself?", "Why are you hurrying?", "Take it easy", "Just chilling", "When do you feel most at ease?", "meditating...", "Clear your mind"];
        var numb = Math.floor(Math.random() * textArray.length);
        headline.innerHTML = textArray[numb];
        headline.style.transition = "1s";
        headline.style.opacity = "100%";
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
        guidetext.style.transition = "1s";
        guidetext.style.opacity = "0%";

        IsGuide = 0;
        sound.pause();
        guide.pause();
    });

    document.getElementById("buttonguided").addEventListener("mouseover", function() {  
        footerguided.style.transition = "0.3s";
        footerguided.style.opacity = "100%";
    });
    document.getElementById("buttonguided").addEventListener("mouseout", function() { 
        footerguided.style.transition = "0.1s"; 
        footerguided.style.opacity = "0%";
    });
    document.getElementById("buttonfree").addEventListener("mouseover", function() {  
        footerfree.style.transition = "0.3s";
        footerfree.style.opacity = "100%";
    });
    document.getElementById("buttonfree").addEventListener("mouseout", function() { 
        footerfree.style.transition = "0.1s"; 
        footerfree.style.opacity = "0%";
    });


});