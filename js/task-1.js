const categories = document.getElementById("categories");

const items = categories.querySelectorAll(".item");

console.log(`Amount of categories: ${items.length}`);

items.forEach(item => {
    const title = item.querySelector("h2").textContent;

    const elementAmount = item.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Element: ${elementAmount}`);
});