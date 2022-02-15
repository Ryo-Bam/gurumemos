import React, { useEffect, useState } from "react";
import { NoEncryption } from "@material-ui/icons";
import { left } from "@popperjs/core";
import { FaStar } from "react-icons/fa";


const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9"
}

const styles = {
    container: {
        display: "inline-flex",
    }
}

//データベースからきた星評価の表示
const StarData = (props) => {
    const [hoverValue, setHoverValue] = useState(null);
    
    return (
        <div style={styles.container}>
            <div className="stars_content">
                {[...Array(5)].map((index, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label key={i}>
                            <FaStar
                                key={i}
                                id={props.id}
                                style={{
                                float: left,
                                marginRight: 10,
                                cursor: "pointer"
                                }}
                                color={(props.color || hoverValue) >= ratingValue ? colors.orange : colors.gray}
                                size={24}
                                onMouseEnter={() => setHoverValue(ratingValue)}
                                onMouseLeave={() => setHoverValue(null)}
                            />
                        </label>
                    )
                })}
            </div>
        </div>
    )
}
export default StarData;