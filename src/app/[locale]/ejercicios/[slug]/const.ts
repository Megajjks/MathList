export type IExerciseList = {
    type: string;
    exercise: string[];
};

export type IExampleImgList = {
    path: string;
    alt: string;
};

export type IExerciseObject = {
    key: string;
    name: string;
    examplesImageOfUseApp:IExampleImgList[] | undefined;
    list: IExerciseList[] | undefined;
};

export type IExerciseArray = IExerciseObject[];