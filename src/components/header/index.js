import React from "react"
import s from "./index.module.sass"

import { Link } from "react-router-dom"

// components
import Text from "components/text"
// icons
import { ReactComponent as IconLinkedin } from "icons/social/linkedin.svg"
import { ReactComponent as IconTelegram } from "icons/social/telegram.svg"
import { ReactComponent as IconInstagram } from "icons/social/instagram.svg"

const Header = () => {
    return (
        <div className={s.header }>
            <header>
                <Link to="/" className={s.name}>
                    <div className={s.logo}>
                        <Text size="m">Zemliansky©</Text>
                    </div>
                </Link>
                <div className={s.social}>
                    <a target="_blank" href="https://t.me/sampashas" rel="noreferrer">
                        <IconTelegram />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/sampashas/" rel="noreferrer">
                        <IconLinkedin />
                    </a>
                    <a target="_blank" href="https://instagram.com/sampashas/" rel="noreferrer">
                        <IconInstagram />
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Header;