import React, { useState, useCallback, useEffect } from 'react';
import { ResponseForm } from '../Responses/index';
import axios from 'axios';

const ResponseModal = ({ show, setShow, questionData }) => {
    const [resFormData, setResFormData] = useState({ responce: '', question_id: '' })
    const [responce, setResponce] = useState('');

    //モーダル閉じる
    const closeModal = () => {
        setShow(false)
    }
    
    //回答のテキストが入力がされたら（都度）入力値を変更する
    const inputChange = useCallback((e) => {
        const key = e.target.name;
        const value = e.target.value;
        resFormData[key] = value;
        let data = Object.assign({}, resFormData);
        setResFormData(data);
    })


    //回答をデータベースに送信
    const postResponce = async (e) => {
        if (resFormData == '') {
            return;
        }
        await axios
            .post('api/responce', {
                responce: resFormData.responce,
                question_id: questionData.id
            })
            .then((res) => {
                //戻り値をtodosにセット
                getQuestions(res.data);
                const resPosts = responce
                resPosts.push(res.data);
                setResponce(resPosts);
                setResFormData('');
            })
            .catch(error => {
                console.log(error);
            });
    }

    if (show) {
        return (
            <div className="home_body">
                <div className="res_overlay">
                    <div className="res_contents">
                        <div className="res_container">
                        <p className="home_text">質問</p>
                            <p>{questionData["question"]}</p>
                            <p className="home_text">回答一覧</p>
                        {
                            questionData.responces.map(res => (
                                <div key={res.id}>
                                    <p>・{res.responce === ""  ? "現在回答はありません" : res.responce}</p>
                                </div>
                            ))
                        }
                        </div>
                        <ResponseForm data={resFormData} btnFunc={postResponce} inputChange={inputChange}  />
                        <button onClick={closeModal}>投稿をやめる</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default ResponseModal;