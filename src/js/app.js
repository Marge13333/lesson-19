const form = document.querySelector('form'),
  Number= document.querySelector("#number"),
  passwordInput = document.querySelector("#password"),
  passwordRepeatInput = document.querySelector("#repeat-password");



    function chackNumber(){
        const numbValue = Number.value;
        if (numbValue.length < 9 ) {
            Number.parentElement.querySelector(".message").innerText =
                "The number must contain 9 digits";
            Number.classList.remove("strong");
            Number.classList.add("weak");
            return false;
        }else if (numbValue.length === 9){
            Number.parentElement.querySelector(".message").innerText =
                "";
            Number.classList.add("strong");
            Number.classList.remove("weak");
            return true
        }
      }


    function chackPassword() {
        const passValue = passwordInput.value;
        if(passValue.length < 8){
            passwordInput.parentElement.querySelector(".message").innerText =
			"the password is weak";
            passwordInput.classList.add("weak");
            passwordInput.classList.remove("strong");
            return false;
        }else if(passValue.length <= 8){
            passwordInput.parentElement.querySelector(".message").innerText = "";
            passwordInput.classList.remove("weak");
		    passwordInput.classList.add("strong");
            return true;
        } 
    }
    function checkPasswordRepeat(){

        if(passwordInput == ""){
            passwordRepeatInput.parentElement.querySelector(".message").innerText = "isRepeatValid";
            passwordRepeatInput.classList.add("weak");
		    passwordRepeatInput.classList.remove("strong");
            return false;
        }else if(passwordInput != passwordRepeatInput){
            passwordRepeatInput.parentElement.querySelector(".message").innerText = "password don't match";
            passwordRepeatInput.classList.add("weak");
		    passwordRepeatInput.classList.remove("strong");
            return false;
        }else if(passwordInput == passwordRepeatInput){
            passwordRepeatInput.parentElement.querySelector(".message").innerText = "password match";
            passwordRepeatInput.classList.remove("weak");
		    passwordRepeatInput.classList.add("strong");
            return true;
        }
    }

    passwordRepeatInput.addEventListener("input", checkPasswordRepeat);
    passwordInput.addEventListener("input", chackPassword);
    Number.addEventListener("input", chackNumber );

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const isEmailValid = checkEmail();
	const isPasswordValid = chackPassword();
    const isRepeatValid = checkPasswordRepeat();
	if (isEmailValid && isPasswordValid && isRepeatValid) {
		form.reset();
	}
});

  
