export type IExerciseList = {
    type: string;
    exercise: string[];
};

export type IExerciseObject = {
    key: string;
    name: string;
    list: IExerciseList[] | undefined;
};

export type IExerciseArray = IExerciseObject[];