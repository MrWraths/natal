$(document).ready(function () {
    var pass = document.getElementById("getPass");

    $("#verifikasi").click(function () {
        $(".front").fadeOut('slow');
        $(".user-verif").delay(500).fadeIn(500);
    })

    $(".back").click(function () {
        $(".user-verif").fadeOut(500);
        $(".front").delay(500).fadeIn(500);
    })

    $(".unseen").click(function () {
        $(".unseen").addClass("hidden-eye");
        $(".seen").removeClass("hidden-eye");
        pass.type = "text";
    })

    $(".seen").click(function () {
        $(".seen").addClass("hidden-eye");
        $(".unseen").removeClass("hidden-eye");
        pass.type = "password";
    })

    $("#user-login").click(function () {
        var nama = document.getElementById("getName");

        var arrName = ["felix", "jeremy", "vionita", "silvana", "vivi", "jessica", "renaldy", "roger", "cryl", "stanley", "uni"];

        for (let i = 0; i < arrName.length; i++) {
            if (arrName[i] === nama.value.toLowerCase() && "gas" === pass.value) {
                alert("Selamat datang " + nama.value);
                $(".user-verif").fadeOut(500);
                $(".avatar").delay(500).fadeIn(500);

                var nama_orang = "<h2>" + arrName[i] + "</h2>"
                var temp;


                if ("felix" === nama.value.toLowerCase()) {
                    temp = "<img src=images/avatar09.png alt=>";
                }

                if ("jeremy" === nama.value.toLowerCase()) {
                    temp = "<img src=images/avatar03.png alt=>";
                }

                if ("vionita" === nama.value.toLowerCase()) {
                    temp = "<img src=images/avatar04.png alt=>";
                }

                if ("silvana" === nama.value.toLowerCase()) {
                    temp = "<img src=images/avatar02.png alt=>";
                }

                if ("vivi" === nama.value.toLowerCase()) {
                    temp = "<img src=images/avatar04.png alt=>";
                }

                if ("jessica" === nama.value.toLowerCase()) {
                    temp = "<img src=images/avatar04.png alt=>";
                }

                if ("renaldy" === nama.value.toLowerCase()) {
                    temp = "<img src=images/avatar01.png alt=>";
                }

                if ("roger" === nama.value.toLowerCase()) {
                    temp = "<img src=images/avatar01.png alt=>";
                }

                if ("cryl" === nama.value.toLowerCase()) {
                    temp = "<img src=images/avatar05.png alt=>";
                }

                if ("stanley" === nama.value.toLowerCase()) {
                    temp = "<img src=images/avatar03.png alt=>";
                }

                                if ("uni" === nama.value.toLowerCase()) {
                    temp = "<img src=images/avatar04.png alt=>";
                }

                $(".avatar").append(temp, nama_orang);


                $(".avatar").delay(1500).fadeOut(500);
                $(".fitur").delay(3000).fadeIn(500);
                $("#append-img-user").after(temp);
                document.getElementById("user-names").innerHTML = nama_orang;

                $(".fitur").addClass("background-body");


                var createDiv;
                var createLi;
                for (let l = 0; l < arrName.length; l++) {
                    if (arrName[l] === nama.value.toLowerCase()) {
                        if (l != 0) {
                            $(".append-friends").append("<li> <img src=images/avatar09.png alt=><div class=informasi><h3>Felix</h3><p>Universitas Hasanuddin</p></div></li>");
                        }
                        if (l != 1) {
                            $(".append-friends").append("<li> <img src=images/avatar03.png alt=><div class=informasi><h3>Jeremy</h3><p>Universitas Atmajaya Makassar</p></div></li>");
                        }
                        if (l != 2) {
                            $(".append-friends").append("<li> <img src=images/avatar04.png alt=><div class=informasi><h3>Vionita</h3><p>Bank Central Asia</p></div></li>");
                        }
                        if (l != 3) {
                            $(".append-friends").append("<li> <img src=images/avatar02.png alt=><div class=informasi><h3>Silvana</h3><p>Universitas Hasanuddin</p></div></li>");
                        }
                        if (l != 4) {
                            $(".append-friends").append("<li> <img src=images/avatar04.png alt=><div class=informasi><h3>Vivi</h3><p>Universitas Hasanuddin</p></div></li>");
                        }
                        if (l != 5) {
                            $(".append-friends").append("<li> <img src=images/avatar04.png alt=><div class=informasi><h3>Jessica</h3><p>Universitas Hasanuddin</p></div></li>");
                        }
                        if (l != 6) {
                            $(".append-friends").append("<li> <img src=images/avatar01.png alt=><div class=informasi><h3>Renaldy</h3><p>STMIK Kharisma</p></div></li>");
                        }
                        if (l != 7) {
                            $(".append-friends").append("<li> <img src=images/avatar01.png alt=><div class=informasi><h3>Roger</h3><p>Institut Teknologi Harapan Bangsa</p></div></li>");
                        }
                        if (l != 8) {
                            $(".append-friends").append("<li> <img src=images/avatar05.png alt=><div class=informasi><h3>Cryl</h3><p>Universitas Atmajaya Makassar</p></div></li>");
                        }
                        if (l != 9) {
                            $(".append-friends").append("<li> <img src=images/avatar03.png alt=><div class=informasi><h3>Stanley</h3><p>Universitas Atmajaya Makassar</p></div></li>");
                        }
                                                if (l != 10) {
                            $(".append-friends").append("<li> <img src=images/avatar04.png alt=><div class=informasi><h3>Uni</h3><p>Universitas Negeri Makassar</p></div></li>");
                        }
                    }
                }
                return;
            }
        }
        alert("Nama atau password tidak ditemukan!")
    })



    $(".countdown").click(function () {
        var data = $(this).attr("data-button");

        $(".fitur").fadeOut(500);
        $(".countdown-events").delay(500).fadeIn(500);
        if (data == "dinner") {
            $(".dinner-countdown").delay(500).fadeIn(500);
        } else if (data == "natal") {
            $(".natal-countdown").delay(500).fadeIn(500);
        } else if (data == "tahun-baru") {
            $(".tahunBaru-countdown").delay(500).fadeIn(500);
        }
    })

    $(".back-fitur").click(function () {
        $(".countdown-events").fadeOut(500);

        $(".dinner-countdown").fadeOut(500);
        $(".natal-countdown").fadeOut(500);
        $(".tahunBaru-countdown").fadeOut(500);

        $(".fitur").delay(500).fadeIn(500);
    })
});

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

const kalender = new Date();
let day = kalender.getDate();
let month = kalender.getMonth() + 1;
let year = kalender.getFullYear();

document.getElementById('tanggal').innerHTML = day + "/" + month + "/" + year;


// Set the date we're counting down to
var dinner = new Date("Dec 22, 2022 19:00:00").getTime();
var natal = new Date("Dec 25, 2022 00:00:00").getTime();
var newYear = new Date("Jan 01, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = dinner - now;
  var distance1 = natal - now;
  var distance2 = newYear - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer-dinner").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.getElementById("timer-natal").innerHTML = days1 + "d " + hours1 + "h "
  + minutes1 + "m " + seconds1 + "s ";

  document.getElementById("timer-tahunBaru").innerHTML = days2 + "d " + hours2 + "h "
  + minutes2 + "m " + seconds2 + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer-dinner").innerHTML = "DINNER TIME";
    document.getElementById("timer-natal").innerHTML = "Merry Christmas!";
    document.getElementById("timer-tahunBaru").innerHTML = "Happy New Year!";
  }
}, 1000);