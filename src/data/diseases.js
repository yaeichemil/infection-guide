/*
    전염병 정보 파일
*/

// ======================================


import influenzaImg from "../assets/disease/influenza.png";
import influenzaBg from "../assets/disease/influenza-bg.jpg";

import coldImg from "../assets/disease/cold.png";
import coldBg from "../assets/disease/cold-bg.jpg";

import measlesImg from "../assets/disease/measles.png";
import measlesBg from "../assets/disease/measles-bg.jpg";

import tuberculosisImg from "../assets/disease/tuberculosis.png";
import tuberculosisBg from "../assets/disease/tuberculosis-bg.jpg";

import rabiesImg from "../assets/disease/rabies.png";
import rabiesBg from "../assets/disease/rabies-bg.jpg";

import herpesImg from "../assets/disease/herpes.png";
import herpesBg from "../assets/disease/herpes-bg.jpg";


// ======================================



// diseases 라는 배열 선언
// { } ) 객체. { } 하나 당 카드 1개 분량
// id ) 여러 카드들을 배치할 때 id 가 필요해서 적음
const diseases = [
    {
        id: 1,
        nameKor: "독감",
        nameEng: "influenza",
        image: influenzaImg,
        backgroundImage: influenzaBg,
        category: "virus",
        hospital: "내과, 소아청소년과",
        cause: "바이러스 감염",
        feature: [
            "전파력이 매우 강해요.",
            "유행 시기에 기침, 열, 인후통 증세가 나온다면 빨리 병원에 가야 해요.",
            "타미플루라는 항바이러스제로 치료할 수 있어요."
        ],
    },
    {
        id: 2,
        nameKor: "감기",
        nameEng: "cold",
        image: coldImg,
        backgroundImage: coldBg,
        category: "virus",
        hospital: "내과, 소아청소년과, 이비인후과",
        cause: "바이러스 감염, 알레르기 반응",
        feature: [
            "기침과 콧물이 나오는 병이에요. 목감기, 코감기 등이 대표적이에요.",
            "독감보다 비교적 가볍지만, 컨디션이 떨어질 수 있어요.",
            "충분히 쉬고 물을 잘 마셔야 해요."
        ],
    },
    {
        id: 3,
        nameKor: "홍역",
        nameEng: "measles",
        image: measlesImg,
        backgroundImage: measlesBg,
        category: "virus",
        hospital: "소아청소년과, 내과",
        cause: "바이러스 감염",
        feature: [
            "빨간 발진이 보이는 병이에요.",
            "고열, 기침, 콧물, 결막염의 증상도 보여져요.",
            "주로 1~6세 아동에게 발병하나, 예방접종을 하지 않은 중고등학생, 대학생도 위험해요.",
        ]
    },
    {
        id: 4,
        nameKor: "결핵",
        nameEng: "tuberculosis",
        image: tuberculosisImg,
        backgroundImage: tuberculosisBg,
        category: "bacteria",
        hospital: "내과, 호흡기내과",
        cause: "세균 감염",
        feature: [
            "극도로 심한 기침과 피를 동반하는 병이에요. 주로 폐가 감염돼요.",
            "흑사병, 소아마비 등과 함께 인류를 오랫동안 괴롭힌 질병이에요.",
            "세균 감염이기 때문에 항생제를 통한 완전 치료가 가능해요.",
        ]
    },
    {
        id: 5,
        nameKor: "광견병",
        nameEng: "rabies",
        image: rabiesImg,
        backgroundImage: rabiesBg,
        category: "virus",
        hospital: "응급의학과, 감염내과",
        cause: "광견병 보균 동물로 인한 상처",
        feature: [
            "인간과 동물 모두 감염시켜 뇌에 염증을 일으켜요.",
            "잠복기를 지나 발병하게 되면 점점 아파지고 발작적으로 화나게 돼요.",
            "물을 무서워하게 돼서 공수병이라고도 불러요.",
        ]
    },
    {
        id: 6,
        nameKor: "헤르페스",
        nameEng: "herpes",
        image: herpesImg,
        backgroundImage: herpesBg,
        category: "virus",
        hospital: "피부과, 감염내과, 산부인과",
        cause: "환자와의 접촉",
        feature: [
            "입술이나 피부, 점막 주변에 물집이 생겨요.",
            "면역력이 떨어지면 입술이 쉽게 따끔거려요.",
            "억제는 가능해도 완전 치료는 힘들어요."
        ]
    },
];


// diseases 라는 배열 자체를 export 하고 싶다 -> " " 빼야 함
export default diseases;