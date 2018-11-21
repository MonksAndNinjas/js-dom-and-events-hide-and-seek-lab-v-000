function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let nodeList = document.querySelectorAll('#grand-node div');
  let lastDiv = nodeList.length - 1;

  return nodeList[lastDiv];
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++) {
    let lis = rankedLists[i].querySelectorAll('li');

    for (let j = 0; j < lis.length; j++) {
      lis[j].innerHTML = parseInt(lis[j].innerHTML) + n;
    }
  }
}
