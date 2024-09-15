export interface IComponentView {
    render (position: InsertPosition, to: Element): void;

    remove (): void;
}