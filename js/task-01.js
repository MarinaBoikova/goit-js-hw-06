const categoriesListRef = document.querySelector('#categories');
// console.log(categoriesListRef);

const categoriesItemsRef =  categoriesListRef.children;
console.log('Number of categories: ', categoriesItemsRef.length);
[...categoriesItemsRef].forEach(element => {
    console.log('Category: ', element.querySelector('h2').textContent);
    console.log('Elements: ', element.querySelector('ul').children.length);
});



