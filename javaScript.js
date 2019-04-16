
function changeColor() {
  var a = document.getElementById('inputHeader');
  var b = document.getElementsByClassName('borderLupa')[0];
  a.style.background = 'white';
  b.style.background = 'white';


  document.addEventListener('click', function(event) {
    if (!a.contains(event.target) && !b.contains(event.target)){
      a.style.background="";
      b.style.background="";
    }

  });
}
function imgbell(){
    var img = document.getElementById('swichbells');
    var div = document.getElementsByClassName('bellHeader')[0];
    if (div.style.backgroundColor != 'rgb(34, 75, 122)' ) {
        div.style.backgroundColor = 'rgb(34, 75, 122)' ;
        img.src = 'images/whitebell.png' ;
    }
        else {
            div.style.backgroundColor = '';
            img.src = 'images/blackbell.png' ;
        }


  document.addEventListener('click', function(event) {
    if (!img.contains(event.target) && !div.contains(event.target))
    {
    img.src = 'images/blackbell.png';
    div.style.background = "";
  }
  });
}

function headMenu(){
    var arrow = document.getElementsByClassName('headMenuArrow1')[0];
    var div = document.getElementsByClassName('headMenu')[0];
    var menu = document.getElementsByClassName('hiddenMenu')[0];

    if (div.style.backgroundColor != 'rgb(34, 75, 122)' ) {
      arrow.style.borderColor = 'white' ;
      div.style.background = 'rgb(34, 75, 122)' ;
      menu.style.visibility = 'visible';
    }
        else {
          arrow.style.border = "" ;
          div.style.background ="";
            menu.style.visibility = "";;
        }

  document.addEventListener('click', function(event) {
    if (!arrow.contains(event.target) && !div.contains(event.target))
    {
      arrow.style.border = "" ;
      div.style.background ="";
        menu.style.visibility = "";
  }
  });
}



function status() {
  var statusPage = document.getElementById('statusPage');
  var status = document.getElementsByClassName('status')[0];
  alert(statusPage);
  statusPage.style.display = 'block';
  document.addEventListener('click', function(event) {
    if (!status.contains(event.target))
    {
      statusPage.style.display = '';
  }
  });
}


function setStatus() {
  var statusPage = document.getElementById('statusPage');
  var status = document.getElementsByClassName('status')[0];
  var statusMs = document.getElementsByClassName('statusMs')[0];
  var text = document.getElementById('input');
  var val = text.value;
  if(val != ''){
    statusMs.innerHTML = val;
  }
  else {
    statusMs.innerHTML = 'set a status message';
  }

      statusPage.style.display = '';
}


function hide() {
  var block = document.getElementsByClassName('aboutMe2')[0];
  var text = document.getElementById('hideBox');
  if(block.style.display != 'block'){
  block.style.display = 'block';
  text.innerHTML = 'Hide full information';
}
else {
  block.style.display = 'none';
  text.innerHTML = 'Show full information';
}
}
