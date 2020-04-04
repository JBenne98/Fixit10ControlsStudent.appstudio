req=''


btnFav.onclick=function(){
  ChangeForm(favFoods)
}

btnLog.onclick=function(){
  req=Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + iptNetID.value + "&j_password=" + iptPassword.value)

if (req.status==200) { //everything worked.
    lblResponse.hidden=false
    lblResponse.value="Your LDAP return code was " + req.responseText
    //1 good 0 bad
      if(req.responseText==1){
        ChangeForm(favFoods)
    } else {
        lblResponse.value='Invalid Login Information'
      }
  } else {
    //had a problem with the AJAX request.
    lblResponse.hidden=false;
    lblResponse.value="Error: " + req.status;
}


}
