export default (function(){
    
    Node.prototype.somefunction = function(){
        return 'it worked?';
    }

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
        /* GENERAL RESET */
        * {
            font-family: Verdana,Geneva,sans-serif;
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
            border: 0px;
        }

        html, body{
            width:100%;
            height:100%;
        }

        /* HOST ACCESS */

        :host{
            display:block;
        }

        /* CUSTOM STYLING */
    </style>
    <div id="wrapper"></div>`;

    class BaseElement extends HTMLElement{
        constructor(){
            super();

            this.attachShadow({mode:'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        connectedCallback(){
            this.shadowRoot.getElementById('wrapper').innerHTML = 'hello world';
            console.log(this.shadowRoot.getElementById('wrapper').somefunction())
        }
        disconnectedCallback(){}
        attributeChangedCallback(name,oldValue,newValue){}
        static get observedAttributes(){
            return [];
        }

    }

    customElements.define('base-element',BaseElement);

    return BaseElement;
})();