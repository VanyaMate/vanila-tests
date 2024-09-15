import { DomainUser } from '../types/User.ts';
import css from './UserCard.module.css';
import { getUserCardContent } from './getUserCardContent.ts';


export const getUserCard = function (user: DomainUser, onClick: (user: DomainUser) => void): HTMLElement {
    const element: HTMLElement = Object.assign(document.createElement('div'), {
        innerHTML: getUserCardContent(user),
    });
    element.classList.add(css.container);

    const button = element.querySelector('button')!;
    button.addEventListener('click', () => onClick(user));

    return element;
};