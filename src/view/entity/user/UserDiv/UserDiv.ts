import { div } from '../../../helpers/entity/e.ts';
import css from './UserDiv.module.css';


// Выглядит хайпово
export const UserDiv = (login: string) =>
    div({ class: css.container }, [
        div({ class: css.info }, [
            div({ class: css.avatar }, []),
            div({ class: css.login, text: login }, []),
        ]),
        div({
            class  : css.button,
            text   : '[...]',
            onClick: () => console.log('Click on', login),
        }, []),
    ]);