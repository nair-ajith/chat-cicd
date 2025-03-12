const secondFunc = () => {
    console.log('Hello from second function');
};

export const firstModule = () => {
    console.log('Hello from first module');
    secondFunc();
};
