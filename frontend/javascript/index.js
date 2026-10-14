const postmethod = async(url, data)=>{

    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'

            },
            body: JSON.stringify(data)

        })
        if(!response.ok){
            throw new Error("hiba törtent")
        }
        return await response.json()

    }
    catch(error){
        throw new Error("Hiba")
    }



}
document.addEventListener("DOMContentLoaded", async()=>{
    document.getElementById("gomb").addEventListener("click", async()=>{
        
        try{
            setTimeout(() => {
               console.log("sikeres mentés") 
            }, 2000);
            const input = document.getElementById("szoveg").value
            const response = await postmethod("/api/saveData", {
                value : input
            })
            console.log(response)
            document.getElementById("megjelen").innerHTML = await response.messsage
        }
        catch(error){
            console.log("Hiba")
        }
        


    })


})
