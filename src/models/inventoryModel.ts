import {
  StringSelectMenuBuilder,
  ActionRowBuilder,
  StringSelectMenuOptionBuilder,
  ComponentType,
  APISelectMenuOption,
  Interaction,
} from "discord.js";
import { createRow, createEmbed, brBuilder } from "@magicyan/discord";

type InventoryModel = {
  name: string;
  description: string,
  icon: string
};

export function inventoryModel(interaction: Interaction) {
  if (!interaction.isChatInputCommand() && !interaction.isButton() && !interaction.isStringSelectMenu()) return;

  const embed = createEmbed({
    description: brBuilder(),
    color: "Default",
  });

  const rowOptions: InventoryModel[] = [
    {   name: "Model 1", 
	description: "simple and clean model", 
	icon: ""
    },
  ];

  const menu = new StringSelectMenuBuilder()
    .setCustomId(`menu/inventory/${interaction.user.id}`)
    .setPlaceholder("->")
    .addOptions(
      rowOptions.map<APISelectMenuOption>((opt) => ({
        label: opt.name,
	description: opt.description,
        value: opt.name.toLowerCase(),
      }))
    );

  const row = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(menu);

  return {
    embeds: [embed],
    components: [row],
  };
}

