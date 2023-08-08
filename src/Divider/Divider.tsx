import React, { FC, memo } from "react";
import Css from './Divider.module.less'
import { DividerProps } from './interface';

const Divider: FC<DividerProps> = memo((props) => {
    let { children, Position, direction } = props
    if (!Position) {
        Position = "middle"
    }

    if (!direction) {
        return (
            <div>
                <div className={Css.bigBox}>
                    {children ?
                        <div className={[Css['box'],
                        Css[Position]].join(' ')}>
                            {children}
                        </div>
                        : ''
                    }
                </div>
            </div>
        )
    } else {
        return (
            <span className={Css.horizontal}>|</span>
        )
    }
})
export default Divider