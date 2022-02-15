import { left } from "@popperjs/core";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";


const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9"
}

const styles = {
    container: {
        display: "block",
    }
}

//フォームの星評価
const StarRate = (props) => {
    const [ratingStar, setRatingStar] = useState(null);
    const [hoverValue, setHoverValue] = useState(null);
    
    return (
        <div style={styles.container}>
            <div style={styles.stars}>
                {[...Array(5)].map((index, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label key={i}>
                            <input
                                key={i}
                                id={props.id}
                                className="star_input"
                                type="radio"
                                value={ratingStar}
                                onClick={() => setRatingStar(ratingValue)}
                            />
                            <div className="memo_star">
                            <FaStar
                                key={i}
                                style={{
                                float: left,
                                marginRight: 10,
                                cursor: "pointer"
                                }}
                                color={(ratingStar || hoverValue) >= ratingValue ? colors.orange : colors.gray}
                                size={24}
                                onMouseEnter={() => setHoverValue(ratingValue)}
                                onMouseLeave={() => setHoverValue(null)}
                            />
                            </div>
                        </label>
                    )
                })}
            </div>
        </div>
    )
}
export default StarRate;