import React, { useState } from 'react'
import './Style.css';
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from "./Navbar";

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];




const Resturant = () => {

    const [menuData, setmenuData] = useState(Menu)
    // in side parenthesis () is a Current Data
    const [menuList, setMenuList] = useState(uniqueList);


    const filterItem = (catagory) => {

        if (catagory === "All") {
            setmenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === catagory;
        })
        setmenuData(updatedList);
    }


    return (
        <>

            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant

// manage data we use Usestate

// DRT :- Do Not Repeat YourSelf

// Spraid oparater (...)

// de-structuring

