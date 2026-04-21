/* 
    header 컴포넌트
*/


import React from "react";

/* 
    props ({page, setPage}) ) 지금 현재 page는? / page를 바꾸는 함수는?
*/

/*
  page ) 현재 화면 이름 저장 (main / disease / scrap)
  setPage ) 화면 이름을 바꾸는 함수 (MainPage / Diseasepage / ScrapPage)
*/
function Header({ page, setPage }) {
    return (
        <header className="header">
            <div className="header-left">
                <button
                    className={`header-btn main-btn ${page === "main" ? "active-btn" : ""}`}
                    onClick={() => setPage("main")}>
                    main
                </button>
            </div>

            <div className="header-right">

                <button className="header-btn sub-btn">basic</button>
                <button
                    className={`header-btn sub-btn ${page === "disease" ? "active-btn" : ""}`}
                    onClick={() => setPage("disease")}>
                    disease
                </button>
                <button className="header-btn sub-btn">spread</button>
                <button className="header-btn sub-btn">prevent</button>
                <button
                    className={`header-btn sub-btn ${page === "scrap" ? "active-btn" : ""}`}
                    onClick={() => setPage("scrap")}>
                    scrap
                </button>
                
            </div>
        </header>
    );
}

export default Header;