'use client'
import {useState} from "react";
import {deleteTrick} from "../lib/actions";
import {useRouter} from "next/navigation";
import Link from "next/link";

function Trick({name, description, category, id}: {id:number,name:string, description: string, category: string }) {
    const router = useRouter();
    const [flipped, setFlipped] = useState(false)
    return (
        <div onClick={()=>setFlipped(!flipped)}>
            {!flipped &&
                <div  className='card'>
                    <p className='badge'>{category}</p>
                    <h2>{name}</h2>
                </div>}

            {flipped &&
                <div  className='card-back'>
                    <p>{description}</p>
                    <div className="mt-2">
                    <button
                        onClick={
                        ()=> {
                            deleteTrick(id)

                            router.refresh()
                        }
                    }
                        className="badge">Delete</button>
                        <Link href={`/tricks/${id}/edit`}><button className="badge">Edit</button></Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Trick