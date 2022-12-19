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

        var arrName = ["felix", "jeremy", "vionita", "silvana", "vivi", "jessica", "renaldy", "roger", "cryl", "stanley"];

        for (let i = 0; i < arrName.length; i++) {
            if (arrName[i] === nama.value.toLowerCase() && "gas" === pass.value) {
                alert("Selamat datang " + nama.value);
                $(".user-verif").fadeOut(500);
                $(".avatar").delay(500).fadeIn(500);

                var nama_orang = "<h2>" +arrName[i]+"</h2>"
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

                $(".avatar").append(temp, nama_orang);
            

                $(".avatar").delay(1500).fadeOut(500);
                $(".fitur").delay(3000).fadeIn(500);
                $("#append-img-user").after(temp);
                document.getElementById("user-names").innerHTML = nama_orang;
                $("body").addClass("background-body");
                return;
            }
        }
        alert("Nama atau password tidak ditemukan!")
    })
});