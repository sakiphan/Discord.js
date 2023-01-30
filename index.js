 const discord = require('discord.js');

 const client = new discord.Client({
    intents: ["Guilds", "GuildMessages", "MessageContent"]
 });

client.on("ready", () => {
    console.log("Safa Hazır..." + client.user.username);
});

client.on("messageCreate", (message) => {
    if (message.content.toLocaleLowerCase() === "sa") return message.reply({
        content: "Aleykümselam kardeşim,haydaaa kıl var bozar mı?"
    })
})


 client.login('MTA2OTU5NTQ4NTMwNTg0MzcyMg.GxyVMA.WqBP94P_BSHnStPlrabr5jK_oBu-EAyONKeu8U');
 
