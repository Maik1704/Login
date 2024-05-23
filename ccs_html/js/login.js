const $submit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $visible = document.getElementById("visible");

document.addEventListener("change", (e)=>{
    if (e.target == $visible) {
        if ($visible.checked == true) $password.type = "text";
        else $password.type = "password";
    }
});

document.addEventListener("click", (e)=>{
    if (e.target === $submit) {
        if($password.value !== "" && $username.value !== ""){
            e.preventDefault();
            window.location.href = "home.html";
        }
    }
})