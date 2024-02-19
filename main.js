window.onload = () => {
    const elementsWithMFor = document.querySelectorAll('[m-for]');
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            mFor(data, elementsWithMFor);
        })
        .catch(err => console.error(err));

    function mFor(data, elementsWithMFor) {
        // let to avoid re-rendering of elements with m-for
        let elementIgnore = elementsWithMFor;
        Promise.all(Array.from(elementsWithMFor).map(element => {
            const mForValue = element.getAttribute('m-for');
            let elementIgnore = element;
            const attributeMatches = element.innerText.match(/{{([^}]*)}}/g) || [];
            const attributeNames = attributeMatches.map(attribute => attribute.replace(/{{|}}/g, ''));
            // if element has m-for child elements then mFor() is called recursively
            const childElementsWithMFor = element.querySelectorAll('[m-for]');
            if (childElementsWithMFor.length > 0) {
                mFor(data[mForValue], childElementsWithMFor);

            }

            let modifiedHtml = '';
            const dataLoop = data[mForValue] ? data[mForValue] : data;
            console.log(dataLoop, mForValue, data);
            for (let j = 0; j < dataLoop.length; j++) {
                const clonedElement = element.cloneNode(true);
                attributeMatches.forEach((attribute, index) => {
                    const attributeName = attributeNames[index];
                    const attributeValue = resolveNestedProperty(dataLoop[j], attributeName);
                    clonedElement.innerHTML = clonedElement.innerHTML.replaceAll(attribute, attributeValue);
                });
                modifiedHtml += clonedElement.innerHTML;
            }
            element.innerHTML = modifiedHtml;
        })).then(() => {
            elementsWithMFor.forEach(e => e.removeAttribute('m-for'));
            document.querySelector('body').style.opacity = 1;
        });
    }

    function resolveNestedProperty(obj, path) {
        const pathParts = path.split('.');
        let result = obj;
        for (const part of pathParts) {
            if (part.includes('[')) {
                const [key, index] = part.split(/\[|\]/).filter(Boolean);
                result = result[key][index];
            } else {
                result = result[part];
            }
        }
        return result;
    }
};


function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = "none";
}

async function modal(index) {


    const response = await fetch('data/detail.json');
    const json = await response.json();
    // add json value in class modal

    const modal = document.querySelector('.modal');
    modal.innerHTML = `
    <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>${json["details"][index].title}</h2>
        <p>${json["details"][index].content}</p>
    </div>
    `;
    modal.style.display = "block";

}