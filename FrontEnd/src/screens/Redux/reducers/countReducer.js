const initState = {
    count : 0
}

const reducer = (state = initState, action) =>{
    switch(action.type){
        case 'ADDITION':
            return {count : state.count + 1}
        case 'SUBTRATION':
            return {count : state.count - 1}
        // case 'MULTIPLICATION':
        //     return {count : state.count * 1}
        // case 'DIVISION':
        //     return {count : state.count / 1}
        default:
            return state
    }

    // if(action.type === "INCREASE"){
    //     return state.count + 1
    // }
    // else if(action.type === "DENCREASE"){
    //     return state.count - 1
    // }
    // return state
}


export default reducer