
  
var tp = -1;
var inp;
 
function dis(){

   inp= document.getElementById("ip").value; 
 
   var newdiv;
   var divIdName;
   for(var i=inp;i>=0;i--)
      {
         newdiv = document.createElement('div');
         divIdName = i;
         newdiv.setAttribute('id',divIdName);
         newdiv.style.marginLeft='100px';
         newdiv.style.border='2px solid red';
         newdiv.style.height='40px';
         newdiv.style.width='100px'
         newdiv.style.textAlign='center'
         document.getElementById('stk').appendChild(newdiv);
      }
         
 }

function push()
   {
         if(tp==inp)
         {
            alert("Stack full")
         } 
         else{
      var elm=prompt()
      document.getElementById(++tp).innerText=elm;
         }
   }


   function pop()
   {

      if(tp==-1)
      {
         alert("stack is Empty")
      }
      else{
         var item=document.getElementById(tp).innerText;
      document.getElementById(tp--).innerText='';
     

      alert("Poped Element is:"+item);
      }
   }

    
