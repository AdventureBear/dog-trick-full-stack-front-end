'use server'
import axios from 'axios';
import { TrickType } from '../types';
import { Trick } from '@prisma/client';

export async function getAllTricks() {
    try {
        const response = await axios.get('http://localhost:3000/api/tricks');
        return response.data; // Axios automatically parses the JSON
    } catch (error) {
        throw new Error('Failed to fetch tricks');
    }
}

export async function getOneTrick(id: string) {
    try {
        const response = await axios.get(`http://localhost:3000/api/tricks/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch trick');
    }
}

export async function createTrick(newTrick: { description: string; name: string; category: string }) {
    try {
        const response = await axios.post('http://localhost:3000/api/tricks', newTrick);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrowing the error is useful if you handle these errors upstream
    }
}

export async function deleteTrick(id: number) {
    try {
        const response = await axios.delete(`http://localhost:3000/api/tricks/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function updateTrick(updateTrick: TrickType) {
    try {
        const response = await axios.patch(`http://localhost:3000/api/tricks/${updateTrick.id}`, updateTrick);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}



// 'use server'
// import {NextRequest} from "next/server";
// import {NewTrickType, TrickType} from "../types";
// import {Trick} from "@prisma/client";
//
// export async function getAllTricks() {
//     const res = await fetch('http://localhost:3000/api/tricks')
//
//     if (!res.ok) {
//         throw new Error('Failed to fetch tricks')
//     }
//
//     return res.json()
// }
//
//
// export async function getOneTrick(id:string) {
//     const res = await fetch(`http://localhost:3000/api/tricks/${id}`)
//
//     if (!res.ok) {
//         throw new Error('Failed to fetch trick')
//     }
//
//     return res.json()
// }
//
//
// export async function createTrick(newTrick: { description: string; name: string; category: string }) {
//     console.log("Trying to Add Trick", newTrick)
//     const res = await fetch( 'http://localhost:3000/api/tricks',
//         {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newTrick)
//         }).then(response => response.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(error => console.error('Error:', error));
//     return ;
//
//
// }
//
// export async function deleteTrick(id: number) {
//     const res = await fetch(`http://localhost:3000/api/tricks/${id}`, {
//         method: "DELETE"
//     }).then(response => response.json())
//         .then(data => {
//             console.log(data)
//
//         })
//         .catch(error => console.error('Error:', error));
//     return ;
// }
//
// export async function updateTrick(updateTrick: TrickType) {
//     const res = await fetch(`http://localhost:3000/api/tricks/${updateTrick.id}`, {
//         method: "PATCH",
//         body: JSON.stringify(updateTrick)
//     }).then(response => response.json())
//         .then(data => {console.log(data)})
//         .catch(error => console.error('Error:', error));
// }