
var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

ABfavExercises.onshow=function(){
  slcExercises.clear()
  for (i=0;i<=exercises.length-1; i++) {
        slcExercises.addItem(exercises[i])
  }
}

btnEnter.onclick=function(){
  let choices=''
  for(i=0; i<=slcExercises.text.length-1; i++){
    choices=choices +' '+ slcExercises.text[i]
  }
  mdlExe.toggle()
  if (choices=='situps plank' || 'plank situps'){
      mdlExe.toggle()
      mdlExe.value=(`You chose ${choices}`)
    } else {
      mdlExe.toggle()
      mdlExe.value=(`You did not chose the core exercises`)
    }
}

btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}

btnReturn.onclick=function(){
  mdlExe.toggle()
  ChangeForm(favExercises)
}
