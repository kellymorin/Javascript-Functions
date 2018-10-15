let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let buildMeUp = ""
let addExcitement = ((theWordArray, character) => {
  theWordArray.forEach((theWordArray) => {
    buildMeUp += theWordArray + " ";
    console.log(buildMeUp);
  })
})
addExcitement(sentence)