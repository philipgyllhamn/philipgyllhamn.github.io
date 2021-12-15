var ztxt = new Ztextify(".hero-text", {
    depth: "30px",
    layers: 8,
    fade: true,
    direction: "forwards",
    event: "pointer",
    eventRotation: "15deg"
 });


/*
	HI WHOEVER YOU ARE 
	website made by https://github.com/philipgyllhamn
*/

function initCartizer(){
	var value = document.getElementById("carti").value;

    if(value == "" || value == null) return;
    this.Log(value);
	var carti = this.cartize(value);
  
    document.getElementById("text").innerHTML = carti;

    document.getElementById("copy-btn").hidden = false;
}

function clearInputs(){
    document.getElementById("carti").value = "";
    document.getElementById("text").innerText = "";

    document.getElementById("copy-btn").hidden = true;
}

function copyText(){
    var text = document.getElementById("text").innerHTML;

    navigator.clipboard.writeText(text)
    alert(text + " has been copied to clipboard");

    document.getElementById("copy-btn").hidden = true;
}

function cartize(input){
  var newString = "";
  var wordArr = input.split(" ");
  
  wordArr.map(word => {
    var randomNumWord = Math.floor((Math.random() * 9) + 1);

    if(word === "for" && randomNumWord != 5){
        newString += "4";
    }else{
        for (var i = 0; i < word.length; i++) {
            var randomNumChar = Math.floor((Math.random() * 2) + 1);
          var char = word.charAt(i);
          var nextChar = word.charAt(i+1);
          var prevChar = word.charAt(i-1)

          if(i === 0){
            newString += char.toLowerCase();
          }else if((char === "e" || char === "E") && randomNumChar === 2){
              newString += "3";
          }else if(char === "o" || char === "O"){
              newString += "0";
          }else if(char.toUpperCase() === nextChar.toUpperCase() || char.toUpperCase() === prevChar.toUpperCase()){
                newString += char.toUpperCase();
          }else{
              if(randomNumChar === 2){
                  newString += char.toUpperCase();
              }else{
                  newString += char.toLowerCase();
              }
          }

        }
    }
    
    
    if(randomNumWord === 2){
    	newString += " . ";
    }else if(randomNumWord === 4){
    	newString += " > ";
    }else if(randomNumWord === 3){
    	newString += " ! ";
    }else{
     newString += " "
    }
  })
  
  var randomEmojiNum = Math.floor((Math.random() * 11) + 1);
  
  if(randomEmojiNum === 5){
  	newString += " &#128139"
  }else if(randomEmojiNum === 8){
    	newString += " &#128149"
  }else if(randomEmojiNum === 10){
    newString += " &#128149 &#128139"
  }
  
  console.log(newString);
  
  return newString;

}

var timer = 0;
var prevQuery = ""; 

async function Log(text){

    if(text.length > 8 && timer == 0 && text != prevQuery){
        var data = {
            query: text
        }
    
        fetch("https://cartizer-api.herokuapp.com/", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(data)
          }).then(res => {
              this.ticker();
              prevQuery = text;
            // console.log("Request complete! response:", res);
          })
    }
}

function ticker(){
    var inter = setInterval(() => {
        if(timer == 30){
            timer = 0;
            clearInterval(inter);
        }else{
            timer += 1;
        }
    }, 1000)

    if(timer >= 30){
        clearInterval(inter);
        timer = 0;
    }
}


