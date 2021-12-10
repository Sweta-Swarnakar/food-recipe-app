async function getData(url)
{
    try{
        let res = await fetch(url)

        let data = await res.json()
    
        return data;

    }

    catch(err)
    {
        console.log(err);
    }
   
}

function appendData(data, location)
{

    data.forEach(el => {
        
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.strMealThumb;
        let name = document.createElement("h4")
        name.innerHTML = "Name: " + el.strMeal;
        
        let ingri = document.createElement("h4")
        ingri.innerHTML = "ingredients :";

        let ingri1 = document.createElement("p")
        ingri1.innerHTML = "1. "  + el.strIngredient1;

        let ingri2 = document.createElement("p")
        ingri2.innerHTML = "2. " + el.strIngredient2;

        let ingri3 = document.createElement("p")
        ingri3.innerHTML = "3. " + el.strIngredient3;

        let ingri4 = document.createElement("p")
        ingri4.innerHTML = "4. " + el.strIngredient4;

        let ingri5 = document.createElement("p")
        ingri5.innerHTML = "5. " + el.strIngredient5;

        let ingri6 = document.createElement("p")
        ingri6.innerHTML ="6. " + el.strIngredient6;

        let btn = document.createElement("button")
        btn.innerHTML = "Watch Now"
        btn.setAttribute("id", "watch");

        btn.addEventListener("click", function(){
            window.location.href = el.strYoutube;
        })
        

        div.append(img, name, ingri, ingri1, ingri2, ingri3, ingri4, ingri5, ingri6, btn);

        location.append(div);
    });
}


function AppendData(data, location)
{

    data.forEach(el => {
        
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.strCategoryThumb;
        
        let name = document.createElement("h4")
        name.innerHTML = "Name: " + el.strCategory;
        
    
        let des = document.createElement("p")
        des.innerHTML = "Description : " + el.strCategoryDescription;



        div.append(img, name, des);

        location.append(div);
    });
}

export  {getData, appendData, AppendData}