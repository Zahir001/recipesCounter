import React, { useState } from "react";
import recipeData from "../data/data";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebarUl">
                {recipeData.map((item) => {
                    return (
                        <li
                            className="sideImageStyle"
                            key={item.id}
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            <Link to={`/recipe/${item.id}`}>
                                <figure>
                                    <img src={item.image} alt={item.name} />
                                </figure>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
