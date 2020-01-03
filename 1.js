let n=4;
let Reqemler = [];
let M = [];
let M2 = [];
let Check = [0,0,0];
let say=60;
function Start(){
   /* if(document.getElementsByTagName("button")[0].value="Easy")
    {
        n=4;
    } 
    else if(document.getElementsByTagName("button")[1].value="Difficult") 
    {
        n=8;
    }*/
    document.getElementById("Last_p").style.display="none"
    document.getElementById("Last_b").style.display="none"
    document.getElementsByTagName("body")[0].style.display="flex";
    document.getElementsByTagName("button")[0].style.display="none";
    document.getElementsByTagName("p")[0].style.display="none";
    document.getElementsByTagName("img")[0].style.display="none";
    document.getElementsByTagName("div")[0].style.display="none";
    document.getElementsByTagName("button")[1].style.display="none";
    document.getElementById("all").style.display="block";
    setTimeout(function(){ document.getElementById("n1").style.display="none" }, 1000);
    setTimeout(function(){ document.getElementById("n2").style.display="none" }, 2000);
    setTimeout(function(){ document.getElementById("n3").style.display="none" }, 3000);
    setTimeout(open,4000);

   

   
}
function Startt() {
    say=60;
    document.getElementById("Last_p").style.display="none"
    document.getElementById("Last_b").style.display="none"
    document.getElementsByTagName("body")[0].style.display="flex";
    document.getElementsByTagName("button")[0].style.display="none";
    document.getElementsByTagName("p")[0].style.display="none";
    document.getElementsByTagName("img")[0].style.display="none";
    document.getElementsByTagName("div")[0].style.display="none";
    document.getElementsByTagName("button")[1].style.display="none";
    document.getElementById("all").style.display="block";
    setTimeout(open,1000);
}
function  open() {
    document.getElementsByTagName("body")[0].style.flexDirection="row";
    document.getElementsByTagName("p")[1].style.display="block";
    document.getElementsByTagName("p")[1].style.margin="auto";
    document.getElementsByTagName("table")[0].style.display="block"; 
    Massiv();
    Tbl();
    setTimeout(First, 3000);
    setTimeout(result,3000);
}
function Massiv() {
    let k = s = 0;
    for(let i = 0; i<n*n;i++){
        if(k==(n*n)/2) k = 0;
        Reqemler[i] = ++k;
    }
    for(let i = 0; i<n*n;i++){
        M[i] = [];
        M2[i] = [];
        for(let j = 0; j<n;j++){
            s = Math.floor(Math.random() * Reqemler.length);
            M[i][j] = Reqemler[s];
            M2[i][j] = Reqemler[s];
            Reqemler.splice(s,1);
        }
    }
}   
function Tbl(){
    let tbl = "";

    for(let i = 0; i<n;i++){
        tbl += "<tr>";
        for(let j=0;j<n;j++){
            tbl += `<td><img onclick="Click(${i},${j})" src="img/${M[i][j]}.png" /></td>`;        }
        tbl += "</tr>";
    }
    document.getElementsByTagName("table")[0].innerHTML = tbl;
    
   }
   function First() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        M[i][j] = 0;
      }
    }
    Tbl();
  }
function Click(i, j) {
    M[i][j] = M2[i][j];
    Tbl();
    if(Check[2]==0){
        Check[0] = i;
        Check[1] = j;
        Check[2] = M[i][j];
    }
    else{
        if(Check[2]!=M[i][j] || Check[0]==i && Check[1]==j){
            M[i][j] = 0;
            M[Check[0]][Check[1]] = 0;
            setTimeout(Tbl,1000);
        }
        Check[2] = 0;
    }
    let yoxla=0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if(M[i][j]!=0)
          {
              yoxla++;
          }
        }
      }
      if(yoxla==n*n)
      {
          
          alert("uddun");
          say=60;
          document.getElementsByTagName("body")[0].style.display="block";
          document.getElementsByTagName("p")[1].style.display="none";
          document.getElementsByTagName("table")[0].style.display="none"; 
          document.getElementById("Last_p").style.display="block"
          document.getElementById("Last_b").style.display="block"
      }

  }
function result() {
   let time= setInterval(function() {document.getElementById("tbl_p").innerHTML="Time:"+say; say--;
    if(say<=-2){
       
        alert("uduzdun");
        clearTimeout(time);
        document.getElementById("tbl_p").innerHTML=`Time:`;
        say=60;
        document.getElementsByTagName("body")[0].style.display="block";
        document.getElementsByTagName("p")[1].style.display="none";
        document.getElementsByTagName("table")[0].style.display="none"; 
        document.getElementById("Last_p").style.display="block"
        document.getElementById("Last_b").style.display="block"
    }
    },1000);
}

