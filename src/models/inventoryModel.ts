import { ButtonBuilder, ButtonStyle } from 'discord.js';
import { createRow, createEmbed, brBuilder } from "@magicyan/discord"


export function inventoryModel() {
  var embed = createEmbed({
   description: brBuilder(
   ),
   color: "Default"
  }
)

var row = createRow(

new ButtonBuilder({
})

)


return {
    embeds: [embed],
    components: [],
  };
}

