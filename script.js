const teams = [
    {
        name: "Kolkata Knight Riders",
        shortName: "KKR",
        colors: "Purple and gold",
        primary: "#32105f",
        secondary: "#f6c64b",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/250px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Mumbai Indians",
        shortName: "MI",
        colors: "Blue and gold",
        primary: "#004ba8",
        secondary: "#ffb81c",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/250px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "Royal Challengers Bengaluru",
        shortName: "RCB",
        colors: "Red, black and gold",
        primary: "#7b1018",
        secondary: "#d5b45b",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Royal_Challengers_Bengaluru_Logo.svg/250px-Royal_Challengers_Bengaluru_Logo.svg.png"
    },
    {
        name: "Delhi Capitals",
        shortName: "DC",
        colors: "Blue and red",
        primary: "#163c8c",
        secondary: "#e51f35",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/250px-Delhi_Capitals.svg.png"
    },
    {
        name: "Sunrisers Hyderabad",
        shortName: "SRH",
        colors: "Orange and black",
        primary: "#e75b12",
        secondary: "#ffcf42",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Sunrisers_Hyderabad_Logo.svg/250px-Sunrisers_Hyderabad_Logo.svg.png"
    },
    {
        name: "Punjab Kings",
        shortName: "PBKS",
        colors: "Red and gold",
        primary: "#d71920",
        secondary: "#d8b56d",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/250px-Punjab_Kings_Logo.svg.png"
    },
    {
        name: "Rajasthan Royals",
        shortName: "RR",
        colors: "Pink and royal blue",
        primary: "#d8137f",
        secondary: "#2456a6",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/250px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png"
    }
];

const button = document.querySelector("#change-team");
const main = document.querySelector("#main");
const teamName = document.querySelector("#team-name");
const teamColor = document.querySelector("#team-color");
const teamTag = document.querySelector("#team-tag");
const teamLogo = document.querySelector("#team-logo");
const teamFallback = document.querySelector("#team-fallback");

let lastTeamIndex = -1;

function pickRandomTeam() {
    let index = Math.floor(Math.random() * teams.length);

    if (teams.length > 1) {
        while (index === lastTeamIndex) {
            index = Math.floor(Math.random() * teams.length);
        }
    }

    lastTeamIndex = index;
    return teams[index];
}

function showFallback(team) {
    teamLogo.classList.add("is-hidden");
    teamFallback.textContent = team.shortName;
    teamFallback.classList.add("is-visible");
}

function showTeam(team) {
    main.style.setProperty("--team-primary", team.primary);
    main.style.setProperty("--team-secondary", team.secondary);

    teamName.textContent = team.name;
    teamColor.textContent = team.colors;
    teamTag.textContent = team.shortName;
    teamFallback.classList.remove("is-visible");
    teamLogo.classList.remove("is-hidden");

    teamLogo.alt = `${team.name} logo`;
    teamLogo.onerror = function () {
        showFallback(team);
    };
    teamLogo.onload = function () {
        teamFallback.classList.remove("is-visible");
        teamLogo.classList.remove("is-hidden");
    };
    teamLogo.src = team.logo;
}

button.addEventListener("click", function () {
    showTeam(pickRandomTeam());
});

showTeam(pickRandomTeam());
