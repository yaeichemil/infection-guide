/*
    disease 메뉴 모달창
*/


import React from "react";
import scrapOff from "../assets/icon/scrap-off.png";
import scrapOn from "../assets/icon/scrap-on.png";


// 매개변수 - 해당 모달창에서 드러나는 기능
function DiseaseModal ({disease, isScrapped, onToggleScrap, onClose}) {
    
    return (
        <div className="modal-overlay" onClick={onClose}>

            <div className="disease-modal" onClick={(e) => e.stopPropagation()}>



                {/* 왼쪽 구역 */}
                <div className="modal-left">

                    <button
                        className="modal-scrap-btn"
                        onClick={() => onToggleScrap(disease.id)}
                    >
                    
                        <img
                            src={isScrapped ? scrapOn : scrapOff}
                            className="scrap-icon"
                        />
                    </button>

                    <img
                        src={disease.image}
                        className="modal-image"
                    />
                </div>



                {/* 오른쪽 구역 */}
                <div
                    className="modal-right"
                    style={{"--bg-image": `url(${disease.backgroundImage})`}}
                >

                    {/* 오른쪽 구역 - 상단 */}
                    <div className="modal-top">

                        <div className="modal-title-wrap">
                            <span className="modal-title-kor">{disease.nameKor}</span>
                            <span className="modal-title-eng">{disease.nameEng}</span>
                        </div>

                        <button className="modal-close-btn" onClick={onClose}>
                            ×
                        </button>

                    </div>

                    {/* 오른쪽 구역 - 하단 */}
                    <div className="modal-bottom">

                        <div className="info-row">
                            <span className="info-title">진료과</span>
                            <span className="info-value">{disease.hospital}</span>
                        </div>

                        <div className="info-row">
                            <span className="info-title">원인</span>
                            <span className="info-value">{disease.cause}</span>
                        </div>

                        {/* disease.feature.map() 부분 */}
                        <div className="info-row info-column">
                            <span className="info-title">특징</span>

                            <div className="feature-list">
                                {disease.feature.map((item, index) => (
                                    <p key={index}>- {item}</p>
                                ))}
                            </div>

                        </div>  

                    </div>


                </div>



            </div>

        </div>
    );

}

export default DiseaseModal;