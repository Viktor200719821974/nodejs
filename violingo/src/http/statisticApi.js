import { $authHost } from './index';

export const postStatistic = async(howDidYouKnow, whatAreYouStuding, everyDayTarget) => {
    return await $authHost.post('/statistic', {howDidYouKnow, whatAreYouStuding, everyDayTarget});    
}