import React from 'react';
import { LongTextInput, PrimaryButton } from '../../Uikit/index';

const ResponseForm = (props) => {
    const { data, btnFunc, inputChange } = props;
    //レスポンスのフォーム
    return (
        <div className="res_content">
            <form>
            <p className="home_text">以下から回答を追加できます</p>
                <div>
                    <LongTextInput
                        id="responce"
                        multiline={true}
                        label={"回答"}
                        placeholder={"回答を書いて下さい。"}
                        rows={3}
                        name="responce"
                        value={data.responce}
                        onChange={inputChange}
                    />
                </div>
                <div className="button_right">
                <PrimaryButton label="追加" onClick={btnFunc}></PrimaryButton>
                </div>
            </form>
        </div>
    )
}

export default ResponseForm;