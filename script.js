const competition = ("http://api.football-data.org/v4/competitions/")

    fetch(competition)
    .then(response => {
        if(!response.ok) {
            throw new error('response was not ok');
        }
    return response.json();
    })

.then(data => {
console.log('Competition Data', data)
})
.catch(Error => {
    console.log('There was a problem fetching data')
});

