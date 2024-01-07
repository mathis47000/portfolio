async function mFor() {
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
                    clonedElement.innerHTML = clonedElement.innerHTML.replaceAll(attribute[i], json[value][j][attributeName[i]]);
                }
                modifiedHtml += clonedElement.innerHTML;
            }

            // Set the modified HTML
            element.innerHTML = modifiedHtml;
            element.style.opacity = 1;
        }
    }));
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = "none";
}

async function modal(index) {


    const response = await fetch('detail.json');
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

mFor();
