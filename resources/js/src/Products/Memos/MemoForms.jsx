import React from "react";
import {LongTextInput, PrimaryButton} from "../../Uikit/index";
import { StarRate, UploadImgs } from "../FormsUi/index";

const MemoForms = (props) => {
    const { data, inputChange, btnFunc, name, handleUploadImg, uploadImg } = props;
    //メモの新規登録フォーム
    return (
        <div className="question_container">
            <h1 className="home_text">『{name}』の投稿フォームです</h1>
            <form>
                <div>
                <LongTextInput
                id="title"
                multiline={false}
                label={"タイトル"}
                placeholder={"タイトル"}
                rows={1}
                name="title" 
                value={data.title} 
                onChange={inputChange}
                />
                <LongTextInput
                id="enter_time"
                multiline={false}
                label={"時間"}
                placeholder={"○月○日○時〜○時"}
                rows={1}
                name="enter_time"
                value={data.enter_time}
                onChange={inputChange}
                />
                <h1>総合評価</h1>
                <StarRate id="allvalue" name="allvalue" />
                <div className="module-spacer-small" />
                <br></br><h1>サービス力</h1>
                <StarRate id="service" name="service" />
                <div className="module-spacer-small" />
                <br></br><h1>料金</h1>
                <StarRate id="price" name="price" />
                <div className="module-spacer-small" />
                <br></br>
                <LongTextInput
                id="mymemo"
                multiline={true}
                label={"マイメモ"}
                placeholder={"感想をどうぞ！"}
                rows={3}
                name="mymemo"
                value={data.mymemo || ""}
                onChange={inputChange}
                />
                <UploadImgs handleUploadImg={handleUploadImg} uploadImg={uploadImg}/>
            </div>
            <div className="button_right">
            <PrimaryButton onClick={btnFunc} label={"投稿する"}></PrimaryButton>
            </div>
            </form>
        </div>
    )
}

export default MemoForms;