const main = async () => {
    const div = document.body.appendChild(document.createElement('div'));
    document.querySelector('#languages').addEventListener('change', async () => {
        const url = 'http://linserv1.cims.nyu.edu:10001/api/frameworks?language=' + document.querySelector('#languages').value;
        console.log(url);
        const res = await fetch(url);
        const data = await res.json();
        div.innerHTML = data.framework;
    })
}

main();
