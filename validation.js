// function for registration data validation

function register_validate() {

    // getting values from textboxes and date picker
    var email_address = document.getElementById("email_address").value;
    var email_address_format = /([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,10})(.[a-z]{2,10})?/;

    var username = document.getElementById("uname").value;

    // username: 8-20 characters long, no _ and/or . at beginning or at the end, alphanumeric characters
    var username_format = /^(?=.{8,20}$)(?![_.])[a-zA-Z0-9._]+(?<![_.])$/;

    var date_of_birth = document.getElementById("dob");

    var password = document.getElementById("psw").value;
    var confirm_password = document.getElementById("confirm_psw").value;

    // password: atleast 8 characters, one number and one alphabet
    var password_format = /^(?=.*[A-Za-z.#$])(?=.*\d)[A-Za-z\d.#$]{8,}$/;

    var mob_no = document.getElementById("mob_no").value;

    // phone_number: 10 digits, 1st digit should start with either 7, 8 or 9
    var phn_format_personal = /^[789]{1}[0-9]{9}$/;

    var pet_breed = document.getElementById("pet_breed");
    var pet_age = document.getElementById("pet_age");

    // finding which radio button is selected (branch)
    var sex_selected = "";
    var temp = document.getElementsByName("sex");
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].checked == true)
            sex_selected = temp[i].value;
    }

    // finding which dropdown option is selected (pet owned)
    var pet_selected = "";
    var a = document.getElementById("pet_owned");
    pet_selected = a.options[a.selectedIndex].value;

    // finding which checkboxes are selected (T&C and Optional email notifications)
    var option_values = document.getElementsByName("checkbox_val");
    var optn = "";
    for (var i = 0; i < option_values.length; i++) {
        if (option_values[i].checked == true)
            optn = optn + " " + option_values[i].value;
    }

    // finding which dropdown option is selected (robot test)
    var robot_test = "";
    var b = document.getElementById("robot_test");
    robot_test = b.options[b.selectedIndex].value;

    // Validating the details

    if (email_address_format.test(email_address) == false) {
        alert("Kindly enter a valid email address!");
        return false;
    }
    else if (username_format.test(username) == false) {
        alert("Kindly enter a valid username!");
        return false;
    }
    else if (password_format.test(password) == false) {
        alert("Kindly enter a proper password!");
        return false;
    }
    else if (confirm_password != password) {
        alert("Passwords don't match, Kindly re-enter!");
        return false;
    }
    else if (date_of_birth.value == "") {
        alert("Kindly select the birth date!");
        return false;
    }
    else if (sex_selected == "") {
        alert("Kindly select your sex!");
        return false;
    }
    else if (phn_format_personal.test(mob_no) == false) {
        alert("Kindly enter a valid mobile number!");
        return false;
    }
    else if (pet_selected == "") {
        alert("Kindly select the pet that you own!");
        return false;
    }
    else if (pet_breed.value.trim() == "") {
        alert("Kindly enter the breed of the pet that you own!");
        return false;
    }
    else if (pet_age.value.trim() == "") {
        alert("Kindly enter the age of the pet that you own!");
        return false;
    }
    else if (robot_test == "") {
        alert("Kindly tell whether you are a robot or not!");
        return false;
    }
    else if (optn == "") {
        alert("Kindly tick atleast the Terms and Conditions checkbox!");
        return false;
    }
    else {
        alert("Form validated successfully!");
        return true;
    }
}

// function for validation of entity data insertion

function entity_validate () {
    var prod_id = document.getElementById("prod_id");
    var prod_name = document.getElementById("prod_name");
    var pet_class = document.getElementById("pet_class");
    var pet_breed = document.getElementById("pet_breed");
    var price = document.getElementById("price");
    var mfgd_date = document.getElementById("mfgd_date");
    var exp_date = document.getElementById("exp_date");
    var seller_name = document.getElementById("seller_name");

    if (prod_id.value.trim() == "") {
        alert("Kindly enter the product id!");
        return false;
    }
    else if (prod_name.value.trim() == "") {
        alert("Kindly enter the product's name!");
        return false;
    }
    else if (pet_class.value.trim() == "") {
        alert("Kindly enter the pet class!");
        return false;
    }
    else if (pet_breed.value.trim() == "") {
        alert("Kindly enter the pet breed!");
        return false;
    }
    else if (price.value.trim() == "") {
        alert("Kindly enter the product price!");
        return false;
    }
    else if (mfgd_date.value.trim() == "") {
        alert("Kindly enter the product manufacturing date!");
        return false;
    }
    else if (exp_date.value.trim() == "") {
        alert("Kindly enter the product expiry date!");
        return false;
    }
    else if (seller_name.value.trim() == "") {
        alert("Kindly enter the seller's name!");
        return false;
    }
    else {
        alert("Data validated successfully!");
        return true;
    }
}

function login_validate() {
    var username = document.getElementById("uname");
    var password = document.getElementById("psw");

    if (username.value.trim() == "") {
        alert("Kindly enter the username!");
        return false;
    }
    else if (password.value.trim() == "") {
        alert("Kindly enter a password!");
        return false;
    }
    else {
        alert("Login Successful. Welcome to the Furry Friends fam!");
        return true;
    }
}