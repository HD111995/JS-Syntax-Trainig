let myString = "superman";
let myName = "Hisham"
console.log(myString.length);
console.log(myName.length);

let x,y;
x = myString.length;
y= myName.length;

console.log("Superman: "+x,"Hisham: "+y);

//indexof()

let text = "Hallo Supercode Wir lernen Heute Stringmethoden. ";
console.log(text.indexOf("Supercode"));
console.log(text.indexOf("o"));

//search 
console.log(text.search("Wir"));
console.log(text.search('String'));

//slice 2 Parameter
let myText = "Steffen,Eric,Elaine";
console.log(myText.slice(0,7));
console.log(myText.slice(8,12));
console.log(myText.slice(13,20));

//substring 
let myText2 = "Heute ist Freitag";
let res1 = myText2.substring(10,17);
console.log(res1);

//replace 
let res = myText.replace("Steffen","Uyen");
res = myText.replace("Eric","Hisham");
console.log(res);
console.log(myText.replace("Elaine","Hisham"));

//toUpperCase
let t = "hisham diab"
console.log(t.toUpperCase());
 
//concatenation concat
let word1 = "hello"
let word2 = "world"
let textConcat = word1.concat(" ",word2);
console.log(textConcat);

//Template Literals
//backsticks `` 
//Vorher String Concatenation:"string" + variable + "string"
//with Template literals: `string ${expression} string`
let s = "'we do not make mistakes. we just have happy accidents.' - Bob Ross";
document.write(s);

let single = "'we don\'t make mistakes. We just have happy accidents.' - Bob Ross'"
document.write(single);

//with Template literals ``
let templit = `"we don't make mistakes. we just have happy accidents. - Bob Ross"`;
document.write(templit);

//aufgabe concat 
let vorName = "Micky";
let nachName = "Mouse";
let alter = 100;
let city = "Entenhausen";
//normal 
console.log("Ich heiße " + vorName + " " + nachName + " und leben in "+city+".");
//with Template literals
console.log(`ich heiße ${vorName} ${nachName} und lebe in ${city}.`);


console.log(document.getElementById("result"));
document.getElementById("result").innerHTML =`ich heiße ${vorName} ${nachName}
 und lebe in ${city}. Ich bin ${alter*2} Jahre alt.
<p>Hello</p>
<h2>Wolrd</h2>`;

//function with Parameter 
function greeting(name,age,city){
    console.log(`ich bin ${name} und bin ${age} Jahre alt. 
    Ich lebe in ${city}.`);
}
greeting("Hisham",27,"Essen");
//Ternary Operator, Js Comparison

let vergleich ;
let j = 5;
let k = "5";
vergleich = (j<k) ? true:false;
console.log(vergleich);

function prufen(){
  let a, voll ;
  a = document.getElementById("alter").value;
  voll = (a >= 18) ? "Volljährig":"Minderjährig";
  console.log(voll);
  document.getElementById("demo").innerHTML = `du bist ${voll}.`
}
//length
let one,tow;
one = "one";
tow = "tow";
let three = one + tow;
console.log(one.length,tow.length); 
console.log(three.length);
//search
let para=`Blue, green, grey, white, or black; 
smooth, ruffled, or mountainous; that ocean is not silent`
 console.log(para.search("Blue"))

 //slice()

 let para2 = "Sam is going to Coding School"
 console.log(para2.slice(0,3))
 console.log(para2.slice(4,6))
 console.log("am " + para2.slice(4,15) + " " + para2.slice(23,29));
 console.log(para2.slice(23,29));
 console.log(para2.slice(0,6) + " " + para2.slice(23,29));

 //substring 
let para3 = "Sam is back from Coding School";
let wert1 = para3.substring(0,3);
let wert2 = para3.substring(4,6);
let wert3 = para3.substring(24,30);
document.write(para3.substring(0,3)+" "+para3.substring(4,6)+" "+para3.substring(24,30));
document.write("<br>",wert1,"<br>",wert2,"<br>",wert3);

//replace 
let para4 = "Sam is good at Coding School";
let br = "<br>";
document.write(br+para4.replace("good","bad"));
document.write(br + para4.replace("Sam is good at Coding School","Tom is good at School"));
//toUpperCase/toLowerCase
let para5 = "Sam is going to Coding School";
let paraUpper = para5.replace("Sam is going to Coding School","Sam is going to School");
document.write(br+paraUpper.toUpperCase());

let paraLower = para5.replace("Sam is going to Coding School","Sam is going at School");
document.write(br+paraLower.toLowerCase());

let paraUl = paraUpper.toUpperCase().replace("IS GOING TO","is going to");
document.write(br + paraUl);
console.log(paraUl);
document.write(br + paraUpper.toUpperCase().replace("SAM","sam"));



//template-literals 
let N = "Hisham";
let L = "Diab";
let A = "27";
let GO = "Swaida";
let GR = "174cm";
let JZ = "Sommer";
let H = "Schießen"
let R = `${br}Hallo mein Name ist ${N} ${L},
 ich bin ${A}.${br}Mein Geburtsort ist ${GO}  `;
document.write(R);