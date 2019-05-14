export const transformTemperatureFromData = (data) => {
    return  data.map(entry => entry['metric'])
};

export const transformTimeStampFromData = (data) => {
    return data.map(entry => {
        const timeStamp = new Date(entry['timestamp']);
        return timeStamp;
    });
};
