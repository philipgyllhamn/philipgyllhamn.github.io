var ztxt = new Ztextify(".hero-text", {
    depth: "30px",
    layers: 8,
    fade: true,
    direction: "forwards",
    event: "pointer",
    eventRotation: "10deg"
 });

function initCartizer(){
	var value = document.getElementById("carti").value;
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
    
    for (var i = 0; i < word.length; i++) {
    	var randomNumChar = Math.floor((Math.random() * 2) + 1);
      var char = word.charAt(i);
      
      if(i === 0){
        newString += char.toLowerCase();
      }else if(char === "e" || char === "E"){
      	newString += "3";
      }else if(char === "o" || char === "O"){
      	newString += "0";
      }else{
      	if(randomNumChar === 2){
      		newString += char.toUpperCase();
      	}else{
      		newString += char.toLowerCase();
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
  
  var randomEmojiNum = Math.floor((Math.random() * 15) + 1);
  
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