function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
}

function deepestChild(){
  let sel = document.querySelectorAll('#grand-node')
  console.log(sel)
}

deepestChild()
