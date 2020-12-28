//Function to print the timer and the browser on the website.

var timerVar = setInterval(countTimer, 1000);           //For time
var totalSeconds = 0;                                   //For seconds
var sBrowser, br = navigator.userAgent;                 //For browser
function countTimer() {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds /3600);
    var minute = Math.floor((totalSeconds - hour*3600)/60);
    var seconds = totalSeconds - (hour*3600 + minute*60);
    if(hour < 10)
        hour = "0"+hour;
    if(minute < 10)
        minute = "0"+minute;
    if(seconds < 10)
        seconds = "0"+seconds;

    //If-else ladder to determine the browser.
    
    if(br.indexOf("Firefox") > -1)
        sBrowser = "Mozilla Firefox";
    else if (br.indexOf("SamsungBrowser") > -1)
        sBrowser = "Samsung Internet";
    else if (br.indexOf("Opera") > -1 || br.indexOf("OPR") > -1)
        sBrowser = "Opera";
    else if (br.indexOf("Trident") > -1)
        sBrowser = "Microsoft Internet Explorer";
    else if (br.indexOf("Edge") > -1)
        sBrowser = "Microsoft Edge";
    else if (br.indexOf("Chrome") > -1)
        sBrowser = "Google Chrome or Chromium";
    else if (br.indexOf("Safari") > -1)
        sBrowser = "Apple Safari";
    else
        sBrowser = "unknown";

    document.getElementById("browserAndTimer").innerHTML ="Welcome! You are using " + sBrowser + " and you are on this page since " + hour + ":" + minute + ":" + seconds + " minutes.";
}

// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

//Function to validate the form.
function validateForm() {
    // Retrieving the values of form elements 
    var firstName = document.registrationForm.firstName.value;
    var lastName = document.registrationForm.lastName.value;
    var email = document.registrationForm.email.value;
    var mobile = document.registrationForm.mobile.value;
    var dateOfBirth = document.registrationForm.dateOfBirth.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    
	// Defining error variables with a default value
    var firstNameErr = lastNameErr = emailErr = mobileErr = dateOfBirthErr = true;
    
    // Validate name
    if(firstName == "") {
        document.getElementById("firstName").className = document.getElementById("firstName").className + " inputError"; // this removes the error class
        printError("firstNameErr", "Please enter your first name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstName) === false) {
            document.getElementById("firstName").className = document.getElementById("firstName").className + " inputError"; // this removes the error class
            printError("firstNameErr", "Please enter a valid first name");
        } else {
            document.getElementById("firstName").className = document.getElementById("firstName").className.replace(" inputError", ""); // this removes the error class
            printError("firstNameErr", "");
            firstNameErr = false;
        }
    }
    // Validate name
    if(lastName == "") {
        document.getElementById("lastName").className = document.getElementById("lastName").className + " inputError"; // this removes the error class
        printError("lastNameErr", "Please enter your last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastName) === false) {
        document.getElementById("lastName").className = document.getElementById("lastName").className + " inputError"; // this removes the error class
            printError("lastNameErr", "Please enter a valid last name");
        } else {
            document.getElementById("lastName").className = document.getElementById("lastName").className.replace(" inputError", ""); // this removes the error class
            printError("lastNameErr", "");
            lastNameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        document.getElementById("email").className = document.getElementById("email").className + " inputError"; // this removes the error class
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            document.getElementById("email").className = document.getElementById("email").className + " inputError"; // this removes the error class
            printError("emailErr", "Please enter a valid email address");
        } else{
            document.getElementById("email").className = document.getElementById("email").className.replace(" inputError", ""); // this removes the error class
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        document.getElementById("mobile").className = document.getElementById("mobile").className + " inputError"; // this removes the error class
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            document.getElementById("mobile").className = document.getElementById("mobile").className + " inputError"; // this removes the error class
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            document.getElementById("mobile").className = document.getElementById("mobile").className.replace(" inputError", ""); // this removes the error class
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate date of birth
    if(dateOfBirth == "") {
        document.getElementById("dateOfBirth").className = document.getElementById("dateOfBirth").className + " inputError"; // this removes the error class
        printError("dateOfBirthErr", "Please enter a valid date");
    } else {
        document.getElementById("dateOfBirth").className = document.getElementById("dateOfBirth").className + " inputError"; // this removes the error class
        var regex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
        if(regex.test(dateOfBirth) === false) {
            printError("dateOfBirthErr", "Please enter in dd-mm-yyyy format");
        } else{
            document.getElementById("dateOfBirth").className = document.getElementById("dateOfBirth").className.replace(" inputError", ""); // this removes the error class
            printError("dateOfBirthErr", "");
            dateOfBirthErr = false;
        }
    }
    
    // Prevent the form from being submitted if there are any errors
    if((firstNameErr || lastNameErr || emailErr || mobileErr || dateOfBirthErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + firstName + " " + lastName + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Date Of Birth: " + dateOfBirth + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};







function showSubReading(){
    if(document.querySelector('#reading:checked') != null)
        document.getElementById('subReading').style.display = "contents";
    else
        document.getElementById('subReading').style.display = "none";
}