// code your solution here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (action = "go to the office") {
    return `This Monday, I will ${action}.`
}

function wrapAdjective (val = "*") {
    const inF = function (value = "special") {
        return `You are ${val}${value}${val}!`
    }
    return inF;
}