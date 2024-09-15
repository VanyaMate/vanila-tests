import { ComponentView } from '../../../helpers/ComponentView.ts';
import css from './UserView.module.css';
import { IComponentView } from '../../../helpers/ComponentView.interface.ts';
import { DomainUser } from '../types/User.ts';


export interface IUserView extends IComponentView {
    button: HTMLButtonElement;
}

export class UserView extends ComponentView implements IUserView {
    private readonly _button: HTMLButtonElement;

    constructor (user: DomainUser) {
        super({
            htmlTag  : 'div',
            innerHTML: `
                <div class="${ css.container }">
                    <div class="${ css.info }">
                        <img class="${ css.avatar }" src="${ user.avatar }" alt="avatar of ${ user.login }"/>
                        <h2 class="${ css.login }">${ user.login }</h2>
                    </div>
                    <button class="${ css.button }">[...]</button>
                </div>
            `,
        });

        this._button = this._element.querySelector('button')!;
    }

    get button () {
        return this._button;
    }
}