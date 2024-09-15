import { DomainUser } from '../types/User.ts';
import css from './UserCard.module.css';


export const getUserCardContent = function (user: DomainUser): string {
    return (`
        <div class="${ css.info }">
            <img class="${ css.avatar }" src="${ user.avatar }" alt="avatar of ${ user.login }"/>
            <h2 class="${ css.login }">${ user.login }</h2>
        </div>
        <button class="${ css.button }">[...]</button>
    `);
};