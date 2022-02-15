import React,{ useState } from 'react';

//メモの画像アップロード
const UploadImgs = ({handleUploadImg}) => {
    return (
    <div className="App">
        <h1>画像アップロード</h1>
        <input type="file" onChange={(e) => handleUploadImg(e)} />
        <div style={{ margin: "10px" }}>
        </div>
    </div>
    );
};


export default UploadImgs;