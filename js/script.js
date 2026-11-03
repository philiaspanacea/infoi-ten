// const wrapper = document.querySelector("#wrapper");
// const search = document.querySelector("#search");
// const allBtn = document.querySelector("#all");
// const atkBtn = document.querySelector("#atk");
// const select = document.querySelector("#typ");

// const pokemon = [
//   { name: "Charmander", type: "fire", maxHp: 100, attack: 15 },
//   { name: "Squirtle", type: "water", maxHp: 110, attack: 12 },
//   { name: "Pikachu", type: "electric", maxHp: 95, attack: 18 },
//   { name: "Bulbasaur", type: "grass", maxHp: 105, attack: 13 }
// ];

// console.log("Hello!");

// const displayPoke = pokemon.map(itm => {
    // const ele = document.createElement("div");
    // const pokeName = document.createElement("h1");
    // const pokeType = document.createElement("h2");
    // const pokeHp = document.createElement("h2");
    // const pokeAtk = document.createElement("h2");

    // pokeName.innerHTML = itm.name;
    // pokeType.innerHTML = itm.type;
    // pokeHp.innerHTML = itm.maxHp;
    // pokeAtk.innerHTML = itm.attack;
    // ele.appendChild(pokeName);
    // ele.appendChild(pokeType);
    // ele.appendChild(pokeHp);
    // ele.appendChild(pokeAtk);
    // wrapper.appendChild(ele);
    // return ele;
// })

// displayPoke.forEach(itm =>{
//     wrapper.appendChild(itm)
// });


// function renderPoke(){
//     if (search.value === "Charmander" || search.value === "charmander") {
//         console.log ("chaarr");
//         display();
//     }

//     if (search.value === "Squirtle" || search.value === "squirtle") {
//         console.log ("squirt")
//     }

//     if (search.value === "Bulbasaur" || search.value === "bulbasaur") {
//         console.log ("buulba")
//     }

//     if (search.value === "Pikachu" || search.value === "pikachu") {
//         console.log ("pikapika")
//     }
// };

// select.addEventListener("change", (fil)=> {
//     console.log(fil.target.value);
    
//     if (fil.target.value === "water" || fil.target.value === "grass" || fil.target.value === "electric" || fil.target.value === "fire" ){
//         return pokemon.map(itm => {
//             wrapper.innerHTML = "";
//             const ele = document.createElement("div");
//             const pokeType = document.createElement("h2");

//             ele.appendChild(pokeType);
//             pokeType.innerHTML = itm.type;

//             wrapper.appendChild(ele);
//             return pokeType;
//         })
//     }
// })

// search.addEventListener("input", ()=>{
    
// });

// allBtn.addEventListener("click", ()=>{
//     console.log("this works");
// });

// // atkBtn.addEventListener("click", ()=>{
// //     console.log("this works 2");
// //     filterPoke();
// // });

const pokemon = [
  { name: "Charmander", type: "fire", maxHp: 100, attack: 15 },
  { name: "Squirtle", type: "water", maxHp: 110, attack: 12 },
  { name: "Pikachu", type: "electric", maxHp: 95, attack: 18 },
  { name: "Bulbasaur", type: "grass", maxHp: 105, attack: 13 }
];

const renderedPoke = pokemon.map(itm => {
    const ele = document.createElement("div");
    const pokeName = document.createElement("h1");
    const pokeType = document.createElement("h2");
    const pokeHp = document.createElement("h2");
    const pokeAtk = document.createElement("h2");

    pokeName.innerHTML = itm.name;
    pokeType.innerHTML = itm.type;
    pokeHp.innerHTML = itm.maxHp;
    pokeAtk.innerHTML = itm.attack;
    ele.appendChild(pokeName);
    ele.appendChild(pokeType);
    ele.appendChild(pokeHp);
    ele.appendChild(pokeAtk);
    wrapper.appendChild(ele);
    return ele;
})

function filterPoke(fil) {
    if (fil === "all") {
        return pokemon.map(itm => {
        const ele = document.createElement("div");
        const pokeName = document.createElement("h1");
        const pokeType = document.createElement("h2");
        const pokeHp = document.createElement("h2");
        const pokeAtk = document.createElement("h2");

        pokeName.innerHTML = itm.name;
        pokeType.innerHTML = itm.type;
        pokeHp.innerHTML = itm.maxHp;
        pokeAtk.innerHTML = itm.attack;
        ele.appendChild(pokeName);
        ele.appendChild(pokeType);
        ele.appendChild(pokeHp);
        ele.appendChild(pokeAtk);
        wrapper.appendChild(ele);
        return ele;
        })
    } else if (fil === "water"){
        const waterType = pokemon.filter(itm => itm.type === "water");
        console.log(waterType)
        return pokemon.filter(itm => {
        const ele = document.createElement("div");
        const pokeName = document.createElement("h1");
        const pokeType = document.createElement("h2");
        const pokeHp = document.createElement("h2");
        const pokeAtk = document.createElement("h2");

        pokeName.innerHTML = itm.name;
        pokeType.innerHTML = itm.type;
        pokeHp.innerHTML = itm.maxHp;
        pokeAtk.innerHTML = itm.attack;
        ele.appendChild(pokeName);
        ele.appendChild(pokeType);
        ele.appendChild(pokeHp);
        ele.appendChild(pokeAtk);
        wrapper.appendChild(ele);
        return ele;
        })

        // return filteredPoke.map(itm => {
        //     const ele = document.createElement("div")
        //     ele.innerHTML = itm;
        //     ele.style.textTransform = "uppercase";
        //     ele.style.fontWeight = "bold";
        //     ele.style.color = itm;
        //     return ele;
        // })
    }
}

document.getElementById("select").addEventListener("change", (event) => {
    renderPoke(filterPoke(event.target.value));
})

document.getElementById("search").addEventListener("input", (event) => {
    const searchValue = event.target.value
    const searchedPoke = pokemon.filter(itm =>
        itm.includes(searchValue)
    )
    const newPoke = searchedPoke.map(itm => {
        const ele = document.createElement("div")
        ele.innerHTML = itm;
        ele.style.textTransform = "uppercase";
        ele.style.fontWeight = "bold";
        ele.style.color = itm;
        return ele;
    })

    renderPoke(newPoke);
})

function renderPoke(pokemon) {
    document.getElementById("wrapper").innerHTML = "";
    pokemon.forEach(itm => {
        document.getElementById("wrapper").appendChild(itm)
    })
}
