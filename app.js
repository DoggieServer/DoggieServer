// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setGame(`Lucian Main Penis"} servers`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});



client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
 
  if(command === "help") {
    var embed = new Discord.RichEmbed()
        .addField("`$Buy-Robux`", "Buy using Robux")
        .addField("`$Buy-Paypal`", "Buy Using Paypal")
        .setColor("000FFF")
        .setFooter("Cookie Dump     ~Coded By Lucian#4100")
        .setThumbnail("http://i.dailymail.co.uk/i/pix/2017/04/11/22/3F2A48FB00000578-4403040-image-m-34_1491945561770.jpg")
        .setTitle("`Commands`")
        .addField('\u200B', '`Admin Command`')
        .addField("`$Kick`", "this command will kick member ")
        .addField("`$Ban`", "This command will Ban member")

      message.channel.sendEmbed(embed);
    stop;
  }

  if(command === "buy-robux") {
    var embed = new Discord.RichEmbed()
        .setDescription("***Choose one Plan and Use the command*** ")
        .addField('\u200B', '\u200B')
        .addField("Daily", "Daily  **r-Daily*** ")
        .addField("Weekly", "Weekly  ***r-Weekly***")
        .addField("Monthly", "Monthly  ***r-Monthly***")
        .addField("Lifetime", "Lifetime   ***r-Lifetime**")
        .addField("Note", "Do this Command on server")
        .setColor("000FFF")
        .addField('\u200B', '\u200B')
        .setFooter("Cookie Dump     ~Coded By Lucian#4100")
        .setThumbnail("http://i.dailymail.co.uk/i/pix/2017/04/11/22/3F2A48FB00000578-4403040-image-m-34_1491945561770.jpg")
        .setTitle("Plans and Command")
    message.member.sendEmbed(embed);
    stop;
  }

  if(command === "buy-paypal") {
      var embed = new Discord.RichEmbed()
          .setDescription("***Choose one Plan and Use the command*** ")
          .addField('\u200B', '\u200B')
          .addField("Daily", "Daily -***$Buy-Paypal-Daily*** ")
          .addField("Weekly", "Weekly -***$Buy-Paypal-Weekly***")
          .addField("Monthly", "Monthly -***$Buy-Paypal-Monthly***")
          .addField("Lifetime", "Lifetime -***$Buy-Paypal-Lifetime***")
          .addField("Note", "Do this Command on server")
          .setColor("000FFF")
          .addField('\u200B', '\u200B')
          .setFooter("Cookie Dump     ~Coded By Lucian#4100")
          .setThumbnail("http://i.dailymail.co.uk/i/pix/2017/04/11/22/3F2A48FB00000578-4403040-image-m-34_1491945561770.jpg")
          .setTitle("Plans and Command")

      message.member.sendEmbed(embed);
      stop;
  }

  if(command =="my-info"){
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Your User Info")
        .setColor("000FFF")
        .addField("Username", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID", message.author.id)
        .setFooter("Dogie Server |||| Coded by Lucian#4100")
        .setThumbnail(message.author.avatarURL)
        .addField("Joined at", message.author.joinedAt);
      message.channel.sendEmbed(embed);
    
      return;
  }
   
  if(command =="p-daily") {
      var embed = new Discord.RichEmbed()
         .addField("", "")
         .setColor("000FFF")
         .setFooter("Cookie Dump")    
         .setThumbnail("http://i.dailymail.co.uk/i/pix/2017/04/11/22/3F2A48FB00000578-4403040-image-m-34_1491945561770.jpg")    
         message.channel.sendEmbed(embed)
       stop;
  }
  
  if(command =="P-Weekly"){
    var embed = new Discord.RichEmbed()
        .addField("Purchase", "We are tyring to contact @Co-Owner @Owner Please be patient and wait him dm back to you!")
        .setColor("000FFF")
        .setFooter("Cookie Dump")        
        .setThumbnail("http://i.dailymail.co.uk/i/pix/2017/04/11/22/3F2A48FB00000578-4403040-image-m-34_1491945561770.jpg")
        message.channel.sendEmbed(embed)
      stop;
  }
 
  if (command =="P-Monthly"){
    var embed=new Discord.RichEmbed()
        .addField("Your Request is Succesfully", "Monthly-Paypal")
        .addField("Payment","(SellyLink)")
        .setColor("000FFF")
        .setFooter("Cookie Dump")        
        .setThumbnail("http://i.dailymail.co.uk/i/pix/2017/04/11/22/3F2A48FB00000578-4403040-image-m-34_1491945561770.jpg")
    message.member.sendEmbed(embed)
    message.channel.sendCode("Succesfully Check your Dm's")
        stop;
        
  }

  if(command =="r-daily") {
    var embed = new Discord.RichEmbed()
       .addField("", "")
       .setDescription("https://www.roblox.com/catalog/1416338002/THE-ORIGINAL-Red-Nike-Jacket")
       .setColor("000FFF")
       .setFooter("Cookie Dump")    
       .setThumbnail("http://i.dailymail.co.uk/i/pix/2017/04/11/22/3F2A48FB00000578-4403040-image-m-34_1491945561770.jpg")    
       message.channel.sendEmbed(embed)
     stop;
  }

if(command =="r-weekly") {
  var embed = new Discord.RichEmbed()
     .addField("", "")
     .setDescription("https://www.roblox.com/catalog/1416338698/SUPREME-with-GOLD-chains")
     .setColor("000FFF")
     .setFooter("Cookie Dump")    
     .setThumbnail("http://i.dailymail.co.uk/i/pix/2017/04/11/22/3F2A48FB00000578-4403040-image-m-34_1491945561770.jpg")    
     message.channel.sendEmbed(embed)
   stop;
  }
 
if(command =="r-monthly") {
  var embed = new Discord.RichEmbed()
     .addField("", "")
     .setDescription("")
     .setColor("000FFF")
     .setFooter("Cookie Dump")    
     .setThumbnail("https://www.roblox.com/catalog/1401292569/Black-hoodie-Black-hoodie-Black-hoodie-Black")    
     message.channel.sendEmbed(embed)
   stop;
  }

if(command =="r-lifetime") {
  var embed = new Discord.RichEmbed()
     .addField("Successfull", "Link")
     .setDescription("Fuck you Felix where is the Link")
     .setColor("000FFF")
     .setFooter("Cookie Dump")    
     .setThumbnail("http://i.dailymail.co.uk/i/pix/2017/04/11/22/3F2A48FB00000578-4403040-image-m-34_1491945561770.jpg")    
     message.channel.sendEmbed(embed)
   stop;
  }
  
if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Co-Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 200)
      return message.reply("Shit stop the minumum is 2 and max is 200 STOP");

    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(config.token);
           
