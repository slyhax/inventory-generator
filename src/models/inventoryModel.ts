import { createRow, createEmbed, brBuilder } from '@magicyan/discord';
import {SelectMenuBuilder} from "discord.js"

export function inventoryModel() {
  return {
    embeds: [
      createEmbed({
        description: brBuilder(
	"",
	),
      }),
    ],
    components: [
     createRow(
	new SelectMenuBuilder({
	
	})
      )
    ]
  };
}

