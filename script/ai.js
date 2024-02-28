const loadData = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  const AiInfo = data.data.tools;
  showData(AiInfo);
};

const showData = (infos) => {
  const infoCardContainer = document.getElementById("infos-card-container");
  //  console.log(infos)
  infos.forEach((info) => {
    const features = info.features;
    console.log(features
        )
    // features.forEach(info=>console.log(info))
    // console.log(info.name);
    const infoCard = document.createElement("div");
    // infoCard.classList.add = `card w-96 bg-base-100 shadow-xl`;
    infoCard.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-2xl">
    <figure><img
                                src="${info.image}"Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-2xl">Features</h2>
                           <ol>
                             <li>${info.features[0]}</li>
                             <li>${info.features[1]}</li>
                             <li>${info.features[2]}</li>
                           
                           </ol>

                           <hr>
                            <div class='flex justify-between items-center'>
                             <div>
                             <h3 class='text-2xl font-sem'>${info.name}</h3>
                               <p>${info.published_in}</p>
                             </div>
                    
                            <div>
                                <button class="btn btn-primary">Buy Now</button>
                             </div>
                             </div>
                        </div>
                        </div>
    `;
    infoCardContainer.appendChild(infoCard);
  });
};

loadData();
