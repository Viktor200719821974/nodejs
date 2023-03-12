import { model } from '../models';

class TasksService {
    async createTask(
        answer: string, 
        exerciseId: number, 
        cyrillicPattern: RegExp, 
        oneWord: string,
        ) {
        const arr = answer.split(' ');
        for (let i = 0; i < arr.length; i++) {
            const name = arr[i];
            //@ts-ignore
            await model.Task.create({ name, exerciseId });
        }
        const taskArray = await model.Task.findAll();
        // const filter = taskArray.filter(c => arr.forEach(element => c.name !== element));
        // const random = Math.floor(Math.random() * filter.length);
        // console.log(filter);
        // console.log(random, filter[random]);
        let filterArray = [];
        for (let i = 0; i < taskArray.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (taskArray.map(c => c.name)[i] != arr[j]) {
                    if (cyrillicPattern.test(taskArray.map(c => c.name)[i]) && cyrillicPattern.test(oneWord)) {
                        filterArray.push(taskArray.map(c => c.name)[i]);
                    } 
                }
                
            }
        }
        console.log(filterArray);
        let arrayWordsDefault = [];
        if (cyrillicPattern.test(oneWord)) {
            arrayWordsDefault = ['результат', 'він', 'яблуко'];
        } else {
            arrayWordsDefault = ['result', 'he', 'apple'];
        }
        if (filterArray.length === 0) {
            for (let i =0; i < arrayWordsDefault.length; i++) {
                const name = arrayWordsDefault[i];
                //@ts-ignore
                await model.Task.create({ name, exerciseId });
            }  
        } else {
            // let newArray = [];
            // if (exerciseId % 2 === 0) {
            //     newArray = filter.filter(c => c.id % 2 === 0);
            // } else {
            //     newArray = filter.filter(c => c.id % 2 !== 0);
            // }
            // console.log(newArray);
        }
    }
}

export const tasksService = new TasksService();