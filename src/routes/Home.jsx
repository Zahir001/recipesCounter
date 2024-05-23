import React, { useEffect, useState } from "react";
import recipeData from "../data/data.js";
import { useParams } from "react-router-dom";

const Home = () => {
    const { id } = useParams();
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [animationClass, setAnimationClass] = useState("");
    useEffect(() => {
        // Find the recipe with the matching ID
        var recipe = recipeData.find((item) => item.id == parseInt(id));
        if (recipe == null) {
            recipe = recipeData[0];
        }
        setSelectedRecipe(recipe);
        setAnimationClass(`animate__animated animate__fadeInUp`);
    }, [id]);
    if (!selectedRecipe) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div>
                <div>
                    <div className="figureClass">
                        <div className="figureClassOne">
                            <figure>
                                <img src={selectedRecipe.image} alt="" />
                            </figure>
                            {/* <h2>{selectedRecipe.name}</h2> */}
                        </div>
                        <div className="figureClassTwo">
                            <figure>
                                <img src={selectedRecipe.chefImg} alt="" />
                            </figure>
                            <div className="">
                                <span>Hi, I am {selectedRecipe.upload_by}</span>
                                <br />
                                <span>{selectedRecipe.uploaded_date}</span>
                            </div>
                            <p>{selectedRecipe.description}</p>
                            <div className="ratingParent">
                                <div class="rate">
                                    <input
                                        type="radio"
                                        id="star5"
                                        name="rate"
                                        value="5"
                                        checked
                                    />
                                    <label for="star5" title="text">
                                        5 stars
                                    </label>
                                    <input
                                        type="radio"
                                        id="star4"
                                        name="rate"
                                        value="4"
                                        checked
                                    />
                                    <label for="star4" title="text">
                                        4 stars
                                    </label>
                                    <input
                                        type="radio"
                                        id="star3"
                                        name="rate"
                                        value="3"
                                    />
                                    <label for="star3" title="text">
                                        3 stars
                                    </label>
                                    <input
                                        type="radio"
                                        id="star2"
                                        name="rate"
                                        value="2"
                                    />
                                    <label for="star2" title="text">
                                        2 stars
                                    </label>
                                    <input
                                        type="radio"
                                        id="star1"
                                        name="rate"
                                        value="1"
                                    />
                                    <label for="star1" title="text">
                                        1 star
                                    </label>
                                </div>
                                <div>{selectedRecipe.rating}</div>
                            </div>
                        </div>
                    </div>
                    <div className={`nutritionalFacts ${animationClass}`}>
                        <h5>
                            Nutrition Facts{" "}
                            <span className="perServing">(PER SERVING)</span>
                        </h5>
                        <div className="nutritionalFactsChild">
                            <div className="">
                                <span className="nutritextOne">
                                    {selectedRecipe.calories}
                                </span>
                                <span className="nutritextTwo">CALORIES</span>
                            </div>
                            <div>
                                <span className="nutritextOne">
                                    {selectedRecipe.fat}
                                </span>
                                <span className="nutritextTwo">CALORIES</span>
                            </div>
                            <div>
                                <span className="nutritextOne">
                                    {selectedRecipe.carbs}
                                </span>
                                <span className="nutritextTwo">CALORIES</span>
                            </div>
                            <div>
                                <span className="nutritextOne">
                                    {selectedRecipe.protien}
                                </span>
                                <span className="nutritextTwo">CALORIES</span>
                            </div>
                        </div>
                        <p>{selectedRecipe.nutrionalDesc}</p>
                    </div>
                    <div className="howTwoMake">
                        <span>{selectedRecipe.title_desc}</span>
                        <ul>
                            {selectedRecipe.recipe.map((item) => {
                                return <li>{item}</li>;
                            })}
                        </ul>
                        <div className={`instructionTitle`}>
                            <span>Instructions</span>
                            <ul>
                                {selectedRecipe.instruction.map((item) => {
                                    return (
                                        <>
                                            <li>{item}</li>
                                        </>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
