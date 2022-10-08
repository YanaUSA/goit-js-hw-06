const categoriesListRef = document.querySelectorAll('.item');
const numberOfCategories = categoriesListRef.length;
console.log('Number of categories:', numberOfCategories);

for (const item of categoriesListRef) {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
}