const LANG_KEY_HULK_HAMMER = "toolkit.mutantsbuff.upgraded_hulk_hammer";

/**
 * 修改物品工具提示
 */
ItemEvents.tooltip((event) => {
  event.addAdvanced(
    "mutantsbuff:upgraded_hulk_hammer",
    (item, advanced, text) => {
      text.remove(1);
      text.add(1, Text.gray(Text.translate(LANG_KEY_HULK_HAMMER)));
    }
  );
});
