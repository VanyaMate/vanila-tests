import { IComponentView } from './ComponentView.interface.ts';


export type ComponentViewProps = {
    htmlTag: string;
    innerHTML: string;
};

export class ComponentView implements IComponentView {
    protected readonly _element: Element;

    constructor (props: ComponentViewProps) {
        const { htmlTag, ...other } = props;
        this._element               = Object.assign(document.createElement(htmlTag), other);
    }

    render (position: InsertPosition, to: Element): void {
        to.insertAdjacentElement(position, this._element);
    }

    remove (): void {
        if (this._element.parentNode) {
            this._element.remove();
        }
    }
}