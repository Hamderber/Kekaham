settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true


onEvent('recipes', event => {

	//New Create mod recipes (skyblock) additions and removals
	

    //minecraft:dirt
    //event.recipes.create.compacting('1x minecraft:dirt',['4x #minecraft:saplings'])
    event.recipes.create.compacting('1x minecraft:dirt',['4x #minecraft:leaves'])
    //event.recipes.create.compacting('1x minecraft:dirt',['8x #forge:crops'])
    event.recipes.create.compacting('1x minecraft:dirt',['4x #quark:seed_pouch_holdable'])
    //event.recipes.create.compacting('1x minecraft:dirt',['8x #forge:seeds'])
    event.remove({id:'create:pressing/path'})

    //minecraft:cobblestone
    event.recipes.create.compacting('1x minecraft:cobblestone',['2x minecraft:dirt'])

    //fluid lava
    event.remove({id:'create:mixing/lava_from_cobble'})
    event.recipes.create.mixing(Fluid.of('minecraft:lava', 125),['#forge:cobblestone']).heated()

    //iron ingot
    event.recipes.create.compacting('10x minecraft:iron_nugget',['createdeco:iron_sheet_slab_vert'])

    //copper ingot
    event.recipes.create.compacting('10x create:copper_nugget',['createdeco:copper_sheet_slab_vert'])

    //create:andesite_alloy
    event.recipes.create.compacting('create:andesite_alloy',['16x createdeco:andesite_sheet_slab_vert'])

    //minecraft:netherrite
    event.recipes.create.compacting('10x tconstruct:netherite_nugget',['createdeco:netherite_sheet_slab_vert']).superheated()

    //blaze rod
    event.recipes.create.compacting('minecraft:blaze_rod',['6x minecraft:blaze_powder'])

    //blaze burner
    event.recipes.create.compacting('create:blaze_burner',['4x minecraft:blaze_rod', '4x minecraft:blaze_powder', 'create:empty_blaze_burner'])

    //gravel
    event.remove({id:'create:milling/gravel'})
    event.remove({id:'create:milling/sandstone'})
    event.recipes.create.milling('minecraft:sand',['#forge:gravel'])

    //mycelium
    event.recipes.create.compacting('minecraft:mycelium',['farmersdelight:brown_mushroom_colony','farmersdelight:red_mushroom_colony','minecraft:dirt'])

    //create washing
    event.remove({id:'create:splashing/gravel'})
    event.recipes.create.splashing([
        Item.of('immersiveengineering:slag'),
        Item.of('create:crushed_iron_ore').withChance(0.625),
        Item.of('minecraft:coal').withChance(0.225),
        Item.of('create:crushed_copper_ore').withChance(0.4125),
        Item.of('create:crushed_zinc_ore').withChance(0.225),
        Item.of('create:crushed_aluminum_ore').withChance(0.25),
        Item.of('create:crushed_nickel_ore').withChance(0.2475),
        Item.of('create:crushed_lead_ore').withChance(0.175),
        Item.of('create:crushed_osmium_ore').withChance(0.175),
        Item.of('create:crushed_tin_ore').withChance(0.175),
        Item.of('createautomated:crushed_prismarine').withChance(0.1),
        Item.of('create:crushed_silver_ore').withChance(0.075),
        Item.of('create:crushed_gold_ore').withChance(0.0625),
        Item.of('create:crushed_uranium_ore').withChance(0.0625),
        Item.of('tconstruct:debris_nugget').withChance(0.0625),
        Item.of('morecreatestuffs:crushed_cobalt_ore').withChance(0.00975),
        Item.of('minecraft:emerald').withChance(0.1),
        Item.of('minecraft:diamond').withChance(0.05),
        Item.of('minecraft:lapis_lazuli').withChance(0.2),
        Item.of('minecraft:quartz').withChance(0.15),
        Item.of('minecraft:prismarine_crystals').withChance(0.1)],
    ['#forge:gravel'])

    event.remove({id:'create:splashing/sand'})
    event.recipes.create.splashing([
        Item.of('minecraft:clay_ball').withChance(0.5),
        Item.of('3x minecraft:blaze_powder').withChance(0.35),
        Item.of('minecraft:bone_meal').withChance(0.35),
        Item.of('createautomated:cinder_flour_ore_piece').withChance(0.5),
        Item.of('minecraft:redstone').withChance(0.25),
        Item.of('minecraft:gunpowder').withChance(0.25),
        Item.of('minecraft:glowstone_dust').withChance(0.125),
        Item.of('create:powdered_obsidian').withChance(0.13)],
    ['minecraft:sand'])

    event.recipes.create.splashing([
        Item.of('minecraft:wheat_seeds').withChance(0.215),
        Item.of('5x minecraft:kelp').withChance(0.212),
        Item.of('farmersdelight:wild_rice').withChance(0.21),
        Item.of('farmersdelight:wild_beetroots').withChance(0.21),
        Item.of('farmersdelight:wild_potatoes').withChance(0.21),
        Item.of('farmersdelight:wild_carrots').withChance(0.21),
        Item.of('farmersdelight:wild_tomatoes').withChance(0.21),
        Item.of('farmersdelight:wild_onions').withChance(0.21),
        Item.of('farmersdelight:wild_cabbages').withChance(0.21),
        Item.of('immersiveengineering:seed').withChance(0.28),
        Item.of('minecraft:pumpkin_seeds').withChance(0.24),
        Item.of('minecraft:melon_seeds').withChance(0.24),
        Item.of('farmersdelight:brown_mushroom_colony').withChance(0.23),
        Item.of('farmersdelight:red_mushroom_colony').withChance(0.23),
        Item.of('minecraft:sugar_cane').withChance(0.21),
        Item.of('minecraft:cactus').withChance(0.21),
        Item.of('minecraft:bamboo').withChance(0.21),
        Item.of('minecraft:cocoa_beans').withChance(0.21),
        Item.of('minecraft:nether_wart').withChance(0.025)],
    ['minecraft:grass_block'])

    event.recipes.create.splashing([
        Item.of('minecraft:oak_sapling').withChance(0.02),
        Item.of('minecraft:spruce_sapling').withChance(0.02),
        Item.of('minecraft:birch_sapling').withChance(0.02),
        Item.of('minecraft:jungle_sapling').withChance(0.02),
        Item.of('minecraft:acacia_sapling').withChance(0.02),
        Item.of('minecraft:dark_oak_sapling').withChance(0.02),
        Item.of('quark:blue_blossom_sapling').withChance(0.02),
        Item.of('quark:lavender_blossom_sapling').withChance(0.02),
        Item.of('quark:orange_blossom_sapling').withChance(0.02),
        Item.of('quark:pink_blossom_sapling').withChance(0.02),
        Item.of('quark:yellow_blossom_sapling').withChance(0.02),
        Item.of('quark:red_blossom_sapling').withChance(0.02)],
    ['#minecraft:leaves'])

    event.recipes.create.splashing('minecraft:water_bucket','minecraft:bucket')

     //create polishing
     event.recipes.create.sandpaperPolishing([
         Item.of('create:crushed_iron_ore')],
     ['#forge:slag'])

     //gear and cogwheel changes
     event.remove({id:'creategears:gear_from_cogwheel'})
     event.remove({id:'creategears:gear_to_cogwheel'})
     event.remove({id:'creategears:large_gear_from_cogwheel'})
     event.remove({id:'creategears:large_gear_to_cogwheel'})
     event.remove({id:'create:crafting/kinetics/large_cogwheel'})
     event.remove({id:'create:crafting/kinetics/cogwheel'})

     event.shapeless('create:large_cogwheel',['creategears:large_gear','create:shaft'])
     event.shapeless('create:cogwheel',['creategears:gear','create:shaft'])

     /*event.recipes.create.filling('steampowered:steel_cogwheel', [
        'create:cogwheel',
        Fluid.of('tconstruct:molten_steel', 144)
      ])
      event.recipes.create.filling('steampowered:steel_large_cogwheel', [
        'create:large_cogwheel',
        Fluid.of('tconstruct:molten_steel', 576)
      ])
      event.recipes.create.filling('steampowered:cast_iron_cogwheel', [
        'create:cogwheel',
        Fluid.of('tconstruct:molten_iron', 144)
      ])
      event.recipes.create.filling('steampowered:cast_iron_large_cogwheel', [
        'create:large_cogwheel',
        Fluid.of('tconstruct:molten_iron', 576)
      ])
      event.recipes.create.filling('steampowered:bronze_cogwheel', [
        'create:cogwheel',
        Fluid.of('tconstruct:molten_tinkers_bronze', 144)
      ])
      event.recipes.create.filling('steampowered:bronze_large_cogwheel', [
        'create:large_cogwheel',
        Fluid.of('tconstruct:molten_tinkers_bronze', 576)
      ])

      //engine changes
      event.recipes.create.filling('steampowered:steel_steam_engine', [
        'create:furnace_engine',
        Fluid.of('tconstruct:molten_steel', 1008)
      ])
      event.recipes.create.filling('steampowered:steel_flywheel', [
        'create:flywheel',
        Fluid.of('tconstruct:molten_steel', 1152)
      ])
      event.recipes.create.filling('steampowered:cast_iron_steam_engine', [
        'create:furnace_engine',
        Fluid.of('tconstruct:molten_iron', 1008)
      ])
      event.recipes.create.filling('steampowered:cast_iron_flywheel', [
        'create:flywheel',
        Fluid.of('tconstruct:molten_iron', 1152)
      ])
      event.recipes.create.filling('steampowered:bronze_steam_engine', [
        'create:furnace_engine',
        Fluid.of('tconstruct:molten_tinkers_bronze', 1008)
      ])
      event.recipes.create.filling('steampowered:bronze_flywheel', [
        'create:flywheel',
        Fluid.of('tconstruct:molten_tinkers_bronze', 1152)
      ])*/

      //mixing
      event.recipes.create.mixing([Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_weaponsmith",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_toolsmith",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_temple",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_tannery",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_taiga_house",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.0625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_snowy_house",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_shepherd",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_savanna_house",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_plains_house",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_armorer",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_mason",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_fletcher",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_fisher",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_desert_house",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_armorer",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625),Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_cartographer",id:"minecraft:chest"},display:{Lore:[\'"(village)"\']}}').withChance(0.1625)],[Fluid.of('kubejs:liquid_fortune',250),'#forge:storage_blocks/emerald','minecraft:golden_carrot','#forge:bookshelves','#forge:storage_blocks/iron','8x #minecraft:saplings','minecraft:glistering_melon_slice']).superheated()

      event.recipes.create.mixing(Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/simple_dungeon",id:"minecraft:chest"},display:{Lore:[\'"(simple_dungeon)"\']}}'),[Fluid.of('kubejs:liquid_fortune',1000),'4x #forge:ingots/iron','8x #forge:cobblestone','5x minecraft:golden_apple','2x #forge:grain/wheat','3x minecraft:rotten_flesh','3x #forge:string','3x #forge:gunpowder']).superheated()

      event.recipes.create.mixing(Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/end_city_treasure",id:"minecraft:chest"},display:{Lore:[\'"(end_city_treasure)"\']}}'),[Fluid.of('kubejs:liquid_fortune',750),'2x #forge:ender_pearls','4x #forge:end_stones','#forge:storage_blocks/diamond','tconstruct:enderman_head','minecraft:end_crystal']).superheated()

      //event.recipes.create.mixing(Item.of('minecraft:chest','{BlockEntityTag:{LootTable:"minecraft:chests/village/village_toolsmith",id:"minecraft:chest"},display:{Lore:[\'"(Has loot: village_toolsmith)"\']}}'),[Fluid.of('kubejs:liquid_fortune',1000)]).superheated()

      event.recipes.create.mixing(Item.of(Fluid.of('kubejs:liquid_fortune',500)),['2x minecraft:lapis_lazuli', 'minecraft:emerald', 'minecraft:experience_bottle', 'minecraft:diamond','create:shadow_steel','create:chromatic_compound','create:refined_radiance']).superheated()

      //extracting
      //event.recipes.createautomated.extracting("minecraft:bedrock",(Item.of('minecraft:clay_ball'),Item.of('3x minecraft:blaze_powder'),Item.of('minecraft:bone_meal'),Item.of('createautomated:cinder_flour_ore_piece'),Item.of('minecraft:redstone'),Item.of('minecraft:gunpowder'),Item.of('minecraft:glowstone_dust'),Item.of('create:powdered_obsidian'))).drillDamage(10).ore(1).requiredProgressSeconds(1,128)
      //The line above doesnt work because the mod doesnt seem to support change of items dropping or multiple items

      //Tinkers construct (test)
      //event.recipes.tconstruct.melting.addMeltingRecipe("melting_test", <item:minecraft:black_dye>, <fluid:minecraft:water>, 0, 50)

      //random remove recipies/changes
      event.remove({id:'quark:building/crafting/cobblestone_bricks'})
      event.remove({id:'create:crafting/kinetics/white_sail'})
      event.remove({id:'createaddition:compacting/seed_oil'})
      event.remove({id:'minecraft:iron_trapdoor'})
      event.remove({id:'createaddition:crushing/diamond_ore'})
      event.shapeless('minecraft:iron_trapdoor', ['4x minecraft:iron_ingot', '#minecraft:wooden_trapdoors'])
      event.remove({id:'quark:building/crafting/chests/oak_chest'})
      event.remove({id:'quark:building/crafting/chests/spruce_chest'})
      event.remove({id:'quark:building/crafting/chests/birch_chest'})
      event.remove({id:'quark:building/crafting/chests/jungle_chest'})
      event.remove({id:'quark:building/crafting/chests/acacia_chest'})
      event.remove({id:'quark:building/crafting/chests/dark_oak_chest'})

      //Chests
      event.remove({id:'compactstorage:compact_chest_yellow'})
      event.shaped('compactstorage:compact_chest_yellow', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:yellow_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_yellow'})
      event.shaped('compactstorage:compact_barrel_yellow', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:yellow_stained_planks',
        S: 'quark:yellow_stained_planks_slab'
      })

      event.remove({id:'compactstorage:compact_chest_lime'})
      event.shaped('compactstorage:compact_chest_lime', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:lime_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_lime'})
      event.shaped('compactstorage:compact_barrel_lime', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:lime_stained_planks',
        S: 'quark:lime_stained_planks_slab'
      })

      event.remove({id:'compactstorage:compact_chest_pink'})
      event.shaped('compactstorage:compact_chest_pink', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:pink_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_pink'})
      event.shaped('compactstorage:compact_barrel_pink', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:pink_stained_planks',
        S: 'quark:pink_stained_planks_slab'
      })
      event.remove({id:'compactstorage:compact_chest_gray'})
      event.shaped('compactstorage:compact_chest_gray', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:gray_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_gray'})
      event.shaped('compactstorage:compact_barrel_gray', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:gray_stained_planks',
        S: 'quark:gray_stained_planks_slab'
      })
      
      event.remove({id:'compactstorage:compact_chest_light_gray'})
      event.shaped('compactstorage:compact_chest_light_gray', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:light_gray_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_light_gray'})
      event.shaped('compactstorage:compact_barrel_light_gray', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:light_gray_stained_planks',
        S: 'quark:light_gray_stained_planks_slab'
      })
      
      event.remove({id:'compactstorage:compact_chest_brown'})
      event.shaped('compactstorage:compact_chest_brown', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:brown_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_brown'})
      event.shaped('compactstorage:compact_barrel_brown', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:brown_stained_planks',
        S: 'quark:brown_stained_planks_slab'
      })
      
      event.remove({id:'compactstorage:compact_chest_blue'})
      event.shaped('compactstorage:compact_chest_blue', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:blue_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_blue'})
      event.shaped('compactstorage:compact_barrel_blue', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:blue_stained_planks',
        S: 'quark:blue_stained_planks_slab'
      })

      event.remove({id:'compactstorage:compact_chest_purple'})
      event.shaped('compactstorage:compact_chest_purple', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:purple_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_purple'})
      event.shaped('compactstorage:compact_barrel_purple', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:purple_stained_planks',
        S: 'quark:purple_stained_planks_slab'
      })
      
      event.remove({id:'compactstorage:compact_chest_cyan'})
      event.shaped('compactstorage:compact_chest_cyan', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:cyan_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_cyan'})
      event.shaped('compactstorage:compact_barrel_cyan', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:cyan_stained_planks',
        S: 'quark:cyan_stained_planks_slab'
      })
      
      event.remove({id:'compactstorage:compact_chest_red'})
      event.shaped('compactstorage:compact_chest_red', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:red_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_red'})
      event.shaped('compactstorage:compact_barrel_red', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:red_stained_planks',
        S: 'quark:red_stained_planks_slab'
      })
      
      event.remove({id:'compactstorage:compact_chest_black'})
      event.shaped('compactstorage:compact_chest_black', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:black_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_black'})
      event.shaped('compactstorage:compact_barrel_black', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:black_stained_planks',
        S: 'quark:black_stained_planks_slab'
      })

      
      event.remove({id:'compactstorage:compact_chest_green'})
      event.shaped('compactstorage:compact_chest_green', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:green_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_green'})
      event.shaped('compactstorage:compact_barrel_green', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:green_stained_planks',
        S: 'quark:green_stained_planks_slab'
      })

      
      event.remove({id:'compactstorage:compact_chest_white'})
      event.shaped('compactstorage:compact_chest_white', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:white_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_white'})
      event.shaped('compactstorage:compact_barrel_white', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:white_stained_planks',
        S: 'quark:white_stained_planks_slab'
      })

      event.remove({id:'compactstorage:compact_chest_orange'})
      event.shaped('compactstorage:compact_chest_orange', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:orange_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_orange'})
      event.shaped('compactstorage:compact_barrel_orange', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:orange_stained_planks',
        S: 'quark:orange_stained_planks_slab'
      })

      
      event.remove({id:'compactstorage:compact_chest_magenta'})
      event.shaped('compactstorage:compact_chest_magenta', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:magenta_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_magenta'})
      event.shaped('compactstorage:compact_barrel_magenta', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:magenta_stained_planks',
        S: 'quark:magenta_stained_planks_slab'
      })
      event.remove({id:'compactstorage:compact_chest_light_blue'})
      event.shaped('compactstorage:compact_chest_light_blue', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'quark:light_blue_stained_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_light_blue'})
      event.shaped('compactstorage:compact_barrel_light_blue', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'quark:light_blue_stained_planks',
        S: 'quark:light_blue_stained_planks_slab'
      })

      
      event.remove({id:'compactstorage:compact_chest_light_blue'})
      event.shaped('compactstorage:compact_chest_light_blue', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'tconstruct:skyroot_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_light_blue'})
      event.shaped('compactstorage:compact_barrel_light_blue', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'tconstruct:skyroot_planks',
        S: 'tconstruct:skyroot_planks_slab'
      })

      event.remove({id:'compactstorage:compact_chest_lime'})
      event.shaped('compactstorage:compact_chest_lime', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'tconstruct:greenheart_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_lime'})
      event.shaped('compactstorage:compact_barrel_lime', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'tconstruct:greenheart_planks',
        S: 'tconstruct:greenheart_planks_slab'
      })

      event.remove({id:'compactstorage:compact_chest_red'})
      event.shaped('compactstorage:compact_chest_red', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: 'tconstruct:bloodshroom_planks'
      })
      event.remove({id:'compactstorage:compact_barrel_red'})
      event.shaped('compactstorage:compact_barrel_red', [
        'WSW',
        'W W',
        'WSW'
      ], {
        W: 'tconstruct:bloodshroom_planks',
        S: 'tconstruct:bloodshroom_planks_slab'
      })


      event.shaped('minecraft:chest', [
        'WWW',
        'W W',
        'WWW'
      ], {
        W: '#minecraft:planks'
      })


      event.shaped('4x minecraft:sponge', [
        'WBW',
        'WPW',
        'WBW'
      ], {
        W: 'minecraft:yellow_wool',
        B: "minecraft:bucket",
        P: "create:mechanical_pump"
      })
     /* event.remove({id:'mekanism:ingot_copper'})
      event.remove({id:'mekanism:nugget_copper'})
      event.remove({id:'tconstruct:copper_ingot'})
      event.remove({id:'tconstruct:copper_block'})
      event.remove({id:'tconstruct:copper_nugget'})
      event.remove({id:'mekanism:block_copper'})*/

      //unification
     /* event.remove({output: 'immersiveengineering:nugget_copper'})
      event.remove({output: 'immersiveengineering:ingot_copper'})
      event.remove({output: 'immersiveengineering:storage_copper'})
      event.remove({output: 'immersiveengineering:slab_storage_copper'})
      event.remove({output: 'immersiveengineering:plate_copper'})
      event.remove({output: 'immersiveengineering:stick_copper'})
      event.remove({output: 'immersiveengineering:dust_copper'})*/

})






