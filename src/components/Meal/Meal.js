import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal;

    const navigate = useNavigate();
    const showMealDetail = () => {
        const path = `/mealDetails/${idMeal}`;
        navigate(path);
    }


    return (
        <div className='text-center'>
            <Card className='p-2' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 50)}
                    </Card.Text>
                    <CustomLink className="ms-2 " to={'/mealDetails/' + idMeal}><Button onClick={showMealDetail} variant="primary">Details {idMeal}</Button></CustomLink>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Meal;