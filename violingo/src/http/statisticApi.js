import { $authHost, $host } from './index';

export const postStatistic = async(howDidYouKnow, whatAreYouStuding, everyDayTarget, email) => {
    console.log(email);
    return await $host.post('/statistic/', { 
        howDidYouKnow, whatAreYouStuding, everyDayTarget, email,
    });    
}
export const getStatistic = async () => {
    return await $authHost.get('/statistic/');
}
export const updateEveryDayTarget = async (everyDayTarget) => {
    return await $authHost.patch('/statistic/', { everyDayTarget });
}