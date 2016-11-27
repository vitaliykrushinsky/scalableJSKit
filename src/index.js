import './index.css';
// import numeral from 'numeral';
import { getUser } from './api/userAPI';

// const courseValue = numeral(1000).format('$0,0.00');
// console.log(`I pay ${courseValue} for this course!`);

getUser().then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody += `
            <tr>
                <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.gender}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
            </tr>`
    });
    global.document.getElementById('users').innerHTML = usersBody;
});
