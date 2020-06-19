// function greeter()
// {
//     alert("Account Created successfully");


// }

function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }


  var x = document.forms["myForm"]["password"].value;
  if (x == "") {
    alert("password must be filled out");
    return false;
  }

  var x = document.forms["myForm"]["address"].value;
  if (x == "") {
    alert("address must be filled out");
    return false;
  }

  var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("name must be filled out");
    return false;
  }


  var x = document.forms["myForm"]["mobile"].value;
  if (x == "") {
    alert("mobile number must be filled out");
    return false;
  }


  var x = document.forms["myForm"]["zip"].value;
  if (x == "") {
    alert("zip code must be filled out");
    return false;
  }

}