const qaPairs = [
    {
        question: "Tygrys szablozębny i wampiry",
        answer: "Tygrys szablozębny i wampiry"
    },
    {
        question: "Siatkówka",
        answer: "sieć neuronalna na dnie oka, w której znajdują się światłoczułe receptory."
    },
    {
        question: "Pole recepcyjne neuronu",
        answer: "obszar siatkówki, który pobudzony właściwym bodźcem powoduje reakcję tego neuronu. Może to być reakcja na światło lub konkretny obiekt (np. twarz)."
    },
    {
        question: "Receptor",
        answer: "komórka układu nerwowego wyspecjalizowana w odbiorze bodźców zewnętrznych."
    },
    {
        question: "Czopki",
        answer: "komórki receptorowe siatkówki uczestniczące w widzeniu dziennym, odpowiadają za widzenie barwne. Istnieją trzy rodzaje czopków (wrażliwe na czerwony, zielony, niebieski)."
    },
    {
        question: "Pręciki",
        answer: "komórki receptorowe siatkówki uczestniczące w widzeniu nocnym (odróżniają kształty, ale nie kolory)."
    },
    {
        question: "Transdukcja",
        answer: "zamiana energii bodźca (np. świetlnego) na reakcję elektryczną receptora."
    },
    {
        question: "Plamka ślepa",
        answer: "obszar na siatkówce, gdzie nerw wzrokowy łączy się z okiem. Nie ma na niej receptorów światłoczułych, więc nie widzimy obrazu w tej części pola widzenia. To 'dziura' w polu widzenia, której nie zauważamy, bo mózg ją 'wypełnia'."
    },
    {
        question: "Dołek środkowy",
        answer: "małe zagłębienie w centrum siatkówki, leżące dokładnie w osi poziomej oka, miejsce rzutowania obrazu, na którym fiksujemy wzrok (środek oka). Dokładnie widzimy w niewielkim obszarze około 2 stopni kąta widzenia (wielkość monety dwuzłotowej z odległości 50 cm)."
    },
    {
        question: "Komórki zwojowe -> ciało kolankowate boczne -> promienistość wzrokowa -> kora wzrokowa.",
        answer: "Komórki zwojowe -> ciało kolankowate boczne -> promienistość wzrokowa -> kora wzrokowa."
    },
    {
        question: "Nerw wzrokowy",
        answer: "‘kabel’, który łączy oko z ośrodkami wzrokowymi w mózgu. Stworzony z aksonów komórek zwojowych."
    },
    {
        question: "Akomodacja",
        answer: "proces, w którym oko dostosowuje swoją soczewkę, aby skupić obraz na siatkówce, umożliwiając wyraźne widzenie obiektów znajdujących się w różnych odległościach (takie ustawianie ostrości, jak w aparacie)."
    },
    {
        question: "Hamowanie oboczne",
        answer: "zjawisko wzajemnego hamowania komórek reprezentujących sąsiednie miejsca na siatkówce. Receptory na siatkówce reagują na to, czy są oświetlone, ale też na to, czy oświetlone są receptory sąsiednie (więc w pewnym sensie współpracują)."
    },
    {
        question: "Komórki dwubiegunowe",
        answer: "komórki tworzące wewnętrzną (środkową) warstwę siatkówki."
    },
    {
        question: "Komórki poziome",
        answer: "tworzą połączenia w poprzek siatkówki w warstwie receptorowej, pomagając w przetwarzaniu informacji o obrazie."
    },
    {
        question: "Komórki amakrynowe",
        answer: "tworzą połączenia w poprzek siatkówki w warstwie wewnętrznej, pomagając w analizie sygnałów z oka, które trafiają do mózgu."
    },
    {
        question: "Skrzyżowanie wzrokowe",
        answer: "miejsce w mózgu, gdzie włókna nerwowe z obu oczu częściowo się krzyżują, umożliwiając integrację informacji wzrokowych z obu pól widzenia."
    },
    {
        question: "Komórki proste, złożone i hiperzłożone:",
        answer: "proste reagują na proste cechy obrazu, takie jak krawędzie w określonym kierunku, ● złożone reagują na bardziej złożone bodźce na większej części pola recepcyjnego, ● hiperzłożone reagują na najbardziej złożone bodźce, jak dokładne kształty czy ruchy."
    },
    {
        question: "Kleksy barwne",
        answer: "komórki wrażliwe na barwę (komórki czerwono-zielone i niebiesko-żółte)."
    },
    {
        question: "Zjawisko stałości barwy",
        answer: "zjawisko, dzięki któremu postrzegamy kolory obiektów jako niezmienne, niezależnie od zmieniającego się oświetlenia. Nasze mózgi automatycznie kompensują zmiany w świetle, utrzymując wrażenie tej samej barwy."
    },
    {
        question: "Reflektancja",
        answer: "miara tego, jak dużo światła odbija się od powierzchni obiektu. Im wyższa reflektancja, tym więcej światła odbija się od powierzchni."
    },
    {
        question: "Stałość jasności",
        answer: "zjawisko, dzięki któremu postrzegamy jasność obiektów jako stałą, niezależnie od zmieniającego się oświetlenia. Biały papier zawsze wydaje się biały, niezależnie od tego czy jesteśmy w mocnym lub słabym oświetleniu."
    },
    {
        question: "Procesy wstępujące (z dołu do góry)",
        answer: "rozpoznawanie obrazów wyłącznie na podstawie zmysłów."
    },
    {
        question: "Procesy zstępujące (z góry do dołu)",
        answer: "rozpoznawanie obrazów na podstawie zmysłów oraz wiedzy o świecie w pamięci długotrwałej."
    },
    {
        question: "Grupowanie percepcyjne",
        answer: "proces, w którym nasz mózg łączy różne elementy obrazu (np. punkty, linie, kolory) w całość, abyśmy mogli rozpoznać obiekty i struktury w otoczeniu."
    },
    {
        question: "Zasady grupowania obiektów",
        answer: "● zasada bliskości - obiekty grupowane są według odległości od siebie nawzajem, ● zasada podobieństwa - obiekty podobne wizualnie są grupowane razem, ● zasada (dobrej) kontynuacji - mózg preferuje postrzeganie linii i kształtów w sposób płynny i ciągły, zamiast przerywanych, więc jeśli widzimy niekompletną linię, mózg automatycznie potrafi dopełnić ją w sposób, który wydaje się logiczny i płynny. ● zasada zamykania - obiekty objęte obrysem (np. obrysowane w kółko) są grupowane razem."
    },
    {
        question: "Gestaltyzm (psychologia postaci)",
        answer: "podejście w psychologii, które mówi, że nasz umysł widzi rzeczy nie jako pojedyncze elementy, ale jako całości (tzw. 'gestalty'). Na przykład, patrząc na obraz, nasz mózg widzi nie pojedyncze linie, ale całą postać, nawet jeśli nie jest ona doskonale przedstawiona."
    },
    {
        question: "Fotyzmy",
        answer: "zjawiska, w których widzimy błyski światła lub inne migoczące efekty, nawet gdy nie ma żadnego zewnętrznego źródła światła. Takie efekty mogą pojawić się np. przy silnym nacisku na oko, w wyniku intensywnego światła, czy w wyniku zmiany w stanie zdrowia, jak przy migrenie."
    },
    {
        question: "Dichromatyzm",
        answer: "zaburzenie widzenia, wynika z braku JEDNEGO rodzaju czopków w siatkówce. Osoba z dichromatyzmem nie odróżnia koloru zielonego od czerwonego albo niebieskiego od żółtego."
    },
    {
        question: "Monochromatyzm",
        answer: "zaburzenie widzenia, wynika z braku DWÓCH lub TRZECH (czyli wszystkich) rodzajów receptorów czopkowych. Osoba z monochromatyzmem odróżnia jasność obiektów, ale nie widzi kolorów. Ma też problemy z ostrością obrazu."
    },
    {
        question: "Achromatopsja",
        answer: "zaburzenie podobne do monochromatyzmu, czyli osoba chora nie widzi żadnych kolorów, jednak cały system wzrokowy działa poprawnie (nie ma problemów z ostrością). Co więcej, jeśli ktoś zdrowy dozna urazu mózgu i pojawi się u niego achromatopsja, po czasie całkowicie zaniknie umiejętność wyobrażania sobie kolorów. Cały świat czarno-biały."
    },
    {
        question: "Akinetopsja",
        answer: "pacjenci z tą dolegliwością nie dostrzegają ruchu przedmiotów, lecz jedynie zmianę pozycji obiektów."
    },
    {
        question: "Syndrom Riddocha",
        answer: "pacjenci dostrzegają ruch, ale nie widzą szczegółów takich jak kolor czy kształt poruszającego się obiektu."
    },
    {
        question: "Prozopagnozja",
        answer: "chory nie potrafi rozpoznawać twarzy."
    },
    {
        question: "Agnozja wzrokowa",
        answer: "zaburzenie, w którym osoba ma trudności z rozpoznawaniem obiektów, mimo że jej zdolności widzenia (np. ostrość wzroku) są normalne. Osoby z agnozją mogą widzieć kształty, kolory i szczegóły, ale nie potrafią zidentyfikować, co te rzeczy przedstawiają."
    }
];


function setupDarkModeToggle() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            console.log("Dark mode enabled");
        } else {
            console.log("Dark mode disabled");
        }
    });
}

function displayQuestions() {
    const container = document.getElementById('questions-container');

    qaPairs.forEach((pair, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.textContent = pair.question;

        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.textContent = pair.answer;
        answerDiv.style.display = 'none'; // Hide initially

        // Scroll detection logic
        let isScrolling = false;
        let startY = 0;

        // Detect start of touch
        questionDiv.addEventListener('touchstart', (e) => {
            isScrolling = false;
            startY = e.touches[0].clientY;
        });

        // Detect movement
        questionDiv.addEventListener('touchmove', (e) => {
            const moveY = e.touches[0].clientY;
            if (Math.abs(moveY - startY) > 10) {
                isScrolling = true; // Mark as scrolling if user moves finger > 10px
            }
        });

        // Detect end of touch
        questionDiv.addEventListener('touchend', (e) => {
            if (!isScrolling) {
                toggleAnswerDisplay(answerDiv); // Only toggle if not scrolling
            }
        });

        // For desktop, use click event
        questionDiv.addEventListener('click', () => {
            toggleAnswerDisplay(answerDiv);
        });

        container.appendChild(questionDiv);
        container.appendChild(answerDiv);
    });
}

function toggleAnswerDisplay(answerDiv) {
    answerDiv.style.display = (answerDiv.style.display === 'block') ? 'none' : 'block';
}

function reshuffleQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = ''; // Clear the current content

    // Shuffle the array using the Fisher-Yates algorithm
    const shuffledPairs = [...qaPairs];
    for (let i = shuffledPairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPairs[i], shuffledPairs[j]] = [shuffledPairs[j], shuffledPairs[i]];
    }

    // Re-display the shuffled questions
    shuffledPairs.forEach((pair) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.textContent = pair.question;

        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.textContent = pair.answer;
        answerDiv.style.display = 'none'; // Hide initially

        let isScrolling = false;
        let startY = 0;

        questionDiv.addEventListener('touchstart', (e) => {
            isScrolling = false;
            startY = e.touches[0].clientY;
        });

        questionDiv.addEventListener('touchmove', (e) => {
            const moveY = e.touches[0].clientY;
            if (Math.abs(moveY - startY) > 10) {
                isScrolling = true;
            }
        });

        questionDiv.addEventListener('touchend', (e) => {
            if (!isScrolling) {
                toggleAnswerDisplay(answerDiv);
            }
        });

        questionDiv.addEventListener('click', () => {
            toggleAnswerDisplay(answerDiv);
        });

        container.appendChild(questionDiv);
        container.appendChild(answerDiv);
    });

    // Add spinning animation to the button
    const reshuffleButton = document.getElementById('reshuffle-questions');
    reshuffleButton.classList.add('spinning');
    setTimeout(() => reshuffleButton.classList.remove('spinning'), 500); // Remove spin after animation
}

document.getElementById('reshuffle-questions').addEventListener('click', reshuffleQuestions);

displayQuestions();
setupDarkModeToggle();