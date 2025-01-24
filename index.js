const form = document.querySelector("#searchForm");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    const vl = form.elements.q.value;
    search(vl);
    form.elements.q.value = ""; // Clear the input field after search
})


// Fetch API request to TVmaze to get the show details
function search(name) {
    fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let img of data) {
                console.log(img.show.image.medium);
                // Display the show details here
                const imgs = document.createElement("IMG");
                imgs.src = img.show.image.medium
                document.body.append(imgs)
            }

        })

        .catch(function (err) {
            console.log("Error fetching data:  move not find ", err);
        });
}