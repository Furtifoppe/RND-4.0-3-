const discord = require("discord.js")
const client = new discord.Client()
const config = require("./Config.json")

let prefix = "-)"

client.login(config.token)

client.on("ready", () => {
    console.log("connecté !")
    client.user.setStatus("dnd")
    client.user.setActivity("Crée par {RND}Furtifoppe", {type: 1})
})

client.on("message", message => {

    if(message.content === prefix + "annonce") {
        message.channel.send("RIEN A DIRE POUR L'INSTANT")
    }
    if(message.content === prefix + "info Bot") {
        message.channel.send("Ce bot a etais Crée le **18/05/2019** et a été developper par Furtifoppe")
    }
    if(message.content === prefix + "Kawaii1") {
        message.channel.send("Voici quelque chose de Kawaii: https://tenor.com/view/anime-kawaii-cat-smile-sunday-gif-12130130")
    }
    if(message.content === prefix + "Kawaii2") {
        message.channel.send("Voici quelque chose de Kawaii: https://tenor.com/view/kawaii-anime-gif-5092956")
    }
    if(message.content === prefix + "Kawaii3") {
        message.channel.send("Voici quelque chose de Kawaii: https://tenor.com/view/miku-hatsune-anime-cute-waifu-gif-9876975")
    }
    if(message.content === prefix + "Kawaii4") {
        message.channel.send("Voici quelque chose de Kawaii: https://tenor.com/view/kawaii-anime-gif-4684338")
    }
    if(message.content === prefix + "Kawaii5") {
        message.channel.send("Voici quelque chose de Kawaii: https://tenor.com/view/cute-kawaii-zomg-gif-12496012")
    }
    if(message.content === prefix + "fun1") {
        message.channel.send("Voici quelque chose qui est censser être fun: https://tenor.com/view/fat-arab-dancing-ooooooi-gif-5364687")
    }
    if(message.content === prefix + "fun2") {
        message.channel.send("Voici quelque chose qui est censser être fun: https://tenor.com/view/alcohol-dance-danceparty-party-partyhard-gif-5049882")
    }
    if(message.content === prefix + "fun3") {
        message.channel.send("Voici quelque chose qui est censser être fun: https://tenor.com/view/dance-excited-murica-america-feeling-good-gif-5150737")
    }
    
})
