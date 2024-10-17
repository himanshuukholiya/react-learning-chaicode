function customRender(reactElement, root) {
    /* 
    // v1 => setAttribute is repeating itself => better way using loops

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    root.appendChild(domElement)
     */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;

    for (const prop in reactElement.props) {
        if (prop === 'childern') continue; // saves from error
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    root.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com/',
        target: '_blank'
    },
    childern: 'click me to visit google'
}

const root = document.querySelector("#root");

customRender(reactElement, root)