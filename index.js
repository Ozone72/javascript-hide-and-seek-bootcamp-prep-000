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
  //select the element with id #grand-node, and then call querySelectorAll to create a NodeList
  let sel = document.getElementById('grand-node').querySelectorAll('div');
  let last = sel.length-1; //set to last element in the NodeList
  return (sel[last]); //return the last element in NodeList sel
}
