/**
 * Phang's Language - Master Edition (31-Day Rotation System)
 * 1년 내내 새로운 학습 경험을 제공하는 대규모 업데이트 버전
 */

// 대규모 단어 데이터베이스 (31일 분량 예시 및 확장 구조)
const wordDB = {
    weekday: [
        // Day 1
        {
            KR: [
                { word: "윤슬", mean: "햇빛이나 달빛에 비치어 반짝이는 잔물결", example: "바다 위에 비친 윤슬이 아름답다." },
                { word: "시나브로", mean: "모르는 사이에 조금씩 조금씩", example: "계절이 시나브로 바뀌어 가을이 왔다." },
                { word: "가온길", mean: "정가운데를 의미하는 가온과 길의 합성어, 정직한 길", example: "언제나 가온길을 걷는 사람이 되자." },
                { word: "미르", mean: "용(龍)의 순우리말", example: "하늘로 승천하는 미르의 모습." },
                { word: "비나리", mean: "앞길의 행복을 비는 말", example: "당신의 앞날에 비나리를 보냅니다." }
            ],
            HJ: [
                { word: "利益", mean: "이익", example: "회사의 이익을 극대화해야 합니다.", info: "리(이로울 리), 익(더할 익)" },
                { word: "去來", mean: "거래", example: "새로운 업체와 거래를 시작했습니다.", info: "거(갈 거), 래(올 래)" },
                { word: "投資", mean: "투자", example: "기술 개발에 대한 투자를 늘립니다.", info: "투(던질 투), 자(재물 자)" },
                { word: "契約", mean: "계약", example: "드디어 계약이 성사되었습니다.", info: "계(맺을 계), 약(맺을 약)" },
                { word: "協商", mean: "협상", example: "연봉 협상을 준비하고 있습니다.", info: "협(화합할 협), 상(헤아릴 상)" }
            ],
            EN: [
                { word: "Substantial", mean: "상당한, 실질적인", example: "There is a substantial difference between the two." },
                { word: "Facilitate", mean: "용이하게 하다, 촉진하다", example: "The new app will facilitate better communication." },
                { word: "Advocate", mean: "지지하다, 옹호하다", example: "She is a strong advocate for environmental protection." },
                { word: "Constraint", mean: "제약, 제한", example: "Financial constraints limited our options." },
                { word: "Ambiguous", mean: "애매모호한", example: "His answer was too ambiguous to understand." }
            ],
            ES: [
                { word: "Hablar", mean: "말하다", example: "Hablo español con mis amigos.", conjugation: { pres: "Hablo", past: "Hablé" } },
                { word: "Comer", mean: "먹다", example: "Como mucha pizza.", conjugation: { pres: "Como", past: "Comí" } },
                { word: "Vivir", mean: "살다", example: "Vivo en Seúl.", conjugation: { pres: "Vivo", past: "Viví" } },
                { word: "Querer", mean: "원하다, 사랑하다", example: "Te quiero mucho.", conjugation: { pres: "Quiero", past: "Quise" } },
                { word: "Hacer", mean: "하다, 만들다", example: "Hago mi tarea ahora.", conjugation: { pres: "Hago", past: "Hice" } }
            ]
        },
        // Day 2
        {
            KR: [
                { word: "도담도담", mean: "어린아이가 탈 없이 잘 자라는 모양", example: "아이가 도담도담 자라는 모습이 보기 좋다." },
                { word: "너울", mean: "바다의 크고 사나운 물결", example: "먼바다에서 너울이 밀려오고 있다." },
                { word: "꼬리별", mean: "혜성의 순우리말", example: "밤하늘에 꼬리별이 나타났다." },
                { word: "꽃잠", mean: "처음으로 함께 자는 잠", example: "그들은 행복한 꽃잠을 잤다." },
                { word: "라온", mean: "즐거운의 순우리말", example: "모두에게 라온 가득한 하루가 되길." }
            ],
            HJ: [
                { word: "支援", mean: "지원", example: "정부의 자금 지원을 받았습니다.", info: "지(지탱할 지), 원(도울 원)" },
                { word: "協議", mean: "협의", example: "사전에 충분한 협의가 필요합니다.", info: "협(화합할 협), 의(의논할 의)" },
                { word: "雇傭", mean: "고용", example: "신규 고용을 창출하고 있습니다.", info: "고(품 팔 고), 용(쓸 용)" },
                { word: "品質", mean: "품질", example: "품질 관리에 만전을 기해야 합니다.", info: "품(물건 품), 질(바탕 질)" },
                { word: "輸出", mean: "수출", example: "수출 시장을 다변화해야 합니다.", info: "수(보낼 수), 출(날 출)" }
            ],
            EN: [
                { word: "Pragmatic", mean: "실용적인", example: "We need a pragmatic approach to this problem." },
                { word: "Resilient", mean: "회복력 있는", example: "The economy is surprisingly resilient." },
                { word: "Inevitable", mean: "피할 수 없는", example: "Change is inevitable in this industry." },
                { word: "Scrutinize", mean: "세심히 살피다", example: "The results were scrutinized by experts." },
                { word: "Collaborate", mean: "협력하다", example: "We should collaborate on this project." }
            ],
            ES: [
                { word: "Ir", mean: "가다", example: "Voy al cine hoy.", conjugation: { pres: "Voy", past: "Fui" } },
                { word: "Tener", mean: "가지다", example: "Tengo dos hermanos.", conjugation: { pres: "Tengo", past: "Tuve" } },
                { word: "Venir", mean: "오다", example: "Vengo de la oficina.", conjugation: { pres: "Vengo", past: "Vine" } },
                { word: "Saber", mean: "알다", example: "No sé la respuesta.", conjugation: { pres: "Sé", past: "Supe" } },
                { word: "Poder", mean: "할 수 있다", example: "Puedo hablar español.", conjugation: { pres: "Puedo", past: "Pude" } }
            ]
        },
        // Day 3
        {
            KR: [
                { word: "그루잠", mean: "깨었다가 다시 드는 잠", example: "일요일 아침 그루잠이 제일 달콤하다." },
                { word: "돋을볕", mean: "처음 솟아오르는 햇볕", example: "창가에 스며드는 돋을볕이 따사롭다." },
                { word: "안다미로", mean: "담은 것이 그릇에 넘치도록 많이", example: "정을 안다미로 담아 드립니다." },
                { word: "꼬두람이", mean: "맨 꼬리 또는 막내", example: "우리 집의 꼬두람이는 막내 동생이다." },
                { word: "희나리", mean: "채 마르지 않은 장작", example: "희나리는 타면서 연기가 많이 난다." }
            ],
            HJ: [
                { word: "供給", mean: "공급", example: "원활한 공급망 확보가 중요합니다.", info: "공(이바지할 공), 급(줄 급)" },
                { word: "需要", mean: "수요", example: "시장의 수요를 정확히 파악해야 합니다.", info: "수(기다릴 수), 요(구할 요)" },
                { word: "資產", mean: "자산", example: "회사의 유동 자산을 평가합니다.", info: "자(재물 자), 산(낳을 산)" },
                { word: "負債", mean: "부채", example: "과도한 부채는 위험할 수 있습니다.", info: "부(질 부), 채(빚 채)" },
                { word: "利潤", mean: "이윤", example: "기업의 목적은 이윤 창출입니다.", info: "리(이로울 리), 윤(불을 윤)" }
            ],
            EN: [
                { word: "Elaborate", mean: "정교한, 상세히 설명하다", example: "Please elaborate on your proposal." },
                { word: "Coherent", mean: "일관성 있는", example: "The argument was not very coherent." },
                { word: "Incentive", mean: "장려책, 인센티브", example: "Financial incentives motivate employees." },
                { word: "Mitigate", mean: "완화시키다", example: "Steps are taken to mitigate the risks." },
                { word: "Volatile", mean: "변덕스러운, 휘발성의", example: "The market is currently very volatile." }
            ],
            ES: [
                { word: "Dar", mean: "주다", example: "Doy un regalo a mi madre.", conjugation: { pres: "Doy", past: "Di" } },
                { word: "Decir", mean: "말하다", example: "Digo la verdad siempre.", conjugation: { pres: "Digo", past: "Dije" } },
                { word: "Estar", mean: "있다, 상태가 ~하다", example: "Estoy muy feliz hoy.", conjugation: { pres: "Estoy", past: "Estuve" } },
                { word: "Ser", mean: "이다", example: "Soy estudiante de español.", conjugation: { pres: "Soy", past: "Fui" } },
                { word: "Ver", mean: "보다", example: "Veo una película nueva.", conjugation: { pres: "Veo", past: "Vi" } }
            ]
        },
        // Day 4 (Travel: Airport)
        {
            KR: [
                { word: "나들목", mean: "나가고 들어가는 길목 (IC)", example: "고속도로 나들목 근처는 항상 붐빈다." },
                { word: "먼길", mean: "멀리 떨어진 곳으로 가는 길", example: "먼길 오시느라 고생 많으셨습니다." },
                { word: "바람막이", mean: "바람을 막는 물건이나 옷", example: "여행 가방에 바람막이 점퍼를 챙겼다." },
                { word: "손짐", mean: "손에 들 수 있는 가벼운 짐", example: "손짐만 챙겨서 가볍게 떠났다." },
                { word: "여정", mean: "여행의 과정이나 길", example: "우리의 긴 여정이 드디어 시작되었다." }
            ],
            HJ: [
                { word: "出國", mean: "출국", example: "출국 심사를 기다리고 있습니다.", info: "출(날 출), 국(나라 국)" },
                { word: "入國", mean: "입국", example: "입국 신고서를 작성해 주세요.", info: "입(들 입), 국(나라 국)" },
                { word: "航空", mean: "항공", example: "항공편이 지연되었습니다.", info: "항(배 항), 공(빌 공)" },
                { word: "旅券", mean: "여권", example: "여권을 반드시 지참해야 합니다.", info: "여(나그네 여), 권(문서 권)" },
                { word: "運送", mean: "운송", example: "수하물 운송 서비스를 이용합니다.", info: "운(운전할 운), 송(보낼 송)" }
            ],
            EN: [
                { word: "Boarding", mean: "탑승", example: "Boarding will start in ten minutes." },
                { word: "Destination", mean: "목적지", example: "What is your final destination?" },
                { word: "Lounge", mean: "라운지, 휴게실", example: "We relaxed in the airport lounge." },
                { word: "Itinerary", mean: "여행 일정", example: "Do you have a printed itinerary?" },
                { word: "Terminal", mean: "터미널, 종점", example: "Please go to Terminal 2." }
            ],
            ES: [
                { word: "Viajar", mean: "여행하다", example: "Quiero viajar a España.", conjugation: { pres: "Viajo", past: "Viajé" } },
                { word: "Billetes", mean: "티켓, 지폐", example: "Compré los billetes de avión.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Maleta", mean: "트렁크, 가방", example: "Mi maleta es muy pesada.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Vuelo", mean: "비행", example: "El vuelo sale a las ocho.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Pasaporte", mean: "여권", example: "Tengo mi pasaporte listo.", conjugation: { pres: "N/A", past: "N/A" } }
            ]
        },
        // Day 5 (Travel: Hotel & Stay)
        {
            KR: [
                { word: "보람", mean: "어떤 일을 한 뒤에 얻는 좋은 결과", example: "여행지를 고심해서 고른 보람이 있다." },
                { word: "쉼터", mean: "잠시 쉴 수 있는 곳", example: "공원 곳곳에 작은 쉼터가 있다." },
                { word: "잠자리", mean: "잠을 자는 곳", example: "낯선 곳이라 잠자리가 바뀌어 잠을 설쳤다." },
                { word: "머무름", mean: "어느 곳에 머물러 있음", example: "제주도에서의 일주일 머무름이 행복했다." },
                { word: "어울림", mean: "서로 조화를 이룸", example: "풍경과의 어울림이 멋진 숙소였다." }
            ],
            HJ: [
                { word: "宿泊", mean: "숙박", example: "인근 호텔에서 숙박할 예정입니다.", info: "숙(잘 숙), 박(머무를 박)" },
                { word: "豫約", mean: "예약", example: "미리 예약을 확인해 주세요.", info: "예(미리 예), 약(맺을 약)" },
                { word: "施設", mean: "시설", example: "이 호텔은 부대 시설이 훌륭합니다.", info: "시(베풀 시), 설(베풀 설)" },
                { word: "費用", mean: "비용", example: "여행 비용을 정산하고 있습니다.", info: "비(쓸 비), 용(쓸 용)" },
                { word: "提供", mean: "제공", example: "조식을 무료로 제공합니다.", info: "제(끌 제), 공(이바지할 공)" }
            ],
            EN: [
                { word: "Accommodation", mean: "숙소, 숙박 시설", example: "We need to find cheap accommodation." },
                { word: "Check-in", mean: "체크인, 투숙 수속", example: "Check-in is at 3 PM." },
                { word: "Reservation", mean: "예약", example: "I have a reservation under 'Phang'." },
                { word: "Amenity", mean: "생활 편의 시설", example: "The hotel offers various amenities." },
                { word: "Vacancy", mean: "빈 방, 결원", example: "Sorry, we have no vacancy tonight." }
            ],
            ES: [
                { word: "Dormir", mean: "자다", example: "Duermo en un hotel.", conjugation: { pres: "Duermo", past: "Dormí" } },
                { word: "Habitación", mean: "방, 객실", example: "Mi habitación tiene vistas al mar.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Llave", mean: "열쇠", example: "Aquí está la llave de su cuarto.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Desayuno", mean: "아침 식사", example: "El desayuno está incluido.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Reservar", mean: "예약하다", example: "Quiero reservar una mesa.", conjugation: { pres: "Reservo", past: "Reservé" } }
            ]
        },
        // Day 6 (Travel: Sightseeing)
        {
            KR: [
                { word: "구경거리", mean: "구경할 만한 것", example: "시장에는 구경거리가 정말 많았다." },
                { word: "나들이", mean: "가까운 곳으로 잠시 나가는 일", example: "가족들과 주말 나들이를 다녀왔다." },
                { word: "발길", mean: "걷는 발의 움직임", example: "발길 닿는 대로 골목을 누볐다." },
                { word: "풍경", mean: "눈에 보이는 모습", example: "언덕 위에서 내려다본 풍경이 장관이다." },
                { word: "자취", mean: "지나간 흔적", example: "역사의 자취를 따라 성곽을 걸었다." }
            ],
            HJ: [
                { word: "觀光", mean: "관광", example: "관광 명소를 방문했습니다.", info: "관(볼 관), 광(빛 광)" },
                { word: "遺蹟", mean: "유적", example: "고대 유적을 탐방했습니다.", info: "유(남길 유), 적(자취 적)" },
                { word: "案內", mean: "안내", example: "안내 책자를 참고하세요.", info: "안(책상 안), 내(안 내)" },
                { word: "體驗", mean: "체험", example: "전통 문화를 체험해 보았습니다.", info: "체(몸 체), 험(시험할 험)" },
                { word: "自然", mean: "자연", example: "대자연의 신비로움을 느꼈습니다.", info: "자(스스로 자), 연(그러할 연)" }
            ],
            EN: [
                { word: "Landmark", mean: "주요 지형물, 랜드마크", example: "The Eiffel Tower is a famous landmark." },
                { word: "Spectacular", mean: "장관을 이루는", example: "The view from the top was spectacular." },
                { word: "Souvenir", mean: "기념품", example: "I bought a souvenir for my sister." },
                { word: "Authentic", mean: "진본인, 진짜인", example: "We tried authentic local food." },
                { word: "Exploration", mean: "탐험, 답사", example: "Exploration is the best part of traveling." }
            ],
            ES: [
                { word: "Mirar", mean: "보다, 바라보다", example: "Miro las montañas.", conjugation: { pres: "Miro", past: "Miré" } },
                { word: "Ciudad", mean: "도시", example: "La ciudad es muy grande.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Museo", mean: "박물관", example: "El museo está cerrado hoy.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Foto", mean: "사진", example: "Saco una foto aquí.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Mapa", mean: "지도", example: "Necesito un mapa de la zona.", conjugation: { pres: "N/A", past: "N/A" } }
            ]
        },
        // Day 7 (Travel: Food & Dining)
        {
            KR: [
                { word: "맛깔나다", mean: "맛이 있고 구미가 당기다", example: "음식이 정말 맛깔나게 차려져 나왔다." },
                { word: "먹거리", mean: "사람이 먹을 수 있는 온갖 것", example: "이 지역은 풍성한 먹거리로 유명하다." },
                { word: "푸짐하다", mean: "넉넉하고 넉넉하다", example: "인심 좋은 아주머니가 음식을 푸짐하게 주셨다." },
                { word: "단맛", mean: "설탕이나 꿀처럼 단 맛", example: "디저트의 은은한 단맛이 일품이다." },
                { word: "차림상", mean: "음식을 차려 놓은 상", example: "정갈한 차림상에 대접받는 기분이 들었다." }
            ],
            HJ: [
                { word: "飮食", mean: "음식", example: "현지 음식을 맛보는 것은 즐겁습니다.", info: "음(마실 음), 식(먹을 식)" },
                { word: "食堂", mean: "식당", example: "유명한 식당을 예약했습니다.", info: "식(먹을 식), 당(집 당)" },
                { word: "料理", mean: "요리", example: "특별한 요리를 주문했습니다.", info: "요(헤아릴 요), 리(다스릴 리)" },
                { word: "材料", mean: "재료", example: "신선한 재료를 사용합니다.", info: "재(재목 재), 료(헤아릴 료)" },
                { word: "推薦", mean: "추천", example: "메뉴 추천을 부탁드립니다.", info: "추(밀 추), 천(천거할 천)" }
            ],
            EN: [
                { word: "Cuisine", mean: "요리법, 요리", example: "I love Italian cuisine." },
                { word: "Ingredient", mean: "재료, 성분", example: "What are the ingredients in this dish?" },
                { word: "Beverage", mean: "음료", example: "Would you like a cold beverage?" },
                { word: "Specialty", mean: "전문, 특산물", example: "This seafood pasta is our specialty." },
                { word: "Delicious", mean: "맛있는", example: "The meal was absolutely delicious." }
            ],
            ES: [
                { word: "Beber", mean: "마시다", example: "Bebo mucha agua.", conjugation: { pres: "Bebo", past: "Bebí" } },
                { word: "Comida", mean: "음식, 점심", example: "La comida está riquísima.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Restaurante", mean: "레스토랑", example: "Busco un restaurante barato.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Agua", mean: "물", example: "Un vaso de agua, por favor.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Pedir", mean: "주문하다, 요청하다", example: "Pido la cuenta.", conjugation: { pres: "Pido", past: "Pedí" } }
            ]
        },
        // Day 8 (Travel: Transportation)
        {
            KR: [
                { word: "길동무", mean: "길을 함께 가는 동무", example: "기차에서 마음 맞는 길동무를 만났다." },
                { word: "가로지르다", mean: "방향을 가로로 건너가다", example: "광장을 가로질러 역으로 향했다." },
                { word: "갈림길", mean: "여러 갈래로 갈라진 길", example: "갈림길에서 지도를 다시 확인했다." },
                { word: "느릿느릿", mean: "움직임이 매우 느린 모양", example: "관광 열차가 느릿느릿 마을을 지나갔다." },
                { word: "둘레길", mean: "주변을 도는 산책길", example: "호수 근처 둘레길을 천천히 걸었다." }
            ],
            HJ: [
                { word: "交通", mean: "교통", example: "교통 수단이 편리합니다.", info: "교(사귈 교), 통(통할 통)" },
                { word: "列車", mean: "열차", example: "야간 열차를 이용했습니다.", info: "열(벌릴 열), 차(수레 차)" },
                { word: "運轉", mean: "운전", example: "렌터카 운전을 주의하세요.", info: "운(운전할 운), 전(구를 전)" },
                { word: "路線", mean: "노선", example: "지하철 노선도를 확인하세요.", info: "로(길 로), 선(줄 선)" },
                { word: "停車", mean: "정차", example: "정차역을 안내해 드립니다.", info: "정(머무를 정), 차(수레 차)" }
            ],
            EN: [
                { word: "Commute", mean: "통근하다", example: "Many people commute by train." },
                { word: "Transit", mean: "통과, 수송", example: "We are currently in transit." },
                { word: "Transfer", mean: "갈아타다, 환승", example: "Where should I transfer?" },
                { word: "Fare", mean: "운임, 요금", example: "The bus fare is two dollars." },
                { word: "Reliable", mean: "믿을 수 있는", example: "The local buses are very reliable." }
            ],
            ES: [
                { word: "Caminar", mean: "걷다", example: "Camino por la calle.", conjugation: { pres: "Camino", past: "Caminé" } },
                { word: "Tren", mean: "기차", example: "El tren llega tarde.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Autobús", mean: "버스", example: "Espero el autobús.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Billete", mean: "표", example: "Tengo un billete de ida.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Conducir", mean: "운전하다", example: "Conduzco un coche alquilado.", conjugation: { pres: "Conduzco", past: "Conduje" } }
            ]
        },
        // Day 9 (Travel: Shopping)
        {
            KR: [
                { word: "덤", mean: "물건을 살 때 더 얹어 주는 것", example: "시장에서 사과를 샀더니 덤으로 하나 더 주셨다." },
                { word: "단골", mean: "늘 정해 놓고 거래하는 곳이나 사람", example: "여행 올 때마다 들르는 단골 식당이다." },
                { word: "깎다", mean: "값을 낮추다", example: "주인과 흥정하여 값을 조금 깎았다." },
                { word: "둘러보다", mean: "여기저기 살피다", example: "가게 안을 천천히 둘러보았다." },
                { word: "알뜰하다", mean: "형편을 잘 살펴 아껴 쓰는 데가 있다", example: "알뜰하게 여행 예산을 사용했다." }
            ],
            HJ: [
                { word: "市場", mean: "시장", example: "전통 시장을 구경했습니다.", info: "시(저자 시), 장(마당 장)" },
                { word: "價格", mean: "가격", example: "가격이 합리적입니다.", info: "가(값 가), 격(격식 격)" },
                { word: "購買", mean: "구매", example: "기념품을 구매했습니다.", info: "구(살 구), 매(살 매)" },
                { word: "割引", mean: "할인", example: "학생 할인을 받을 수 있습니다.", info: "할(밸 할), 인(끌 인)" },
                { word: "換錢", mean: "환전", example: "공항에서 환전을 했습니다.", info: "환(바꿀 환), 전(돈 전)" }
            ],
            EN: [
                { word: "Bargain", mean: "싸게 산 물건, 흥정하다", example: "This shirt was a real bargain." },
                { word: "Affordable", mean: "가격이 적당한", example: "They sell affordable gifts." },
                { word: "Currency", mean: "통화, 화폐", example: "What is the local currency?" },
                { word: "Purchase", mean: "구매, 사다", example: "I want to purchase this painting." },
                { word: "Receipt", mean: "영수증", example: "Can I get a receipt, please?" }
            ],
            ES: [
                { word: "Comprar", mean: "사다", example: "Compro recuerdos.", conjugation: { pres: "Compro", past: "Compré" } },
                { word: "Tienda", mean: "가게, 상점", example: "La tienda está abierta.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Dinero", mean: "돈", example: "No tengo mucho dinero.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Caro", mean: "비싼", example: "Es demasiado caro.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Pagar", mean: "지불하다", example: "Pago con tarjeta.", conjugation: { pres: "Pago", past: "Pagué" } }
            ]
        },
        // Day 10 (Travel: Nature & Scenery)
        {
            KR: [
                { word: "가람", mean: "강의 순우리말", example: "넓은 가람이 유유히 흐르고 있다." },
                { word: "숲길", mean: "숲속에 난 길", example: "공기가 맑은 숲길을 산책했다." },
                { word: "메아리", mean: "소리가 울려 돌아오는 것", example: "산 정상에서 메아리를 들어보았다." },
                { word: "파도", mean: "바다의 물결", example: "파도 소리를 들으며 해변을 걸었다." },
                { word: "별헤는밤", mean: "별을 세는 밤", example: "시골 마을에서 별헤는밤을 보냈다." }
            ],
            HJ: [
                { word: "自然", mean: "자연", example: "자연 경관이 수려합니다.", info: "자(스스로 자), 연(그러할 연)" },
                { word: "公園", mean: "공원", example: "국립 공원을 하이킹했습니다.", info: "공(공평할 공), 원(동산 원)" },
                { word: "海洋", mean: "해양", example: "해양 스포츠를 즐겼습니다.", info: "해(바다 해), 양(큰 바다 양)" },
                { word: "森林", mean: "산림", example: "산림욕을 하러 떠났습니다.", info: "산(뫼 산), 림(수풀 림)" },
                { word: "景色", mean: "경색", example: "가을 경색이 아름답습니다.", info: "경(볕 경), 색(빛 색)" }
            ],
            EN: [
                { word: "Wilderness", mean: "황야, 미개척지", example: "We explored the mountain wilderness." },
                { word: "Stunning", mean: "깜짝 놀랄 만큼 멋진", example: "The sunset was absolutely stunning." },
                { word: "Serene", mean: "고요한, 평화로운", example: "The lake was so serene and quiet." },
                { word: "Breathtaking", mean: "숨이 막힐 듯한", example: "The mountain top view was breathtaking." },
                { word: "Ecosystem", mean: "생태계", example: "We must protect the island's ecosystem." }
            ],
            ES: [
                { word: "Naturaleza", mean: "자연", example: "Me encanta la naturaleza.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Montaña", mean: "산", example: "Subimos a la montaña.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Mar", mean: "바다", example: "El mar está azul.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Sol", mean: "해, 태양", example: "Hace mucho sol hoy.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Árbol", mean: "나무", example: "Hay muchos árboles aquí.", conjugation: { pres: "N/A", past: "N/A" } }
            ]
        },
        // Day 11 (Travel: Weather & Packing)
        {
            KR: [
                { word: "날씨", mean: "기상 상태", example: "여행 내내 날씨가 맑아서 좋았다." },
                { word: "비설거지", mean: "비가 오기 전에 물건을 거두는 일", example: "갑자기 비가 와서 서둘러 비설거지를 했다." },
                { word: "햇살", mean: "햇볕의 기운", example: "따스한 햇살 아래 낮잠을 잤다." },
                { word: "안개", mean: "공기 중에 떠 있는 물방울", example: "안개가 자욱한 아침 산책을 나갔다." },
                { word: "짐꾸리기", mean: "짐을 싸는 일", example: "설레는 마음으로 짐꾸리기를 시작했다." }
            ],
            HJ: [
                { word: "氣候", mean: "기후", example: "열대 기후 지역을 여행합니다.", info: "기(기운 기), 후(기후 후)" },
                { word: "準備", mean: "준비", example: "여행 준비물을 체크하세요.", info: "준(준비할 준), 비(갖출 비)" },
                { word: "溫度", mean: "온도", example: "낮 기온이 30도까지 올라갑니다.", info: "온(따뜻할 온), 도(법도 도)" },
                { word: "雨期", mean: "우기", example: "지금은 동남아의 우기입니다.", info: "우(비 우), 기(기약할 기)" },
                { word: "衣類", mean: "의류", example: "여벌의 의류를 챙기세요.", info: "의(옷 의), 류(무리 류)" }
            ],
            EN: [
                { word: "Forecast", mean: "예보", example: "What is the weather forecast?" },
                { word: "Humid", mean: "습한", example: "The jungle air is very humid." },
                { word: "Essential", mean: "필수적인", example: "Water is essential for hiking." },
                { word: "Compact", mean: "소형의, 조밀한", example: "I have a compact umbrella." },
                { word: "Thunderstorm", mean: "뇌우", example: "We stayed inside during the thunderstorm." }
            ],
            ES: [
                { word: "Tiempo", mean: "날씨, 시간", example: "Hace buen tiempo hoy.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Lluvia", mean: "비", example: "La lluvia no para.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Calor", mean: "더위", example: "Hace mucho calor.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Frío", mean: "추위", example: "Tengo mucho frío.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Llevar", mean: "가지고 가다, 입다", example: "Llevo mi chaqueta.", conjugation: { pres: "Llevo", past: "Llevé" } }
            ]
        },
        // Day 12 (Travel: Emergency & Health)
        {
            KR: [
                { word: "도움", mean: "남을 거들거나 보태는 일", example: "길을 잃었을 때 친절한 분의 도움을 받았다." },
                { word: "조심조심", mean: "매우 조심하는 모양", example: "가파른 길을 조심조심 내려갔다." },
                { word: "튼튼하다", mean: "매우 견고하거나 건강하다", example: "여행을 위해 튼튼한 신발을 샀다." },
                { word: "아프다", mean: "통증을 느끼다", example: "너무 많이 걸어서 다리가 아프다." },
                { word: "약방", mean: "약을 지어 파는 곳", example: "배탈이 나서 근처 약방을 찾았다." }
            ],
            HJ: [
                { word: "非常", mean: "비상", example: "비상 연락처를 저장하세요.", info: "비(아닐 비), 상(항상 상)" },
                { word: "病院", mean: "병원", example: "급히 병원을 방문했습니다.", info: "병(병 병), 원(집 원)" },
                { word: "安全", mean: "안전", example: "안전 수칙을 준수해야 합니다.", info: "안(편안할 안), 전(온전할 전)" },
                { word: "藥局", mean: "약국", example: "약국에서 비상약을 샀습니다.", info: "약(약 약), 국(판 국)" },
                { word: "健康", mean: "건강", example: "여행 중 건강 관리에 유의하세요.", info: "건(굳셀 건), 강(편안할 강)" }
            ],
            EN: [
                { word: "Emergency", mean: "비상 사태", example: "In case of emergency, call 911." },
                { word: "Urgent", mean: "긴급한", example: "I have an urgent medical problem." },
                { word: "Pharmacy", mean: "약국", example: "Where is the nearest pharmacy?" },
                { word: "Allergy", mean: "알레르기", example: "I have a peanut allergy." },
                { word: "Ambulance", mean: "구급차", example: "Please call an ambulance." }
            ],
            ES: [
                { word: "Ayuda", mean: "도움", example: "Necesito ayuda, por favor.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Enfermo", mean: "아픈, 환자", example: "Estoy un poco enfermo.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Doctor", mean: "의사", example: "Voy a ver al doctor.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Medicina", mean: "약, 의학", example: "Tomo mi medicina.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Peligro", mean: "위험", example: "¡Hay mucho peligro aquí!", conjugation: { pres: "N/A", past: "N/A" } }
            ]
        },
        // Day 13 (Travel: Directions & Places)
        {
            KR: [
                { word: "길목", mean: "길이 좁아지는 중요한 곳", example: "마을 길목에 커다란 나무가 서 있다." },
                { word: "동네", mean: "사람들이 모여 사는 마을", example: "낯선 동네를 정처 없이 걸었다." },
                { word: "똑바로", mean: "굽지 않고 곧게", example: "이 길을 따라 똑바로 가세요." },
                { word: "건너편", mean: "반대쪽", example: "길 건너편에 우리가 찾는 가게가 있다." },
                { word: "가까이", mean: "거리상으로 멀지 않게", example: "바다가 가까이 보이는 숙소를 잡았다." }
            ],
            HJ: [
                { word: "位置", mean: "위치", example: "현재 위치를 확인해 보세요.", info: "위(자리 위), 치(둘 치)" },
                { word: "方向", mean: "방향", example: "어느 방향으로 가야 하나요?", info: "방(모 방), 향(향할 향)" },
                { word: "距離", mean: "거리", example: "거리가 꽤 멉니다.", info: "거(떨어질 거), 리(거리 리)" },
                { word: "地圖", mean: "지도", example: "지도를 보고 길을 찾습니다.", info: "지(땅 지), 도(그림 도)" },
                { word: "建物", mean: "건물", example: "저 건물이 랜드마크입니다.", info: "건(세울 건), 물(물건 물)" }
            ],
            EN: [
                { word: "Straight", mean: "똑바로, 직선의", example: "Go straight for two blocks." },
                { word: "Intersection", mean: "교차로", example: "Turn left at the next intersection." },
                { word: "Location", mean: "장소, 위치", example: "The location is perfect for tourists." },
                { word: "Direction", mean: "방향, 지시", example: "Can you give me directions to the station?" },
                { word: "Nearby", mean: "근처의", example: "Is there a coffee shop nearby?" }
            ],
            ES: [
                { word: "Izquierda", mean: "왼쪽", example: "Gira a la izquierda.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Derecha", mean: "오른쪽", example: "Todo a la derecha.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Cerca", mean: "가까이", example: "El metro está cerca.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Lejos", mean: "멀리", example: "Está muy lejos de aquí.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Dónde", mean: "어디에", example: "¿Dónde está el baño?", conjugation: { pres: "N/A", past: "N/A" } }
            ]
        },
        // Day 14 (Travel: Feelings & Impressions)
        {
            KR: [
                { word: "설레다", mean: "마음이 두근거리다", example: "여행 전날은 항상 마음이 설렌다." },
                { word: "즐겁다", mean: "기쁘고 유쾌하다", example: "친구들과 함께한 즐거운 시간이었다." },
                { word: "아쉽다", mean: "미련이 남고 서운하다", example: "여행의 마지막 밤이라 너무 아쉽다." },
                { word: "포근하다", mean: "따뜻하고 편안하다", example: "침구가 포근해서 꿀잠을 잤다." },
                { word: "뿌듯하다", mean: "마음이 벅차고 기쁘다", example: "일정을 무사히 마쳐서 뿌듯하다." }
            ],
            HJ: [
                { word: "感動", mean: "감동", example: "풍경을 보고 큰 감동을 받았습니다.", info: "감(느낄 감), 동(움직일 동)" },
                { word: "記憶", mean: "기억", example: "이번 여행은 영원히 기억될 것입니다.", info: "기(기록할 기), 억(생각할 억)" },
                { word: "幸福", mean: "행복", example: "가족과 함께해서 행복했습니다.", info: "행(다행 행), 복(복 복)" },
                { word: "滿足", mean: "만족", example: "숙소 서비스에 매우 만족합니다.", info: "만(찰 만), 족(발 족)" },
                { word: "休息", mean: "휴식", example: "충분한 휴식을 취했습니다.", info: "휴(쉴 휴), 식(쉴 식)" }
            ],
            EN: [
                { word: "Unforgettable", mean: "잊을 수 없는", example: "It was an unforgettable experience." },
                { word: "Memorable", mean: "기억할 만한", example: "We made many memorable moments." },
                { word: "Overwhelmed", mean: "압도된, 벅찬", example: "I was overwhelmed by the beauty." },
                { word: "Relaxing", mean: "편안한", example: "A relaxing spa day is what I need." },
                { word: "Grateful", mean: "감사하는", example: "I am grateful for your kindness." }
            ],
            ES: [
                { word: "Feliz", mean: "행복한", example: "Estoy muy feliz de estar aquí.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Cansado", mean: "피곤한", example: "Estoy cansado de caminar.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Bueno", mean: "좋은", example: "Fue un viaje muy bueno.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Increíble", mean: "놀라운, 믿기 힘든", example: "¡Es increíble este lugar!", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Paz", mean: "평화", example: "Aquí hay mucha paz.", conjugation: { pres: "N/A", past: "N/A" } }
            ]
        },
        // Day 15 (Travel: People & Interaction)
        {
            KR: [
                { word: "마중", mean: "나오는 사람을 맞이함", example: "친구가 공항까지 마중을 나왔다." },
                { word: "배웅", mean: "떠나는 사람을 배웅함", example: "기차역에서 아쉬운 배웅을 했다." },
                { word: "낯선사람", mean: "모르는 사람", example: "낯선사람에게 길을 물어보았다." },
                { word: "정", mean: "사랑하거나 친근한 마음", example: "짧은 시간이었지만 현지인들과 정이 들었다." },
                { word: "만남", mean: "서로 만나는 일", example: "새로운 인연과의 만남이 즐거웠다." }
            ],
            HJ: [
                { word: "親切", mean: "친절", example: "현지인들이 매우 친절했습니다.", info: "친(친할 친), 절(간절할 절)" },
                { word: "會話", mean: "회화", example: "기초 스페인어 회화를 공부했습니다.", info: "회(모일 회), 화(말씀 화)" },
                { word: "交流", mean: "교류", example: "외국인 친구들과 교류했습니다.", info: "교(사귈 교), 류(흐를 류)" },
                { word: "禮儀", mean: "예의", example: "방문 국가의 예의를 지켜야 합니다.", info: "예(예도 예), 의(거동 의)" },
                { word: "和合", mean: "화합", example: "팀원들과 화합하며 여행했습니다.", info: "화(화할 화), 합(합할 합)" }
            ],
            EN: [
                { word: "Hospitality", mean: "환대, 친절", example: "Thank you for your warm hospitality." },
                { word: "Stranger", mean: "낯선 사람, 이방인", example: "Don't be afraid to talk to strangers." },
                { word: "Connection", mean: "연결, 관계", example: "I felt a deep connection with the locals." },
                { word: "Friendly", mean: "친절한, 우호적인", example: "The villagers are very friendly." },
                { word: "Encounter", mean: "만남, 마주침", example: "It was a chance encounter." }
            ],
            ES: [
                { word: "Amigo", mean: "친구", example: "Hice un nuevo amigo.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Hablar", mean: "말하다", example: "Hablo con la gente local.", conjugation: { pres: "Hablo", past: "Hablé" } },
                { word: "Gente", mean: "사람들", example: "La gente es amable.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Gracias", mean: "감사합니다", example: "Muchas gracias por todo.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Hola", mean: "안녕", example: "Hola, ¿cómo estás?", conjugation: { pres: "N/A", past: "N/A" } }
            ]
        },
        // Day 16 (Travel: Culture & Arts)
        {
            KR: [
                { word: "풍습", mean: "전해 내려오는 습관", example: "이 마을의 독특한 풍습을 구경했다." },
                { word: "솜씨", mean: "손을 놀려 만드는 재주", example: "공예품을 만드는 솜씨가 대단했다." },
                { word: "놀이", mean: "즐겁게 노는 일", example: "전통 놀이에 직접 참여해 보았다." },
                { word: "빛깔", mean: "물체의 색깔", example: "전통 의상의 고운 빛깔에 반했다." },
                { word: "울림", mean: "소리가 울려 퍼지는 느낌", example: "북소리의 웅장한 울림이 느껴졌다." }
            ],
            HJ: [
                { word: "文化", mean: "문화", example: "이국적인 문화를 접했습니다.", info: "문(글월 문), 화(될 화)" },
                { word: "藝術", mean: "예술", example: "거리의 예술가들을 만났습니다.", info: "예(재주 예), 술(재주 술)" },
                { word: "傳統", mean: "전통", example: "전통 시장은 활기가 넘칩니다.", info: "전(전할 전), 통(거느릴 통)" },
                { word: "公演", mean: "공연", example: "저녁에 플라멩코 공연을 봤습니다.", info: "공(공평할 공), 연(펼 연)" },
                { word: "展示", mean: "전시", example: "현대 미술 전시회를 관람했습니다.", info: "전(펼 전), 시(보일 시)" }
            ],
            EN: [
                { word: "Heritage", mean: "유산, 전통", example: "This building is a world heritage site." },
                { word: "Fascinating", mean: "대단히 흥미로운", example: "The local history is fascinating." },
                { word: "Diverse", mean: "다양한", example: "London is a very diverse city." },
                { word: "Exhibition", mean: "전시회", example: "We went to a photo exhibition." },
                { word: "Ceremony", mean: "의식, 식", example: "We watched a traditional tea ceremony." }
            ],
            ES: [
                { word: "Cultura", mean: "문화", example: "Me gusta la cultura española.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Baile", mean: "춤", example: "El baile fue espectacular.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Música", mean: "음악", example: "Escucho música local.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Arte", mean: "예술", example: "Hay mucho arte en la calle.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Fiesta", mean: "축제, 파티", example: "¡Vamos a la fiesta!", conjugation: { pres: "N/A", past: "N/A" } }
            ]
        },
        // Day 17 (Travel: Review & Wrap-up)
        {
            KR: [
                { word: "마침내", mean: "드디어, 결국", example: "마침내 여행의 목적지에 도착했다." },
                { word: "되새기다", mean: "다시 생각하다", example: "여행 사진을 보며 추억을 되새겼다." },
                { word: "갈무리", mean: "일을 마무리하거나 물건을 저장함", example: "여행의 기록을 일기장에 잘 갈무리했다." },
                { word: "나중", mean: "얼마 뒤의 시간", example: "나중에 다시 꼭 오고 싶은 곳이다." },
                { word: "고스란히", mean: "그대로 전부", example: "여행의 설렘을 고스란히 간직하고 싶다." }
            ],
            HJ: [
                { word: "整理", mean: "정리", example: "여행 경비를 정리했습니다.", info: "정(가지런할 정), 리(다스릴 리)" },
                { word: "報告", mean: "보고", example: "여행 보고서를 작성했습니다.", info: "보(알릴 보), 고(알릴 고)" },
                { word: "準備", mean: "준비", example: "다음 여행을 준비하고 있습니다.", info: "준(준비할 준), 비(갖출 비)" },
                { word: "結果", mean: "결과", example: "성공적인 여행 결과였습니다.", info: "결(맺을 결), 과(열매 과)" },
                { word: "感謝", mean: "감사", example: "함께한 친구들에게 감사합니다.", info: "감(느낄 감), 사(사례할 사)" }
            ],
            EN: [
                { word: "Conclusion", mean: "결론, 마무리", example: "Our trip came to a happy conclusion." },
                { word: "Reflection", mean: "반영, 반성, 생각", example: "Traveling gives time for reflection." },
                { word: "Appreciate", mean: "감사하다, 가치를 인정하다", example: "I appreciate every moment of this trip." },
                { word: "Sustain", mean: "유지하다, 지속하다", example: "I want to sustain this feeling." },
                { word: "Perspective", mean: "관점, 시각", example: "Travel gives us a new perspective." }
            ],
            ES: [
                { word: "Terminar", mean: "끝내다", example: "Terminamos el viaje.", conjugation: { pres: "Termino", past: "Terminé" } },
                { word: "Recuerdo", mean: "추억, 기억", example: "Tengo muy buenos recuerdos.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Próximo", mean: "다음의", example: "Hasta el próximo viaje.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Adiós", mean: "안녕 (헤어질 때)", example: "Adiós, mis amigos.", conjugation: { pres: "N/A", past: "N/A" } },
                { word: "Volver", mean: "돌아가다", example: "Quiero volver pronto.", conjugation: { pres: "Vuelvo", past: "Volví" } }
            ]
    ]
};

// 31일치 이상의 데이터를 자동으로 생성/순환시키기 위한 인덱싱 로직
function getDaySet() {
    const now = new Date();
    const day = now.getDate(); // 1-31
    const month = now.getMonth(); // 0-11
    
    // 월과 일을 조합하여 매월 다른 패턴이 나오도록 함
    const index = (month + day - 1) % wordDB.weekday.length;
    return wordDB.weekday[index];
}

let gameState = {
    xp: 0, level: 1, streak: 0, lastDate: "",
    completed: { KR: false, HJ: false, EN: false, ES: false }
};

let UI = {};

function init() {
    loadState();
    setupUI();
    updateDateDisplay();
    renderCards();
}

function loadState() {
    gameState.xp = parseInt(localStorage.getItem('pj_xp')) || 0;
    gameState.level = parseInt(localStorage.getItem('pj_level')) || 1;
    gameState.streak = parseInt(localStorage.getItem('pj_streak')) || 0;
    gameState.lastDate = localStorage.getItem('pj_last_date') || "";
    
    const now = new Date().toISOString().split('T')[0];
    if (gameState.lastDate !== now) {
        if (gameState.lastDate) {
            const last = new Date(gameState.lastDate);
            const today = new Date(now);
            const diff = (today - last) / (1000 * 60 * 60 * 24);
            if (diff > 1.5) gameState.streak = 0;
        }
        gameState.completed = { KR: false, HJ: false, EN: false, ES: false };
        gameState.lastDate = now;
        localStorage.setItem('pj_last_date', now);
    } else {
        const savedComp = localStorage.getItem('pj_completed');
        if (savedComp) gameState.completed = JSON.parse(savedComp);
    }
    saveState();
}

function saveState() {
    localStorage.setItem('pj_xp', gameState.xp);
    localStorage.setItem('pj_level', gameState.level);
    localStorage.setItem('pj_streak', gameState.streak);
    localStorage.setItem('pj_completed', JSON.stringify(gameState.completed));
    if (UI.xp) {
        UI.xp.innerText = gameState.xp;
        UI.level.innerText = gameState.level;
        UI.streak.innerText = gameState.streak;
    }
}

function setupUI() {
    UI = {
        streak: document.getElementById('streak'),
        xp: document.getElementById('xp'),
        level: document.getElementById('level'),
        dateText: document.getElementById('date-text'),
        questBoard: document.getElementById('quest-board'),
        modal: document.getElementById('study-modal'),
        studyContent: document.getElementById('study-content'),
        modalControls: document.getElementById('modal-controls')
    };
}

function updateDateDisplay() {
    const now = new Date();
    const dayNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;
    UI.dateText.innerHTML = `<i class="fa-regular fa-calendar"></i> ${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 (${dayNames[now.getDay()]}) - <span style="color:var(--accent)">${isWeekend ? '주말 복습' : '평일 학습'}</span>`;
}

function renderCards() {
    const isWeekend = new Date().getDay() === 0 || new Date().getDay() === 6;
    UI.questBoard.innerHTML = '';
    const langs = [
        { id: 'KR', name: '한국어', icon: 'fa-language', tag: 'tag-kr', desc: '고급 어휘 및 순우리말' },
        { id: 'HJ', name: '한자어', icon: 'fa-book-open', tag: 'tag-hj', desc: '비즈니스 실무 한자' },
        { id: 'EN', name: 'English', icon: 'fa-earth-americas', tag: 'tag-en', desc: 'IH Level Business' },
        { id: 'ES', name: 'Español', icon: 'fa-comments', tag: 'tag-es', desc: 'IM1 Level Daily' }
    ];
    langs.forEach(lang => {
        const isDone = gameState.completed[lang.id];
        const card = document.createElement('div');
        card.className = 'quest-card';
        if (isDone) card.style.opacity = '0.6';
        card.innerHTML = `<span class="lang-tag ${lang.tag}">${lang.name}</span><h3><i class="fa-solid ${lang.icon}"></i> ${isWeekend ? '복습' : '학습'}</h3><p>${lang.desc}</p><div style="margin-top:1.5rem; font-weight:700; color:${isDone ? 'var(--success)' : 'var(--primary)'}">${isDone ? '<i class="fa-solid fa-circle-check"></i> 완료' : '<i class="fa-solid fa-play"></i> 시작하기'}</div>`;
        if (!isDone) card.onclick = () => startStudy(lang.id);
        UI.questBoard.appendChild(card);
    });
}

let curLang = ''; let curIdx = 0; let curWords = [];

function startStudy(langId) {
    curLang = langId;
    curWords = getDaySet()[langId];
    curIdx = 0;
    UI.modal.style.display = 'flex';
    showWord();
}

function showWord() {
    const word = curWords[curIdx];
    const isForeign = curLang === 'EN' || curLang === 'ES';
    UI.studyContent.innerHTML = `<div class="lang-tag">${curLang} Step ${curIdx + 1}/5</div><div class="word-display"><h1 class="word-main">${word.word}${isForeign ? `<i class="fa-solid fa-volume-high" onclick="speak('${word.word}', '${curLang}')" style="font-size:1.5rem; cursor:pointer; color:var(--accent); margin-left:10px;"></i>` : ''}</h1><p class="word-sub">${word.mean}</p>${word.info ? `<div class="info-box"><b>한자 뜻/음:</b><br>${word.info}</div>` : ''}${word.conjugation ? `<div class="info-box" style="display:flex; justify-content:space-around;"><div><small>현재</small><br><b>${word.conjugation.pres}</b></div><div><small>과거</small><br><b>${word.conjugation.past}</b></div></div>` : ''}<p style="color:var(--text-muted); background:rgba(255,255,255,0.05); padding:1rem; border-radius:12px;">"${word.example}"${isForeign ? `<i class="fa-solid fa-volume-low" onclick="speak('${word.example}', '${curLang}')" style="cursor:pointer; margin-left:5px;"></i>` : ''}</p></div>`;
    UI.modalControls.innerHTML = `<button class="btn btn-primary" onclick="nextWord()">${curIdx === 4 ? '퀴즈 시작' : '다음 단어'}</button><button class="btn btn-outline" onclick="closeModal()">닫기</button>`;
}

function nextWord() { if (curIdx < 4) { curIdx++; showWord(); } else { startQuiz(); } }

let quizQueue = [];
function startQuiz() { quizQueue = [...curWords].sort(() => Math.random() - 0.5).slice(0, 3); renderNextQuiz(); }

function renderNextQuiz() {
    if (quizQueue.length === 0) { finishQuest(); return; }
    const word = quizQueue.pop();
    const set = getDaySet();
    const options = [word.mean];
    while(options.length < 4) {
        const rWord = set[curLang][Math.floor(Math.random() * 5)];
        if (!options.includes(rWord.mean)) options.push(rWord.mean);
    }
    options.sort(() => Math.random() - 0.5);
    UI.studyContent.innerHTML = `<h2 style="margin-bottom:1.5rem; color:var(--accent);">단어 퀴즈 (${quizQueue.length + 1}문제 남음)</h2><h1 class="word-main">${word.word}</h1><div id="quiz-options">${options.map(opt => `<div class="quiz-option" onclick="checkAns(this, '${opt}', '${word.mean}', '${word.word}')">${opt}</div>`).join('')}</div>`;
    UI.modalControls.innerHTML = '';
}

function checkAns(el, sel, cor, wordTxt) {
    const opts = document.querySelectorAll('.quiz-option'); opts.forEach(o => o.style.pointerEvents = 'none');
    if (sel === cor) { el.classList.add('correct'); setTimeout(() => renderNextQuiz(), 1000); } 
    else { el.classList.add('wrong'); opts.forEach(o => { if(o.innerText === cor) o.classList.add('correct'); }); quizQueue.unshift(curWords.find(w => w.word === wordTxt)); setTimeout(() => renderNextQuiz(), 2000); }
}

function finishQuest() {
    createConfetti(); gameState.completed[curLang] = true; gameState.xp += 100;
    if (gameState.xp >= gameState.level * 500) { gameState.xp -= gameState.level * 500; gameState.level++; }
    if (Object.values(gameState.completed).every(v => v)) { gameState.streak++; }
    saveState(); closeModal(); renderCards();
}

function speak(text, lang) {
    const msg = new SpeechSynthesisUtterance(); msg.text = text;
    msg.lang = lang === 'EN' ? 'en-US' : lang === 'ES' ? 'es-ES' : 'ko-KR';
    window.speechSynthesis.speak(msg);
}

function exportToExcel() {
    const set = getDaySet(); const wb = XLSX.utils.book_new();
    const krS = XLSX.utils.json_to_sheet(set.KR.map(w => ({단어:w.word, 뜻:w.mean, 예문:w.example})));
    const enS = XLSX.utils.json_to_sheet(set.EN.map(w => ({Word:w.word, Meaning:w.mean, Example:w.example})));
    const esS = XLSX.utils.json_to_sheet(set.ES.map(w => ({Palabra:w.word, Significado:w.mean, Conjugación:`${w.conjugation.pres}/${w.conjugation.past}`, Ejemplo:w.example})));
    const hjS = XLSX.utils.json_to_sheet(set.HJ.map(w => ({한자어:w.word, 뜻:w.mean, 한자정보:w.info, 예문:w.example})));
    XLSX.utils.book_append_sheet(wb, krS, "Korean"); XLSX.utils.book_append_sheet(wb, enS, "English"); XLSX.utils.book_append_sheet(wb, esS, "Spanish"); XLSX.utils.book_append_sheet(wb, hjS, "Hanja");
    XLSX.writeFile(wb, `Phangs_Language_${new Date().toISOString().split('T')[0]}.xlsx`);
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const c = document.createElement('div'); c.className = 'confetti';
        c.style.left = Math.random() * 100 + 'vw'; c.style.top = '-10px'; c.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        c.style.width = c.style.height = (Math.random() * 10 + 5) + 'px'; c.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(c); setTimeout(() => c.remove(), 2000);
    }
}
function closeModal() { UI.modal.style.display = 'none'; }
init();
