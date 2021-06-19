const botdash = require('botdash.pro'); //Require botdash.pro
const discord = require('discord.js'); //Require Discord.JS
const client = new discord.Client(); //Create a discord bot client
var dashboard = ""; //Declare variable
client.login("ODIxNjYxMjk0MjQyNDMxMDA2.YFG9tg.oZYrwvBe2ZIxsS8szFbLCqu9RoE"); //Login to the bot client
client.on('ready', () => { //Client is ready
    console.log("ready"); //print messageclient
    dashboard = new botdash.APIclient("e5effd77-767f-4522-9382-c0f0ea1d32ae"); //Connect to botdash with a discord.js 
});
client.on('message', async function(message) { //Discord message recieved
    const prefix = await dashboard.getVal(message.guild.id, "botprefix"); //Get a value
    if (message.content == `${prefix}ping`) { //Simple ping command with customizable prefix
        message.channel.send('pong'); //Send pong back 
    }
});
require('http').creare.Server((req, res) => red.end('alive')).listen(3000)
