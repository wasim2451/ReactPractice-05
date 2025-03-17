import { useState } from 'react'
import { sculptureList } from './data'
export function ImageSlider() {
    //state variables index,showMore
    const [index, setIndex] = useState(0);
    const [showMore, setshowMore] = useState(false);
    const hasNext = index >= 0 && index != sculptureList.length - 1; // true // on index = length -->false
    const hasPrev = index <= sculptureList.length - 1 && index != 0; // true // on index = 0 -->false 
    function handleClickNext() {
        setIndex(index + 1);
    }
    function handleClickPrevious() {
        setIndex(index - 1);
    }
    function descriptionHandler() {
        setshowMore(!showMore);
    }
    return (
        <>
            <button onClick={handleClickNext} disabled={!hasNext}>Next</button>
            <button onClick={handleClickPrevious} disabled={!hasPrev}>Previous</button>
            {/* {On hasNext or hasPrev false disabled=true}  */}
            <p>{index + 1} out of {sculptureList.length}</p>
            <div>{sculptureList[index].name}</div>
            <img src={sculptureList[index].url} alt="" style={{
                'width': '30%'
            }} />
            <p>{sculptureList[index].artist}</p>
            <p><button onClick={descriptionHandler}>Show Description</button></p>
            <p>{
                showMore ? sculptureList[index].description : null
            }</p>
        </>
    )
}