import React from "react";
import s from "./index.module.sass";
import Text from 'components/text'

const Info = () => {
    return (
        <div className={s.info }>
            <div>
                <Text size="s">Product Designer</Text>
            </div>
            <div>
                <Text size="s">↓</Text>
            </div>
            <div>
                <Text size="s">Begin 2021</Text>
            </div>
        </div>
    );
};

export default Info;