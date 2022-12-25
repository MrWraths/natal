function playMusic(type, event) {

    var audio;

    if (type === "1") {
        audio = document.getElementById("1");
    } else if (type === "2") {
        audio = document.getElementById("2");
    } else if (type === "3") {
        audio = document.getElementById("3");
    } else if (type === "4") {
        audio = document.getElementById("4");
    } else if (type === "5") {
        audio = document.getElementById("5");
    } else if (type === "6") {
        audio = document.getElementById("6");
    } else if (type === "7") {
        audio = document.getElementById("7");
    } else if (type === "8") {
        audio = document.getElementById("8");
    }

    var play = ".play-" + type;
    var pause = ".pause-" + type;
    console.log(play);

    if (event === "play") {
        $(play).removeClass("active-button");
        $(pause).addClass("active-button");
        audio.play();
    } else {
        $(pause).removeClass("active-button");
        $(play).addClass("active-button");
        audio.pause();
    }
}

$("#home").hover(function () {
    $(".ph-house-bold").addClass("hidden-icon");
    $(".ph-house-fill").removeClass("hidden-icon");
}, function () {
    $(".ph-house-fill").addClass("hidden-icon");
    $(".ph-house-bold").removeClass("hidden-icon");
});

$("#chara").hover(function () {
    $(".ph-users-three-bold").addClass("hidden-icon");
    $(".ph-users-three-fill").removeClass("hidden-icon");
}, function () {
    $(".ph-users-three-fill").addClass("hidden-icon");
    $(".ph-users-three-bold").removeClass("hidden-icon");
});

$("#ost").hover(function () {
    $(".ph-music-note-bold").addClass("hidden-icon");
    $(".ph-music-note-fill").removeClass("hidden-icon");
}, function () {
    $(".ph-music-note-fill").addClass("hidden-icon");
    $(".ph-music-note-bold").removeClass("hidden-icon");
});

$("#news").hover(function () {
    $(".ph-newspaper-clipping-bold").addClass("hidden-icon");
    $(".ph-newspaper-clipping-fill").removeClass("hidden-icon");
}, function () {
    $(".ph-newspaper-clipping-fill").addClass("hidden-icon");
    $(".ph-newspaper-clipping-bold").removeClass("hidden-icon");
});


var nahidaAudio  = new Audio('Audio/Nahida - Genshin Impact Database - Honey Hunter World.wav');
var zhongliAudio = new Audio('Audio/Zhongli - Genshin Impact Database - Honey Hunter World.wav')
var raidenAudio = new Audio('Audio/Raiden Shogun - Genshin Impact Database - Honey Hunter World.wav')
var ventiAudio = new Audio('Audio/Venti - Genshin Impact Database - Honey Hunter World.wav');

$("#nahida").hover(function () {
    if(!$("#nahida").hasClass('played')) {
        nahidaAudio.play();
    }
}, function () {
    $("#nahida").addClass('played');
});

$("#zhongli").hover(function () {
    if(!$("#zhongli").hasClass('played')) {
        zhongliAudio.play();
    }
}, function () {
    $("#zhongli").addClass('played');
});

$("#raiden").hover(function () {
    if(!$("#raiden").hasClass('played')) {
        raidenAudio.play();
    }
}, function () {
    $("#raiden").addClass('played');
});

$("#venti").hover(function () {
    if(!$("#venti").hasClass('played')) {
        ventiAudio.play();
    }
}, function () {
    $("#venti").addClass('played');
});