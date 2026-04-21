/* 
    main 페이지
*/


import React from "react";
import mainVisual from "../assets/main/main-visual.png";

function MainPage() {
    return (

        // 페이지 전체를 감싸는 div
        <div className="main-wrap">


            {/* 왼쪽, 오른쪽 2단 배치 */}
            <div className="main-layout">

                {/* 왼쪽 사이드에 배치되는 div */}
                <div className="main-desc">
                    <h1 id="main-title">infection<br />guide</h1>

                    <div className="main-deco">✚ ✚ ✚</div>
                    <p>감염병을 알기 쉽게 정리했어요!<br />
                        같이 질병들을 정복해보아요 (   ◜▿◝ )
                    </p>
                </div>

                {/* 오른쪽 사이드에 배치되는 div */}
                <div className="main-visual-wrap">
                    <img
                        src={mainVisual}
                        className="main-visual"
                    />
                </div>

            </div>


        </div>
    );
}

export default MainPage;