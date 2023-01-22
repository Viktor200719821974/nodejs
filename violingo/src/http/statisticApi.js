import { $authHost } from './index';

export const postStatistic = async(howDidYouKnow, whatAreYouStuding, everyDayTarget) => {
    return await $authHost.post('/statistic/', { howDidYouKnow, whatAreYouStuding, everyDayTarget });    
}
export const getStatistic = async () => {
    return await $authHost.get('/statistic/');
}
export const updateEveryDayTarget = async (everyDayTarget) => {
    return await $authHost.patch('/statistic/', { everyDayTarget });
}