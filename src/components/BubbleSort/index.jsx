'use client'

import * as S from './style'
import { useState, useEffect } from 'react'

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

    const [done, setDone] = useState(false)

    useEffect(()=>{
    }, [list, done])


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
            for (let j = 0; j < len - 1 - i; j++){
                if(newList[j].number > newList[j + 1].number){
                    newList[j + 1].next = true
                    newList[j].current = true
                    handleList(newList)
                    await new Promise(resolve => {
                        setTimeout(resolve, 1500)
                    })
                    newList[j + 1].next = false
                    const aux = newList[j]
                    newList[j] = newList[j + 1]
                    newList[j + 1] = aux
                    if(j === len - 2 - i){
                        newList[j + 1].current = false
                        handleList(newList)
                    }
                }
                else{
                    newList[j].current = false
                    newList[j].less = true
                    handleList(newList)
                    handleList(newList)
                    await new Promise(resolve => {
                        setTimeout(resolve, 1500)
                    })
                    newList[j].less = false
                    handleList(newList)
                }
            }
        }
        setDone(true)
        await new Promise(resolve => {
            setTimeout(resolve, 1500)
        })
        reset()
        setDone(false)
    }

    return (  
        <>
            <S.Container>
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
                    let passList = list
                    bubbleSort(passList)
                }}>Sort</button>
            </S.Container>
            
        </>
    );
}
 
export default BubbleSort;