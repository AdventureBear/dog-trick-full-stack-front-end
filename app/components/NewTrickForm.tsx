'use client';

import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Category } from "@prisma/client";
import { TrickType } from "../types";
import "./Button.css";
import "./NewTrickForm.css"

import {createTrick, updateTrick} from "../lib/actions";

function NewTrickForm({ trick }: { trick?: TrickType }) {
    const router = useRouter();
    const handleRedirect = () => {
        router.push('/');
    };

    const [formData, setFormData] = useState({
        name: trick ? trick.name : "",
        description: trick ? trick.description : "",
        category: trick ? trick.category : Category.Basic
    });
    const [error, setError] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let updatedTricks;
        let response;
        if (trick) {
            try {
                updatedTricks = {...formData, id: trick.id}
                response = await updateTrick(updatedTricks)
                console.log('Trick Updated:', response.data);
                handleRedirect()
            } catch (error) {
                console.error('Failed to update trick:', error);
            }
        } else {

            try {
               response =  await createTrick(formData);
                console.log('Trick Created:', response.data);
                handleRedirect()
            } catch (error) {
                console.error('Failed to create trick:', error);
                setError('Failed to submit trick. Please try again.');
            }
        }
    };

    return (
        <div className="flex text-center">
            <div className="title-container">
             <h1>{trick ? "Edit Trick" : "Add a Trick"}</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-2">
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        onChange={handleChange}
                        id="name"
                        type="text"
                        placeholder="Title"
                        value={formData.name}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description">Description</label>
                    <input
                        onChange={handleChange}
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={formData.description}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="category">Category</label>
                    <select
                        onChange={handleChange}
                        name="category"
                        id="category"
                        value={formData.category}
                    >
                        {Object.keys(Category).map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                {error && <div className="error">{error}</div>}
                <button className="button" type="submit">Submit Trick</button>
            </form>
        </div>
    );
}

export default NewTrickForm;


// 'use client'
//
// import React, {ChangeEvent, useState} from 'react';
// import {Category} from "@prisma/client";
// import {router} from "next/client";
// import {NewTrickType, TrickType} from "../types";
// import {createTrick, updateTrick} from "../lib/actions";
// import {useRouter} from "next/navigation";
//
// // function NewTrickForm({createTrick}:{createTrick:(newTrick: { name: string; description: string; category: string }) => void}) {
//     function NewTrickForm({trick}:{trick?: TrickType}) {
//        const router = useRouter();
//         let updateFormData: TrickType | undefined = trick? trick : undefined
//         const [formData, setFormData] = useState<NewTrickType>({
//             name: trick ? trick.name : "",
//         description: trick ? trick.description : "",
//         category: trick ? trick.category : Category["Basic"]
//     })
//
//
//     function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
//         setFormData({...formData, [e.target.name]: e.target.value})
//         console.log(formData)
//     }
//
//     const handleSubmit = async () => {
//      try {
//          let result
//
//          if (trick) {
//              updateFormData = {...formData, id: trick.id}
//              result = await updateTrick(updateFormData)
//          } else {
//              result = await createTrick(formData);
//          }
//          console.log('Operation result:', result);
//          router.push('http://localhost:3000/tricks')
//          router.refresh()
//      } catch(error) {
//          console.error('Failed to update/create trick:', error);
//      }
//     };
//
//
//     return (
//         <div>
//         <h1>Add a Trick</h1>
//     <form
//         method="post"
//
//         onSubmit={handleSubmit}
//         className="flex flex-col">
//
//         <div className="mb-2">
//             <label htmlFor="name">Name</label>
//             <input
//                 name="name"
//                 onChange={e => handleChange(e)}
//                 id="name" type="text" placeholder="Title" value={formData.name}
//             />
//
//         </div>
//
//         <div className="flex flex-col">
//             <label htmlFor="description">Description</label>
//             <input
//                 onChange={e => handleChange(e)}
//                 id="description"
//                 name="description"
//                 type="text"
//                 placeholder="Description"
//                 value={formData.description}/>
//         </div>
//
//         <div className="flex flex-col">
//             <label htmlFor="category">Category</label>
//             <select
//                 onChange={e => handleChange(e)}
//                 name="category" id="category" value={formData.category}>
//                 {Object.keys(Category).map((category) => (
//                     <option key={category} value={category}>{category}</option>
//                 ))}
//
//             </select>
//         </div>
//         <button className="button" type="submit">Add Trick</button>
//     </form>
//         </div>
// )
//     ;
// }
//
// export default NewTrickForm;