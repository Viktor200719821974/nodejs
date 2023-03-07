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

export interface ISection extends Model
    <InferAttributes<ISection>, InferCreationAttributes<ISection>> {
        id: number;
        section: number;
        background: string;
        title: string;
        image1: string;
        alt1: string;
        image2: string;
        alt2: string;
}

export interface IPart1 extends Model
    <InferAttributes<IPart1>, InferCreationAttributes<IPart1>> {
        id: number;
        src: string;
        alt: string;
        width: string;
        sectionId: number;
}

export interface IPart2 extends Model
    <InferAttributes<IPart2>, InferCreationAttributes<IPart2>> {
        id: number;
        src: string;
        alt: string;
        width: string;
        sectionId: number;
}

export interface IPart3 extends Model
    <InferAttributes<IPart3>, InferCreationAttributes<IPart3>> {
        id: number;
        src: string;
        alt: string;
        width: string;
        sectionId: number;
}

export interface IPart4 extends Model
    <InferAttributes<IPart4>, InferCreationAttributes<IPart4>> {
        id: number;
        src: string;
        alt: string;
        width: string;
        sectionId: number;
}
export interface ILesson extends Model
    <InferAttributes<ILesson>, InferCreationAttributes<ILesson>> {
        id: number;
        lessonNumber: number;
}

export interface IExercise extends Model
    <InferAttributes<IExercise>, InferCreationAttributes<IExercise>> {
        id: number;
        // exercise: number;
        titleTask: string;
        answer: string;
        src: string;
        alt: string;
        chooseImage: boolean;
        choosePositiveAnswer: boolean;
        chooseAnswer: boolean;
        chooseMissingWord: boolean;
        chooseTranslateWords: boolean;
        lessonId: number;
}
export interface IQuestion extends Model
    <InferAttributes<IQuestion>, InferCreationAttributes<IQuestion>> {
        id: number;
        word: string;
        exerciseId: number;
}

export interface ITask extends Model
    <InferAttributes<ITask>, InferCreationAttributes<ITask>> {
        id: number;
        src: string;
        alt: string;
        name: string;
        answer: string;
        exerciseId: number;
}

export interface ILookLessonAnswer extends Model
    <InferAttributes<ILookLessonAnswer>, InferCreationAttributes<ILookLessonAnswer>> {
        id: number;
        titleTask: string;
        answerTrue: [];
        answerUser: [];
        wrong: boolean;
        question: [];
        chooseImage: boolean;
        choosePositiveAnswer: boolean;
        chooseAnswer: boolean;
        chooseMissingWord: boolean;
        chooseTranslateWords: boolean;
        exerciseId: number;
}
