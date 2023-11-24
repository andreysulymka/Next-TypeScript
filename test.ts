let c: 'test' = 'test'

type actionType = 'up' | 'down'

function performAction(action: actionType): 1| -1 {
    switch (action) {
        case 'up': return 1;
        case 'down': return -1
    }
}