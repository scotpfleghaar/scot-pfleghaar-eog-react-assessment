export const transformTemperatureFromData = (data) => {
    return  data.map(entry => entry['metric'])
};

export const transformTimeStampFromData = (data) => {
    return data.map(entry => {
        return new Date(entry['timestamp']);
    });
};

export const getTimeFromMS = (ms) => {
    const differenceInMS = new Date().getTime() - new Date(ms).getTime();
    const minutes = Math.floor(differenceInMS / 60000);
    const seconds = ((differenceInMS % 60000) / 1000).toFixed(0);
    return `${minutes} Minutes, ${seconds} Seconds Ago`
};
