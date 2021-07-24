let chL=[];
//38 char
let cChar=0;
let char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

function setup() {
  createCanvas(400,400);
  for (let h = 0; h < char.length; h++) {
    chL[h]=[];
    chL[h][0]=char[h]
    chL[h][1]=0; //0 --> 5x9, 1 --> 9x9
    if(chL[h][0]=="m"||chL[h][0]=="w"){chL[h][1]=1;}
    let g=[];

    for (let i = 0; i < 9; i++) {
      g[i]=[];
      for (let j = 0; j < 9; j++) {
        g[i][j]=0;
      }
    }
    chL[h][2]=g;
  }
  console.log(chL);
}

function draw() {
  background(255);
  console.log(chL[cChar]);
  let g=chL[cChar][2];
  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g[i].length; j++) {
      fill(255-255/3*g[i][j]);
      rect(20*i,20*j,20,20); 
    } 
  }
  fill(0);
  stroke(0);
  textSize(32);
  text(chL[cChar][0],200,200);
}

function mousePressed(){
  if(mouseX<180&&mouseY<180){
    let tmpX=int(mouseX/20);
    let tmpY=int(mouseY/20);
    let g=chL[cChar][2];

    g[tmpX][tmpY]++;
    if(g[tmpX][tmpY]>2){g[tmpX][tmpY]=0;}

  }else if(mouseX>200){
    if(int(mouseY/200)<1){cChar++;}else{cChar--;}
    if(cChar>chL.length-1){cChar=0;}
    if(cChar<0){cChar=chL.length-1;}
    //console.log(chL);
  }
}

