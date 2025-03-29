function f() {
    var a = document.forms["myform"];
    var u = a.uname.value;
    var p = a.pword.value;

    if (u == "admin" && p == "108108") {
        alert("valid");
    }
    else {
        alert("invalid");
    }
}