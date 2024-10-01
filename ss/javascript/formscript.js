function validate(event)
{

    event.preventDefault();
    var errorMessage=document.getElementById('error')
    error.innerHTML=''

    var name=document.getElementById('name').value
    var email=document.getElementById('email').value
    var phoneNumber=document.getElementById('tel').value
    var password=document.getElementById('password').value
    var confirmPassword=document.getElementById('confirmPassword').value
    var age=document.getElementById('age').value
    var address=document.getElementById('address').value

    var country=document.getElementById('region').value
    
    var gender=document.querySelector('input[name="gender"]:checked')
    var terms=document.querySelector('input[name="checkbox"]:checked')
    

    var validity=true
    //cek nama
    if(name.length<5){
        alert('Name must be at least 5 characters')
        validity=false
    }
    if(name.length>30){
        alert('Name is too long!')
        validity=false
    }
    
    //cek email
    if(email=="")
    {
        alert('Please fill in the email address.')
        validity=false
    }
    else
    {
        if(emailvalidity(email)==false)
        {
            alert('Please fill in the correct email address.')
            validity=false
        }
        
    }

    //cek telp
    if(phoneNumber=="")
    {
        alert('Please fill in your phone number.')
    }
    else
    {
        if(phonenumbervalidity(phoneNumber)==false)
        {
            validity=false
        }
    }
    //cek pwd
    
    if(password=="")
    {
        alert('Please fill in your password.')
        validity=false
    }
    else
    {
        if(password.length<8)
        {
            alert('Password length must be at least 8 characters.')
            validity=false
        }
        else if(passwordvalidity(password)==false)
        {
            alert('Password must contain capital letter and numbers, without symbols.')
            validity=false
        }
        else if(confirmPassword!=password)
        {
        alert('Confirm Password must be the same as Password.')
        validity=false
        }
    }

    //confirm pwd
    
    //age
    if(age>150)
    {
        alert('Please enter the correct age.')
        validity=false
    }
    if(age<18)
    {
        alert('Age must be at least 18 years old.')
        validity=false
    }
    //cek addressbox
    if(address=="")
    {
        alert('Address must not be empty.')
        validity=false
    }
    //cek terms & condition
    if(terms==null)
    {
        alert('Please accept terms and condition.')
        validity=false
    }
    //cek gender
    if(gender==null)
    {
        alert('Please choose a gender.')
        validity=false
    }
    //cek region
    if(region=='')
    {
        alert('Please select a region.')
        validity=false
    }
    
    if(validity==false)
    {
        errorMessage.innerHTML='Please fill in the form correctly'
    }
    else
    {
        var yesno = confirm("Do you want to submit the form?");

        if(yesno) 
        {
            alert('Form Submitted!')
            window.location.href="membership.html";
        } 
        else
        {
        
        }

        
    }

}

function passwordvalidity(password)
{
        var huruf=false
        var capital=false
        var angka=false
        var simbol=false

        for (let index = 0; index < password.length; index++)
        {
            if(password[index]>='a'&&password[index]<='z')//cek huruf
            {
                huruf=true
            }
            else if(password[index]>='A'&&password[index]<='Z')//cek capital
            {
                capital=true
                huruf=true
            }
            else if(password[index]>='0'&&password[index]<='9')//cek angka
            {
                angka=true
            }
            else//adanya simbol
            {
                simbol=true
            }   
        }
        if(simbol==true)
        {
            return false
        }
        else if(angka==false||huruf==false)
        {
            return false
        }

        return true
}

function phonenumbervalidity(phoneNumber)
{
    if(phoneNumber.length<10)
    {
        alert('Phone number is too short!')
        return false
    }
    for (let index = 1; index < phoneNumber.length; index++)
    {
        if(phoneNumber[index]<"0"||phoneNumber>"9")
        {
            alert('Phone number can only contain number!')
            return false
        }
    }
    if((phoneNumber[0]!="+")&&(phoneNumber[0]<"0"||phoneNumber[0]>"9"))
    {
        alert('Phone number format is incorrect!')
        return False
    }
    return true
}

function emailvalidity(email)
{
    var len=email.length
    //cek ujung @
    if(email[len-1]=='@' || email[0]=='@')
    {
        return false
    }
    //cek ujung .
    if(email[len-1]=='.' || email[0]=='.')
    {
        return false
    }

    var a=0
    var dot=0
    for (let index = 0; index < len; index++)
    {
        
        if(email[index]=='@')
        {
            a+=1
        }
        if(email[index]=='.')
        {
            dot+=1
        }
        //email g bole spasi
        if(email[index]==" ")
        {
            return false
        }
        // @ & . g bole berdekatan (.. atau @@)
        if(email[index]=='@')
        {
            
            if(email[index+1]=='@'||email[index-1]=='@')
            {
                
                return false
            }
            if(email[index+1]=='.'||email[index-1]=='.')
            {
                
                return false
            }
            
        }
        if(email[index]=='.')
        {
            if(email[index+1]=='@'||email[index-1]=='@')
            {
                
                return false
            }
            if(email[index+1]=='.'||email[index-1]=='.')
            {
                
                return false
            }
        }
    }
    if(dot<1||a<1)
    {
        
        return false
    }

    return true
}