import React from 'react'
import { useState } from 'react';
import classes from './AvailiableDrinks.module.css'
import Card from '../UI/Card';
import DrinkItem from '../DrinkItem/DrinkItem';

const DUMMY_DRINKS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

function AvailiableDrinks() {
    const drinksList = DUMMY_DRINKS.map((drink) => (<DrinkItem id = {drink.id} key = {drink.id} name = {drink.name} 
      description ={drink.description} price ={drink.price}/>));
  return (
    <section className={classes.drinks}>
      <Card>
        <ul>{drinksList}</ul>
      </Card>
    </section>
  )
}

export default AvailiableDrinks