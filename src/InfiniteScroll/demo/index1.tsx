import React, { useState } from 'react';
import Scroll from '..';
export default function LoadingDemo1() {
    const [data, setData] = useState<any[]>(["1"]);
    const [More, setMore] = useState(false);
    const fetchData = () => {
        setMore(true);
        setTimeout(() => {
            setData([...data, 1])
            setMore(false)
        }, 1000);
    }
    const loadMore = () => {
        if (!More) {
            fetchData();
        }
    }
    return (
        <div>
            <Scroll loadMore={loadMore} More={More}>
                <div style={{ height: "100px", backgroundColor: "#e8f3fe", marginBottom: "10px" }}>1</div>
                <div style={{ height: "100px", backgroundColor: "#e8f3fe", marginBottom: "10px" }}>2</div>
                <div style={{ height: "100px", backgroundColor: "#e8f3fe", marginBottom: "10px" }}>3</div>
                <div style={{ height: "100px", backgroundColor: "#e8f3fe", marginBottom: "10px" }}>4</div>
                <div style={{ height: "100px", backgroundColor: "#e8f3fe", marginBottom: "10px" }}>5</div>
                {
                    data.map((item, index) => {
                        return (
                            <div key={item} style={{ height: "100px", backgroundColor: "#7dbcfc", marginBottom: "10px" }}>{index + 6}</div>
                        )
                    })
                }
            </Scroll>
        </div>
    );
}
