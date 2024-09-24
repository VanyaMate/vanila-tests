import { User } from './view/entity/user/User/User.ts';
import { UserPresenter } from './view/entity/user/UserMVP/UserPresenter.ts';
import {
    getUserCardLoader,
} from './view/entity/user/UserFunc/getUserCardLoader.ts';
import { getUserById } from './view/entity/user/UserFunc/getUserById.ts';
import { getUserCard } from './view/entity/user/UserFunc/getUserCard.ts';
import { UserDiv } from './view/entity/user/UserDiv/UserDiv.ts';


const app: HTMLElement  = document.querySelector('#app')!;
const app2: HTMLElement = document.querySelector('#app2')!;
const app3: HTMLElement = document.querySelector('#app3')!;
const app4: HTMLElement = document.querySelector('#app4')!;

[ app, app2, app3, app4 ].forEach((app: HTMLElement) => {
    app.style.display       = 'flex';
    app.style.flexDirection = 'column';
    app.style.gap           = '10px';
});

// app 1

const render = User({
    login : 'admin',
    avatar: 'https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg?w=740&t=st=1726298818~exp=1726299418~hmac=c7023183fa325ba6a6764644c43829f5a9c6a993326fb07e949bc615a21df170',
});

render('beforeend', app!);


// app 2

new UserPresenter('1', 'beforeend', app2);
new UserPresenter('2', 'beforeend', app2);
new UserPresenter('3', 'beforeend', app2);
new UserPresenter('4', 'beforeend', app2);


// app 3

const loader = getUserCardLoader();
app3.insertAdjacentElement('beforeend', loader);
getUserById('1').then((user) => {
    const card = getUserCard(user, console.log);
    loader.remove();
    app3.insertAdjacentElement('beforeend', card);
});


// app 4

app4.insertAdjacentElement('beforeend', UserDiv('admin div'));