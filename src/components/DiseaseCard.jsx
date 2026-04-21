/*
    disease 메뉴 카드 컴포넌트
*/


import React from "react";
import scrapOff from "../assets/icon/scrap-off.png";
import scrapOn from "../assets/icon/scrap-on.png";

// props - 주황글씨 (카드 1개 데이터를 매개변수로)
function DiseaseCard ({disease , isScrapped, onToggleScrap, onOpenModal}) {

    /*
        토글 버튼 (scrap)
    */

    // isScrapped ) 지금 상태값 (기본 false)
    // setIsScrapped ) 상태값을 바꾸는 함수

    /* const [isScrapped, setIsScrapped] = useState(false); */

    
    // 버튼 누르면 실행되는 함수
    /*
        const handleScrap = () => {
        setIsScrapped(!isScrapped);
    };
    */

    // ==================================

    return (

        // 카드를 구성하는 전체 <div> 에 클래스 이름 붙이기
        <div className="disease-card"

            // scrap 페이지에서 모달창을 아직 안 넣어서 값을 넘기지 않고 있음. 오류 방지로 && 연산자 잠시 활용
             onClick={() => onOpenModal && onOpenModal(disease)}
        >

            <button 
                className="scrap-btn"
                onClick={(e) => {
                    // stopPropagation() ) 스크랩 아이콘 누를 때 모달창이 열리는 것을 방지
                    e.stopPropagation();
                    onToggleScrap(disease.id)
                }}
            >

                <img
                    className="scrap-icon"
                    src={isScrapped ? scrapOn : scrapOff} />

            </button>


            <div className="card-img">
               <img
                    src={disease.image}
                    className="disease-thumb"
                />

            </div>

            <p className="card-name">{disease.nameEng}</p>

        </div>
    );
}

// 문자열을 내보내는 게 아니기 때문에 " " 안에다가 적지 말기
export default DiseaseCard;