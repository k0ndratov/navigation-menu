class FeedbackPopover extends HTMLElement {
    constructor() {
        super();
       
        // Create a shadow root
        this.attachShadow({ mode: 'open' });
        let jsondata = {};
        fetch('https://raw.githubusercontent.com/commondataio/dateno-stats/main/data/current/stats_totals.json')
        .then(response => response.json())
        .then(data => {
            jsondata = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .popover-content{
                position: absolute;
                right: 10px;
                bottom: 10px;
                    button{
                        background-color: #5C76FF;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                }
            </style>
            <div class="popover-content">
                <button type="button" popovertarget="feedback" id="but">Feedback</button>
                <div id="feedback" class="menu" popover>
                </div>
            </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.shadowRoot.querySelector('#but').addEventListener('click',  (event) => {
            if (event.target.getAttribute('popovertarget') === 'feedback') {
                this.shadowRoot.querySelector('#feedback').innerHTML  = ` <ul> 
                <li> sources: ${jsondata.sources} </li>
                <li> datasets: ${jsondata.datasets}</li>
                </ul>`;
            }
        });
    }

    connectedCallback() {
        // Add any initialization logic here
    }

    disconnectedCallback() {
        // Clean up any resources here
    }
}

// Define the custom element
customElements.define('feedback-popover', FeedbackPopover);