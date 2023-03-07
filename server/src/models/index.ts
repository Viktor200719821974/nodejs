import { DataTypes } from 'sequelize';

import { sequelize } from '../db';
import { 
    IToken, IUser, IStatistic, ISection, IPart1, IExercise, IQuestion, ITask, ILookLessonAnswer, 
    ILesson, 
} from '../interfaces';

const User = sequelize.define<IUser>('User', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true,
    },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: true, defaultValue: 'Anonymus' },
    age: { type: DataTypes.INTEGER },
    activateToken: { type: DataTypes.STRING, allowNull: true },
    is_active: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    is_staff: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
    is_superuser: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    statistic: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
});
const Token = sequelize.define<IToken>('Token', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    accessToken: { type: DataTypes.STRING, unique: true, allowNull: false },
    refreshToken: { type: DataTypes.STRING, unique: true, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
});
const Statistic = sequelize.define<IStatistic>('Statistic', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    howDidYouKnow: { 
        type: DataTypes.STRING, allowNull: false 
    },
    whatAreYouStuding: { 
        type: DataTypes.STRING, allowNull: false 
    },
    everyDayTarget: { 
        type: DataTypes.STRING, allowNull: false
    },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
});
const Section = sequelize.define<ISection>('Section', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    section: {
        type: DataTypes.INTEGER, allowNull: false,
    },
    background: {
        type: DataTypes.STRING, allowNull: false, defaultValue: '#000',
    },
    title: {
        type: DataTypes.STRING, allowNull: false,
    },
    image1: {
        type: DataTypes.STRING, allowNull: true, 
    },
    alt1: {
        type: DataTypes.STRING, allowNull: true,
    },
    image2: {
        type: DataTypes.STRING, allowNull: true,
    },
    alt2: {
        type: DataTypes.STRING, allowNull: true,
    },
});
const Part1 = sequelize.define<IPart1>('Part1', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    src: {
        type: DataTypes.STRING, allowNull: true, 
    },
    alt: {
        type: DataTypes.STRING, allowNull: true,
    },
    width: {
        type: DataTypes.STRING, allowNull: true,
    },
    sectionId: { 
        type: DataTypes.INTEGER, allowNull: false, references: { model: Section, key: 'id' } 
    },
});
const Part2 = sequelize.define<IPart1>('Part2', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    src: {
        type: DataTypes.STRING, allowNull: true, 
    },
    alt: {
        type: DataTypes.STRING, allowNull: true,
    },
    width: {
        type: DataTypes.STRING, allowNull: true,
    },
    sectionId: { 
        type: DataTypes.INTEGER, allowNull: false, references: { model: Section, key: 'id' } 
    },
});
const Part3 = sequelize.define<IPart1>('Part3', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    src: {
        type: DataTypes.STRING, allowNull: true, 
    },
    alt: {
        type: DataTypes.STRING, allowNull: true,
    },
    width: {
        type: DataTypes.STRING, allowNull: true,
    },
    sectionId: { 
        type: DataTypes.INTEGER, allowNull: false, references: { model: Section, key: 'id' } 
    },
});
const Part4 = sequelize.define<IPart1>('Part4', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    src: {
        type: DataTypes.STRING, allowNull: true, 
    },
    alt: {
        type: DataTypes.STRING, allowNull: true,
    },
    width: {
        type: DataTypes.STRING, allowNull: true,
    },
    sectionId: { 
        type: DataTypes.INTEGER, allowNull: false, references: { model: Section, key: 'id' } 
    },
});
const Lesson = sequelize.define<ILesson>('Lesson', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    lessonNumber: {
        type: DataTypes.INTEGER, allowNull: false,
    } 
});
const Exercise = sequelize.define<IExercise>('Exercise', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    // exercise: {
    //     type: DataTypes.INTEGER, allowNull: false,
    // },
    titleTask: {
        type: DataTypes.STRING, allowNull: false,
    },
    answer: {
        type: DataTypes.STRING, allowNull: true,
    },
    src: {
        type: DataTypes.STRING, allowNull: true, 
    },
    alt: {
        type: DataTypes.STRING, allowNull: true,
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
        type: DataTypes.INTEGER, allowNull: false, references: { model: Lesson, key: 'id' } 
    },
});
const Question = sequelize.define<IQuestion>('Question', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    word: {
        type: DataTypes.STRING, allowNull: false,
    },
    exerciseId: { 
        type: DataTypes.INTEGER, allowNull: false, references: { model: Exercise, key: 'id' } 
    },
});
const Task = sequelize.define<ITask>('Task', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    src: {
        type: DataTypes.STRING, allowNull: true, 
    },
    alt: {
        type: DataTypes.STRING, allowNull: true,
    },
    name: {
        type: DataTypes.STRING, allowNull: false,
    },
    answer: {
        type: DataTypes.STRING, allowNull: true,
    },
    exerciseId: { 
        type: DataTypes.INTEGER, allowNull: false, references: { model: Exercise, key: 'id' } 
    },
});
const LookLessonAnswer = sequelize.define<ILookLessonAnswer>('LookLessonAnswer', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    titleTask: {
        type: DataTypes.STRING, allowNull: false,
    },
    answerTrue: {
        type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,
    },
    answerUser: {
        type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,
    },
    wrong: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
    },
    question: {
        type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,
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
    exerciseId: { 
        type: DataTypes.INTEGER, allowNull: false, references: { model: Exercise, key: 'id' } 
    },
});
// User.hasOne(Token);
Token.belongsTo(User, { foreignKey: 'userId' });
// User.hasOne(Statistic);
Statistic.belongsTo(User, { foreignKey: 'userId' });
Section.hasOne(Part1);
Part1.belongsTo(Section, { foreignKey: 'sectionId' });
Section.hasOne(Part2);
Part2.belongsTo(Section, { foreignKey: 'sectionId' });
Section.hasOne(Part3);
Part3.belongsTo(Section, { foreignKey: 'sectionId' });
Section.hasOne(Part4);
Part4.belongsTo(Section, { foreignKey: 'sectionId' });
// Lesson.hasMany(Exercise);
Exercise.belongsTo(Lesson, { foreignKey: 'lessonId' });
// Exercise.hasOne(Question);
Question.belongsTo(Exercise, { foreignKey: 'exerciseId' });
// Exercise.hasOne(Task);
Task.belongsTo(Exercise, { foreignKey: 'exerciseId' });
// Exercise.hasOne(LookLessonAnswer);
LookLessonAnswer.belongsTo(Exercise, { foreignKey: 'exerciseId' });

export const model = {
    User,
    Token,
    Statistic,
    Section,
    Part1,
    Part2,
    Part3,
    Part4,
    Exercise,
    Question,
    Task,
    LookLessonAnswer,
    Lesson,
}
