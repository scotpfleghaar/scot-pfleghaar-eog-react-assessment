import { transformTemperatureFromData, transformTimeStampFromData, getTimeFromMS } from './'

describe('Utilities', () => {
    let mockData;
    beforeEach(() => {
        mockData =[{
            metric: 'testMetric',
            timestamp: 1557882968713
        }];
    });
    it('transformTemperatureFromData', () => {
        expect(transformTemperatureFromData(mockData)).toEqual(["testMetric"])
    });

    it('transformTimeStampFromData', () => {
        expect(transformTimeStampFromData(mockData)).toEqual([new Date(1557882968713)])
    });

    it('getTimeFromMS', () => {
        expect(getTimeFromMS(mockData[0].timestamp)).toContain('Minutes');
        expect(getTimeFromMS(mockData[0].timestamp)).toContain('Seconds Ago');
    });
});
