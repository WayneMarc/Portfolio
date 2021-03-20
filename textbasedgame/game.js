const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state ={}

function startGame() {
    state = {}
    showTextNode(1)


}



function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', ()=> selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })

}
function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}
function selectOption(option) {
    const nextTextNodeid = option.nextText
    showTextNode(nextTextNodeid)
}

const textNodes = 
[
    {
        id: 1,
        text:'You Wake Up In A Strange Place, you hear footsteps approaching',
        options: [
            {
            text:'Jump out the window',
            nextText: 2
        },
        {
            text: 'Pretend to be asleep ',
            nextText: 3
        },
        {
            text: 'Run through the Door',
            nextText: 4
        
        }, 
        {
            text: 'Shout out "Hello?"',
            nextText: 3
        },
           

    
    ]

    },
    {   id: 2,
        text: 'You fall 50 feet to your death',},
    
    {   id: 3,
        text: '  quick choose a weapon',
        options: [
            {
            text:'sword',
            //requiredState: (currentState) =>currentState.Sword,
            setState:{ sword: true},
            nextText: 5
        },
        {   text:'AX',
            setState:{ ax: true},
            nextText: 5
        },
            {text:'Crossbow',
            setState:{crossbow: true},
            nextText:5},

            {text:'no weapon',
            nextText:5},

        ]
    },
    
    {
        id: 4,
                text:'You see a mysterious figure roaming the corridors',
                options: [
                    {
                    text:'Follow him at a safe distance',
                    nextText: 6
                },
                {
                    text: 'go the opposite direction',
                    nextText: 7}
                ] },
    {
        id: 5,
                text:'an army is attacking the castle...... ',
                options: [
                {
                    text:'go to the bridge',
                    nextText: 8
                            },
                {
                    text: 'answer ',
                    nextText: 9
                },
                {   text: 'answer',
                    nextText:10},

                    {   text: 'Create a diversion and escape through the corridors',
                    nextText:4},

                
                            ] },        
            {id: 6,
                 text: 'You follow him into a poorly lit library........ ',
                 options:[

                    { text:'Follow person 1',
                    nextText:110},
                    { text: 'Follow person 2 ',
                    nextText:100},

                ]
            
            
            }   
]        
    
    
startGame()