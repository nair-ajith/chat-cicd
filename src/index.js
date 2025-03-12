const secondFunc = () => {
    console.log('Hello from second function');
};

const thridFunc = () => {
    console.log('Hello from the third function');
};

export const firstModule = () => {
    console.log('Hello from first module');
    secondFunc();
};
