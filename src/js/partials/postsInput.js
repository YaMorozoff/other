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
