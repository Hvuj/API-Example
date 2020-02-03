const getbtn = document.getElementById('getbtn');
const postbtn = document.getElementById('postbtn');
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

const getData = () => {
    axios({
        method: 'get',
        url: 'https://reqres.in/api/users',
        data: {
            title: 'fred',
            description: 'flinstone'
        }
    }).then(res => {
        console.log(res.data.data.forEach(items => {
            const card = document.createElement('p');
            card.setAttribute('class', 'card');
            
            const h1 = document.createElement('h1');
            h1.textContent = items.email;

            container.appendChild(card);
            card.appendChild(h1);
            console.log(items.email);
        }));
    }).catch(err => {
        console.log(err);
    })
};

const postData = () => {
    axios.post('https://reqres.in/api/register', {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err, err.response);
    })
};

getbtn.addEventListener('click', getData);
postbtn.addEventListener('click', postData);