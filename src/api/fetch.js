console.log("fetch");
const API_URL = "https://5eaf78cd0605ed0016d2c9a1.mockapi.io/api/tv/";

const fetchData = async () => {
    try {
        const response = await fetch(`${API_URL}/products`);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};
window.addEventListener("load", async (event) => {
    const res = await fetchData();
    console.log(res);
});
