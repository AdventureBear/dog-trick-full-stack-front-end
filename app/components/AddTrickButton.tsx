import React from 'react';
import './Button.css'
import Link from "next/link";

function AddTrickButton() {
    return (
        <div className="ml-5">
            <Link href="./tricks/new"><button className="addButton">Add Trick</button></Link>
        </div>
    );
}

export default AddTrickButton;