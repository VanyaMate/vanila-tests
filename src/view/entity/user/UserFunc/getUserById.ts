import { DomainUser } from '../types/User.ts';


export const getUserById = async function (id: string): Promise<DomainUser> {
    return new Promise<DomainUser>((resolve) => {
        setTimeout(() => {
            resolve({
                login : `admin-${ id }`,
                avatar: 'https://i.ytimg.com/vi/Z5mx_Cj198c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf2Z7_lP3_42puw3NjpVF3bE4YzA',
            });
        }, 1000);
    });
};