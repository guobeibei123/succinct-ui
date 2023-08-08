import React, { useMemo, FC, memo, useState } from 'react';
import { SelectProps, SelectStyle } from './interface';
import css from './Select.module.less'
const Select: FC<SelectProps> = memo((props) => {
    const { width, disabled, height, options } = props;
    const selectSize = useMemo(() => {
        var size: SelectStyle = {
            width: '200px',
            height: '32px',
        };
        if (width) {
            size.width = width + 'px';
        }
        if (height) {
            size.height = height + 'px';
        }
        if (disabled) {
            size = {cursor: 'not-allowed' };
        }
        return size;
    }, [width, height, disabled]);
    let [display, setDisplay] = useState(true)
    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        setDisplay(!display)
    }
    let [text, setText] = useState("")
    const changeInput = (item: { state?: boolean | undefined; title: any; }) => {
        if (item.state) {
            setText(item.title)
            setDisplay(!display)
        }
    }
    return (
        <div className={css.container}>
            <input type="text" placeholder='Select下拉框' style={selectSize as any} className={css.select} onClick={(e) => handleClick(e)} disabled={disabled} value={text} />
            <div className={[css.ul, display ? css.hidden : css.show].join(' ')} >
                {
                    options.map((item: {
                        state: boolean | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                    }) => {
                        return (
                            <div className={[css.li, item.state === true ? css.isSelect : css.NoSelect].join(" ")} onClick={() => changeInput(item)}>{item.title}</div>
                        )
                    })
                }
            </div>
        </div>
    );
});

export default Select;