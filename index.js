function fun() {
    var l = [];
    var n = $("#name").val();
    var e = $("#email").val();
    var p = $("#phone").val();
    var ph = $("#photo").val();
    var g = $('input[name="gender"]:checked').val();
    if (n == null || n == "") {
        alert("Name cannot be Empty");
        return false;
    }

    else if (e == null || e == "") {
        alert("Email cannot be Empty");
        return false;
    }

    else if (p == null || p == "") {
        alert("Phone number cannot be Empty");
        return false;
    }

    else if (ph == null || ph == "") {
        alert(" Image Link cannot be Empty");
        return false;
    }
    else if ((g[0].checked == false) && (g[1].checked == false)) {
        alert("Please select your Gender!");
        return false;
    }
    var selected = new Array();
    $("input[type=checkbox]:checked").each(function () {
        selected.push(this.value);
    });
    var k = '<div class=s1>' + '<table><tr><td><p class="p"><strong>Name </strong>:' + `${n}` + '</p><p class="p"><strong>Email </strong>: ' + `${e}` + '</p><p class="p"><strong>Phone</strong>:' + `${p}` + '</p><p class="p"><strong>Gender</strong> : ' + `${g}` + '</p><p class="p"><strong>Skills</strong> : ' + `${selected}` + '<td><img src="' + `${ph}` + '"></td></tr></table></div>';
    $('#ss').append(k);
    $("#fo").trigger("reset");
}

