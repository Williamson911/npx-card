#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.inverse.yellow("             William Williamson"),
    handle: chalk.inverse.blue("The Gif Master"),
    work: chalk.yellow("Junior Web Dev @BeCode.org"),
    github: chalk.green("https://github.com/") + chalk.yellow("Williamson911"),
    linkedin: chalk.green("https://linkedin.com/in/") + chalk.blue("williamwilliamson91"),
    npx: chalk.red("npx") + " " + chalk.yellow("williamson"),
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