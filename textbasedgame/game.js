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
            text:'Yes, Ill Have the sword',
            //requiredState: (currentState) =>currentState.Sword,
            setState:{ sword: true},
            nextText: 5
        },
        {   text:'This Ax looks familiar I will have this',
            setState:{ ax: true},
            nextText: 5
        },
            {text:'a crossbow? I think i know how to use this',
            setState:{crossbow: true},
            nextText:5},

            {text:'I am a pacifist and Violence is never the answer',
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
                    text: 'question 1',
                    nextText: 9
                },
                {   text: 'question 2',
                    nextText:10},

                    {   text: 'Create a diversion and escape through the corridors',
                    nextText:4},

                
                            ] },        
            {id: 6,
                 text: 'You follow him into a poorly lit library where you overhear him have a conversation with a rouge looking character, Rouge: Thekin, is that you? Do you have it with you? Thekin: The trouble I had to go through just for this stupid dagger ROUGE: That is no stupid Dagger it is the answer to Bilstonias prayers, with this "stupid Dagger" the prophecy will be fullfilled. you wouldnt understand....... and what of its previous owner? Thekin: poisoned if he ever comes around he wont even know his name. there is a large crash and it startles the men and they part ways after sharing an unusual handshake',
                 options:[

                    { text:'Follow The Rouge',
                    nextText:110},
                    { text: 'Follow  Thekin ',
                    nextText:100},

                ]
            
            
            }   
]        
    
    
startGame()