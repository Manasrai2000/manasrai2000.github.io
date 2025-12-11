let currentLang = "en";

document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "hi" : "en";
    applyLanguage();
    loadProducts();
});

// APPLY LANGUAGE TEXT
function applyLanguage() {
    const lang = LANG[currentLang];

    document.getElementById("shopName").textContent = lang.shopName;
    document.getElementById("menuTitle").textContent = lang.menuTitle;
    document.getElementById("langToggle").textContent = lang.langButton;
}

function loadProducts() {
    const lang = LANG[currentLang];
    const list = document.getElementById("productList");

    list.innerHTML = "";

    lang.items.forEach(item => {
        const card = document.createElement("div");

        card.className =
            "bg-white rounded-2xl shadow-sm p-3 flex items-center gap-4 hover:shadow-md hover:-translate-y-[2px] transition cursor-pointer";

        card.onclick = () => {
            window.location.href = `details.html?id=${item.id}&lang=${currentLang}`;
        };

        card.innerHTML = `
    <div class="w-24 h-24 rounded-sm overflow-hidden bg-gray-100 flex-shrink-0 shadow-sm">
        <img src="${item.image}" class="w-full h-full object-cover" />
    </div>

    <div class="flex-1">
        <h3 class="text-xl font-semibold text-[#3E2723]">${item.name}</h3>
        <p class="text-sm mt-1 text-[#6F6F6F] line-clamp-2">${item.shortDesc}</p>
    </div>

    <div class="text-right pr-2">
        <p class="text-xl font-bold" style="color:#D35400">₹ ${item.price}</p>
    </div>
`;

        list.appendChild(card);
    });
}



// INITIAL LOAD
applyLanguage();
loadProducts();
