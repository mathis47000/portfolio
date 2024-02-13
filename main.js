// onload function show content
window.onload = () => {
    // query all elements with m-for attribute
    const allElements = document.querySelectorAll('[m-for]');
    // fetch data from data.json
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            Promise.all(Array.from(allElements).map(element => {
                // get the value of m-for attribute
                const value = element.getAttribute('m-for');

                // TODO : chain the closest function to get the parent element with m-for attribute
                console.log(element.closest('[m-for]'));

                // get the attribute
                const attribute = element.innerText.match(/{{([^}]*)}}/g);
                const attributeName = attribute.map(a => a.replace(/{{|}}/g, ''));
                // build modified html
                let modifiedHtml = '';
                for (let j = 0; j < data[value].length; j++) {
                    let clonedElement = element.cloneNode(true);
                    for (let i = 0; i < attribute.length; i++) {
                        if (attribute[i].includes('.')) {
                            let attributeChain = data[value][j];
                            attributeName[i].split('.').forEach(element => {
                                if (element.includes('[')) {
                                    let index = element.match(/\d+/);
                                    element = element.replace(/\[\d+\]/, '');
                                    attributeChain = attributeChain[element][index];
                                } else {
                                    attributeChain = attributeChain[element];
                                }
                            });
                            clonedElement.innerHTML = clonedElement.innerHTML.replaceAll(attribute[i], attributeChain);
                        } else {
                            if (attribute[i].includes('[')) {
                                let index = attributeName[i].match(/\d+/);
                                attributeName[i] = attributeName[i].replace(/\[\d+\]/, '');
                                clonedElement.innerHTML = clonedElement.innerHTML.replaceAll(attribute[i], data[value][j][attributeName[i]][index]);
                            } else {
                                clonedElement.innerHTML = clonedElement.innerHTML.replaceAll(attribute[i], data[value][j][attributeName[i]]);
                            }
                        }
                    }
                    modifiedHtml += clonedElement.innerHTML;
                }
                // set the modified html
                element.innerHTML = modifiedHtml;
            })).then(() => {
                // remove all m-for attributes
                Array.from(allElements).map(e => e.removeAttribute('m-for'));
                document.querySelector('body').style.opacity = 1;
            });

        }).catch(err => console.error(err));

}

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