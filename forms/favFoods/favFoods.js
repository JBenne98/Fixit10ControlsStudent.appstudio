let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

btnDV.onclick=function(){
  ChangeForm(dessertVoting)
}

favFoods.onshow=function(){
  lstFavFoods.clear()
  for (i=0; i<=goodFoods.length-1; i++)
    lstFavFoods.addItem(goodFoods[i])
}

lstFavFoods.onclick=function(choice){
  if (typeof(choice)=='object') {
      return
} else {
      let optio=NSB.$('lstFavFoods_'+choice).textContent
      lblFavFoods.value=(`You picked ${optio}-that is a great choice!`)
  }
}
