/* 
    실제 scrap 페이지
*/


import React, {useState} from "react";
import DiseaseCard from "../components/DiseaseCard";

function ScrapPage({diseases, scrappedIds, onToggleScrap}) {

    // 스크랩된 카드들을 데려옴
    const scrappedDiseases = diseases.filter((disease) =>
        scrappedIds.includes(disease.id)
    );

    // all / disease / prevent 필터
    const [filter, setFilter] = useState ("all");

    return (
        <div className="disease-page">

            
            <aside className="sidebar">

                <input className="search" type="text" placeholder="Search" />

                <div className="scrap-filter-box">
                    <p>filters</p>

                    <label>
                        <input
                        type="radio"
                        name="scrap-filter"
                        checked={filter === "all"}
                        onChange={() => setFilter("all")}
                        />
                        all
                    </label>

                    <label>
                        <input
                        type="radio"
                        name="scrap-filter"
                        checked={filter === "disease"}
                        onChange={() => setFilter("disease")}
                        />
                        disease
                    </label>

                    <label>
                        <input
                        type="radio"
                        name="scrap-filter"
                        checked={filter === "prevent"}
                        onChange={() => setFilter("prevent")}
                        />
                        prevent
                    </label>
                </div>

            </aside>


            <section className="disease-contents">

                <h1>scrap</h1>

                {(filter === "all" || filter === "disease") && (
                    
                    <div className="scrap-section">
                        <h2>disease</h2>

                        {scrappedDiseases.length > 0 ? (
                            <div className="disease-list">

                            {/* 스크랩된 애들을 map() 으로 펼쳐줌 */}
                            {scrappedDiseases.map((disease) => (
                                <DiseaseCard
                                key={disease.id}
                                disease={disease}
                                isScrapped={scrappedIds.includes(disease.id)}
                                onToggleScrap={onToggleScrap}
                                />
                            ))}
                            </div>
                        ) : (
                            <p className="empty-message">수집한 카드가 아직 없어요.</p>
                        )}
                    
                    </div>
                )}


                {(filter === "all" || filter === "prevent") && (
                    <div className="scrap-section">
                        <h2>prevent</h2>
                            <p className="empty-message">수집한 카드가 아직 없어요.</p>
                    </div>
                )}

            </section>


        </div>
    );

}

export default ScrapPage;