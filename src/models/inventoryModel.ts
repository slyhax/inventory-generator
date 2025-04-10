import { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } from 'discord.js';

export function inventoryModel() {
  return {
    embeds: [
      new EmbedBuilder({
        description: "",
	}),
    ],
    components: [
      new ActionRowBuilder({
        components: [
          new SelectMenuBuilder({
            customId: 'select/inventory/${interaction.user.id}',
            options: [],
          }),
        ],
      }),
    ],
  };
}

