import React from 'react'
import "./DropDown.css"
const DropDownContent=[
{id:1,city:"Amrita"},
{ id:2,city:"Annur"},
{id:3,city:"Avinashi"},
{id:4,city:"Bosch Coimbatore"},
{id:5,city:"Chennai"},
{id:6,city:"Cognizanr Coimbatore"},
{id:7,city:"Coimbatore"},
{id:8,city:"Coonoor"}
];
const DropDown = () => {
  return (
    <div>
        <ul className="drop-down">
            {
                DropDownContent.map((content)=>(
                    <li key={content.id} className="drop-down-contents">{content.city}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default DropDown