const menu = [
    {
        id: 1,
        title: "Küşleme",
        category: "Et Yemekleri",
        price: 85,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Mercimek_kofte.jpg/320px-Mercimek_kofte.jpg",
        desc: "Maraş'a özgü bulgurlu köfte, kuzu kıyması ve baharatlarla hazırlanır."
    },
    {
        id: 2,
        title: "Maraş Kebabı",
        category: "Et Yemekleri",
        price: 120,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Adana_kebab%2C_Adana%2C_Turkey.jpg/320px-Adana_kebab%2C_Adana%2C_Turkey.jpg",
        desc: "Tandır usulü pişirilmiş nefis kuzu eti, közlenmiş biber ve soğanla servis edilir."
    },
    {
        id: 3,
        title: "Tarhana Çorbası",
        category: "Çorba",
        price: 45,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Tarhana_soup.jpg/320px-Tarhana_soup.jpg",
        desc: "Ev yapımı tarhana ile hazırlanan, üzerine tereyağı dökülen geleneksel Maraş çorbası."
    },
    {
        id: 4,
        title: "Analı Kızlı",
        category: "Çorba",
        price: 50,
        img: "https://placehold.co/160x160/c17a3b/white?text=Anali+Kizli",
        desc: "Nohut ve iki farklı büyüklükte köftecikten oluşan Maraş'ın simge çorbası."
    },
    {
        id: 5,
        title: "Katmer",
        category: "Hamur İşleri",
        price: 60,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Katmer.jpg/320px-Katmer.jpg",
        desc: "İnce yufkadan yapılan, içine kaymak ve pekmez konan geleneksel Maraş böreği."
    },
    {
        id: 6,
        title: "Oruk",
        category: "Hamur İşleri",
        price: 55,
        img: "https://placehold.co/160x160/c8a84b/white?text=Oruk",
        desc: "İçi baharatlı kıymayla doldurulmuş ince kabuklu bulgur köftesi."
    },
    {
        id: 7,
        title: "Maraş Dondurması",
        category: "Tatlı",
        price: 35,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Turkish_ice_cream_Kahramanmaras.jpg/320px-Turkish_ice_cream_Kahramanmaras.jpg",
        desc: "Keçi sütü ve salep ile yapılan, uzayan dokusuyla dünyaca ünlü Maraş dondurması."
    },
    {
        id: 8,
        title: "Maraş Künefesi",
        category: "Tatlı",
        price: 70,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/K%C3%BCnefe.jpg/320px-K%C3%BCnefe.jpg",
        desc: "Tel kadayıf ve Maraş peyniriyle yapılan, şerbetle tatlandırılan geleneksel tatlı."
    }
];

const categories = menu.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
        acc.push(item.category);
    }
    return acc;
}, ["Tümü"]);

function renderButtons(cats) {
    const btnContainer = document.getElementById("btn-container");
    btnContainer.innerHTML = cats.map(cat =>
        `<button class="btn" data-category="${cat}">${cat}</button>`
    ).join("");

    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            const category = this.dataset.category;
            const filtered = category === "Tümü" ? menu : menu.filter(item => item.category === category);
            renderMenu(filtered);
        });
    });

    document.querySelector(".btn").classList.add("active");
}

function renderMenu(items) {
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = items.map(item => `
        <div class="menu-item">
            <img src="${item.img}" alt="${item.title}">
            <div class="menu-info">
                <div class="menu-header">
                    <h3>${item.title}</h3>
                    <span>${item.price} ₺</span>
                </div>
                <hr>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join("");
}

renderButtons(categories);
renderMenu(menu);
