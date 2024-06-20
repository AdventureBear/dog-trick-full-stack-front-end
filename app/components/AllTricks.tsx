'use client'
import Trick from "./Trick";
import {useState} from "react";
import {AllCategories, TrickType} from '../types'
import {NavBar} from "./Navbar";
import AddTrickButton from "./AddTrickButton";



const AllTricks =  ({allTricks}: {allTricks:TrickType[]}) => {
    const [filteredTricks, setFilteredTricks] = useState<TrickType[]>(allTricks)
    const [category, setCategory] = useState<AllCategories>("All")

    const handleClick= (category: string) => {
        if (category==="All") {
            setFilteredTricks(allTricks)
        } else {
            const newTricks = allTricks.filter(trick=>trick.category === category)
            setFilteredTricks(newTricks)
        }

    }

    return (
        <>
        <NavBar setFilteredTricks={setFilteredTricks} allTricks={allTricks} />

            <div className='content'>
                <div>
                    <AddTrickButton/>
                </div>
                <div className='cards-container'>

                        {filteredTricks.map((trick: TrickType) => {
                            return (
                                <Trick
                                    key={trick.name}
                                    id={trick.id}
                                    name={trick.name}
                                    description={trick.description}
                                    category={trick.category}
                                />
                            )
                        })}
                    </div>
                </div>
        </>
    );
};

export default AllTricks;
