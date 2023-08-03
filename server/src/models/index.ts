import { DataTypes } from 'sequelize';
import { sequelize } from '../db';
import {
    IToken, IUser, IStatistic, IAgendaUser, IExercise, ITask, ILookLessonAnswer,
    ILesson, ITheme, IImageTask, IImageExercise, IModule,
} from '../interfaces';

const User = sequelize.define<IUser>('user', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true,
    },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: true, defaultValue: 'Anonymus' },
    age: { type: DataTypes.INTEGER },
    activateToken: { type: DataTypes.STRING, allowNull: true },
    is_active: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    is_staff: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    is_superuser: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    statistic: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    module_id: { type: DataTypes.INTEGER, allowNull: false },
    lesson_id: { type: DataTypes.INTEGER, allowNull: false },
    theme_id: { type: DataTypes.INTEGER, allowNull: false },
    closed_modules: {
        type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false, defaultValue: [],
    },
});
const Token = sequelize.define<IToken>('token', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    accessToken: { type: DataTypes.STRING, allowNull: false },
    refreshToken: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
});
const Statistic = sequelize.define<IStatistic>('statistic', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    howDidYouKnow: {
        type: DataTypes.STRING, allowNull: false,
    },
    whatAreYouStuding: {
        type: DataTypes.STRING, allowNull: false,
    },
    everyDayTarget: {
        type: DataTypes.STRING, allowNull: false,
    },
    userId: { type: DataTypes.INTEGER, allowNull: false },
}, { createdAt: false, updatedAt: false });
const Theme = sequelize.define<ITheme>('theme', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    title: {
        type: DataTypes.STRING, allowNull: false,
    },
    background_theme: {
        type: DataTypes.STRING, allowNull: false, defaultValue: '#58cc02',
    },
    image_left: {
        type: DataTypes.STRING,  
    },
    image_right: {
        type: DataTypes.STRING,  
    },
});
const Module = sequelize.define<IModule>('module', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    moduleNumber: {
        type: DataTypes.INTEGER, allowNull: false,
    },
    image_module: {
        type: DataTypes.STRING, allowNull: false,
    },
    themeId: {
        type: DataTypes.INTEGER, allowNull: false,
    },
});
const Lesson = sequelize.define<ILesson>('lesson', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    lessonNumber: {
        type: DataTypes.INTEGER, allowNull: false,
    },
    themeId: {
        type: DataTypes.INTEGER, allowNull: false,
    },
    moduleId: {
        type: DataTypes.INTEGER, allowNull: false,
    },
});
const Exercise = sequelize.define<IExercise>('exercise', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    // exercise: {
    //     type: DataTypes.INTEGER, allowNull: false,
    // },
    titleExercise: {
        type: DataTypes.STRING, allowNull: false,
    },
    question: {
        type: DataTypes.STRING, allowNull: true,
    },
    answer: {
        type: DataTypes.STRING, allowNull: true,
    },
    tasks: {
        type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false,
    },
    chooseImage: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    choosePositiveAnswer: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    chooseAnswer: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    chooseMissingWord: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    chooseTranslateWords: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    lessonId: {
        type: DataTypes.INTEGER, allowNull: false,
    },
});
const Task = sequelize.define<ITask>('task', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    word: {
        type: DataTypes.STRING, allowNull: true,
    },
    question: {
        type: DataTypes.STRING, allowNull: true,
    },
    answer: {
        type: DataTypes.STRING, allowNull: true,
    },
    translate: {
        type: DataTypes.STRING, allowNull: true,
    },
    optionsAnswer: {
        type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true,
    },
    chooseImage: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    choosePositiveAnswer: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    chooseAnswer: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    chooseMissingWord: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    chooseTranslateWords: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    themeId: {
        type: DataTypes.INTEGER, allowNull: false,
    },
    translateWordsTasks: {
        type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: true,
    },
    translateWordsAnswers: {
        type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true,
    },
});
const ImageTask = sequelize.define<IImageTask>('imageTask', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    src: {
        type: DataTypes.STRING, allowNull: false,
    },
    alt: {
        type: DataTypes.STRING, allowNull: false,
    },
    taskId: {
        type: DataTypes.INTEGER, allowNull: false,
    },
});
const ImageExercise = sequelize.define<IImageExercise>('imageExercise', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    src: {
        type: DataTypes.STRING, allowNull: false,
    },
    alt: {
        type: DataTypes.STRING, allowNull: false,
    },
    exerciseId: {
        type: DataTypes.INTEGER, allowNull: false,
    },
});
const AgendaUser = sequelize.define<IAgendaUser>('agendaUser', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    daysOfWeekArray: {
        type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false, defaultValue: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    },
    pointsOfDayArray: {
        type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false, defaultValue: [0, 0, 0, 0, 0, 0, 0],
    },
    userId: {
        type: DataTypes.INTEGER, allowNull: false,
    },
});
const LookLessonAnswer = sequelize.define<ILookLessonAnswer>('lookLessonAnswer', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    titleTask: {
        type: DataTypes.STRING, allowNull: false,
    },
    answerTrue: {
        type: DataTypes.STRING, allowNull: false,
    },
    answerUser: {
        type: DataTypes.STRING, allowNull: false,
    },
    wrong: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    question: {
        type: DataTypes.STRING, allowNull: false,
    },
    chooseImage: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    choosePositiveAnswer: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    chooseAnswer: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    chooseMissingWord: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    chooseTranslateWords: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    lessonId: {
        type: DataTypes.INTEGER, allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER, allowNull: false,
    }
});
User.hasOne(Token);
Token.belongsTo(User);

User.hasOne(Statistic, { foreignKey: 'userId', as: 'statistics' });
Statistic.belongsTo(User);

User.hasOne(AgendaUser, { foreignKey: 'userId', as: 'agenda' });
AgendaUser.belongsTo(User);

Module.hasMany(Lesson, { foreignKey: 'moduleId', as: 'lessons' });
Lesson.belongsTo(Module);

Lesson.hasMany(Exercise, { foreignKey: 'lessonId', as: 'exercises' });
Exercise.belongsTo(Lesson);

Theme.hasMany(Task, { foreignKey: 'themeId', as: 'task' });
Task.belongsTo(Theme);

Theme.hasMany(Module, { foreignKey: 'themeId', as: 'module' });
Module.belongsTo(Theme);

Task.hasOne(ImageTask, { foreignKey: 'taskId', as: 'image' });
ImageTask.belongsTo(Task);

Exercise.hasOne(ImageExercise, { foreignKey: 'exerciseId', as: 'image' });
ImageExercise.belongsTo(Exercise);

Lesson.hasOne(LookLessonAnswer, { foreignKey: 'lessonId' });
LookLessonAnswer.belongsTo(Lesson);

export const model = {
    User,
    Token,
    Statistic,
    Exercise,
    Task,
    LookLessonAnswer,
    Module,
    Lesson,
    Theme,
    ImageTask,
    ImageExercise,
    AgendaUser,
};
