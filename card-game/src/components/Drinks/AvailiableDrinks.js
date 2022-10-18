import React from 'react'
import { useState } from 'react';
import classes from './AvailiableDrinks.module.css'

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
    const drinksList = DUMMY_DRINKS.map(drink => <li>{drink.name}</li>)
  return (
    <section className={classes.drinks}>
        <ul>{drinksList}</ul>
    </section>
  )
}

export default AvailiableDrinks