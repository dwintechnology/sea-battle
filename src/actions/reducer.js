const defaultState = {
  win:false,
  currnecyPlayer: "player1",
  player1Shoots: [],
  player2Shoots: [],
  player1: [
    {
      ship: "Ship2x",
      length: 2,
      positionX: false,
      positionY: false,
      isHorizontal: true,
      status: [false, false],
    },
    {
      ship: "Ship2x",
      length: 2,
      positionX: false,
      positionY: false,
      isHorizontal: true,
      status: [false, false],
    },
    {
      ship: "Ship2x",
      length: 2,
      positionX: false,
      positionY: false,
      isHorizontal: true,
      status: [false, false],
    },
    {
      ship: "Ship3x",
      length: 3,
      positionX: false,
      positionY: false,
      isHorizontal: true,
      status: [false, false, false],
    },
    {
      ship: "Ship4x",
      length: 4,
      positionX: false,
      positionY: false,
      isHorizontal: true,
      status: [false, false, false, false],
    },
    {
      ship: "Ship6x",
      length: 6,
      positionX: false,
      positionY: false,
      isHorizontal: true,
      status: [false, false, false, false, false, false],
    },
  ],
  player2: [
    {
      ship: "Ship2x",
      length: 2,
      positionX: false,
      positionY: false,
      isHorizontal: true,
      status: [false, false],
    },
    {
      ship: "Ship2x",
      length: 2,
      positionX: false,
      positionY: false,
      isHorizontal: true,
      status: [false, false],
    },
    {
      ship: "Ship2x",
      length: 2,
      positionX: false,
      positionY: false,
      isHorizontal: true,
      status: [false, false],
    },
    {
      ship: "Ship3x",
      length: 3,
      positionX: false,
      positionY: false,
      isHorizontal: true,
      status: [false, false, false],
    },
    {
      ship: "Ship4x",
      length: 4,
      positionX: false,
      positionY: false,
      isHorizontal: true,
      status: [false, false, false, false],
    },
    {
      ship: "Ship6x",
      length: 6,
      positionX: false,
      positionY: false,
      isHorizontal: true,
      status: [false, false, false, false, false, false],
    },
  ],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SHIP_POSITION": {
      const copy = {
        ...state,
      };
      let player = action.payload.player;
      const newPositionX = action.payload.positionX;
      const newPositionY = action.payload.positionY;
      const shipIndex = action.payload.shipIndex;

      copy[player][shipIndex].positionX = newPositionX;
      copy[player][shipIndex].positionY = newPositionY;

      return copy;
    }

    case "SHOOT": {
      //AVELACNEL KRAKAC@

      let findInShots = state[
        action.payload.player == "player1" ? "player2Shoots" : "player1Shoots"
      ].find(
        (el) =>
          el.positionX == action.payload.positionX &&
          el.positionY == action.payload.positionY
      );
      const copy = {
        ...state,
      };
      let arrFullStatesForShips = [];
      if (findInShots == undefined) {
        let player = action.payload.player;
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

        //STUGEL KPACA TE CHE.

        let lastShoot =
          copy[player == "player1" ? "player2Shoots" : "player1Shoots"][
            copy[player == "player1" ? "player2Shoots" : "player1Shoots"]
              .length - 1
          ];
        copy[player == "player1" ? "player2" : "player1"].map((el, index) => {
          if (
            copy[player == "player1" ? "player2Shoots" : "player1Shoots"]
              .length != 0 &&
            el.positionX - 1 <= lastShoot.positionX &&
            el.positionY - 1 == lastShoot.positionY &&
            el.isHorizontal == true &&
            el.positionX - 1 + el.length - 1 >= lastShoot.positionX
          ) {
            if (
              copy[player == "player1" ? "player2" : "player1"][index].status[
                el.length -
                  1 -
                  (el.positionX - 2 + el.length - lastShoot.positionX)
              ] == false
            ) {
              const inHitIndex =
                el.length -
                1 -
                (el.positionX - 2 + el.length - lastShoot.positionX);
              copy[player == "player1" ? "player2" : "player1"][index].status[
                inHitIndex
              ] = true;
              copy[player == "player1" ? "player2Shoots" : "player1Shoots"][
                copy[player == "player1" ? "player2Shoots" : "player1Shoots"]
                  .length - 1
              ].isHit = true;
            }
          } else if (
            copy[player == "player1" ? "player2Shoots" : "player1Shoots"]
              .length != 0 &&
            el.positionY <= 2 &&
            el.positionY - 1 <= lastShoot.positionY &&
            el.positionX - 1 == lastShoot.positionX &&
            el.isHorizontal == false &&
            el.positionY - 1 + el.length - 1 >= lastShoot.positionY
          ) {
            if (
              copy[player == "player1" ? "player2" : "player1"][index].status[
                el.length -
                  1 -
                  (el.positionY - 1 + el.length - 1 - lastShoot.positionY)
              ] == false
            ) {
              const inHitIndex =
                el.length -
                1 -
                (el.positionY - 1 + el.length - 1 - lastShoot.positionY);
              copy[player == "player1" ? "player2" : "player1"][index].status[
                inHitIndex
              ] = true;
              copy[player == "player1" ? "player2Shoots" : "player1Shoots"][
                copy[player == "player1" ? "player2Shoots" : "player1Shoots"]
                  .length - 1
              ].isHit = true;
            }
          } else if (
            copy[player == "player1" ? "player2Shoots" : "player1Shoots"]
              .length != 0 &&
            el.positionY - 1 >= lastShoot.positionY &&
            el.positionX - 1 == lastShoot.positionX &&
            el.isHorizontal == false &&
            el.positionY - 1 - el.length - 1 <= lastShoot.positionY
          ) {
            if (
              copy[player == "player1" ? "player2" : "player1"][index].status[
                el.length - 1 - (el.positionY - 1 - lastShoot.positionY)
              ] == false
            ) {
              const inHitIndex =
                el.length - 1 - (el.positionY - 1 - lastShoot.positionY);
              copy[player == "player1" ? "player2" : "player1"][index].status[
                inHitIndex
              ] = true;
              copy[player == "player1" ? "player2Shoots" : "player1Shoots"][
                copy[player == "player1" ? "player2Shoots" : "player1Shoots"]
                  .length - 1
              ].isHit = true;
            }
          }

          el.status.map((bool) => {
            arrFullStatesForShips.push(bool);
          });
        });
        // WINNN
        if (!arrFullStatesForShips.includes(false)) {
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          const copy = {
            ...state,
          };
          copy.win = player;
          return copy;
        }
        // player poxel
        if (lastShoot.isHit === false) {
          if (copy.currnecyPlayer == "player1") {
            copy.currnecyPlayer = "plaeyr2";
          } else {
            copy.currnecyPlayer = "player1";
          }
        }
      }
      return copy;
    }
    case "POSITION": {
      const player = action.payload.player;
      const indexShip = action.payload.indexShip;
      const copy = {
        ...state,
      };
      if (copy[player][indexShip].isHorizontal == false) {
        copy[player][indexShip].isHorizontal = true;
      } else {
        copy[player][indexShip].isHorizontal = false;
      }
      return copy;
    }
    default:
      return state;
  }
};
