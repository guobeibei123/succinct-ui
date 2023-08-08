import React, { memo, useMemo, FC, useRef, useEffect } from "react";
import Css from './Notification.module.less'
import { NotProps } from './interface';

const Not: FC<NotProps & NotProps> = memo((props) => {
    const { type, duration, children } = props;
    const NotStyle = useMemo(() => {
        if (!type && type !== 'topLeft') {
            return 'navs';
        }
        return type as any;
    }, [type]);
    // 点击按钮出现
    function onchange() {
        if (divref.current) {
            divref.current.hidden = false;
        }
        console.log(divref);
        // 如果duration存在 执行延时器
        if (duration) {
            setTimeout(() => {
                if (divref.current) {
                    divref.current.hidden = true;
                }
            }, duration)
        }
    }
    // 初始化的时候 隐藏
    useEffect(() => {
        if (divref.current) {
            divref.current.hidden = true
        }
    }, [])
    const divref = useRef<HTMLDivElement>(null);
    //  点击x 消失
    function change() {
        if (divref.current) {
            divref.current.hidden = true;
        }
    }
    return (
        <>
            <button className={Css.button} onClick={() => onchange()}>{children}</button>
            <div className={Css[NotStyle]} ref={divref}>
                <div className={Css.error} onClick={() => change()}>x</div>
                <h3>{props.message} </h3>
                <div>{props.description} </div>
            </div>
        </>
    );
});

export default Not;