

function changeColor() {
  var a = document.getElementById('inputHeader');
  var b = document.getElementsByClassName('borderLupa')[0];
  var menu = document.getElementsByClassName('hiddenSearchMenu')[0];
  a.style.background = 'white';
  b.style.background = 'white';
  menu.style.visibility = 'visible'


  document.addEventListener('click', function(event) {
    if (!a.contains(event.target) && !b.contains(event.target)){
      a.style.background="";
      b.style.background="";
        menu.style.visibility = ''
    }

  });
}
function imgbell(){
    var img = document.getElementById('swichbells');
    var div = document.getElementsByClassName('bellHeader')[0];
    var menu = document.getElementsByClassName('events')[0];
    if (div.style.backgroundColor != 'rgb(34, 75, 122)' ) {
        div.style.backgroundColor = 'rgb(34, 75, 122)' ;
        img.src = 'images/whitebell.png' ;
        menu.style.visibility = 'visible';
    }
        else {
            div.style.backgroundColor = '';
            img.src = 'images/blackbell.png' ;
            menu.style.visibility = '';
        }


  document.addEventListener('click', function(event) {
    if (!img.contains(event.target) && !div.contains(event.target))
    {
    img.src = 'images/blackbell.png';
    div.style.background = "";
    menu.style.visibility = '';
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ29sb3IoKSB7XHJcbiAgdmFyIGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRIZWFkZXInKTtcclxuICB2YXIgYiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvcmRlckx1cGEnKVswXTtcclxuICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZGRlblNlYXJjaE1lbnUnKVswXTtcclxuICBhLnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xyXG4gIGIuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSc7XHJcbiAgbWVudS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcblxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIWEuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhYi5jb250YWlucyhldmVudC50YXJnZXQpKXtcclxuICAgICAgYS5zdHlsZS5iYWNrZ3JvdW5kPVwiXCI7XHJcbiAgICAgIGIuc3R5bGUuYmFja2dyb3VuZD1cIlwiO1xyXG4gICAgICAgIG1lbnUuc3R5bGUudmlzaWJpbGl0eSA9ICcnXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGltZ2JlbGwoKXtcclxuICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpY2hiZWxscycpO1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JlbGxIZWFkZXInKVswXTtcclxuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXZlbnRzJylbMF07XHJcbiAgICBpZiAoZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciAhPSAncmdiKDM0LCA3NSwgMTIyKScgKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMzQsIDc1LCAxMjIpJyA7XHJcbiAgICAgICAgaW1nLnNyYyA9ICdpbWFnZXMvd2hpdGViZWxsLnBuZycgO1xyXG4gICAgICAgIG1lbnUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gJ2ltYWdlcy9ibGFja2JlbGwucG5nJyA7XHJcbiAgICAgICAgICAgIG1lbnUuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmICghaW1nLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRpdi5jb250YWlucyhldmVudC50YXJnZXQpKVxyXG4gICAge1xyXG4gICAgaW1nLnNyYyA9ICdpbWFnZXMvYmxhY2tiZWxsLnBuZyc7XHJcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZCA9IFwiXCI7XHJcbiAgICBtZW51LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhlYWRNZW51KCl7XHJcbiAgICB2YXIgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkTWVudUFycm93MScpWzBdO1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRNZW51JylbMF07XHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZGRlbk1lbnUnKVswXTtcclxuXHJcbiAgICBpZiAoZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciAhPSAncmdiKDM0LCA3NSwgMTIyKScgKSB7XHJcbiAgICAgIGFycm93LnN0eWxlLmJvcmRlckNvbG9yID0gJ3doaXRlJyA7XHJcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigzNCwgNzUsIDEyMiknIDtcclxuICAgICAgbWVudS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgYXJyb3cuc3R5bGUuYm9yZGVyID0gXCJcIiA7XHJcbiAgICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZCA9XCJcIjtcclxuICAgICAgICAgICAgbWVudS5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjs7XHJcbiAgICAgICAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIWFycm93LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRpdi5jb250YWlucyhldmVudC50YXJnZXQpKVxyXG4gICAge1xyXG4gICAgICBhcnJvdy5zdHlsZS5ib3JkZXIgPSBcIlwiIDtcclxuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmQgPVwiXCI7XHJcbiAgICAgICAgbWVudS5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjtcclxuICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc3RhdHVzKCkge1xyXG4gIHZhciBzdGF0dXNQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1c1BhZ2UnKTtcclxuICB2YXIgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhdHVzJylbMF07XHJcbiAgYWxlcnQoc3RhdHVzUGFnZSk7XHJcbiAgc3RhdHVzUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIXN0YXR1cy5jb250YWlucyhldmVudC50YXJnZXQpKVxyXG4gICAge1xyXG4gICAgICBzdGF0dXNQYWdlLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRTdGF0dXMoKSB7XHJcbiAgdmFyIHN0YXR1c1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzUGFnZScpO1xyXG4gIHZhciBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGF0dXMnKVswXTtcclxuICB2YXIgc3RhdHVzTXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGF0dXNNcycpWzBdO1xyXG4gIHZhciB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Jyk7XHJcbiAgdmFyIHZhbCA9IHRleHQudmFsdWU7XHJcbiAgaWYodmFsICE9ICcnKXtcclxuICAgIHN0YXR1c01zLmlubmVySFRNTCA9IHZhbDtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBzdGF0dXNNcy5pbm5lckhUTUwgPSAnc2V0IGEgc3RhdHVzIG1lc3NhZ2UnO1xyXG4gIH1cclxuXHJcbiAgICAgIHN0YXR1c1BhZ2Uuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGlkZSgpIHtcclxuICB2YXIgYmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhYm91dE1lMicpWzBdO1xyXG4gIHZhciB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGVCb3gnKTtcclxuICBpZihibG9jay5zdHlsZS5kaXNwbGF5ICE9ICdibG9jaycpe1xyXG4gIGJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHRleHQuaW5uZXJIVE1MID0gJ0hpZGUgZnVsbCBpbmZvcm1hdGlvbic7XHJcbn1cclxuZWxzZSB7XHJcbiAgYmxvY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB0ZXh0LmlubmVySFRNTCA9ICdTaG93IGZ1bGwgaW5mb3JtYXRpb24nO1xyXG59XHJcbn0iXSwiZmlsZSI6Im1haW4uanMifQ==
