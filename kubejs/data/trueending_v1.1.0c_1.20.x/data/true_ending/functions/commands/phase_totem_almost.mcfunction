
execute as @e[type=minecraft:ender_dragon] store result entity @s Health float 0.1 run data get entity @s Attributes[{Name:"minecraft:generic.max_health"}].Base
execute as @e[type=minecraft:ender_dragon] run tag @s add trueEnding_halfhealth
execute as @e[type=minecraft:ender_dragon] run tag @s add trueEnding_quarterhealth