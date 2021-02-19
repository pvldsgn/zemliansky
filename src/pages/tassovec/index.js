import React from "react"
import s from "./index.module.sass"

// components
import Text from 'components/text'
import Info from 'components/info'

// plugins
import Tilt from 'react-parallax-tilt'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

const Tassovec = () => {
    return (
        <div className={s.content }>

            <Info />
            <Parallax pages={4} scrolling vertical style={{ background: `#3985C5` }}>
                
                {/* Title */}
                <section>
                    <Tilt
                        className={s.parallax} 
                        perspective={1000} 
                        tiltAxis={'y'}
                    >
                        <ParallaxLayer offset={0} speed={0.05}>
                            <div className={s.wrapper}>
                                <img src={"./img/tassovec.png"} className={s.img} alt="img"/>
                            </div>
                        </ParallaxLayer>
                        <div className={s.title}>
                            <Text size="xl">Tassovec</Text>
                        </div>
                    </Tilt>
                </section>

                {/* Cover */}
                <section className={s.mobile}>
                    <ParallaxLayer 
                        offset={0} 
                        speed={-0.05} 
                        style={{ 
                            height: `80vh`, 
                            overflow: `hidden` 
                    }}>
                        <ParallaxLayer offset={0} speed={0.1}>
                            <img src={"./img/tassovec/main.png"} className={s.cover} alt="img"/>
                        </ParallaxLayer>
                    </ParallaxLayer>
                </section>

                {/* Info */}
                <section>
                    <ParallaxLayer offset={0} speed={-0.1}  className={s.section}>
                        <div className={s.text}>
                            <Text size="l">Tassovec — mobile application.<br/> Was developed for the internal interaction of TASS employees and the comfortable use of the company's internal products</Text>
                        </div>
                    </ParallaxLayer>
                </section>

            </Parallax>
        </div>
    );
};

export default Tassovec;