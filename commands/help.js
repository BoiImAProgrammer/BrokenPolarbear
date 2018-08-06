const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

           message.channel.send("To see all the commands go here: https://polar-website.herokuapp.com/commands.html")
    


}
