
effect give @a[distance=..10] resistance 1 3 true
particle block glass ~ ~1 ~ .3 .5 .3 .4 50 force @a[distance=..128]

playsound minecraft:block.glass.break block @a[distance=..128] ~ ~ ~ 3 .6
playsound minecraft:block.amethyst_cluster.break block @a[distance=..128] ~ ~ ~ 4 .6
playsound minecraft:block.amethyst_cluster.break block @a[distance=..128] ~ ~ ~ 4 .8
playsound minecraft:block.amethyst_cluster.break block @a[distance=..128] ~ ~ ~ 4 1.6
playsound minecraft:entity.generic.explode block @a[distance=..128] ~ ~ ~ 6 .8
particle dragon_breath ~ ~1 ~ 0 0 0 .4 40 force @a[distance=..128]


summon minecraft:marker ~ ~ ~ {Tags:["trueEnding_dragonparticle"]}
summon minecraft:marker ~ ~ ~ {Tags:["trueEnding_dragonparticle"]}
function true_ending:ambience/wave_particle2
summon firework_rocket ~ ~1 ~ {FireworksItem:{id:"firework_rocket",Count:1,tag:{Fireworks:{Explosions:[{Type:2,Colors:[I;15597823,15832831]},{Type:2,Colors:[I;16722310,16717684]}]}}},Silent:1b}
