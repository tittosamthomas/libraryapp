
              
function validate()
{
    let email=document.getElementById('email').value;
                //value enter in text box is now in this email
    let label = document.getElementById('check');
                //  
    let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,5})?$/;
                //regular expression of email validation
                //yourname@domain.extension.extension
    
                if (regexp.test(email))
                {
                    label.innerHTML="Valid";
                    label.style.color = "Green";
                    label.style.visibility="visible";
                    return true;

                }
                else
                {
                    label.innerHTML="invalid";
                    label.style.color = "Red";
                    label.style.visibility="visible";
                    return false;
                }

}


