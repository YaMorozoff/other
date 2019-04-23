

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
        img.src = 'img/whitebell.png' ;
        menu.style.visibility = 'visible';
    }
        else {
            div.style.backgroundColor = '';
            img.src = 'img/blackbell.png' ;
            menu.style.visibility = '';
        }


  document.addEventListener('click', function(event) {
    if (!img.contains(event.target) && !div.contains(event.target))
    {
    img.src = 'img/blackbell.png';
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
  alert(val);
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
var hrm = document.getElementsByClassName('hrm_post')[0];
var posts_1 = document.getElementsByClassName('posts_1')[0];
var posts_2 = document.getElementsByClassName('posts_2')[0];
var posts_3 = document.getElementsByClassName('posts_3')[0];
var mainBoxes_post_2 = document.getElementsByClassName('mainBoxes_post_2')[0];
var post_date = document.getElementById('mainBoxes_post_11_date');
var post_name = document.getElementById('mainBoxes_post_11_name');
var pageName = document.getElementById('pageName1').innerText;
var place = document.getElementsByClassName('wall')[0];
function postInput() {
  hrm.style.display = 'block';
  posts_2.style.display = 'block';
  posts_3.style.display = 'block';

  document.addEventListener('click', function(event) {
    if (!posts_1.contains(event.target) && !posts_2.contains(event.target) && !posts_3.contains(event.target) && !hrm.contains(event.target)){
      hrm.style.display = '';
      posts_2.style.display = '';
      posts_3.style.display = '';
    }

  });
}
function setPost() {
  var text = document.getElementById('postsInput');
  var val = text.value;
  var date = new Date();
  if(val != ''){
  mainBoxes_post_2.innerHTML = val;
  post_date.innerHTML = (date.getUTCMonth() +" "+ date.getDate()+","+" "+ date.getFullYear() + " " + "at" + " "+ date.getHours()+":"+date.getMinutes());
  post_name.innerHTML = pageName;
  var div = document.getElementsByClassName('mainBoxes_post')[0].cloneNode(true);
  place.insertBefore(div, place.children[1]);
  div.style.display='block'
  hrm.style.display = '';
  posts_2.style.display = '';
  posts_3.style.display = '';
  val = '';
}
}
function removePost() {
 place.removeChild(div)
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ29sb3IoKSB7XHJcbiAgdmFyIGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRIZWFkZXInKTtcclxuICB2YXIgYiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvcmRlckx1cGEnKVswXTtcclxuICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZGRlblNlYXJjaE1lbnUnKVswXTtcclxuICBhLnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xyXG4gIGIuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSc7XHJcbiAgbWVudS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcblxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIWEuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhYi5jb250YWlucyhldmVudC50YXJnZXQpKXtcclxuICAgICAgYS5zdHlsZS5iYWNrZ3JvdW5kPVwiXCI7XHJcbiAgICAgIGIuc3R5bGUuYmFja2dyb3VuZD1cIlwiO1xyXG4gICAgICAgIG1lbnUuc3R5bGUudmlzaWJpbGl0eSA9ICcnXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGltZ2JlbGwoKXtcclxuICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpY2hiZWxscycpO1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JlbGxIZWFkZXInKVswXTtcclxuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXZlbnRzJylbMF07XHJcbiAgICBpZiAoZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciAhPSAncmdiKDM0LCA3NSwgMTIyKScgKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMzQsIDc1LCAxMjIpJyA7XHJcbiAgICAgICAgaW1nLnNyYyA9ICdpbWcvd2hpdGViZWxsLnBuZycgO1xyXG4gICAgICAgIG1lbnUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gJ2ltZy9ibGFja2JlbGwucG5nJyA7XHJcbiAgICAgICAgICAgIG1lbnUuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmICghaW1nLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRpdi5jb250YWlucyhldmVudC50YXJnZXQpKVxyXG4gICAge1xyXG4gICAgaW1nLnNyYyA9ICdpbWcvYmxhY2tiZWxsLnBuZyc7XHJcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZCA9IFwiXCI7XHJcbiAgICBtZW51LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhlYWRNZW51KCl7XHJcbiAgICB2YXIgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkTWVudUFycm93MScpWzBdO1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRNZW51JylbMF07XHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZGRlbk1lbnUnKVswXTtcclxuXHJcbiAgICBpZiAoZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciAhPSAncmdiKDM0LCA3NSwgMTIyKScgKSB7XHJcbiAgICAgIGFycm93LnN0eWxlLmJvcmRlckNvbG9yID0gJ3doaXRlJyA7XHJcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigzNCwgNzUsIDEyMiknIDtcclxuICAgICAgbWVudS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgYXJyb3cuc3R5bGUuYm9yZGVyID0gXCJcIiA7XHJcbiAgICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZCA9XCJcIjtcclxuICAgICAgICAgICAgbWVudS5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjs7XHJcbiAgICAgICAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIWFycm93LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRpdi5jb250YWlucyhldmVudC50YXJnZXQpKVxyXG4gICAge1xyXG4gICAgICBhcnJvdy5zdHlsZS5ib3JkZXIgPSBcIlwiIDtcclxuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmQgPVwiXCI7XHJcbiAgICAgICAgbWVudS5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjtcclxuICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc3RhdHVzKCkge1xyXG4gIHZhciBzdGF0dXNQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1c1BhZ2UnKTtcclxuICB2YXIgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhdHVzJylbMF07XHJcbiAgc3RhdHVzUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIXN0YXR1cy5jb250YWlucyhldmVudC50YXJnZXQpKVxyXG4gICAge1xyXG4gICAgICBzdGF0dXNQYWdlLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRTdGF0dXMoKSB7XHJcbiAgdmFyIHN0YXR1c1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzUGFnZScpO1xyXG4gIHZhciBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGF0dXMnKVswXTtcclxuICB2YXIgc3RhdHVzTXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGF0dXNNcycpWzBdO1xyXG4gIHZhciB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Jyk7XHJcbiAgdmFyIHZhbCA9IHRleHQudmFsdWU7XHJcbiAgYWxlcnQodmFsKTtcclxuICBpZih2YWwgIT0gJycpe1xyXG4gICAgc3RhdHVzTXMuaW5uZXJIVE1MID0gdmFsO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHN0YXR1c01zLmlubmVySFRNTCA9ICdzZXQgYSBzdGF0dXMgbWVzc2FnZSc7XHJcbiAgfVxyXG5cclxuICAgICAgc3RhdHVzUGFnZS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoaWRlKCkge1xyXG4gIHZhciBibG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Fib3V0TWUyJylbMF07XHJcbiAgdmFyIHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZUJveCcpO1xyXG4gIGlmKGJsb2NrLnN0eWxlLmRpc3BsYXkgIT0gJ2Jsb2NrJyl7XHJcbiAgYmxvY2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgdGV4dC5pbm5lckhUTUwgPSAnSGlkZSBmdWxsIGluZm9ybWF0aW9uJztcclxufVxyXG5lbHNlIHtcclxuICBibG9jay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIHRleHQuaW5uZXJIVE1MID0gJ1Nob3cgZnVsbCBpbmZvcm1hdGlvbic7XHJcbn1cclxufVxyXG52YXIgaHJtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHJtX3Bvc3QnKVswXTtcclxudmFyIHBvc3RzXzEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3N0c18xJylbMF07XHJcbnZhciBwb3N0c18yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncG9zdHNfMicpWzBdO1xyXG52YXIgcG9zdHNfMyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Bvc3RzXzMnKVswXTtcclxudmFyIG1haW5Cb3hlc19wb3N0XzIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluQm94ZXNfcG9zdF8yJylbMF07XHJcbnZhciBwb3N0X2RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkJveGVzX3Bvc3RfMTFfZGF0ZScpO1xyXG52YXIgcG9zdF9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Cb3hlc19wb3N0XzExX25hbWUnKTtcclxudmFyIHBhZ2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VOYW1lMScpLmlubmVyVGV4dDtcclxudmFyIHBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2FsbCcpWzBdO1xyXG5mdW5jdGlvbiBwb3N0SW5wdXQoKSB7XHJcbiAgaHJtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHBvc3RzXzIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgcG9zdHNfMy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKCFwb3N0c18xLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIXBvc3RzXzIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhcG9zdHNfMy5jb250YWlucyhldmVudC50YXJnZXQpICYmICFocm0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSl7XHJcbiAgICAgIGhybS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgIHBvc3RzXzIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICBwb3N0c18zLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gc2V0UG9zdCgpIHtcclxuICB2YXIgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3N0c0lucHV0Jyk7XHJcbiAgdmFyIHZhbCA9IHRleHQudmFsdWU7XHJcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGlmKHZhbCAhPSAnJyl7XHJcbiAgbWFpbkJveGVzX3Bvc3RfMi5pbm5lckhUTUwgPSB2YWw7XHJcbiAgcG9zdF9kYXRlLmlubmVySFRNTCA9IChkYXRlLmdldFVUQ01vbnRoKCkgK1wiIFwiKyBkYXRlLmdldERhdGUoKStcIixcIitcIiBcIisgZGF0ZS5nZXRGdWxsWWVhcigpICsgXCIgXCIgKyBcImF0XCIgKyBcIiBcIisgZGF0ZS5nZXRIb3VycygpK1wiOlwiK2RhdGUuZ2V0TWludXRlcygpKTtcclxuICBwb3N0X25hbWUuaW5uZXJIVE1MID0gcGFnZU5hbWU7XHJcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW5Cb3hlc19wb3N0JylbMF0uY2xvbmVOb2RlKHRydWUpO1xyXG4gIHBsYWNlLmluc2VydEJlZm9yZShkaXYsIHBsYWNlLmNoaWxkcmVuWzFdKTtcclxuICBkaXYuc3R5bGUuZGlzcGxheT0nYmxvY2snXHJcbiAgaHJtLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICBwb3N0c18yLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICBwb3N0c18zLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICB2YWwgPSAnJztcclxufVxyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3QoKSB7XHJcbiBwbGFjZS5yZW1vdmVDaGlsZChkaXYpXHJcbn0iXSwiZmlsZSI6Im1haW4uanMifQ==
