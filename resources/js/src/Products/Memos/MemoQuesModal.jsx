import { getTilesIds } from "google-map-react";
import React, { useState, useCallback, useEffect } from "react";
import { MemoForms } from "../Memos/index";
import { QuestionForm } from "../Questions/index";

const MemoQuesModal = ({ show, setShow, store_id, name, category }) => {

    const [memo, setMemo] = useState('');
    const [formData, setFormData] = useState({ title: '', enter_time: '', mymemo: '', allvalue: '', service: '', price: '', store_id: '',image: '' });
    const [quesFormData, setQuesFormData] = useState({ question: '', store_id: '', question_category_id: '' });
    const [question, setQuestion] = useState('');
    const [onImage, setOnImage] = useState('');

    //画像の取得及びimgDataに追加
    const imgData = new FormData();
    const handleUploadImg = useCallback((e) => {
    if (!e.currentTarget.files || e.currentTarget.files.length === 0) return;
    const fileReader = new FileReader();
    const file = e.currentTarget.files[0];
    if (file.type !== "image/jpeg" && file.type !== "image/png") return;
    imgData.append('image', file);
    for (let value of imgData.entries()) {
    }
});
    //質問のテキストが入力がされたら（都度）入力値を変更する
    const inputQuesChange = useCallback((e) => {
        const key = e.target.name;
        const value = e.target.value;
        quesFormData[key] = value;
        let data = Object.assign({}, quesFormData);
        setQuesFormData(data);
    })

    //質問の情報をデータベースに送信
    const createQuestion = async (e) => {
        if (quesFormData == '') {
            return;
        } 
        //質問のカテゴリー選択されているかのバリデーション
        if (quesFormData.question_category_id == "") {
            alert("質問のカテゴリーを選択して下さい！");
        }
        await axios
            .post('api/question', {
                question: quesFormData.question,
                store_id: store_id,
                question_category_id: quesFormData.question_category_id
            })
            .then((res) => {
                //戻り値をtodosにセット
                const quesPosts = question
                quesPosts.push(res.data);
                setQuestion(quesPosts)
                setQuesFormData('');
            })
            .catch(error => {
                console.log(error);
            });
    }

    //メモのテキストが入力がされたら（都度）入力値を変更する
    const inputChange = useCallback((e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    })

    //メモの情報をデータベースに送信
    const createMemo = async (e) => {
        if (formData == '') {
            return;
        }
        //フォーム入力されていなかった時のバリデーション
        if (formData.title == "" || formData.enter_time == "" || formData.mymemo == "" || allvalue[0].value == "" || service[0].value == "" || price[0].value == "") {
            return (
                alert("未入力の箇所があります。再度やり直して下さい。")
            )
        }
        //imgDataに各項目を追加
        imgData.append('title', formData.title);
        imgData.append('enter_time', formData.enter_time);
        imgData.append('mymemo', formData.mymemo);
        imgData.append('allvalue', allvalue[0].value);
        imgData.append('service', service[0].value);
        imgData.append('price', price[0].value);
        imgData.append('store_id', store_id);
        //入力値を投げる
        await axios
            .post('/api/memo', 
                imgData
            )
            .then((res) => {
                //戻り値をtodosにセット
                const memoPosts = memo
                memoPosts.push(res.data);
                setMemo(memoPosts)
                setFormData('');
            })
            .catch(error => {
                console.log(error);
            });
    }

    //モーダルを閉じる
    const closeModal = () => {
        setShow(false)
    }

    //メモと質問のフォーム設定
    if (show) {
        return (
            <div className="home_body">
                <div className="memo_overlay">
                    <div className="memo_content">
                        <div>
                            <MemoForms data={formData} btnFunc={createMemo} inputChange={inputChange} name={name} handleUploadImg={handleUploadImg} />
                            <QuestionForm category_data={category} questionBtn={createQuestion} inputChange={inputQuesChange} />
                        </div>
                        <button onClick={closeModal}>投稿をやめる</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default MemoQuesModal;