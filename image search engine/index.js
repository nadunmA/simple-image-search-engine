const accessKey = "5OMRINigvusffDbWlRD3y8YK1-BSHKO3IYPBvS3dEfE";

const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchBox");
const searchResult = document.getElementById("searchResult");
const showBtn = document.getElementById("showBtn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=21`;

    const response = await fetch(url);
    const data = await response.json();

    if(page == 1){

        searchResult.innerHTML = "";

    }

    const results = data.results;  

    searchResult.innerHTML = '';  

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;  
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;  
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    showBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})

