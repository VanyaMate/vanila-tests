import { IUserView, UserView } from './UserView.ts';
import { IUserModel, UserModel } from './UserModel.ts';


export class UserPresenter {
    private _view: IUserView | null;
    private _model: IUserModel | null;

    constructor (
        userId: string,
        position: InsertPosition,
        to: Element,
    ) {
        // fignya
        this._view  = null;
        this._model = new UserModel();
        this._model.getUserData(userId).then((user) => {
            this._view = new UserView(user);
            this._view.render(position, to);
            this._view.button.addEventListener('click', () => {
                console.log('user with id', userId, 'is', user);
            });
        });
    }
}