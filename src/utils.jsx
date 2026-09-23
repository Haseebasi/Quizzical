export async  function fetchQuiz(){
    try{
const response=await fetch("https://opentdb.com/api.php?amount=5&category=29&difficulty=easy&type=multiple")
if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return (data && data.results && data.results.length > 0) ? data.results : [];
    }catch(err){
        console.error("Failed to fetch quiz:", err.message);
    throw err;
    }
}