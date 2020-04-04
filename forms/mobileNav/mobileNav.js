
hmbMenu.onclick=function(choice){
  if (typeof(choice) == "object") {
   return
 } else {
    switch(choice){
  case 'Login':
    ChangeForm(loginCU)
    break
  case 'Favorite Foods':
    ChangeForm(favFoods)
    break
  case 'Dessert Voting':
    ChangeForm(dessertVoting)
    break
  case 'Describe Me':
    ChangeForm(describeYou)
    break
  case 'AB Favorite Exercises':
    ChangeForm(loginCU)
    break
    }
  }
}
