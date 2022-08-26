import { useState } from "react"

export function LeftMenu({setUseHint,setState}:any){
    const[possibleHints,setPossibleHints]=useState(5)
    //@ts-ignore
    function hint(possibleHints){
        if(possibleHints>0) {
            setPossibleHints(possibleHints-1)
            setUseHint(true)}
    }

    function resetGame(){
        setPossibleHints(5)
        let newTable=[
            [
              {
                "figure": "♜",
                "name": "rook",
                "color": "black",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♞",
                "name": "knight",
                "color": "black",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♝",
                "name": "bishop",
                "color": "black",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♛",
                "name": "queen",
                "color": "black",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♚",
                "name": "king",
                "color": "black",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♝",
                "name": "bishop",
                "color": "black",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♞",
                "name": "knight",
                "color": "black",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♜",
                "name": "rook",
                "color": "black",
                "canMove": false,
                "enemy": false,
                "selected": false
              }
            ],
            [
              {
                "figure": "♟",
                "name": "pawn",
                "color": "black",
                "firstTimeMove": false,
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♟",
                "selected": false,
                "color": "black",
                "name": "pawn",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "♟",
                "name": "pawn",
                "color": "black",
                "firstTimeMove": false,
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♟",
                "selected": false,
                "color": "black",
                "name": "pawn",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "♟",
                "name": "pawn",
                "color": "black",
                "firstTimeMove": false,
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♟",
                "name": "pawn",
                "color": "black",
                "firstTimeMove": false,
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♟",
                "name": "pawn",
                "color": "black",
                "firstTimeMove": false,
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♟",
                "name": "pawn",
                "color": "black",
                "firstTimeMove": false,
                "canMove": false,
                "enemy": false,
                "selected": false
              }
            ],
            [
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "selected": false,
                "color": "",
                "name": "",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              }
            ],
            [
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "selected": false,
                "color": "",
                "name": "",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              }
            ],
            [
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              }
            ],
            [
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "selected": false,
                "color": "",
                "name": "",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "selected": false,
                "color": "",
                "name": "",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "",
                "name": "",
                "color": "",
                "canMove": false,
                "enemy": false,
                "selected": false
              }
            ],
            [
              {
                "figure": "♙",
                "selected": false,
                "color": "white",
                "name": "pawn",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "♙",
                "name": "pawn",
                "color": "white",
                "firstTimeMove": true,
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♙",
                "selected": false,
                "color": "white",
                "name": "pawn",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "♙",
                "selected": false,
                "color": "white",
                "name": "pawn",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "♙",
                "selected": false,
                "color": "white",
                "name": "pawn",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "♙",
                "selected": false,
                "color": "white",
                "name": "pawn",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "♙",
                "selected": false,
                "color": "white",
                "name": "pawn",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "♙",
                "selected": false,
                "color": "white",
                "name": "pawn",
                "canMove": false,
                "enemy": false
              }
            ],
            [
              {
                "figure": "♖",
                "name": "rook",
                "color": "white",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♘",
                "name": "knight",
                "color": "white",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♗",
                "name": "bishop",
                "color": "white",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♕",
                "selected": false,
                "color": "white",
                "name": "queen",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "♔",
                "name": "king",
                "color": "white",
                "canMove": false,
                "enemy": false,
                "selected": false
              },
              {
                "figure": "♗",
                "selected": false,
                "color": "white",
                "name": "bishop",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "♘",
                "selected": false,
                "color": "white",
                "name": "knight",
                "canMove": false,
                "enemy": false
              },
              {
                "figure": "♖",
                "selected": false,
                "color": "white",
                "name": "rook",
                "canMove": false,
                "enemy": false
              }
            ]
          ]
        fetch("http://localhost:3005/state/", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              board: newTable,
              turn:  'white'
            }),
          }).then((response) => response.json())
         .then((newState) => setState(newState))

    }
    return(
        <div className='leftmenu'>
         <button className='hint' onClick={()=>{
           
            hint(possibleHints)}}> Hint💡 <span className="possibleHints">{possibleHints}</span></button>
         <button className='reset' onClick={resetGame}>Reset Game</button>
        </div>
    )
}