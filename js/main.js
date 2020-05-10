var pageCounter = 1;
var animalContainer = document.getElementById('animal-info');
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3){
    btn.classList.add('hide-me');
  }
});

function likesToString(dataList){
  out = '';
  for (j = 0; j < dataList.length; j++){
    if (j == 0){
      out += dataList[j];
    } else {
      out += " and " + dataList[j];
    }
  }
  return out;
}

function renderHTML(data){
  var htmlString = '';

  for (i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    htmlString += likesToString(data[i].foods.likes);
    htmlString += ' and dislikes ' + likesToString(data[i].foods.dislikes);
    htmlString += '.</p>'
  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
