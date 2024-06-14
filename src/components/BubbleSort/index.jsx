// 'use client'

import * as S from './style'
import { useState} from 'react'

const BubbleSort = () => {
    
    const [list, setList] = useState([
        { number: 72, current: false, next: false, less:false},
        { number: 2, current: false, next: false, less:false},
        { number: 4, current: false, next: false, less:false},
        { number: 12, current: false, next: false, less:false},
        { number: 1, current: false, next: false, less:false},
        { number: 33, current: false, next: false, less:false},
        { number: 75, current: false, next: false, less:false},
        { number: 3, current: false, next: false, less:false},
    ])
    const [currentComparation, setCurrentComparation] = useState("This is the Bubblue Sort Algorithm\n\nSort me!")
    const [done, setDone] = useState(false)
    const [running, setRunning] = useState(false)
    
    function reset(){
        setList([...[
            { number: 72, current: false, next: false, less:false},
            { number: 2, current: false, next: false, less:false},
            { number: 4, current: false, next: false, less:false},
            { number: 12, current: false, next: false, less:false},
            { number: 1, current: false, next: false, less:false},
            { number: 33, current: false, next: false, less:false},
            { number: 75, current: false, next: false, less:false},
            { number: 3, current: false, next: false, less:false},
        ]])
    }

    function handleList(newList){
        setList([ ...newList])
    }

    async function bubbleSort(list){
        let newList = list
        const len = list.length;
        for (let i = 0; i < len; i++){
            for (let j = 1; j < len - i; j++){
                if(newList[j-1].number > newList[j].number){
                    setCurrentComparation(`Current Comparation: ${newList[j-1].number} > ${newList[j].number}\n\n`)
                    //Change the atribute and handle list to do the animation
                    newList[j-1].current = true
                    newList[j].next = true
                    handleList(newList)
                    //Wait for the animation happen
                    await new Promise(resolve => {
                        setTimeout(resolve, 700)
                    })
                    //Now change the values and handle list 
                    newList[j-1].current = false
                    newList[j].next = false
                    const aux = newList[j-1]
                    newList[j-1] = newList[j]
                    newList[j] = aux
                    handleList(newList)
                    //Wait for make the animation smooth
                    await new Promise(resolve => {
                        setTimeout(resolve, 300)
                    })
                }
                else{
                    setCurrentComparation(`Current Comparation: ${newList[j-1].number} < ${newList[j].number}\n\n`)
                    //Change the atribute and handle list to do the animation
                    newList[j-1].less=true
                    handleList(newList)
                    //Wait for the animation happen
                    await new Promise(resolve => {
                        setTimeout(resolve, 1000)
                    })
                    //Reset the atribute and handle list to do not do continue with the animation
                    newList[j-1].less=false
                    handleList(newList)
                }
            }
        }
        setDone(true)
        setCurrentComparation("It's sorted!")
        await new Promise(resolve => {
            setTimeout(resolve, 3000)
            })
        setCurrentComparation("This is the Bubblue Sort Algorithm\n\nSort me!")
        reset()
        setRunning(false)
        setDone(false)
    }

    return (  
        <>
            <S.Container>
                <S.ComparationText>{currentComparation}</S.ComparationText>
                <S.List done={done.toString()}>
                    {
                        list.map((value, key)=>(
                            <S.Item 
                                key={key}
                                current={value.current.toString()}
                                next={value.next.toString()}
                                less={value.less.toString()}
                            >
                                <S.Number>{value.number}</S.Number>
                            </S.Item>
                        ))
                    }
                </S.List>
                <button onClick={()=>{
                    if(!running){
                        setRunning(true)
                        bubbleSort(list)
                    }
                }}>Sort</button>
            </S.Container>
            
        </>
    );
}
 
export default BubbleSort;