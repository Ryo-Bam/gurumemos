import React, { useState } from "react";
import { PrimaryButton } from "../../Uikit/index";
import { MemoQuesModal } from "../Memos/index";

//メモと質問のモーダルをtrueにするボタン設定
const MemoQuesModalClick = (props) => {
  const [show, setShow] = useState(false);

  //モーダルを開く
  const openModal = () => {
    if (props.name != '') {
      setShow(true);
    } else {
      setShow(false);
      alert('マップ検索をして下さい！');
    }
  }
  return (
    <div>
    <div>
      <MemoQuesModal show={show} setShow={setShow} store_id={props.store_id} name={props.name} category={props.category} />
    </div>
    <div className="newbtn_body">
      <PrimaryButton onClick={openModal} label={"新規投稿する"}>
      </PrimaryButton>
    </div>
    </div>
  )
}

export default MemoQuesModalClick;