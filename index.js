const Discord = require('discord.js');
const client = new Discord.Client();
const {token, prefix} = require('./config.json')


client.on("ready", () => {
	console.log("bot connecté")
	
	client.user.setPresence({
		statuts: "online",
		activity: {
			name: "test",
			type: "PLAYING"
		}
	})
})

client.on("message", message => {
		if(!message.content.startsWith(prefix)) return;
		if(message.author.bot) return;
		
		if(message.content === prefix + "test") {
		    console.log("quelq'un a fais :test")
			message.channel.send("test")
		}
			
})


client.login(process.env.TOCKEN);