import React, { FC, memo, useEffect, useRef } from 'react';
import css from './Scroll.module.less';
import { ScrollProps } from './interface';
const Scroll: FC<ScrollProps> = memo((props) => {
    const { children, loadMore, More } = props;
    const containerRefs = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const container = containerRefs.current!;
        const handelScroll = () => {
            if (container) {
                const isBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 100
                if (isBottom && !More) {
                    console.log("加载中...");
                    loadMore();
                    
                }
            }
        }
        container.addEventListener("scroll", handelScroll)

        return () => {
            container.removeEventListener("scroll", handelScroll)
        }

    }, [loadMore])
    return (
        <div className={css.container} ref={containerRefs}>
            {children}
        </div>

    );
});

export default Scroll;
