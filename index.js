function getFirstSelector(selector) {
    var element = document.querySelector(selector);
    return element;
}

function nestedTarget() {
  var target = document.querySelector('#nested .target')
  return target;
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
for (let i = 0, l = rankedLists.length; i < l; i++) {
  rankedLists[i].innerHTML = (i + n).toString();
}
}

function deepestChild() {
var  element = document.querySelector('#grand-node div div div div');
  return element;
}
