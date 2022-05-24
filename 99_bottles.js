function bottleSong() {
  let originalBottleCount = 99
  let newBottleCount = 99
  let bottlesOnWall = "bottles of beer on the wall"
  let bottleOnWall = "bottle of beer on the wall"
  let takeAndPass = "Take one down and pass it around"

  while(newBottleCount > 1){
      if(newBottleCount >2){
        console.log(`${newBottleCount} ${bottlesOnWall}, ${newBottleCount} bottles of beer.\n ${takeAndPass}, ${newBottleCount-1} ${bottlesOnWall}.`)
      newBottleCount--
      }else{
      console.log(`${newBottleCount} ${bottlesOnWall}, ${newBottleCount} bottles of beer.\n ${takeAndPass}, ${newBottleCount-1} ${bottleOnWall}.`)
      newBottleCount--}
  }
  
  console.log(`${newBottleCount} ${bottleOnWall}, ${newBottleCount} bottle of beer.\n ${takeAndPass}, no more ${bottlesOnWall}.`)
  console.log(`No more ${bottlesOnWall}, no more bottles of beer.`)
  console.log(`Go to the store and buy some more, 99 ${bottlesOnWall}.`)
      
    
  

};


bottleSong()