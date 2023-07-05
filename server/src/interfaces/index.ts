import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { Request } from 'express';

export interface IUser extends Model
    <InferAttributes<IUser>, InferCreationAttributes<IUser>> {
        id: number;
        email: string;
        password: string;
        name: string;
        age: number;
        activateToken?: string;
        is_active: boolean;
        is_staff: boolean;
        is_superuser: boolean;
        statistic: boolean;
        module_id: number;
        lesson_id: number;
}
export interface IToken extends Model
    <InferAttributes<IToken>, InferCreationAttributes<IToken>> {
        refreshToken: string;
        accessToken: string;
        userId: number;
        id: number;
}
export interface IStatistic extends Model
    <InferAttributes<IStatistic>, InferCreationAttributes<IStatistic>> {
        id: number;
        howDidYouKnow: string;
        whatAreYouStuding: string;
        everyDayTarget: string;
        userId: number;
}
export interface IRequestExtended extends Request{
    user?: IUser;
}

export interface ITokenActivate {
    activateToken: string;
}

export interface IUserPayload {
    userId: number;
    userEmail: string;
}

export interface ITokenPair {
    accessToken: string;
    refreshToken: string;
    userId: number;
}

export interface ITokenActivateAndName {
    activateToken: string;
    userName?: string;
}

export interface IModule extends Model
    <InferAttributes<IModule>, InferCreationAttributes<IModule>> {
        id: number;
        moduleNumber: number;
        image_module: string;
        themeId: number;
}

// export interface ISection extends Model
//     <InferAttributes<ISection>, InferCreationAttributes<ISection>> {
//         id: number;
//         section: number;
//         background: string;
//         title: string;
//         image1: string;
//         alt1: string;
//         image2: string;
//         alt2: string;
// }

// export interface IPart1 extends Model
//     <InferAttributes<IPart1>, InferCreationAttributes<IPart1>> {
//         id: number;
//         src: string;
//         alt: string;
//         width: string;
//         sectionId: number;
// }

// export interface IPart2 extends Model
//     <InferAttributes<IPart2>, InferCreationAttributes<IPart2>> {
//         id: number;
//         src: string;
//         alt: string;
//         width: string;
//         sectionId: number;
// }

// export interface IPart3 extends Model
//     <InferAttributes<IPart3>, InferCreationAttributes<IPart3>> {
//         id: number;
//         src: string;
//         alt: string;
//         width: string;
//         sectionId: number;
// }

// export interface IPart4 extends Model
//     <InferAttributes<IPart4>, InferCreationAttributes<IPart4>> {
//         id: number;
//         src: string;
//         alt: string;
//         width: string;
//         sectionId: number;
// }
export interface ILesson extends Model
    <InferAttributes<ILesson>, InferCreationAttributes<ILesson>> {
        id: number;
        lessonNumber: number;
        themeId: number;
        moduleId: number;
}

export interface IExercise extends Model
    <InferAttributes<IExercise>, InferCreationAttributes<IExercise>> {
        id: number;
        titleExercise: string;
        question: string;
        answer: string;
        tasks: number[];
        chooseImage: boolean;
        choosePositiveAnswer: boolean;
        chooseAnswer: boolean;
        chooseMissingWord: boolean;
        chooseTranslateWords: boolean;
        lessonId: number;
}

export interface ITheme extends Model
    <InferAttributes<ITheme>, InferCreationAttributes<ITheme>> {
        id: number;
        title: string;
        background_theme: string;
        image_left: string;
        image_right: string;
}
export interface ITask extends Model
    <InferAttributes<ITask>, InferCreationAttributes<ITask>> {
        id: number;
        word: string;
        question: string;
        answer: string;
        translate: string;
        optionsAnswer: string[];
        chooseImage: boolean;
        choosePositiveAnswer: boolean;
        chooseAnswer: boolean;
        chooseMissingWord: boolean;
        chooseTranslateWords: boolean;
        themeId: number;
        translateWordsTasks: number[];
        translateWordsAnswers: string[];
}
export interface IImageTask extends Model
    <InferAttributes<IImageTask>, InferCreationAttributes<IImageTask>> {
        id: number;
        src: string;
        alt: string;
        taskId: number;
}
export interface IImageExercise extends Model
    <InferAttributes<IImageExercise>, InferCreationAttributes<IImageExercise>> {
        id: number;
        src: string;
        alt: string;
        exerciseId: number;
}
export interface IPaginationResponse<T> {
    page: number,
    perPage: number,
    count: number,
    rows: T[],
}
export interface IAgendaUser extends Model
    <InferAttributes<IAgendaUser>, InferCreationAttributes<IAgendaUser>> {
        id: number;
        daysOfWeekArray: string[];
        pointsOfDayArray: number[];
        userId: number;
    }
// export interface ILookLessonAnswer extends Model
//     <InferAttributes<ILookLessonAnswer>, InferCreationAttributes<ILookLessonAnswer>> {
//         id: number;
//         titleTask: string;
//         answerTrue: [];
//         answerUser: [];
//         wrong: boolean;
//         question: [];
//         chooseImage: boolean;
//         choosePositiveAnswer: boolean;
//         chooseAnswer: boolean;
//         chooseMissingWord: boolean;
//         chooseTranslateWords: boolean;
//         exerciseId: number;
// }
export interface IChooseTranslateWordsArrays {
    arrayTasks: ITask[] | undefined;
    arrayAnswers: string[] | undefined;
}