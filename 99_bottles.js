function bottleSong() {
  let originalBottleCount = 99
  let newBottleCount = 99
  let bottlesOnWall = "bottles of beer on the wall"

  while(newBottleCount > 1){
    console.log(`${newBottleCount} ${bottlesOnWall},${newBottleCount} bottles of beer.\n Take one down and pass it around, ${newBottleCount-1} ${bottlesOnWall}.`)
    newBottleCount--
  }

};

bottleSong()