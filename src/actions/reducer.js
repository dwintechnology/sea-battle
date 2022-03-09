const defaultState = {
    player1Shoots: [],
    player2Shoots: [],
    player1: [{
            ship: "Ship2x",
            length: 2,
            positionX: 10,
            positionY: 8,
            isHorizontal: true,
            status: [false, false]
        },
        {
            ship: "Ship2x",
            length: 2,
            positionX: 2,
            positionY: 7,
            isHorizontal: true,
            status: [false, false]
        },
        {
            ship: "Ship2x",
            length: 2,
            positionX: 9,
            positionY: 2,
            isHorizontal: true,
            status: [false, false]
        },
        {
            ship: "Ship3x",
            length: 3,
            positionX: 3,
            positionY: 5,
            isHorizontal: true,
            status: [false, false, false]
        },
        {
            ship: "Ship4x",
            length: 4,
            positionX: 5,
            positionY: 10,
            isHorizontal: true,
            status: [false, false, false, false]
        },
        {
            ship: "Ship6x",
            length: 6,
            positionX: 2,
            positionY: 2,
            isHorizontal: true,
            status: [false, false, false, false, false, false]
        }
    ],
    player2: [{
        ship: "Ship2x",
        length: 2,
        positionX: 10,
        positionY: 8,
        isHorizontal: true,
        status: [false, false]
    },
    {
        ship: "Ship2x",
        length: 2,
        positionX: 3,
        positionY: 4,
        isHorizontal: true,
        status: [false, false]
    },
    {
        ship: "Ship2x",
        length: 2,
        positionX: 8,
        positionY: 3,
        isHorizontal: true,
        status: [false, false]
    },
    {
        ship: "Ship3x",
        length: 3,
        positionX: 2,
        positionY: 11,
        isHorizontal: true,
        status: [false, false, false]
    },
    {
        ship: "Ship4x",
        length: 4,
        positionX: 5,
        positionY: 7,
        isHorizontal: true,
        status: [false, false, false, false]
    },
    {
        ship: "Ship6x",
        length: 6,
        positionX: 6,
        positionY: 11,
        isHorizontal: true,
        status: [false, false, false, false, false, false]
    }
],
};


export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SHOOT": {
            let findInShots = state[action.payload.player == "player1" ? "player2Shoots" : "player1Shoots"].find(el=> (el.positionX == action.payload.positionX && el.positionY == action.payload.positionY));
            const copy = {
                ...state
            };
            if(findInShots == undefined){
                const player = action.payload.player;
                const positionX = action.payload.positionX;
                const positionY = action.payload.positionY;
    
                if (player == "player1") {
                    copy.player2Shoots.push({
                        positionX,
                        positionY,
                        isHit: false,
                    });
                } else {
                    copy.player1Shoots.push({
                        positionX,
                        positionY,
                        isHit: false,
                    });
                }
            } 
            return copy;
        }
        case "IS_HIT": {
            const copy = {
                ...state
            };
            const player = action.payload.player;
            const index = action.payload.index;
            const inHitIndex = action.payload.inHitIndex;
            copy[player][index].status[inHitIndex] = true;
            copy[`${player}Shoots`][copy[`${player}Shoots`].length - 1].isHit = true;
            return copy;
        }
        default:
            return state;
    }
};