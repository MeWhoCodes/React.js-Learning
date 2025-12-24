function customRender(reactElement,mainContainer){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    mainContainer.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const p in reactElement.props){
        console.log(p)
        domElement.setAttribute(p,reactElement.props[p])
    }
    mainContainer.appendChild(domElement)
}


const reactElement = {
    type:'a',
    props: {
        href: "https://google.com",
        target: '_blank'

    },
    children: 'click me to visit to google'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement,mainContainer)