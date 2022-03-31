import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './MealDetails.css'

const MealDetails = () => {
    const { mealId } = useParams();

    const [mealDetail, setMealDetail] = useState({});

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMealDetail(data.meals[0]))
    }, [mealId])

    return (
        <Container className='my-5 d-flex justify-content-center'>
            <Card className='p-3 text-center' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={mealDetail.strMealThumb} />
                <Card.Body>
                    <h2>{mealDetail.strMeal}</h2>
                    <Card.Text>
                        {(mealDetail.strInstructions)?.slice(0, 50)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MealDetails;