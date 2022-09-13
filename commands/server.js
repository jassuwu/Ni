const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
    async execute(interaction) {
        await interaction.reply(`**Server name**: ${interaction.guild.name}\n**Total members**: ${interaction.guild.memberCount}\n**Server creation date**: ${interaction.guild.createdAt}\n**Server owner**: ${interaction.guild.owner}\n**Verification level**: ${interaction.guild.verificationLevel}`);
    },
};