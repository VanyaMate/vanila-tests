export type DivProps = {
    onClick?: () => void;
    class?: string;
    text?: string;
}

export type ImgProps = {
    onClick?: () => void;
    class?: string;
    text?: string;
    src: string;
    alt: string;
}

export type ButtonProps = {
    onClick?: () => void;
    class?: string;
    text?: string;
}

export const div = function (props: DivProps, elements: Array<HTMLElement>): HTMLElement {
    const element = document.createElement('div');
    props.onClick && element.addEventListener('click', props.onClick);
    props.class && element.classList.add(props.class);
    if (props.text) {
        element.innerHTML = props.text;
    } else {
        elements.forEach((el) => element.insertAdjacentElement('beforeend', el));
    }
    return element;
};

export const img = function (props: ImgProps, elements: Array<HTMLElement>): HTMLElement {
    const element = document.createElement('img');
    props.onClick && element.addEventListener('click', props.onClick);
    props.class && element.classList.add(props.class);
    element.src = props.src;
    element.alt = props.alt;
    if (props.text) {
        element.innerHTML = props.text;
    } else {
        elements.forEach((el) => element.insertAdjacentElement('beforeend', el));
    }
    return element;
};

export const button = function (props: ButtonProps, elements: Array<HTMLElement>): HTMLElement {
    const element = document.createElement('button');
    props.onClick && element.addEventListener('click', props.onClick);
    props.class && element.classList.add(props.class);
    if (props.text) {
        element.innerHTML = props.text;
    } else {
        elements.forEach((el) => element.insertAdjacentElement('beforeend', el));
    }
    return element;
};