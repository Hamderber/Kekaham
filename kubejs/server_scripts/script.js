// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

//variable declarations

//server = MinecraftServer

onEvent('recipes', event => {

	//Eternal Stella
	event.remove({id:'forbidden_arcanus:eternal_stella'}) //Removes all recipes for the item
	event.recipes.create.mechanical_crafting('forbidden_arcanus:eternal_stella',[
	
		'AAAAAAAAA',
		'AGIEEEIGA',
		'AINRSRNIA',
		'AERSMSREA',
		'AESMBMSEA',//mechanical crafting grid recipe w/ letters defined below representing items
		'AERSMSREA',
		'AINRSRNIA',
		'AGIEEEIGA',
		'AAAAAAAAA'],

		{ A:'forbidden_arcanus:arcane_gold_ingot', G:'minecraft:enchanted_golden_apple', I:'mysticalagriculture:inferium_block', E:'minecraft:ender_pearl', N:'minecraft:nether_star', R:'immersiveengineering:blastbrick_reinforced', S:'forbidden_arcanus:stellarite_piece', M:'minecraft:emerald', B:'minecraft:emerald_block'})

		event.remove({id:'waystones:warp_stone'})
		event.recipes.create.compacting('waystones:warp_stone',['8x waystones:warp_scroll','4x #forge:ender_pearls','4x forbidden_arcanus:corrupti_dust','4x forbidden_arcanus:xpetrified_orb','mysticalagriculture:prosperity_gemstone']).superheated()
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

/*onEvent('world.tick', event => {

	var players = EntityArrayList.getEntities("player")


Broken code :(

	players.foreach(Entity => {

		event.server.tell([ Text.lightPurple('Kekaham'), ' entity' ])

	})

})*/