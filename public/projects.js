import {
  gamesCrud,
  countriesAndCapitals,
  pawsBaner,
  weatherForecast,
} from "@/gifs/index";

export const projects = [
  {
    name: "Dog Slider",
    projectName: "dog-slider.js",
    codeLink: "https://github.com/bialak/dog-slider",
    demoLink: "https://bialak.github.io/dog-slider/",
    projectImage: pawsBaner,
    description:
      "I created the dog slider project as one of my first projects. I had a lot of fun making it, experimenting with animations, and discovering the possibilities of programming itself. The banner was developed using pure Vanilla JS.",
  },
  {
    name: "Games Crud",
    projectName: "games-crud.tsx",
    codeLink: "https://github.com/bialak/game-crud",
    demoLink: "https://games-to-play.netlify.app/",
    projectImage: gamesCrud,
    description:
      "I made the Games Crud project relatively recently. I created the site by setting up my own database locally on my computer. It was a new and exciting experience for me. The project allowed me to better understand the communication between the server and the client. In Games Crud, I used technologies suchas Next.js, React, and Prisma.",
  },
  {
    name: "Weather Forecast",
    projectName: "weather.tsx",
    codeLink: "https://github.com/bialak/weather",
    demoLink: "https://bialak.github.io/weather/",
    projectImage: weatherForecast,
    description:
      "When I was working on a weather forecast project, I wanted to use an external API. I wanted to see how I could retrieve data and how I could manipulate it. In the project, I used technologies such as React.",
  },
  {
    name: "Countries and Capitals Game",
    projectName: "countries-and-capitals.tsx",
    codeLink: "https://github.com/bialak/countries-and-capitals",
    demoLink: "https://bialak.github.io/countries-and-capitals/",
    projectImage: countriesAndCapitals,
    description:
      "It was my first project in React. I found this exercise on the internet, and I wanted to try my skills. It was pretty hard to change my thinking to a more React-oriented approach, but it was also fun to discover things and see that I could program more easily and faster than in pure JavaScript. In this project, you need to connect capitals to their corresponding countries.Check your geographical knowlage and enjoy the game!",
  },
];
