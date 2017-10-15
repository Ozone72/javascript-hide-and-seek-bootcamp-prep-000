function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(let i = 0; i<lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n;
  }
  return lis
}

function deepestChild(){
  let sel = document.getElementById('grand-node').querySelectorAll('div');
  let last = sel.length-1;
  return (sel[last]);
}
