/* 
    실제 disease 페이지
*/


// 어떤 카드를 눌렀는지 저장 필요 (모달창)
import React, {useState} from "react";

import diseases from "../data/diseases";  // js 파일
import DiseaseCard from "../components/DiseaseCard";
import DiseaseModal from "../components/DiseaseModal";



// {diseases.map} ) 바깥 배열 이름
// {disease.id} ) 그 안의 1개 항목 (카드 1개 데이터)
function DiseasePage({scrappedIds, onToggleScrap}) {


    // scrap 된 카드 id 저장

    /* scrappedIds ) [1, 3, 4] 식으로 몇 번 카드가 scrap 되었는지 확인 */
    // const [scrappedIds, setScrappedIds] = useState([]);



    // 전체 카드의 스크랩 상태를 이 페이지 (부모)에서 관리

    /* handleToggleScrap ) 버튼을 누르면 실행되는 함수 */
    // 배열 안에 있는가? -> 있다면 id를 빼고 (scrap 취소) 없다면 추가 (scrap)
    // const handleToggleScrap = (id) => {
    //     setScrappedIds((prev) =>
    //         prev.includes(id)
    //         ? prev.filter((item) => item !== id)
    //         : [...prev, id]
    //     );
    // };

    
    // 모달창을 키고자 하는 disease 카드 상태 저장, 관리
    // setSelectedDisease ) 상태를 바꾸는 함수
    const [selectedDisease, setSelectedDisease] = useState(null);

    // searchText ) 사용자가 입력한 텍스트
    // setSearchText ) 상태를 바꾸는 함수 (검색어에 맞춰서 상태 변화)
    const [searchText, setSearchText] = useState("");

    // diseases 배열을 바로 map 하는 게 아니라 한 번 걸러줌
    const filteredDiseases = diseases.filter((disease) =>

        // 입력 텍스트의 대소문자를 무시
        disease.nameKor.toLowerCase().includes(searchText.toLowerCase()) ||
        disease.nameEng.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="disease-page">

            <aside className="sidebar">
                <input
                    className="search"
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    // 검색 시 그 값으로 상태 저장
                    onChange={(e) => setSearchText(e.target.value)}
                    />
            </aside>

            
            {/* 제목 + 카드 배열 */}
            <section className="disease-contents">
                
                <h1>disease</h1>

                {/* 필터로 한 번 걸러진 diseases 배열을 map() */}
                <div className="disease-list">
                    {filteredDiseases.map((disease) => (
                        <DiseaseCard
                            key = {disease.id}
                            disease = {disease}
                            isScrapped = {scrappedIds.includes(disease.id)}
                            onToggleScrap = {onToggleScrap}
                            onOpenModal = {setSelectedDisease}
                        />
                    ))}
                </div>

            </section>

            {selectedDisease && (
                <DiseaseModal
                    disease = {selectedDisease}
                    isScrapped = {scrappedIds.includes(selectedDisease.id)}
                    onToggleScrap = {onToggleScrap}
                    onClose = {() => setSelectedDisease(null)}
                />
            )}

        </div>
    );
}

export default DiseasePage;