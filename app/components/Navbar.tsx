'use client'
import {useEffect} from "react";
import {Category} from "@prisma/client";
import {AllCategories, TrickType} from "../types";
const allCategories: string[] = Object.values(Category);
allCategories.splice(0,0,"All")

interface Props {
    setFilteredTricks: (tricks: TrickType[]) => void;
    allTricks: TrickType[];
    // allCategories: AllCategories[];
}

export function NavBar({setFilteredTricks, allTricks}: Props) {

    const handleClick= (category: string) => {
        if (category==="All") {
            setFilteredTricks(allTricks)
        } else {
            const newTricks = allTricks.filter(trick=>trick.category === category)
            setFilteredTricks(newTricks)
        }

    }

    return (
        <div className='category-nav'>
            {/*<button onClick={()=> handleClick("All")}>All Tricks</button>*/}

            {allCategories.map((category) => {
                return (
                    <button
                        onClick={
                            ()=>{
                                handleClick(category)
                            }
                        }
                        key={category}
                        className='badge'
                    >{category}</button>
                )
            })}
        </div>
    )

}