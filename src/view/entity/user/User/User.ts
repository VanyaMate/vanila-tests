import css from './User.module.css';
import { component } from '../../../helpers/component.ts';
import { DomainUser } from '../types/User.ts';


export type UserProps = DomainUser;

export const User = function (props: UserProps) {
    return component(props, `
        <div class="${ css.container }">
            <div class="${ css.info }">
                <img class="${ css.avatar }" alt="avatar of {{login}}" src="{{avatar}}">
                <h2 class="${ css.login }">{{login}}</h2>
            </div>
            <button class="${ css.button }">[x]</button>
        </div>
    `);
};
