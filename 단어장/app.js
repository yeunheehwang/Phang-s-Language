/**
 * Phang's Language Core JS
 * 모든 로직을 처음부터 재작성함
 */

const wordDB = {
    weekday: [
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
        {
            KR: [
                { word: "도담도담", mean: "어린아이가 탈 없이 잘 자라는 모양", example: "아이가 도담도담 자라는 모습이 보기 좋다." },
                { word: "너울", mean: "바다의 크고 사나운 물결", example: "먼바다에서 너울이 밀려오고 있다." },
                { word: "꼬리별", mean: "혜성의 순우리말", example: "밤하늘에 꼬리별이 나타났다." },
                { word: "꽃잠", mean: "결혼한 신랑 신부가 처음으로 함께 자는 잠", example: "그들은 행복한 꽃잠을 잤다." },
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
                { word: "Venir", mean: "오다", example: "Vengo de la office.", conjugation: { pres: "Vengo", past: "Vine" } },
                { word: "Saber", mean: "알다", example: "No sé la respuesta.", conjugation: { pres: "Sé", past: "Supe" } },
                { word: "Poder", mean: "할 수 있다", example: "Puedo hablar español.", conjugation: { pres: "Puedo", past: "Pude" } }
            ]
        }
    ]
};

// Global State
let gameState = {
    xp: 0, level: 1, streak: 0, lastDate: "",
    completed: { KR: false, HJ: false, EN: false, ES: false }
};

let UI = {};

// Initialization
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
        // 날짜가 바뀌었을 때
        if (gameState.lastDate) {
            const last = new Date(gameState.lastDate);
            const today = new Date(now);
            const diff = (today - last) / (1000 * 60 * 60 * 24);
            if (diff > 1.5) gameState.streak = 0; // 스트릭 깨짐
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
    
    UI.dateText.innerHTML = `
        <i class="fa-regular fa-calendar"></i> 
        ${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 (${dayNames[now.getDay()]}) - 
        <span style="color:var(--accent)">${isWeekend ? '주말 복습' : '평일 학습'}</span>
    `;
    return isWeekend;
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
        
        card.innerHTML = `
            <span class="lang-tag ${lang.tag}">${lang.name}</span>
            <h3><i class="fa-solid ${lang.icon}"></i> ${isWeekend ? '복습' : '학습'}</h3>
            <p>${lang.desc}</p>
            <div style="margin-top:1.5rem; font-weight:700; color:${isDone ? 'var(--success)' : 'var(--primary)'}">
                ${isDone ? '<i class="fa-solid fa-circle-check"></i> 완료' : '<i class="fa-solid fa-play"></i> 시작하기'}
            </div>
        `;
        
        if (!isDone) card.onclick = () => startStudy(lang.id);
        UI.questBoard.appendChild(card);
    });
}

let curLang = '';
let curIdx = 0;
let curWords = [];

function startStudy(langId) {
    curLang = langId;
    const daySeed = new Date().getDate() % wordDB.weekday.length;
    curWords = wordDB.weekday[daySeed][langId];
    curIdx = 0;
    UI.modal.style.display = 'flex';
    showWord();
}

function showWord() {
    const word = curWords[curIdx];
    const isForeign = curLang === 'EN' || curLang === 'ES';
    
    UI.studyContent.innerHTML = `
        <div class="lang-tag">${curLang} Step ${curIdx + 1}/5</div>
        <div class="word-display">
            <h1 class="word-main">
                ${word.word}
                ${isForeign ? `<i class="fa-solid fa-volume-high" onclick="speak('${word.word}', '${curLang}')" style="font-size:1.5rem; cursor:pointer; color:var(--accent); margin-left:10px;"></i>` : ''}
            </h1>
            <p class="word-sub">${word.mean}</p>
            
            ${word.info ? `<div class="info-box"><b>한자 뜻/음:</b><br>${word.info}</div>` : ''}
            ${word.conjugation ? `
                <div class="info-box" style="display:flex; justify-content:space-around;">
                    <div><small>현재</small><br><b>${word.conjugation.pres}</b></div>
                    <div><small>과거</small><br><b>${word.conjugation.past}</b></div>
                </div>
            ` : ''}

            <p style="color:var(--text-muted); background:rgba(255,255,255,0.05); padding:1rem; border-radius:12px;">
                "${word.example}"
                ${isForeign ? `<i class="fa-solid fa-volume-low" onclick="speak('${word.example}', '${curLang}')" style="cursor:pointer; margin-left:5px;"></i>` : ''}
            </p>
        </div>
    `;

    UI.modalControls.innerHTML = `
        <button class="btn btn-primary" onclick="nextWord()">${curIdx === 4 ? '퀴즈 시작' : '다음 단어'}</button>
        <button class="btn btn-outline" onclick="closeModal()">닫기</button>
    `;
}

function nextWord() {
    if (curIdx < 4) {
        curIdx++;
        showWord();
    } else {
        startQuiz();
    }
}

let quizQueue = [];

function startQuiz() {
    quizQueue = [...curWords].sort(() => Math.random() - 0.5).slice(0, 3);
    renderNextQuiz();
}

function renderNextQuiz() {
    if (quizQueue.length === 0) {
        finishQuest();
        return;
    }
    const word = quizQueue.pop();
    const daySeed = new Date().getDate() % wordDB.weekday.length;
    const options = [word.mean];
    while(options.length < 4) {
        const rWord = wordDB.weekday[daySeed][curLang][Math.floor(Math.random() * 5)];
        if (!options.includes(rWord.mean)) options.push(rWord.mean);
    }
    options.sort(() => Math.random() - 0.5);

    UI.studyContent.innerHTML = `
        <h2 style="margin-bottom:1.5rem; color:var(--accent);">단어 퀴즈 (${quizQueue.length + 1}문제 남음)</h2>
        <h1 class="word-main">${word.word}</h1>
        <div id="quiz-options">
            ${options.map(opt => `<div class="quiz-option" onclick="checkAns(this, '${opt}', '${word.mean}', '${word.word}')">${opt}</div>`).join('')}
        </div>
    `;
    UI.modalControls.innerHTML = '';
}

function checkAns(el, sel, cor, wordTxt) {
    const opts = document.querySelectorAll('.quiz-option');
    opts.forEach(o => o.style.pointerEvents = 'none');
    
    if (sel === cor) {
        el.classList.add('correct');
        setTimeout(() => renderNextQuiz(), 1000);
    } else {
        el.classList.add('wrong');
        opts.forEach(o => { if(o.innerText === cor) o.classList.add('correct'); });
        quizQueue.unshift(curWords.find(w => w.word === wordTxt));
        setTimeout(() => renderNextQuiz(), 2000);
    }
}

function finishQuest() {
    createConfetti();
    gameState.completed[curLang] = true;
    gameState.xp += 100;
    if (gameState.xp >= gameState.level * 500) {
        gameState.xp -= gameState.level * 500;
        gameState.level++;
    }
    
    if (Object.values(gameState.completed).every(v => v)) {
        gameState.streak++;
    }
    
    saveState();
    closeModal();
    renderCards();
}

function speak(text, lang) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = lang === 'EN' ? 'en-US' : lang === 'ES' ? 'es-ES' : 'ko-KR';
    window.speechSynthesis.speak(msg);
}

function exportToExcel() {
    const daySeed = new Date().getDate() % wordDB.weekday.length;
    const set = wordDB.weekday[daySeed];
    const wb = XLSX.utils.book_new();
    
    const krS = XLSX.utils.json_to_sheet(set.KR.map(w => ({단어:w.word, 뜻:w.mean, 예문:w.example})));
    const enS = XLSX.utils.json_to_sheet(set.EN.map(w => ({Word:w.word, Meaning:w.mean, Example:w.example})));
    const esS = XLSX.utils.json_to_sheet(set.ES.map(w => ({Palabra:w.word, Significado:w.mean, Conjugación:`${w.conjugation.pres}/${w.conjugation.past}`, Ejemplo:w.example})));
    const hjS = XLSX.utils.json_to_sheet(set.HJ.map(w => ({한자어:w.word, 뜻:w.mean, 한자정보:w.info, 예문:w.example})));
    
    XLSX.utils.book_append_sheet(wb, krS, "Korean");
    XLSX.utils.book_append_sheet(wb, enS, "English");
    XLSX.utils.book_append_sheet(wb, esS, "Spanish");
    XLSX.utils.book_append_sheet(wb, hjS, "Hanja");
    
    XLSX.writeFile(wb, `Phangs_Language_${new Date().toISOString().split('T')[0]}.xlsx`);
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.top = '-10px';
        c.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        c.style.width = c.style.height = (Math.random() * 10 + 5) + 'px';
        c.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 2000);
    }
}

function closeModal() { UI.modal.style.display = 'none'; }

init();
