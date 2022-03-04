const defaultState = [
    {
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
];


export const reducer = (state = defaultState, action) => {
    const copy = [...state];
    switch (action.type) {
        case "ADD":
            copy.push(action.payload);
            return copy;
        default:
            return state;
    }
};