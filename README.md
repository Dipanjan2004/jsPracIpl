# IPL Team Picker

A small vanilla JavaScript practice project that randomly picks an Indian Premier League (IPL) team and re-themes the UI to match the team's colours, logo, and identity.

Click **Change Team** to cycle through a randomly chosen team — the gradient, accent colour, and logo update on every pick.

## Preview

The page shows a single card with:

- The selected team's logo (with a short-code fallback if the image fails to load)
- The team's full name
- The team's primary colour palette
- A button to draw a new random team

The background is a dimmed stadium photo, and the card itself takes on each team's primary/secondary colours via CSS custom properties.

## Tech Stack

- **HTML** — single-page markup (`index.html`)
- **CSS** — responsive layout, gradients, and theming via CSS variables (`style.css`)
- **JavaScript** — team data and DOM updates (`script.js`)

No build tools, frameworks, or dependencies.

## Project Structure

```
jsPracIpl/
├── images/
│   └── stadium.jpg     # Background image
├── index.html          # Markup
├── style.css           # Styling and responsive layout
└── script.js           # Team data + random picker logic
```

## Running Locally

Because the project is plain HTML/CSS/JS, you can run it two ways:

**Option 1 — open the file directly**

```bash
open index.html
```

**Option 2 — serve it (recommended)**

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## How It Works

- `script.js` defines an array of teams, each with a name, short code, colour description, primary/secondary hex codes, and logo URL.
- `pickRandomTeam()` returns a random team and avoids repeating the previous pick.
- `showTeam()` writes the team's primary/secondary colours to CSS custom properties (`--team-primary`, `--team-secondary`) on `#main`, so the gradients and accents update automatically.
- If a logo fails to load, the team's short code (e.g. `KKR`, `MI`) is shown in a circular fallback.

## Teams Included

KKR, MI, RCB, DC, SRH, PBKS, RR.

## Credits

Built as a JavaScript DOM practice exercise. Team logos are sourced from Wikipedia.
