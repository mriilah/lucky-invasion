
execute if score @s trueEnding_settings.dragonhealth matches ..1024 store result score dragonhealth trueEnding_settings run scoreboard players get @s trueEnding_settings.dragonhealth
execute if score @s trueEnding_settings.dragonhealth matches 1025.. run tellraw @s {"text":"Health value cannot be higher than 1024!","color": "red"}


execute if score @s trueEnding_settings.dragonhealth matches ..1024 run function true_ending:_settings
execute if score @s trueEnding_settings.dragonhealth matches ..1024 run playsound entity.experience_orb.pickup player @s ~ ~ ~ 1 1
execute if score @s trueEnding_settings.dragonhealth matches ..1024 run tag @e[type=ender_dragon] remove trueEnding_dragon_particlechecked

scoreboard players reset @s trueEnding_settings.dragonhealth
