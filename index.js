function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function deepestChild(){
  let sel = document.querySelectorAll('#grand-node')
  console.log(sel)
}

deepestChild()
