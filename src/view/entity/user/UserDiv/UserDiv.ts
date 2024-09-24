import { button, div, img } from '../../../helpers/entity/e.ts';
import css from './UserDiv.module.css';


// Выглядит хайпово
export const UserDiv = (login: string) =>
    div({ class: css.container }, [
        div({ class: css.info }, [
            img({
                class: css.avatar,
                src  : 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
                alt  : 'avatar',
            }, []),
            div({ class: css.login, text: login }, []),
        ]),
        button({
            class  : css.button,
            onClick: () => console.log('Click on: ', login),
            text   : '[...]',
        }, []),
    ]);