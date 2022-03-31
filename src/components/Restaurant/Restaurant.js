import React, { useEffect, useState } from 'react';
import './Restaurant.css'
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const searchFood = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <>
            <Container className='my-3'>
                <InputGroup className="mb-3" onChange={searchFood}>
                    <FormControl
                        placeholder="Search Meal"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
            </Container>

            <Container className='meals-container'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </Container>
        </>
    );
};

export default Restaurant;