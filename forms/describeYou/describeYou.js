btnFavEx.onclick=function(){
  ChangeForm(ABfavExercises)
}

rbuPersonality.onclick=function(){
  lblP.value=(`I would agree that you are a ${$('input[name=rbuPersonality]:checked').prop('value')} person too.`)
}
