export const getUserCardLoader = function () {
    return Object.assign(document.createElement('div'), { innerHTML: 'loading..' });
};