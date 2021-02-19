import { useState } from 'react'
import s from './index.module.sass'

// components
import Card from 'components/cards/card'

// plugins
import {  CSSTransition, TransitionGroup, } from 'react-transition-group';

import classnames from "classnames/bind"
const cx = classnames.bind(s)


// cards
const cardsArray = [
    {
        name: "Tassovec",
        img: "./img/tassovec.png",
        link: "/tassovec",
        bgColor: '#007AFF',
    },
    {
        name:"Today",
        img:"./img/today.png",
        link:"/today",
        bgColor:'red',
    },
    {
        name:"Today",
        img:"./img/today.png",
        link:"/somepage",
        bgColor: 'green',
    }
]


// slider

export const Cards = () => {

    const [active, setActive] = useState(0)

    if (!cardsArray) return null;

    const cardsList = (
        <div className={s.cardsList} style={{transform: `translateX(${active * -50}%)`}}>
            {
                cardsArray.map(({name, img, link }, i) => {
                    return (
                        <Card
                            key={i}
                            name={name}
                            img={img}
                            link={link}
                            {...{i, active, setActive}}
                        />
                    )
                })
            }
        </div>
    )

    const bullitsShift = { transform: `translateX(${-26 - (16*active)}px)`}

    const bullits = (
        <div style={bullitsShift} className={s.bullits}>
            {
                cardsArray.map((card, i) => {
                    return (
                        <span onClick={() => setActive(i)} key={i} className={cx(s.bullit, {active: i === active})}>
                            <span/>
                        </span> 
                    )
                })
            }
        </div>
    )

    const background = (
        <TransitionGroup className={s.coverContainer}>
            <CSSTransition
                key={active}
                timeout={400}
                classNames={s}
            >
                <div className={s.cover} style={{backgroundColor: cardsArray[active].bgColor }}/>
            </CSSTransition>
        </TransitionGroup>
    )

    return (
        <section className={s.cards}>
            {cardsList}
            {bullits}
            {background}
        </section>
    );
};

export default Cards