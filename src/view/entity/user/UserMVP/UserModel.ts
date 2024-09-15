import { DomainUser } from '../types/User.ts';


export interface IUserModel {
    user: DomainUser;
    getUserData: (id: string) => Promise<DomainUser>;
}

export class UserModel implements IUserModel {
    private _user: DomainUser | null;

    constructor () {
        this._user = null;
    }

    get user () {
        return this._user ?? { avatar: 'none', login: 'none' };
    }

    async getUserData (id: string): Promise<DomainUser> {
        return this._user = ({
            avatar: 'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726272000&semt=ais_hybrid',
            login : `admin-${ id }`,
        });
    }
}