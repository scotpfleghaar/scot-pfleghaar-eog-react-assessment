/**
 *  Gets the temp from data returned by the drone
 * @param data
 * @returns {*}
 */
export const transformTemperatureFromData = (data) => {
    return  data.map(entry => entry['metric'])
};

/**
 *  Gets the date from data returned by the drone
 * @param data
 * @returns {*}
 */
export const transformTimeStampFromData = (data) => {
    return data.map(entry => {
        return new Date(entry['timestamp']);
    });
};

/**
 * Gets the time formatted from milliseconds returned by the drone data
 * @param ms
 * @returns {string}
 */
export const getTimeFromMS = (ms) => {
    const differenceInMS = new Date().getTime() - new Date(ms).getTime();
    let minutes = Number(Math.floor(differenceInMS / 60000));
    let  seconds = Number(((differenceInMS % 60000) / 1000).toFixed(0));
    seconds === 60 ? seconds = 0 : minutes += 1;
    return `${minutes} Minutes, ${seconds} Seconds Ago`
};
