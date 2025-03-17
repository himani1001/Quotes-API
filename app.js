const loadingQuotes = async () => {
    try{
        const loadingQuotesFetch = await fetch('https://api.chuccknorris.io/jokes/random', {
            headers: {
                Accept: "application/json"
            }
        });

        //turn to json format
        const jokeData = await loadingQuotesFetch.json();
        document.getElementById('loadingQuotes').innerHTML = jokeData.value;
    }
    catch(error){
        console.log(error);
    }
}

document.getElementById('loadQuotesBtn').addEventListener("click", loadingQuotes);
