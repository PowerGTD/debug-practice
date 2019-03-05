window.onload = () => {
    const things = [
        {
            inner: {
                capitals: ["Paris", "Rome", "Madrid"],
                winner: {
                    vl: 's'
                }
            }
        },
        {
            inner: {
                winner: {
                    vl: 'u'
                }
            },
            time: 1200
        },
        {
            inner: {
                winner: {
                    vl: 'c',
                    hey: ["salutations"]
                }
            }
        },
        {
            friday: "regular day?",
            inner: {
                winner: {
                    vl: 'c'
                }
            }
        },
        {
            inner: {
                winner: {
                    vl: 'e'
                },
                hungry: true
            }
        },
        {
            inner: {
                winner: {
                    vl: 's'
                }
            },
            days: [1,2,3,4,5]
        },
        {
            over: false,
            inner: {
                winner: {
                    vl: 's'
                },
                really: true
            }
        }
    ];
    var toRerun = "Gotcha!";
    let toReturn = [];
    
    for(var i=0; i<things.length; i++){
        toReturn += things[i].inner.winner.vl;  
    }
    
    document.querySelector("#title").innerHTML = toReturn;
    
};