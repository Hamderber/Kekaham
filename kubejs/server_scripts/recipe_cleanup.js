settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true


onEvent('recipes', event => {

    event.remove({id:'tconstruct:common/materials/copper_ingot_from_nuggets'})
    event.remove({id:'tconstruct:common/materials/copper_nugget_from_ingot'})
    event.remove({id:'tconstruct:common/materials/copper_ingot_from_block'})
    event.remove({id:'mekanism:processing/uranium/nugget/from_ingot'})
    event.remove({id:'createdeco:netherite_ingot'})
    event.remove({id:'createdeco:netherite_nugget'})
    //event.shapeless('9x tconstruct:netherite_nugget', 'minecraft:netherite_ingot')

    event.remove({output: 'immersiveengineering:nugget_copper'})
    event.remove({output: 'tconstruct:nugget_copper'})
    event.remove({output: 'immersiveengineering:ingot_copper'})
    event.remove({output: 'immersiveengineering:storage_copper'})
    event.remove({output: 'immersiveengineering:plate_copper'})
    event.remove({output: 'immersiveengineering:stick_copper'})
    event.remove({output: 'immersiveengineering:dust_copper'})

    event.remove({output: 'mekanism:block_copper'})
    event.remove({output: 'mekanism:ingot_copper'})
    event.remove({output: 'mekanism:nugget_copper'})

    event.remove({output: 'mekanism:block_lead'})
    event.remove({output: 'mekanism:ingot_lead'})

    event.remove({output: 'mekanism:block_uranium'})
    event.remove({output: 'mekanism:ingot_uranium'})
    event.remove({output: 'mekanism:nugget_uranium'})

    event.remove({output: 'mekanism:block_steel'})
    event.remove({output: 'mekanism:ingot_steel'})
    event.remove({output: 'mekanism:nugget_steel'})

    event.remove({output: 'immersiveengineering:nugget_lead'})
    event.remove({output: 'immersiveengineering:dust_lead'})

    //event.remove({output: 'immersiveengineering:nugget_uranium'})
    //event.remove({output: 'immersiveengineering:dust_uranium'})







})