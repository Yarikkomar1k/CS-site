function showPage(id, btn) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
}

/* Карты */
const maps = [
    {
        name: "Dust 2", 
        t: 49,
        ct: 51,
        fact: "У Counter-Strike 2 карта Dust II — це класика з простим дизайном і відкритими лініями, де часто відбуваються прямі перестрілки, особливо на Long і в центрі. Вона добре підходить для тренування стрільби та базових навичок, хоча може здаватися одноманітною.",
        img: "https://upload.wikimedia.org/wikipedia/ru/6/6f/Dust_II_%28CS-GO%29.jpg"
    },
    {
        name: "Mirage",
        t: 47,
        ct: 53,
        fact: "Mirage — більш тактична карта, де ключову роль відіграє контроль Mid, адже через нього можна впливати на обидва плєнти. Вона підходить як для агресивної гри, так і для продуманих раундів із гранатами.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCAGYYQnUFj9XYBQuOLWImDv7HGWyYJCstg&s"
    },
    {
        name: "Inferno",
        t: 46,
        ct: 54,
        fact: "Inferno має вузькі проходи і сильно залежить від утиліти. Важливою є зона Banana, де йде боротьба за контроль, а захисту зазвичай легше стримувати атаки.",
        img: "https://arena.rtp.pt/wp-content/uploads/2023/09/cs2_Inferno_A.jpeg"
    },
    {
        name: "Nuke",
        t: 45,
        ct: 55,
        fact: "Nuke — складна карта з двома рівнями (верх і низ), яка вимагає хорошої комунікації та знання позицій. Часто має перевагу для захисту.",
        img: "https://csspot.org/_next/image/?url=https%3A%2F%2Fcsspot.org%2Fuploads%2Fnuke_0c0eb4d938.png&w=1920&q=75"
    },
    {
        name: "Overpass",
        t: 48,
        ct: 52,
        fact: "Overpass поєднує відкриті ділянки і підземні проходи. Тут важливий контроль карти, ротації і фейки.",
        img: "https://csspot.org/uploads/overpass_15857fca6a.png"
    },
    {
        name: "Ancient",
        t: 51,
        ct: 49,
        fact: "Ancient — карта з великою кількістю кутів, де важливо контролювати центр. Вона може бути складною для новачків.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJPUfn_bZLNmT0R2w4-AxxfIciToTR_ER4Q&s"
    },
    {
        name: "Anubis",
        t: 56,
        ct: 44,
        fact: "Anubis — новіша карта з відкритими зонами і незвичними маршрутами, де потрібно звикати до позицій.",
        img: "https://images.steamusercontent.com/ugc/2193876107321240926/4F3A2D9E8A51B390FC2B77407F9CBF0E60F555B9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
    }
];

function initMaps() {
    const container = document.getElementById('mapsContainer');
    container.innerHTML = maps.map(m => `
        <div class="map-card">
            <img src="${m.img}">
            <h3>${m.name}</h3>

            <div class="winrate">
                <div class="t-bg" style="width:${m.t}%">
                    T ${m.t}%
                </div>
                <div class="ct-bg" style="width:${m.ct}%">
                    CT ${m.ct}%
                </div>
            </div>

            <p>${m.fact}</p>
        </div>
    `).join('');
}

/* Рынок Steam */
const skinsFN = [
{ name: "AK-47 | Redline (FN)", price: 1700, rarity: "classified" },
{ name: "AK-47 | Asiimov (FN)", price: 5200, rarity: "covert" },
{ name: "AK-47 | Slate (FN)", price: 600, rarity: "milspec" },
{ name: "AK-47 | Legion of Anubis (FN)", price: 900, rarity: "classified" },
{ name: "AK-47 | Neon Rider (FN)", price: 2100, rarity: "covert" },
{ name: "AK-47 | Bloodsport (FN)", price: 3200, rarity: "covert" },
{ name: "AK-47 | Vulcan (FN)", price: 9000, rarity: "classified" },
{ name: "M4A1-S | Printstream (FN)", price: 6500, rarity: "covert" },
{ name: "M4A1-S | Hyper Beast (FN)", price: 3800, rarity: "covert" },
{ name: "M4A1-S | Decimator (FN)", price: 1500, rarity: "classified" },
{ name: "M4A4 | Temukau (FN)", price: 5200, rarity: "covert" },
{ name: "M4A4 | Neo-Noir (FN)", price: 1800, rarity: "classified" },
{ name: "AWP | Asiimov (FN)", price: 4200, rarity: "covert" },
{ name: "AWP | Dragon Lore (FN)", price: 85000, rarity: "covert" },
{ name: "Glock-18 | Fade (FN)", price: 9000, rarity: "classified" },
{ name: "USP-S | Kill Confirmed (FN)", price: 3800, rarity: "covert" },
{ name: "Desert Eagle | Blaze (FN)", price: 24000, rarity: "classified" },
{ name: "Desert Eagle | Printstream (FN)", price: 2500, rarity: "covert" },
{ name: "MAC-10 | Neon Rider (FN)", price: 900, rarity: "classified" },
{ name: "P90 | Death by Kitty (FN)", price: 3200, rarity: "classified" },
{ name: "MP9 | Hydra (FN)", price: 400, rarity: "milspec" },
{ name: "Galil AR | Chatterbox (FN)", price: 1400, rarity: "classified" },
{ name: "AWP | Hyper Beast (FN)", price: 3200, rarity: "covert" },
{ name: "AK-47 | Frontside Misty (FN)", price: 2400, rarity: "classified" },
{ name: "M4A4 | Desolate Space (FN)", price: 900, rarity: "classified" },
{ name: "USP-S | Cortex (FN)", price: 700, rarity: "classified" },
{ name: "Desert Eagle | Code Red (FN)", price: 2100, rarity: "covert" },
{ name: "FAMAS | Commemoration (FN)", price: 1200, rarity: "restricted" },
{ name: "Galil AR | Eco (FN)", price: 700, rarity: "restricted" },
{ name: "MP7 | Bloodsport (FN)", price: 500, rarity: "classified" },
{ name: "AWP | Mortis (FN)", price: 800, rarity: "classified" },
{ name: "★ Butterfly Knife | Gamma Doppler (FN)", price: 88400, rarity: "knife" },
{ name: "★ Karambit | Doppler (FN)", price: 83200, rarity: "knife" },
{ name: "★ Falchion Knife | Doppler (FN)", price: 62000, rarity: "knife" },
{ name: "★ M9 Bayonet | Marble Fade (FN)", price: 140000, rarity: "knife" },
{ name: "★ StatTrak™ Karambit | Case Hardened (FN)", price: 840000, rarity: "knife" },
{ name: "★ StatTrak™ Butterfly Knife | Fade (FN)", price: 103960, rarity: "knife" },
{ name: "Gloves | Driver (FN)", price: 90000, rarity: "knife" },
{ name: "AWP | Containment Breach (FN)", price: 5200, rarity: "covert" },
{ name: "AK-47 | Ice Coaled (FN)", price: 500, rarity: "restricted" },
{ name: "AWP | Atheris (FN)", price: 300, rarity: "restricted" },
{ name: "Glock-18 | Vogue (FN)", price: 700, rarity: "restricted" },
{ name: "M4A1-S | Golden Coil (FN)", price: 4200, rarity: "covert" },
{ name: "M4A4 | Buzz Kill (FN)", price: 1200, rarity: "classified" },
{ name: "M4A1-S | Mecha Industries (FN)", price: 2000, rarity: "classified" },
{ name: "Nova | Bloomstick (FN)", price: 1800, rarity: "classified" },
{ name: "UMP-45 | Primal Saber (FN)", price: 4200, rarity: "covert" },
{ name: "MAG-7 | Heaven Guard (FN)", price: 6200, rarity: "restricted" },
{ name: "Sawed-Off | Yaga (FN)", price: 3800, rarity: "restricted" }
];

function renderMarket(list = skinsFN) {
    const body = document.getElementById('mBody');
    if (!body) return;

    body.innerHTML = list.map(s => {
        const color = rarityColors[s.rarity] || "#fff";

        return `
        <tr>
            <td style="color:${color}; font-weight:600;">
                ${s.name}
            </td>
            <td>Factory New</td>
            <td>${s.price} ₴</td>
        </tr>
        `;
    }).join('');
}

function initMarketSearch() {
    const input = document.getElementById('mSearch');
    if (!input) return;

    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        const filtered = skinsFN.filter(s =>
            s.name.toLowerCase().includes(query)
        );

        renderMarket(filtered);
    });
}

function initMarket() {
    renderMarket();
    initMarketSearch();

    setInterval(() => renderMarket(), 300000);
}

const rarityColors = {
    consumer: "#b0c3d9",    
    industrial: "#5e98d9",  
    milspec: "#4b69ff",     
    restricted: "#8847ff",  
    classified: "#d32ce6",  
    covert: "#eb4b4b",      
    knife: "#e4ae39"         
};

function getPriceColor(price) {
    if (price < 1000) return "#4caf50";     
    if (price <= 10000) return "#ffd700";    
    return "#ff4d4d";                        
}

function renderMarket(list = skinsFN) {
    const body = document.getElementById('mBody');
    if (!body) return;

    body.innerHTML = list.map(s => {
        const rarityColor = rarityColors[s.rarity] || "#fff";
        const priceColor = getPriceColor(s.price);

        return `
        <tr>
            <td style="color:${rarityColor}; font-weight:600;">
                ${s.name}
            </td>
            <td>Factory New</td>
            <td style="color:${priceColor}; font-weight:600;">
                ${s.price} ₴
            </td>
        </tr>
        `;
    }).join('');
}
/* Команды */
const teams = [
    {
        name: "Team Vitality",
        logo: "https://static.flashscore.com/res/image/data/AaUkHZrG-lG2kTCDf.png",
        banner: "https://files.vgtimes.ru/si/post_129161_16x9_ru.webp",
        coach: "XTQZZZ",
        players: ["ZywOo", "apEX", "flameZ", "mezii", "ropz"]
    },
    {
        name: "Natus Vincere",
        logo: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5f/NAVI_Logo.svg/960px-NAVI_Logo.svg.png",
        banner: "https://cdn.discordapp.com/attachments/1477721754263879793/1487857141913223249/image.png?ex=69caaa71&is=69c958f1&hm=c315d64f5a71f29d3db812718cd73dab0e69ceb6b02ac5e9a0c2fd5c18bc811d&",
        coach: "B1ad3",
        players: ["b1t", "Aleksib", "iM", "w0nderful", "makazze"]
    },
    {
        name: "Team Spirit",
        logo: "https://ru.csgo.com/thumb/team/size-og-image/2018/09/7/NzZ4cEhVU0hablY=.png",
        banner: "https://cybersport.metaratings.ru/_images/insecure/w-1360:h-1040/aHR0cHM6Ly9zdG9yYWdlLnlhbmRleGNsb3VkLm5ldC9zMy1tZXRhcmF0aW5ncy1zdG9yYWdlL2ltYWdlcy84MS9jMi84MWMyZDkzYWE4YzFjNDVhMzE2MTIxZjZkYjk2Y2JkMi5wbmc=.webp",
        coach: "hally",
        players: ["donk", "sh1ro", "magixx", "zont1x", "tN1R"]
    },
    {
        name: "MOUZ",
        logo: "https://media.cyberscore.live/static/teams/2025/6/3611aebb-c9f0-4239-9d55-850bffeef107.webp",
        banner: "https://dota2.net/thumb/post/size-og-image/2026/01/138583/MTM4NTgzcTJVWHVkTnVKSA==.jpg",
        coach: "sycrone",
        players: ["torzsi", "xertioN", "Jimpphat", "Brollan", "Spinx"]
    },
    {
        name: "Team Falcons",
        logo: "https://upload.wikimedia.org/wikipedia/ru/9/9a/Team_Falcons_logo.png",
        banner: "https://ggscore.com/media/news/pic-20251223-1966x1106-3596898301.jpeg",
        coach: "zonic",
        players: ["NiKo", "m0NESY", "TeSeS", "kyxsan", "kyousuke"]
    },
    {
        name: "FURIA Esports",
        logo: "https://ru.csgo.com/thumb/team/size-team-logo-big/2018/12/187/MTg3RHZkWHpnajBzZg==.png",
        banner: "https://sportilinet.kz/userdata/news/news_10677/FURIA_s_kazahstantsem_molodoy_proigrala_s.webp",
        coach: "sidde",
        players: ["FalleN", "yuurih", "KSCERATO", "YEKINDAR", "molodoy"]
    },
    {
        name: "PARIVISION",
        logo: "https://ru.csgo.com/thumb/team/size-team-logo-big/2024/05/616/NjE2UlRBb1dHZ2xGZA==.png",
        banner: "https://3dnews.ru/assets/external/illustrations/2026/01/26/1135821/l527psPq0DbLSedEb0rvne.jpg",
        coach: "dastan",
        players: ["Jame", "BELCHONOKK", "xiELO", "nota", "zweih"]
    },
    {
        name: "The MongolZ",
        logo: "https://ru.csgo.com/thumb/team/size-team-logo-big/2023/04/553/NTUza2Z6SFpUSGZ4ag==.png",
        banner: "https://games-ba.ru/uploads/posts/2025-08/1756113330-11756109718-15546adcf-0e19-4a67-babf-6220357eeeac.webp",
        coach: "maaRaa",
        players: ["bLitz", "Techno", "mzinho", "910", "cobrazera"]
    },
    {
        name: "Aurora Gaming",
        logo: "https://ru.csgo.com/thumb/team/size-og-image/2022/08/506/NTA2QlhoYnN6QUZBdw==.png",
        banner: "https://media.esports.gg/uploads/2025/04/cs-aurora-new-hed.jpg",
        coach: "",
        players: ["MAJ3R", "XANTARES", "woxic", "soulfly", "Wicadia"]
    },
    {
        name: "G2 Esports",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNk_Rkzut3poCkVcCZWAkTQpUhe68aG1n6cQ&s",
        banner: "https://esportsinsider.com/wp-content/uploads/2025/09/BLAST-Open-G2-large.jpg",
        coach: "TaZ",
        players: ["huNter-", "malbsMd", "SunPayus", "HeavyGod", "MATYS"]
    }
];

function initTeams() {
    const list = document.getElementById('teamsList');

    list.innerHTML = teams.map((team, index) => `
        <div class="team-card">

            <div class="team-banner">
                <img src="${team.banner}">
            </div>

            <div class="team-info">
                <div class="team-header">
                    <span class="rank">#${index + 1}</span>
                    <img src="${team.logo}">
                    <h3>${team.name}</h3>
                </div>

                <div class="players">
                    ${team.players.map(p => `<span>${p}</span>`).join('')}
                </div>
            </div>

        </div>
    `).join('');
}

window.onload = () => {
    initMaps();
    initMarket(); 
    initTeams();
};