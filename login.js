function login(callback) {
    var uname = document.getElementById("uname");
    var password = document.getElementById("password");
    if (uname.value == "admin" && password.value == "12345") {
        callback();
    }
    else {
        alert("Invalid login credentials!!");
        return false;
    }
}

function redirect() {
    document.getElementById("login").action = "todo.html";
}