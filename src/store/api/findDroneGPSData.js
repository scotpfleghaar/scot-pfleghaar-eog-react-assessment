import "isomorphic-fetch";

/**
 *  Gets an Array of data with data provided by a DroneTemperatureGraph
 * @returns {Promise<{error: {code: number}}|{data: any}>}
 */
const findDroneGPSData = async () => {
    const response = await fetch(
        `https://react-assessment-api.herokuapp.com/api/drone`
    );
    if (!response.ok) {
        return { error: { code: response.status } };
    }
    const json = await response.json();
    return { data: json };
};

export default findDroneGPSData;
