function calculateRisk() {
    const q1 = parseInt(document.getElementById('q1').value);
    const q2 = parseInt(document.getElementById('q2').value);
    const q3 = parseInt(document.getElementById('q3').value);
    const q4 = parseInt(document.getElementById('q4').value);
    const q5 = parseInt(document.getElementById('q5').value);
    const q6 = parseInt(document.getElementById('q6').value);

    const totalScore = q1 + q2 + q3 + q4 + q5 + q6;

    const quizBox = document.getElementById('quiz-box');
    const resultBox = document.getElementById('result-box');
    const riskBadge = document.getElementById('risk-badge');
    const riskText = document.getElementById('risk-text');
    const instructionContent = document.getElementById('instruction-content');
    const scoreBreakdown = document.getElementById('score-breakdown');
    
    const userStoryBlock = document.getElementById('user-story-block');
    const displayUserText = document.getElementById('display-user-text');
    const customTextValue = document.getElementById('custom-text').value.trim();

    if (customTextValue !== "") {
        displayUserText.innerText = customTextValue;
        userStoryBlock.classList.remove('hidden');
    } else {
        userStoryBlock.classList.add('hidden');
    }

    scoreBreakdown.innerHTML = `
        <ul>
            <li>Сфера / Учреждение: +${q1}</li>
            <li>Форма давления: +${q2}</li>
            <li>Инициатор / Посредник: +${q3}</li>
            <li>Финансовый масштаб: +${q4}</li>
            <li>Наличие улик/доказательств: +${q5}</li>
            <li>Последствия отказа должностному лицу: +${q6}</li>
            <li><strong>Итоговый индекс риска: ${totalScore} из 18</strong></li>
        </ul>
    `;

    let badgeText = "";
    let badgeClass = "";
    let riskDescription = "";
    let instructions = "";

    // Применили новые формулировки по замечаниям ментора
    if (totalScore <= 7) {
        badgeText = "🟢 НИЗКИЙ УРОВЕНЬ РИСКА";
        badgeClass = "badge-green";
        riskDescription = "По указанным ответам выраженных признаков коррупционного риска не выявлено. При изменении обстоятельств рекомендуется повторить оценку.";
        instructions = `
            <ul>
                <li>Не передавайте деньги, подарки или иное вознаграждение, если их требуют или ожидают в обмен на действие/решение должностного лица.</li>
                <li>По возможности переводите важные обращения в официальную письменную форму и сохраняйте документы с входящими номерами.</li>
                <li>Если ситуация начнет меняться или давление усилится — повторите оценку на нашем портале.</li>
            </ul>
        `;
    } else if (totalScore >= 8 && totalScore <= 11) {
        badgeText = "🟡 ПОВЫШЕННЫЙ УРОВЕНЬ РИСКА";
        badgeClass = "badge-yellow";
        riskDescription = `Модель оценки зафиксировала индекс риска: ${totalScore} баллов. Обнаружены косвенные или явные признаки скрытого давления, попыток вовлечения в коррупционную схему или искусственного создания административных барьеров.`;
        instructions = `
            <ul>
                <li>Не соглашайтесь на скрытые предложения "решить вопрос неофициально". Дайте понять, что намерены действовать строго в рамках правового поля Нижегородской области [anticor.nobl.ru].</li>
                <li>Сохраняйте все улики: скриншоты чатов, электронные письма, запишите точную дату, время и ФИО сотрудника.</li>
                <li>По возможности переводите важные обращения в официальную письменную форму и сохраняйте документы с входящими номерами.</li>
                <li>Подайте официальную жалобу вышестоящему руководству данного ведомства/учреждения или направьте запрос в профильное министерство региона [anticor.nobl.ru].</li>
            </ul>
        `;
    } else {
        badgeText = "🔴 ВЫСОКИЙ УРОВЕНЬ РИСКА";
        badgeClass = "badge-red";
        riskDescription = `Модель оценки зафиксировала критический индекс риска: ${totalScore} баллов. Описанная ситуация содержит выраженные признаки грубого давления и требует обращения в компетентные правоохранительные органы Нижегородской области.`;
        instructions = `
            <ol>
                <li><strong>Сохраняйте внешнее спокойствие.</strong> Не соглашайтесь на незаконную передачу денег, но и не отказывайте в категоричной форме. Постарайтесь перенести встречу под предлогом поиска нужной суммы, чтобы выиграть время.</li>
                <li><strong>Сохраните имеющиеся документы и переписку.</strong> Категорически не прикасайтесь к деньгам или вещам, если их пытаются вам передать.</li>
                <li><strong>Не пытайтесь самостоятельно провоцировать или расследовать ситуацию</strong> или оказывать давление на должностное лицо.</li>
                <li><strong>Срочно обратитесь в компетентный орган</strong> (МВД, ФСБ или Прокуратуру Нижегородской области) по официальным контактам, указанным ниже.</li>
            </ol>
        `;
    }

    riskBadge.innerText = badgeText;
    riskBadge.className = "badge " + badgeClass;
    riskText.innerText = riskDescription;
    instructionContent.innerHTML = instructions;

    quizBox.classList.add('hidden');
    resultBox.classList.remove('hidden');
    window.scrollTo(0, 0);
}

function showQuickHelp() {
    const helpText = document.getElementById('quick-help-text');
    if (helpText.style.display === "block") {
        helpText.style.display = "none";
    } else {
        helpText.style.display = "block";
    }
}

function toggleAnalysis() {
    const analysisDetails = document.getElementById('analysis-details');
    if (analysisDetails.style.display === "block") {
        analysisDetails.style.display = "none";
    } else {
        analysisDetails.style.display = "block";
    }
}

function resetQuiz() {
    document.getElementById('q1').selectedIndex = 0;
    document.getElementById('q2').selectedIndex = 0;
    document.getElementById('q3').selectedIndex = 0;
    document.getElementById('q4').selectedIndex = 0;
    document.getElementById('q5').selectedIndex = 0;
    document.getElementById('q6').selectedIndex = 0;
    document.getElementById('custom-text').value = "";
    
    document.getElementById('quick-help-text').style.display = "none";
    document.getElementById('analysis-details').style.display = "none";
    document.getElementById('quiz-box').classList.remove('hidden');
    document.getElementById('result-box').classList.add('hidden');
}
