const LANG_KEY_LWI = "lucky_world_invasion.title";

/**
 * kubejs创造物品栏key
 */
const TAB_KEY_KUBE_JS = "kubejs:tab";

/**
 * 解决kubejs创造标签栏空白问题(塞点物品)
 */
StartupEvents.modifyCreativeTab(TAB_KEY_KUBE_JS, (event) => {
  event.setIcon("lucky:lucky_world_invasion_lucky_block");
  event.setDisplayName(Text.translate(LANG_KEY_LWI));

  event.add([
    "lucky:lucky_world_invasion_lucky_block",
    "lucky:lucky_world_invasion_lucky_sword",
  ]);
});
// StartupEvents.registry("creative_mode_tab", (event) => {
//     // 注册创造物品栏，并给予创造物品栏id
//     let tab = event.create("lucky_world_invasion:items")
//     // 设置创造物品栏的图标,注意这里的物品一定要是存在的
//     tab.icon(() => Item.of("lucky:lucky_world_invasion_lucky_block"))
//     // 设置创造物品栏的显示名称,这里用的是本地化的键(在物品提示章节有提起过使用)
//     tab.displayName = Text.translatable("item_group.lucky_world_invasion.items")
//     // 往物品栏里添加物品
//     tab.content(() => [
//         "lucky:lucky_world_invasion_lucky_block",
//         "lucky:lucky_world_invasion_lucky_sword"
//     ])
// })
