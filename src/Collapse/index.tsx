import React, { FC, memo, useState, useRef } from 'react';
import { CollapseProps } from './interface';
import css from './Collapse.module.less'
const Collapse: FC<CollapseProps> = memo((props) => {
    const { width, height, title, ref, options, state } = props;
    let [num, setNum] = useState(0)
    let refs = useRef<(HTMLDivElement | null)[]>([]);
    const Collapse = (res: any, index: any) => {
        if (!state) {
            if (refs.current[index]!.style.height == "") {
                refs.current[index]!.style.height = height + "px"
                // console.log(refs.current[index]?.style.height);
                return
            }
            if (refs.current[index]!.style.height === height + "px") {
                refs.current[index]!.style.height = ""
                // console.log(refs.current[index]?.style.height);
            }
        }
        if (state) {
            setNum(index)
        }
    }
    return (
        <div className={css.container}>
            {
                options.map((item: any, index: any) => {
                    return (
                        <div key={item.key}>
                            <div className={css.title} onClick={() => Collapse(item.key, index)} key={item.key}>
                                {item.title}
                            </div>
                            <div className={css.content} ref={element => { refs.current[index] = element }} style={state ? { height: index == num ? height + "px" : "" } : undefined} >{item.children}</div>
                        </div>
                    )
                })
            }
        </div >
    );
});

export default Collapse;