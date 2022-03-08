const defaultState = {
    player1Shoots: [],
    player2Shoots: [],
    player1: [{
            ship: "Ship2x",
            length: 2,
            positionX: 10,
            positionY: 8,
            isHorizontal: true,
            status: [true, false]
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
            status: [true, true, true, false, false, false]
        }
    ],
    player2: [{
            ship: "Ship2x",
            length: 2,
            positionX: 10,
            positionY: 8,
            isHorizontal: true,
            status: [true, false]
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
        // {
        //     ship: "Ship3x",
        //     length: 3,
        //     positionX: 3,
        //     positionY: 5,
        //     isHorizontal: true,
        //     status: [false, false, false]
        // },
        // {
        //     ship: "Ship4x",
        //     length: 4,
        //     positionX: 5,
        //     positionY: 10,
        //     isHorizontal: true,
        //     status: [false, false, false, false]
        // },
        {
            ship: "Ship6x",
            length: 6,
            positionX: 2,
            positionY: 2,
            isHorizontal: true,
            status: [true, true, true, false, false, false]
        }
    ]
};


export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SHOOT": {
            const copy = {
                ...state
            };
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
            console.log("copy ===", copy);
            console.log("player ==== ", player);
            console.log("positionX ===", positionX);
            console.log("positionY ===", positionY);
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

            console.log("player", player);
            console.log("index" , index);
            console.log("inHitIndex", inHitIndex);
            console.log("copy", copy[player][index].status[inHitIndex]);

            return copy;
        }
        default:
            return state;
    }
};