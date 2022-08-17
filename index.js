function validation() {
    
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let f_name = document.getElementById("fname").value;
    let l_name = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    let fname_text = '', lname_text = '', pass_text = '';
    if (f_name === '') {
        fname_text = "First Name cannot be empty";
        document.getElementById("f_name_error").innerHTML = `<span style="color: hsl(0, 100%, 74%);">${fname_text}</span><img src="images/icon-error.svg" alt="icon-error">`;
        document.getElementById("fname").style.borderColor = 'hsl(0, 100%, 74%)';
    }

    if (l_name === '') {
        lname_text = "Last Name cannot be empty";
        document.getElementById("l_name_error").innerHTML = `<span style="color: hsl(0, 100%, 74%);">${lname_text}</span><img src="images/icon-error.svg" alt="icon-error">`;
        document.getElementById("lname").style.borderColor = 'hsl(0, 100%, 74%)';
    }

    if (password === '') {
        pass_text = "Password cannot be empty";
        document.getElementById("password_error").innerHTML = `<span style="color: hsl(0, 100%, 74%);">${pass_text}</span><img src="images/icon-error.svg" alt="icon-error">`;
        document.getElementById("password").style.borderColor = 'hsl(0, 100%, 74%)';
    }

    if (email.match(mailformat)) {
        let email_text = "Looks like this is not an email";
        document.getElementById("email_error").innerHTML = `<span style="color: hsl(0, 100%, 74%);">${email_text}</span><img src="images/icon-error.svg" alt="icon-error">`;
        document.getElementById("email").style.borderColor = 'hsl(0, 100%, 74%)';
    }
   
}