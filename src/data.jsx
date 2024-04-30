import React, { useState } from 'react';
import CardComp from './Card';
import portfolioimg from './images/portfolio.png';
import deckimg from './images/deck.png'
import calcimg from './images/calcimg.png'
import cheeseimg from './images/cheeseimg.png'
import todoimg from './images/todoimg.png'
import portimg from './images/port.png'
import plantyimg from './images/planty.png'

const Data = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    let datas = [
        {
            img: deckimg,
            title: 'Deck',
            text: 'Front-End Project Using React',
            category:'React'
        },
        {
            img: calcimg,
            title: 'Calculator',
            text: 'Basic JavaScript Project',
            category:'JavaScript'
        },
        {
            img: cheeseimg,
            title: 'Cheese & Bacon',
            text: 'Front-End Project Using BootStrap',
            category: 'BootStrap'
        },
        {
            img: todoimg,
            title: 'To-Do',
            text: 'Front-End Project Using JavaScript',
            category:'JavaScript'
        },
        {
            img: plantyimg,
            title: 'Garden',
            text: 'Basic Project using BootStrap',
            category: 'BootStrap'
        },
        {
            img: portimg,
            title: 'Port',
            text: 'Front-End Project Using HTML CSS',
            category: 'BootStrap'
        },
        {
            img: portfolioimg,
            title: 'Portfolio',
            text: 'Front-End Project Using React',
            category:'React'
        }
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredDatas = selectedCategory === 'All' ? datas : datas.filter(item => item.category === selectedCategory);

    return (
        <>
            <div className='justify-content-center'>
                <div><h1 className='text-center'>Projects</h1></div>
                <div className='title-container d-flex gap-2 justify-content-center '>
                    <button onClick={() => handleCategoryClick('All')}>All</button>
                    <button onClick={() => handleCategoryClick('React')}>React</button>
                    <button onClick={() => handleCategoryClick('JavaScript')}>Vanila JS</button>
                    <button onClick={() => handleCategoryClick('BootStrap')}>CSS & BootStrap</button>
                </div>
            </div>
            <div className='row justify-content-center'>
                {filteredDatas.map((item, index) => (
                    <div key={index} className='col-lg-4 col-md-6 col-sm-12 mb-5 mt-5'>
                        <CardComp
                            img={item.img}
                            title={item.title}
                            text={item.text}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Data;
