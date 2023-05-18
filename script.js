function getOption() {
   selectElement = document.querySelector('#select1');
   output = selectElement.value;
   document.querySelector('#result').textContent = "Player Type: "+output;
   console.log(output);
    newBrwoser= document.getElementById("newBrwoser").value;
    newBrwoser_val= document.querySelector("#newBrwosers"  + " option[value='" + newBrwoser+ "']").dataset.value;
  console.log(newBrwoser_val)
  document.querySelector('#result2').textContent = "Spell Type: "+newBrwoser_val;
}


function checkTypes(){
//Defining variables
// const spelltype = document.querySelector('input[name="spell"]:checked').value;
const spelltype = newBrwoser_val;
const playertype = output;

//Defining strength combinations
if (spelltype == "chaos" && playertype == "strength" && Math.random() > 0.5) {
document.getElementById("result3").innerHTML = "Passed";}

   else if (spelltype == "meng" && playertype == "strength" && Math.random() > 0.5) {
document.getElementById("result3").innerHTML = "Passed";}

                   else if (spelltype == "kho" && playertype == "strength" && Math.random() > 0.75) {
document.getElementById("result3").innerHTML = "Passed";}

                                 else if (spelltype == "anarchy" && playertype == "strength" && Math.random() > 0.75) {
document.getElementById("result3").innerHTML = "Passed";}

                                                 else if (spelltype == "strength" && playertype == "strength") {
document.getElementById("result3").innerHTML = "Passed";}

//Defining power combinations
else if (spelltype == "chaos" && playertype == "power" && Math.random() > 0.75) {
document.getElementById("result3").innerHTML = "Passed";}

   else if (spelltype == "meng" && playertype == "power" && Math.random() > 0.75) {
document.getElementById("result3").innerHTML = "Passed";}

                   else if (spelltype == "kho" && playertype == "power" && Math.random() > 0.5) {
document.getElementById("result3").innerHTML = "Passed";}

                                 else if (spelltype == "anarchy" && playertype == "power" && Math.random() > 0.5) {
document.getElementById("result3").innerHTML = "Passed";}

                                                 else if (spelltype == "power" && playertype == "power") {
document.getElementById("result3").innerHTML = "Passed";}                     
//Defining chaos combinations
else if (spelltype == "chaos" && playertype == "chaos") {
document.getElementById("result3").innerHTML = "Passed";}

   else if (spelltype == "meng" && playertype == "chaos" && Math.random() > 0.75) {
document.getElementById("result3").innerHTML = "Passed";}

                   else if (spelltype == "kho" && playertype == "chaos" && Math.random() > 0.5) {
document.getElementById("result3").innerHTML = "Passed";}

                                                 else if (spelltype == "power" && playertype == "chaos" && Math.random() > 0.75) {
document.getElementById("result3").innerHTML = "Passed";}
                                                                                                            else if (spelltype == "strength" && playertype == "chaos" && Math.random() > 0.5) {
document.getElementById("result3").innerHTML = "Passed";}  

//Defining anarchy combinations

   else if (spelltype == "meng" && playertype == "anarchy" && Math.random() > 0.5) {
document.getElementById("result3").innerHTML = "Passed";}

                   else if (spelltype == "kho" && playertype == "anarchy" && Math.random() > 0.75) {
document.getElementById("result3").innerHTML = "Passed";}

                                                 else if (spelltype == "power" && playertype == "anarchy" && Math.random() > 0.5) {
document.getElementById("result3").innerHTML = "Passed";}
                                                                                                            else if (spelltype == "strength" && playertype == "anarchy" && Math.random() > 0.75) {
document.getElementById("result3").innerHTML = "Passed";} 
                                                                                                                                                   else if (spelltype == "anarchy" && playertype == "anarchy") {
document.getElementById("result3").innerHTML = "Passed";} 
                                                                        //Defining kho combinations


                   else if (spelltype == "kho" && playertype == "kho"){
document.getElementById("result3").innerHTML = "Passed";}

                                                 else if (spelltype == "power" && playertype == "kho" && Math.random() > 0.5) {
document.getElementById("result3").innerHTML = "Passed";}
                                                                                                            else if (spelltype == "strength" && playertype == "kho" && Math.random() > 0.75) {
document.getElementById("result3").innerHTML = "Passed";} 
                                                                                                                                                   else if (spelltype == "anarchy" && playertype == "kho" && Math.random() > 0.75) {
document.getElementById("result3").innerHTML = "Passed";} 
                                                                                                                                                     else if (spelltype == "chaos" && playertype == "kho" && Math.random() > 0.5) {
document.getElementById("result3").innerHTML = "Passed";}

//Defining failure clause
else {
document.getElementById("result3").innerHTML = "Failed";
}

}
//Mark as done
// function markAsDone(){
// const selected = document.querySelector('input[name="spell"]:checked');
// console.log(selected);
// const output = document.getElementById("result3").textContent;
// console.log(output);
// if (output == "Passed"){
// selected.value="Already played";
// } else {
// // do nothing
// }
// }
function showResult(){
   document.getElementById('outputoverlay').style.display = "block";
   setTimeout(function(){document.getElementById('outputoverlay').style.display = "none"},5000);
}
