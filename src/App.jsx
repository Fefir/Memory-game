import CardContainerRow from "./CardContainerRow"
import { useEffect, useState } from 'react'



function App(){
  const fruits = ['smoczy owoc', 'mango', 'liczi', 'marakuja', 'granat', 'jabłko','banan','truskawka', 'cytryna']
  const [plansza, setPlansza] = useState(null)
  const [firstFruit, setFirstFruit] = useState(null)
  const [secondFruit, setSecondFruit] = useState(null)
  useEffect(() => {
    let nowaPlansza = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6]
    ]
    for(let i = 0; i<3; i++){
      let row = nowaPlansza[i]
      for(let j = 0; j< row.length; j++){
        let item = row[j]
        row[j] = null
      }
    }
    function ustawLosowo (fruit) {
      let y, x
        do {
          y = Math.floor(Math.random() * 3)
          x = Math.floor(Math.random() * 6)
        } while (nowaPlansza[y][x] !== null)
        nowaPlansza[y][x] = fruit
    }
    for(let fruit of fruits){
      ustawLosowo(fruit)
      ustawLosowo(fruit)
    }
    setPlansza(nowaPlansza)
  },[])
  
  useEffect(() => {
    console.log(firstFruit, secondFruit)
  }, [firstFruit, secondFruit])
  
   function handleRowCardClick (item){
    if(firstFruit !== null){
      setSecondFruit(item)
    }
    else{
      setFirstFruit(item)
    }
  }
  if(plansza === null){
    return null
  }
  return <>
  <div className=" h-screen flex items-center justify-center">
    <div>
      <CardContainerRow items={plansza[0]} onClick={handleRowCardClick}/>
      <CardContainerRow items={plansza[1]} onClick={handleRowCardClick}/>
      <CardContainerRow items={plansza[2]} onClick={handleRowCardClick}/>
    </div>
  </div>
  </>
}

export default App



