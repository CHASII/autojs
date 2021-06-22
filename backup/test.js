function DoWork(x, y, z) {
  let k = 0;

  if (x > 2 && z<10) {
    k = x * y - 1;
  };

  if (x==3 || y>5) {
    k = y + k;
  }
  return k
}

let x = [4, 4, 3, 3, 2, 4, 3, 4, 2];
let y = [6, 4, 4, 5, 4, 4, 4, 4, 5];
let z = [5, 5, 11, 5, 10, 5, 11, 10, 10];

for (let i = 0; i < x.length; i++) {
   console.log(DoWork(x[i], y[i], z[i]));
}

function MCM(x, y) {
  let m = 0;

  while(x > 0 && y > 0) {
    if (x > y) {
      x = x - y;
    }else {
      y = y - x; 
    }
  }

  m = x + y;
  return m;
}

let x = [2,1,0];
let y = [1,1,0]
for (var i = 0; i < x.length; i++) {
  console.log(MCM(x[i], y[i]));
}
