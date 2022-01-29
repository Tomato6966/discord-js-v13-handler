const {
    readdirSync
} = require("fs");
module.exports = (client) => {
    try {
        let amount = 0;
        const handlers = readdirSync(`./handlers/`).filter((file) => file.endsWith(".js"));
        for (let file of handlers) {
            let pull = require(`../handlers/${file}`);
            client.handlers.set(file, pull);
            amount++;
        }

        console.log(`${amount} Handlers Loaded`.brightGreen);
    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
};