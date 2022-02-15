import React, { useState, useEffect } from "react";
import axios from "axios";
import { StarData } from "../FormsUi/index";
import { MemoQuesModalClick } from "../Memos/index";
import { makeStyles } from '@material-ui/core/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const useStyles = makeStyles((theme) => ({
    swip: {
        boxSizing: 'content-box'
    },
}));

SwiperCore.use([Navigation]);

const MemoData = (props) => {
    const classes = useStyles();
    const [memos, setMemos] = useState([]);
    
    //memoの情報をデータベースから引き抜いてmemosに格納
    const getMemo = async () => {
        if (props.memos !== '') {
            setMemos(props.memos);
        }
    }

    useEffect(() => {
        getMemo();
    }, [props.memos])

    // useEffect(() => {
    //     getMapLatLng();
    // }, [])

    //データベースに入っているメモのデータを表示
    //その下でメモと質問のフォームモーダル
    return (
    <div>
        <div className="memo_container">
            <h1 className="home_title">投稿一覧</h1>
            <Swiper navigation={true}>
                {
                    memos.map(memo => (
                        <div key={memo.id}>
                        <SwiperSlide key={memo.id} className={classes.swip}>
                            <div>
                                <p className="memo_title">{memo.title}</p>
                                <div className="module-spacer-super-small" />
                                <div className="memo_img">
                                <img src={memo.image}/>
                                </div>
                                <br></br><p className="home_text">時間等</p>
                                <p>{memo.enter_time}</p>
                                <div className="module-spacer-small-pulus" />
                                <h1 className="home_text">総合評価</h1>
                                <StarData color={memo.allvalue} />
                                <div className="module-spacer-small" />
                                <h1 className="home_text">サービス力</h1>
                                <StarData color={memo.service} />
                                <div className="module-spacer-small" />
                                <h1 className="home_text">料金</h1>
                                <StarData color={memo.price} />
                                <div className="module-spacer-small" />
                                <h1 className="home_text">「マイメモ」</h1>
                                <p>{memo.mymemo}</p>
                            </div>
                        </SwiperSlide>
                        </div>
                    ))
                }
            </Swiper>
        </div>
        <div>
            <MemoQuesModalClick store_id={props.store_id} name={props.name} category={props.category} />
        </div>
</div>
    )
}

export default MemoData;