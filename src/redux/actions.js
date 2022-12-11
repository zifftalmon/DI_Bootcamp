export const INPUT = 'INPUT'
export const GET_ROBOTS = 'GET_ROBOTS'

export const input = (val) => {
    return {
        type:INPUT,
        payload:val
    }
}

// export const getRobots = (arr) => {
//     return {
//         type:GET_ROBOTS,
//         payload:arr
//     }
// }

export const getRobots = () => (dispatch, getState) => {
    console.log(getState());
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
        dispatch({
            type:GET_ROBOTS,
            payload:data
        })
    })
    .catch(e => {
        console.log(e);
    })
}