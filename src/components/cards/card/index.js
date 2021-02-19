import React from "react"
import s from "./index.module.sass"

// react-router
import { useHistory } from "react-router-dom"

// components
import Text from 'components/text'

// plugins
import Tilt from 'react-parallax-tilt'
import classnames from "classnames/bind"


// card

const cx = classnames.bind(s)

const Card = ({
        name,
        img,
        link,
        i,
        active, 
        setActive
    }) => {
    const history = useHistory();
    const isActive = i === active
    const isPrev = i < active
    const isNext = i > active 

    const handleClick = () => {
        if (isActive) {
            history.push(link);
        }

        if (isPrev) {
            setActive(active - 1) 
        }

        else if (isNext) {
            setActive(active + 1)
        }
    }

    const imgStyle = {backgroundImage: `url(${img})`}
    const tiltEnable = isActive ? true : false
    const scaleEnable = isActive ? 1.1 : 1

    return (
        <div className={cx(s.cardContainer, {active: isActive, prev: isPrev, next: isNext})}>
            <div className={s.card} onClick={handleClick}>
                <Tilt 
                    tiltEnable={tiltEnable} 
                    className={s.tilt} 
                    perspective={1000} 
                    scale={scaleEnable} 
                    gyroscope={true}
                >
                     <div style={imgStyle} className={s.img}/>
                    <Text className={s.name} size="xl">{name}</Text>
                </Tilt>
            </div>
        </div>
    );
};

export default Card;