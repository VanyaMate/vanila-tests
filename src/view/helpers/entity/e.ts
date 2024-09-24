export type DivProps = {
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