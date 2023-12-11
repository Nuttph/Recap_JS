var arey = ["red","blue","yellow"];
arey.push("Blue");
console.log(arey[0]);

var obj = {
    Name:"Nuttaphon",
    Lastname:"Popardit",
    Age:19
}
console.log(obj); //all of object
console.log(obj[1]); //undefined
console.log(obj.Lastname); //เข้าถึง Lastname ใน object

obj.live = "Bangkok";
console.log(obj.live);
//
function log(data){
    console.log(data);
}
log("hello");

var x = 15;
function math(x){
    console.log(x++);
}
console.log(math(15)); //undefined
console.log(math[58]); //undefined

const y = math(x);
console.log(y);

function cal(x,y,z){
    let math = alert(x+" "+y+" "+z);
    console.log(math);
};
//cal(15,14,16);

function app(){
    var result1 = {
        Name : "Nuttaphon",
        Age : 19
    }
    console.log(result1);
};

app();
console.log(app()); // undefined

function print(x){
    console.log(x);
};

function BMI(h,w){
    let hh = h/100;
    let reusult = w/(hh*hh);
    console.log(reusult.toFixed(2));

    if(reusult >= 30){
        console.log("อ้วน 3");
        print("อ้วน 3")
    }
    else if(reusult >= 25){
        console.log("อ้วน 2");
        print("อ้วน 2")
    }
    else if(reusult >=23){
        console.log("อ้วน 1");
        print("อ้วน 1")
    }
    else if(reusult >=18){
        console.log("ปกติ");
        print("ปกติ")
    }
    else{
        console.log("ผอม");
        print("ผอม")
    }
};
BMI(180,70);

let a = 15;
console.log(x);
a = 17;
console.log(a);
var be= arey[1,2,3];
console.log(be[0]);

let u = [1,2,3];
console.log(u);
function pr(o){
    console.log(o);
};
pr(u);

const u1 = {
    a1 : "K1x",
    a2 : "K2x",
}
pr(u1.a1);


var f1 = ("Red","Blue","Yellow","Green","Black");
var g1 = (1,2,3,4,5,6,7,8,9);

function func(lit){
   /* var na = 10;
    for (let nu = 1; nu < lit.length; nu++) {
        var np = 1;
        const reuslt5 = lit[np];
        np+=1;
        console.log(reuslt5);
    }
    */
   var na = 1;
    while (na > lit) {
      console.log(na);
      na+= 1; 
    };
};

var ss = 15;
console.log(typeof ss);