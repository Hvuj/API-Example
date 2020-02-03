const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
        data.forEach(movie => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            p.textContent = movie.description;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        })
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "sorry an error accured";
        app.appendChild(errorMessage);
    }
      }
    xhttp.open("GET", "https://ghibliapi.herokuapp.com/films", true);
    xhttp.send();