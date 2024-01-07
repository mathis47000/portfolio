async function fetchDataAndRender() {
    const allElements = document.querySelectorAll('*');

    await Promise.all(Array.from(allElements).map(async (element) => {
        if (element.hasAttribute('m-for')) {
            const value = element.getAttribute('m-for');
            const attribute = element.innerText.match(/{{[a-z]+}}/g);
            const attributeName = attribute.map(e => e.replace(/{{|}}/g, ''));

            // Fetch the JSON file
            const response = await fetch('data.json');
            const json = await response.json();

            // Build modified HTML
            let modifiedHtml = '';
            for (let j = 0; j < json[value].length; j++) {
                let clonedElement = element.cloneNode(true);
                for (let i = 0; i < attribute.length; i++) {
                    clonedElement.innerHTML = clonedElement.innerHTML.replace(attribute[i], json[value][j][attributeName[i]]);
                }
                modifiedHtml += clonedElement.innerHTML;
            }

            // Set the modified HTML
            element.innerHTML = modifiedHtml;
            element.style.opacity = 1;
        }
    }));
}

function pageDetails() {
    const allElements = document.querySelectorAll('*');
    const pageDetails = {};

    Array.from(allElements).map((element) => {
        if (element.hasAttribute('m-page')) {
            const value = element.getAttribute('m-page');
            pageDetails[value] = element.innerHTML;
        }
    });

    return pageDetails;
}

fetchDataAndRender();
