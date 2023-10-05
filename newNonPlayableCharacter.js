
function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}


function newNonPlayableCharacter(x, y) {
    let element = new Image('assets/red-character/static.gif');
    element.style.zIndex = 1;

    let direction = null;

    function moveCharacter() {
        
    }

    setInterval(moveCharacter, 1);

    async function walkEast(time) {
        direction = 'east';
        element.src = './assets/red-character/east.gif';

       
        await sleep(time);

        
        stop();
    }

    async function walkNorth(time) {
        
    }

    async function walkSouth(time) {
        
    }

    async function walkWest(time) {
       
    }

    function stop() {
        direction = null;
        element.src = './assets/red-character/static.gif';
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    };
}


async function walkAroundScreen(npc) {
    
    await npc.walkEast(2000);
    await npc.walkNorth(1400);
    await npc.walkEast(1200);
    await npc.walkSouth(300);
    await npc.walkEast(1500);
    await npc.walkSouth(1500);
    await npc.walkWest(2700);
    await npc.walkNorth(400);
    await npc.walkWest(1500);
    await npc.walkNorth(300);
    await npc.walkWest(1200);
    await npc.walkSouth(1400);
}


const npc = newNonPlayableCharacter(0, 0);


walkAroundScreen(npc);
