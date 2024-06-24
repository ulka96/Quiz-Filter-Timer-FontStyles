const people = [
    {
        firstName: "John",
        lastName: "Doe",
        image: "https://images.unsplash.com/photo-1564564295391-7f24f26f568b",
        city: "New York",
        country: "USA",
    },
    {
        firstName: "Michael",
        lastName: "Smith",
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
        city: "Berlin",
        country: "Germany",
    },
    {
        firstName: "William",
        lastName: "Moore",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
        city: "Dublin",
        country: "Ireland",
    },
    {
        firstName: "Lucas",
        lastName: "White",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        city: "Vancouver",
        country: "Canada",
    },

    {
        firstName: "Sophia ",
        lastName: "Martinez ",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        city: "Madrid",
        country: "Spain",
    },

    {
        firstName: "Olivia  ",
        lastName: "Taylor",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        city: "London",
        country: "United Kingdom",
    },

    {
        firstName: "Harper   ",
        lastName: "Walker ",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        city: "Edinburgh",
        country: "Scotland",
    },
    {
        firstName: "Amelia    ",
        lastName: "Clark  ",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        city: "Wellington",
        country: "New Zealand",
    },
    {
        firstName: "Ethan    ",
        lastName: "Lee  ",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        city: "Seoul",
        country: "South Korea",
    },

    {
        firstName: "Charlotte",
        lastName: "Harris",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        city: "Melbourne",
        country: "Australia",
    },
    {
        firstName: "Emma",
        lastName: "Johnson ",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        city: "New York",
        country: "USA",
    },
    {
        firstName: "Noah ",
        lastName: "Brown ",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        city: "Toronto",
        country: "Canada",
    },
    {
        firstName: "Benjamin ",
        lastName: "Thomas ",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        city: "Paris",
        country: "France",
    },
    {
        firstName: "Emma  ",
        lastName: "Johnson ",
        image:  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        city: "London",
        country: "United Kingdom",
    },
    {
        firstName: "Abigail  ",
        lastName: "King",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        city: "Los Angeles",
        country: "USA",
    },
];
const searchInput = document.getElementById("search");
const usersContainer = document.getElementById("users");

searchInput.addEventListener("input", (event) => {
let givenValue = event.target.value.trim().toLowerCase();

if(givenValue.includes("")) {
    givenValue = givenValue.split(" ");
}

let filteredUsers;

if(typeof givenValue === 'string') {
    filteredUsers = people.filter((person) => {
        const {firstName, lastName, city, country} = person;
    
        return (
            firstName.toLocaleLowerCase().includes(givenValue) ||
            lastName.toLocaleLowerCase().includes(givenValue) ||
            city.toLocaleLowerCase().includes(givenValue) ||
            country.toLocaleLowerCase().includes(givenValue)
        );
    });
} 

else {
    filteredUsers = people.filter((person) => {
        const {firstName, lastName, city, country} = person;
        return givenValue.every((singleValue) => {
            return (
                firstName.toLocaleLowerCase().includes(singleValue) ||
                lastName.toLocaleLowerCase().includes(singleValue) ||
                city.toLocaleLowerCase().includes(singleValue) ||
                country.toLocaleLowerCase().includes(singleValue)
            );
        })
   
    })
}


displayUsers(filteredUsers);         //search-de yazdiqca uygun olani taapz
});


const displayUsers = (users) => {
    usersContainer.innerHTML = "";

    if(users.length === 0) {
        usersContainer.innerHTML = "User not found";
    }
    users.forEach((person) => {
        usersContainer.innerHTML +=`<div class="bg-[#f1f3f5] flex items-center gap-3 p-2 rounded-md ">
        <!-- Image -->
        <div class="h-20 w-20 shrink-0">
        <img src="${person.image}" alt="${person.firstName} ${person.lastName}" class="h-full w-full rounded-full object-cover"/>
        </div>
        
        <!-- Credentials -->
        <div>
        <h3 class="text-lg">${person.firstName}${person.lastName}</h3>
        <p class="text-xs">${person.city}, ${person.country}</p>
        
        </div>
        </div>`
    })
}
displayUsers();