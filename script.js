const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "gray",
  "black"
];
let divCount=0;

function ShowColors()
{
  colors.forEach((item,i,arr)=>{
     const clrDiv = document.createElement("div");
     document.body.appendChild(clrDiv);
     divCount++;
     clrDiv.id = 'Div'+divCount;
     clrDiv.style.backgroundColor = item;
     clrDiv.style.display = "inline";
     clrDiv.style.width = "80px";
     clrDiv.style.height = "80px";
     clrDiv.style.position = "absolute";
     clrDiv.style.left = (Math.floor(Math.random() * window.innerWidth) + 1)+"px";
     clrDiv.style.top =  (Math.floor(Math.random() * window.innerHeight) + 200)+"px";
     clrDiv.onclick = function () {
       let el = document.getElementById(this.id+'INR');
       if (!el) {
          el = document.createElement("div");
          el.id = this.id+'INR';
          this.appendChild(el);
          el.style.position = "absolute";
          el.style.bottom = "0";
          el.style.width = "100%";
          el.style.backgroundColor = "white";
          el.innerHTML = this.style.backgroundColor;
       }
       };
  });   
}



