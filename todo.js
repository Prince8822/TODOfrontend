
var k=0;
function myfunction() {
  
    var list= document.createElement("LI");
    var val=document.createTextNode(document.getElementById("Input").value);
    list.appendChild(val);
    
    //Add a list item
    if (document.getElementById("Input").value!== ''){
      var wd= document.createTextNode( 'x');
      var sp = document.createElement("SPAN");
      sp.className= "close";
      sp.appendChild(wd);
      list.appendChild(sp);
        document.getElementById("mylist").appendChild(list)
        document.getElementById("totalItem").innerHTML = "Total List items are"+"="+(k+=1);
     }


     var close = document.getElementsByClassName("close");
    
     //Delete a list item
      for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        this.parentElement.style.display = "none";
      document.getElementById("totalItem").innerHTML = "Total List items are"+"="+(k-=1);
      }
    }  
}

//checked a list item
var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);