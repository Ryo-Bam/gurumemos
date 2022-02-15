import React from 'react';
import { PrimaryButton } from '../../Uikit/index';

const QuestionForm = (props) => {
    const { inputChange, category_data, questionBtn } = props;
    //質問のフォーム
    return (
        <div className="question_content">
            <h1 className="home_text">質問投稿欄</h1>
            <form>
                <div className="question_display">
                <select name="question_category_id" onChange={inputChange}>
                    <option hidden>選択してください</option>
                    {
                        category_data.map(category => (
                            <option value={category.id} key={category.id}>
                                {category.category}
                            </option>
                        ))
                    }
                </select>
                <textarea name="question" onChange={inputChange}>

                </textarea>
                </div>
                <div className="button_right">
                <PrimaryButton label={"質問を投稿する"} onClick={questionBtn}></PrimaryButton>
                </div>
            </form>
        </div>
    )
}

export default QuestionForm;