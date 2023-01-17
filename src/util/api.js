export const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitAPI = function(formData) {
    return true;
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case "DATE_CHANGE":
            const data = fetchAPI(new Date(action.payload))
            return data.map((item) => ({value: item, label: item}))

        case "ADD_BOOKING":
            return state.filter((time) => time.value !== action.payload)

        default:
            return state
    }
}
