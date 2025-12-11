// Get query params
const urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get("id");
let currentLang = urlParams.get("lang") || "en";

// Toggle language
document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "hi" : "en";
    updatePage();
});

function goBack() {
    window.history.back();
}

function updatePage() {
    const lang = LANG[currentLang];

    document.getElementById("langToggle").textContent = lang.langButton;

    const product = lang.items.find(item => item.id === productId);
    if (!product) return;

    document.getElementById("prodImage").src = product.image;
    document.getElementById("prodName").textContent = product.name;
    document.getElementById("prodPrice").textContent = "₹ " + product.price;
    document.getElementById("prodDesc").textContent = product.details.description;

    // Set Pay Button Text
    document.getElementById("payBtn").textContent = `Pay with UPI – ₹${product.price}`;

    // PAY UPI ACTION
    document.getElementById("payBtn").onclick = () => {
        const upiId = "7007734039@ptsbi";
        const shopName = encodeURIComponent("Manas Rai");

        const paymentURL = `upi://pay?pa=${upiId}&pn=${shopName}&am=${product.price}&cu=INR`;

        window.location.href = paymentURL;
    };

    // Ingredients
    document.getElementById("prodIngredients").innerHTML =
        product.details.ingredients.map(i => `<li>${i}</li>`).join("");

    // Taste Profile Tags
    document.getElementById("prodTaste").innerHTML =
        product.details.tasteProfile
            .map(t => `<span class="px-3 py-1 bg-[#EFEFEA] border border-[#E0E0D9] text-sm">${t}</span>`)
            .join("");

    // Benefits
    document.getElementById("prodBenefits").innerHTML =
        product.details.benefits.map(b => `<li>${b}</li>`).join("");
}



updatePage();
