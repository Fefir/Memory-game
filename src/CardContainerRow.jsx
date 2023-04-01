import { BsQuestionLg } from 'react-icons/bs'
import { useState } from 'react'

function Card ({ item, onClick }) {
    const [isCovered, setIsCovered] = useState(true)
    
    function handleClick(){
        setIsCovered(false)
        onClick(item)
    }
    if(isCovered === true){
        return <>
            <div onClick={handleClick} className='bg-slate-200 border border-black w-40 h-32 flex items-center justify-center'>
                <BsQuestionLg />
            </div>
        </>
    }
    else{
        return <>
            <div className='bg-green-600 h-32 w-40 flex items-center justify-center border border-slate-200'>
                <h1>{item}</h1>
            </div>
        </>
    }
}

function CardContainerRow ({items, onClick}) {
    return <>
    <div className="flex justify-center items-center">
        <Card item={items[0]} onClick={onClick}/>
        <Card item={items[1]} onClick={onClick}/>
        <Card item={items[2]} onClick={onClick}/>
        <Card item={items[3]} onClick={onClick}/>
        <Card item={items[4]} onClick={onClick}/>
        <Card item={items[5]} onClick={onClick}/>
    </div>
    </>
}
export default CardContainerRow