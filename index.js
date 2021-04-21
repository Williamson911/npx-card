const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.inverse.yellow("             William Williamson"),
    handle: chalk.inverse.blue("The Gif Master"),
    work: chalk.white("Junior Web Dev @BeCode.org"),
    github: chalk.gray("https://github.com/") + chalk.yellow("Williamson911"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("williamwilliamson91"),
    npx: chalk.red("npx") + " " + chalk.white("will"),
    labelWork: chalk.white.bold("       Work:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.white(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);