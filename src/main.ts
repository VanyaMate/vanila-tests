import { User } from './view/entity/user/User.ts';


const app = document.querySelector('#app');

const render = User({
    login : 'admin',
    avatar: 'https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg?w=740&t=st=1726298818~exp=1726299418~hmac=c7023183fa325ba6a6764644c43829f5a9c6a993326fb07e949bc615a21df170',
});

render('beforeend', app!);