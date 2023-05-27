const BASE_URL = "https://fakestoreapi.com";


fetch(`${BASE_URL}/products`)
            .then(res=>res.json())
            .then(json=>{
                const content =  document.querySelector(".content");
                   json.map((item)=>{
                    content.innerHTML += `
                    <div class="card">
                            <img src="${item.image}" alt="">
                            <h2>${item.title.slice(0, 10)}...</h2>
                            <p>${item.description.slice(0, 10)}...</p>
                             <div>
                                <span>price:${item.price}</span>
                            </div>  
                        </div>
                        
                    `
                   })
            })


// axios.get(`${BASE_URL}/products`).then((res)=>{
//     console.log(res.data)
//    const content =  document.querySelector(".content");
//    res.data.map((item)=>{
//     content.innerHTML += `
//     <div class="card">
//             <img src="${item.image}" alt="">
//             <h2>${item.title.slice(0, 10)}...</h2>
//             <p>${item.description.slice(0, 10)}...</p>
//              <div>
//                 <span>price:${item.price}</span>
//             </div>  
//         </div>
        
//     `
//    })

// })