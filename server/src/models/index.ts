import { DataTypes } from 'sequelize';
// import { InferAttributes, InferCreationAttributes, Model, CreationOptional } from 'sequelize';
import { sequelize } from '../db';
import {
    IToken,
    IUser,
    IStatistic,
    // ISection, IPart1,
    IExercise, IQuestion, ITask,
    // ILookLessonAnswer,
    ILesson,
    ITheme,
} from '../interfaces';
// class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
//     declare id: CreationOptional<number>;
//     declare name: string;
//     declare email: string;
//     declare password: string;
//     declare age: number;
//     declare activateToken: string;
//     declare is_active: boolean;
//     declare is_staff: boolean;
//     declare is_superuser: boolean;
//     declare statistic: boolean;
// }
// User.init (
//     {
//         id: {
//             type: DataTypes.INTEGER.UNSIGNED,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         name: {
//             type: new DataTypes.STRING(128),
//             allowNull: true
//         },
//         email: {
//             type: new DataTypes.STRING(128),
//             allowNull: false
//         },
//         password: {
//             type: new DataTypes.STRING(128),
//             allowNull: false
//         },
//         age: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         activateToken: {
//             type: new DataTypes.STRING(255),
//             allowNull: false
//         },
//         is_active: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//             defaultValue: false
//         },
//         is_staff: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//             defaultValue: false
//         },
//         is_superuser: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//             defaultValue: false
//         },
//         statistic: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//             defaultValue: false
//         },
//     },
//     {
//         sequelize,
//         tableName: 'users'
//     }
// )
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
});
const Token = sequelize.define<IToken>('token', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    accessToken: { type: DataTypes.STRING, unique: true, allowNull: false },
    refreshToken: { type: DataTypes.STRING, unique: true, allowNull: false },
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
const Theme = sequelize.define<ITheme>('Theme', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    title: {
        type: DataTypes.STRING, allowNull: false,
    },
});
// const Section = sequelize.define<ISection>('Section', {
//     id: {
//         type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
//     },
//     section: {
//         type: DataTypes.INTEGER, allowNull: false,
//     },
//     background: {
//         type: DataTypes.STRING, allowNull: false, defaultValue: '#000',
//     },
//     title: {
//         type: DataTypes.STRING, allowNull: false,
//     },
//     image1: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     alt1: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     image2: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     alt2: {
//         type: DataTypes.STRING, allowNull: true,
//     },
// });
// const Part1 = sequelize.define<IPart1>('Part1', {
//     id: {
//         type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
//     },
//     src: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     alt: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     width: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     sectionId: {
//         type: DataTypes.INTEGER, allowNull: false,
//     },
// });
// const Part2 = sequelize.define<IPart1>('Part2', {
//     id: {
//         type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
//     },
//     src: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     alt: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     width: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     sectionId: {
//         type: DataTypes.INTEGER, allowNull: false,
//     },
// });
// const Part3 = sequelize.define<IPart1>('Part3', {
//     id: {
//         type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
//     },
//     src: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     alt: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     width: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     sectionId: {
//         type: DataTypes.INTEGER, allowNull: false,
//     },
// });
// const Part4 = sequelize.define<IPart1>('Part4', {
//     id: {
//         type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
//     },
//     src: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     alt: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     width: {
//         type: DataTypes.STRING, allowNull: true,
//     },
//     sectionId: {
//         type: DataTypes.INTEGER, allowNull: false,
//     },
// });
const Lesson = sequelize.define<ILesson>('lesson', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    lessonNumber: {
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
        type: DataTypes.INTEGER, allowNull: false,
    },
});
const Question = sequelize.define<IQuestion>('question', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    word: {
        type: DataTypes.STRING, allowNull: false,
    },
    exerciseId: {
        type: DataTypes.INTEGER, allowNull: false,
    },
});
const Task = sequelize.define<ITask>('task', {
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
        type: DataTypes.INTEGER, allowNull: false,
    },
});
// const LookLessonAnswer = sequelize.define<ILookLessonAnswer>('LookLessonAnswer', {
//     id: {
//         type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
//     },
//     titleTask: {
//         type: DataTypes.STRING, allowNull: false,
//     },
//     answerTrue: {
//         type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,
//     },
//     answerUser: {
//         type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,
//     },
//     wrong: {
//         type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
//     },
//     question: {
//         type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,
//     },
//     chooseImage: {
//         type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
//     },
//     choosePositiveAnswer: {
//         type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
//     },
//     chooseAnswer: {
//         type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
//     },
//     chooseMissingWord: {
//         type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
//     },
//     chooseTranslateWords: {
//         type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false,
//     },
//     exerciseId: {
//         type: DataTypes.INTEGER, allowNull: false,
//     },
// });
User.hasOne(Token);
Token.belongsTo(User);

User.hasOne(Statistic, { foreignKey: 'userId', as: 'statistics' });
Statistic.belongsTo(User);

// Section.hasOne(Part1, { foreignKey: 'sectionId' });
// Part1.belongsTo(Section);
// Section.hasOne(Part2, { foreignKey: 'sectionId' });
// Part2.belongsTo(Section);
// Section.hasOne(Part3, { foreignKey: 'sectionId' });
// Part3.belongsTo(Section);
// Section.hasOne(Part4, { foreignKey: 'sectionId' });
// Part4.belongsTo(Section);
Lesson.hasMany(Exercise, { foreignKey: 'lessonId', as: 'exercises' });
Exercise.belongsTo(Lesson);

Exercise.hasOne(Question, { foreignKey: 'exerciseId', as: 'question' });
Question.belongsTo(Exercise);

Theme.hasOne(Task, { foreignKey: 'themeId', as: 'task' });
Task.belongsTo(Theme);
// Exercise.hasOne(Task, { foreignKey: 'exerciseId' });
// Task.belongsTo(Exercise);
// Exercise.hasOne(LookLessonAnswer, { foreignKey: 'exerciseId' });
// LookLessonAnswer.belongsTo(Exercise);

export const model = {
    User,
    Token,
    Statistic,
    // Section,
    // Part1,
    // Part2,
    // Part3,
    // Part4,
    Exercise,
    Question,
    Task,
    // LookLessonAnswer,
    Lesson,
    Theme,
};
