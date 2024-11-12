/**
 * 需要能烧成铁粒的泰拉饰品 方便空岛前期出铁
 */
const CONFLUENCE_TO_IRON_NUGGET = [
  "confluence:tally_counter",
  "confluence:dps_meter",
];

/**
 * 配方配置
 */
ServerEvents.recipes((event) => {
  // 配方阶段还未实现，先屏蔽合成，由任务获取
  event.remove([
    "lucky:lucky_block",
    "mutantsbuff:aadd",
    "mutantsbuff:creeper_shard_plus_hammer",
    "mutantsbuff:creeper_shard_plus_ham_2",
    "expandedstorage:obsidian_to_netherite_conversion_kit",
  ]);
  // 熔炉
  CONFLUENCE_TO_IRON_NUGGET.forEach((item) => {
    event.smelting("minecraft:iron_nugget", item, 0.1, 100);
  });
  // 锻造台
  event.smithing(
    "mutantsbuff:charged_hammer",
    "mutantmonsters:hulk_hammer",
    "mutantmonsters:creeper_shard"
  );
  event.smithing(
    "mutantsbuff:upgraded_hulk_hammer",
    "mutantmonsters:hulk_hammer",
    "mutantsbuff:flame_orb"
  );
  event.smithing(
    "expandedstorage:obsidian_to_netherite_conversion_kit",
    "minecraft:obsidian",
    "minecraft:netherite_ingot"
  );
});
