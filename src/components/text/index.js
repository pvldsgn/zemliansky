import React from "react"
import s from "./index.module.sass"

//plugins
import classNames from "classnames/bind"
const cx = classNames.bind(s);

const Text = ({ children, size = "s", as, className }) => {
    const Tag = as || "span";

    return (
        <Tag
            className={cx(s.text, className, {
                xl: size === "xl",
                l: size === "l",
                m: size === "m",
                s: size === "s",
            })}
        >
            {children}
        </Tag>
    );
};

export default Text;
