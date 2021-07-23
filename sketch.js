let chL=[];
//38 char
let cChar=0;
let char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function setup() {
  createCanvas(400,400);
  for (let h = 0; h < char.length; h++) {
    chL[h]=[];
    chL[h][0]=char[h]
    chL[h][1]; //0 --> 5x9, 1 --> 9x9
    let g=[];

    for (let i = 0; i < 9; i++) {
      g[i]=[];
      for (let j = 0; j < 9; j++) {
        g[i][j]=0;
      }
    }
    chL[h][2]=g;
  }
}

function draw() {
  background(255);
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



