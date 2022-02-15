import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ResponseModal } from "../Responses/index";
import { QuesCard } from '../../Uikit/index';

const QuestionData = (props) => {
    const [questions, setQuestions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [questionsData, setQuestionsData] = useState('');
    const [show, setShow] = useState(false);

    //質問モーダルを開く
    const openModal = (question) => {
        setQuestionsData(question);
        setShow(true);
    }

    //質問のデータ取得
    const getQuestion = async () => {
        if (props.questions !== '') {
            setQuestions(props.questions);
        }
    }
    useEffect(() => {
        getQuestion();
    }, [props.questions])

    //カテゴリーデータの取得
    const getCategory = async () => {
        if (props.category !== '') {
            setCategories(props.category);
        }
    }
    useEffect(() => {
        getCategory();
    }, [props.category])

    return (
        <div className="question_container">
            <div>
                <h1 className="home_title">質問一覧</h1>
                <ResponseModal show={show} setShow={setShow} questionData={questionsData} />
                {
                    questions.map(question => (
                        <div key={question.id}>
                            <button onClick={() => openModal(question)}>
                            <QuesCard user={question.user.name} question={question.question}  />
                            </button>
                        </div>
                    ))
                }
            </div>
            <div>
                <select name="question_category_id" id="question_category_id" onChange={props.callback}>
                    <option hidden>選択してください</option>
                    {
                        categories.map(category => (
                            <option value={category.id} key={category.id}>{category.category}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default QuestionData;