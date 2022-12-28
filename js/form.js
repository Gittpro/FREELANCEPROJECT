$(document).ready (function () {  
 $('#first_form').submit (function (e) {  
    e.preventDefault();
    var first_name = $('#first_name').val();  
    var last_name = $('#last_name').val();  
    var email = $('#email').val();  
var number = $('#number').val();
var company = $('#company').val();
var region = $('#region').val();
  $(".error").remove();
if (first_name.length < 1) {  
      $('#first_name').after('<span class="error">This field is required</span>');  
    }  else {  
      var regEx = /^[A-Za-z]+$/;  
      var firstName = regEx.test(first_name);  
      if (!firstName) {  
        $('#first_name').after('<span class="error">NOT VALID</span>');
        return false;}
        else{
          console.log(first_name);      
        } }
    if (last_name.length < 1) {  
      $('#last_name').after('<span class="error">This field is required</span>');  
    }  else {  
      var regEx = /^[A-Za-z]+$/;  
      var lastName = regEx.test(last_name);  
      if (!lastName) {  
        $('#last_name').after('<span class="error">NOT VALID</span>');  
        return false;}else{
          console.log(last_name); 
        } }
    if (email.length < 1) {  
      $('#email').after('<span class="error">This field is required</span>');  
    } else {  
      var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
      var validEmail = regEx.test(email);  
      if (!validEmail) {  
        $('#email').after('<span class="error">Enter a valid email</span>');  
        return false;}else{
          console.log(email);
        }
    }
    if (number.length < 1) {  
      $('#number').after('<span class="error">This field is required</span>');  
    } else {  
      var regEx = /^[0-9]{12}$/;  
      var num1 = regEx.test(number);  
      if (!num1) {  
        $('#number').after('<span class="error">NOT VALID</span>');  
      return false;}else{
        console.log(number);
      } }
    if (company.length < 1) {  
      $('#company').after('<span class="error">This field is required</span>');  
    }  else {  
      var regEx = /^\w[\w.\-#&\s]*$/;  
      var namecompany = regEx.test(company);  
      if (!namecompany) {  
        $('#company').after('<span class="error">NOT VALID</span>');
      return false;}else{
        console.log(company);
      } }
      if(region==""){
      $('#region').after('<span class="error">NOT VALID</span>');
      return false;
      }else{
        console.log(region);
      }
  });  
  
  $('form[id="second_form"]').validate({  
    rules: {  
      fname: {
        required:true,
    first_name:true,},

      lname: {
        required:true,
    last_name:true,},

    Nnum: {
        required:true,
    number:true,},

      user_email: {  
        required: true,  
        email: true,  
      },
      name_company: {  
        required: true,  
        company: true,  
      },
       name_region:{
        required:true,
        region:true,
       }
    },  
    messages:{
      fname: 'Enter a valid name',  
      lname: 'This field is required',
      Nnum:  'This field is required',
      user_email: 'Enter a valid email',   
      name_company: 'Enter company name',
      name_region: 'Enter region name',
    },
    submitHandler: function(form){
      form.submit();
    }
  }); 
});