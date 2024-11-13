import React, { useState } from 'react';
import './Add.css'
import { FaCubes } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

function Add() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Price:', price);
        console.log('Image:', image);
    };

    return (
        <div>
        <div className="sidebar">
        <div className="sidebar-header">
          <img src="./src/assets/images/Logo.png" alt="Logo" />
        </div>
        <div className="sidebar-nav">
        
            <img src="./src/assets/images/profile.png" alt="" />
            <div className="sidebar">
        <button className="sidebar-button orange">
        
        <i className="fa fa-cubes"></i>
        <FaCubes />
          Products
        </button>
        <div className="sidebar-item">
          <i className="fa fa-bookmark"></i>
          <CiBookmark />
          Favorites
        </div>
        <div className="sidebar-item">
          <i className="fa fa-bookmark"></i>
          <CiBookmark />
          Order List
        </div>
        <br />
        <br />
        <br /><br /><br /><br /><br /><br />
        <div className="sidebar-item">
          <i className="fa fa-bookmark"></i>
          <CiLogout />
         logout
        </div>
  </div>
    </div>
    </div>
        <div className="container">
            <h2>ADD NEW ITEM</h2>
            <form onSubmit={handleSubmit}>
                <div className='float'>
                <div>
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <br />
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                </div>
                <div>
                    <label className='drop' htmlFor="image">Image:
                        <br />
                        <img src="./src/assets/images/add drop.png" alt="" />
                    </label>
                    <input type="file" id="image" />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
        </div>
    );
}

export default Add;