//Esse código pertence ao meu modpack Modcraft

onEvent('recipes', event => {

    event.remove({ output: 'pipez:basic_upgrade' })
    event.shaped('pipez:basic_upgrade', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:iron_nugget',
        B: 'minecraft:redstone'
    })

    event.remove({ output: 'pipez:improved_upgrade' })
    event.shaped('pipez:improved_upgrade', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:gold_nugget',
        B: 'pipez:basic_upgrade'
    })

    event.remove({ output: 'pipez:advanced_upgrade' })
    event.shaped('pipez:advanced_upgrade', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:nuggets/diamond',
        B: 'pipez:improved_upgrade'
    })

    event.remove({ output: 'pipez:ultimate_upgrade' })
    event.shaped('pipez:ultimate_upgrade', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:netherite_ingot',
        B: 'pipez:advanced_upgrade'
    })

})

onEvent('item.tags', event => {
    event.add('forge:nuggets/diamond', 'silentgear:diamond_shard')
})

onEvent('block.loot_tables', event => {
	
    //
    //
    //-----OVERWORLD-----
    //
    //
        //IRON
        event.addSimpleBlock('#forge:ores/iron', 'emendatusenigmatica:iron_chunk')
        //GOLD
        event.addSimpleBlock('#forge:ores/gold', 'emendatusenigmatica:gold_chunk')
        //COPPER
        event.addSimpleBlock('#forge:ores/copper', 'emendatusenigmatica:copper_chunk')
        //ALUMINUM
        event.addSimpleBlock('#forge:ores/aluminum', 'emendatusenigmatica:aluminum_chunk')
        //SILVER
        event.addSimpleBlock('#forge:ores/silver', 'emendatusenigmatica:silver_chunk')
        //LEAD
        event.addSimpleBlock('#forge:ores/lead', 'emendatusenigmatica:lead_chunk')
        //NICKEL
        event.addSimpleBlock('#forge:ores/nickel', 'emendatusenigmatica:nickel_chunk')
        //URANIUM
        event.addSimpleBlock('#forge:ores/uranium', 'emendatusenigmatica:uranium_chunk')
        //OSMIUM
        event.addSimpleBlock('#forge:ores/osmium', 'emendatusenigmatica:osmium_chunk')
        //TIN
        event.addSimpleBlock('#forge:ores/tin', 'emendatusenigmatica:tin_chunk')
        //ZINC
        event.addSimpleBlock('#forge:ores/zinc', 'emendatusenigmatica:zinc_chunk')
        
    //
    //
    //-----NETHER ORES-----
    //
    //
        //IRON
        event.addBlock('emendatusenigmatica:iron_netherrack_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:iron_chunk'})
                })
            })
        event.addBlock('emendatusenigmatica:iron_soul_soil_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:iron_chunk'})
                })
            })
        //GOLD
        event.addBlock('emendatusenigmatica:gold_netherrack_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:gold_chunk'})
                })
            })
        event.addBlock('emendatusenigmatica:gold_soul_soil_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:gold_chunk'})
                })
            })
        //COPPER
        event.addBlock('emendatusenigmatica:copper_netherrack_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:copper_chunk'})
                })
            })
        event.addBlock('emendatusenigmatica:copper_soul_soil_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:copper_chunk'})
                })
            })
        //ALUMINUM
        event.addBlock('emendatusenigmatica:aluminum_netherrack_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:aluminum_chunk'})
                })
            })
        event.addBlock('emendatusenigmatica:aluminum_soul_soil_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:aluminum_chunk'})
                })
            })
        //SILVER
        event.addBlock('emendatusenigmatica:silver_netherrack_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:silver_chunk'})
                })
            })
        event.addBlock('emendatusenigmatica:silver_soul_soil_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:silver_chunk'})
                })
            })
        //LEAD
        event.addBlock('emendatusenigmatica:lead_netherrack_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lead_chunk'})
                })
            })
        event.addBlock('emendatusenigmatica:lead_soul_soil_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lead_chunk'})
                })
            })
        //NICKEL
        event.addBlock('emendatusenigmatica:nickel_netherrack_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:nickel_chunk'})
                })
            })
        event.addBlock('emendatusenigmatica:nickel_soul_soil_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:nickel_chunk'})
                })
            })
        //URANIUM
        event.addBlock('emendatusenigmatica:uranium_netherrack_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:uranium_chunk'})
                })
            })
        event.addBlock('emendatusenigmatica:uranium_soul_soil_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:uranium_chunk'})
                })
            })
        //OSMIUM
        event.addBlock('emendatusenigmatica:osmium_netherrack_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:osmium_chunk'})
                })
            })
        event.addBlock('emendatusenigmatica:osmium_soul_soil_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:osmium_chunk'})
                })
            })
        //TIN
        event.addBlock('emendatusenigmatica:tin_netherrack_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:tin_chunk'})
                })
            })
        event.addBlock('emendatusenigmatica:tin_soul_soil_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:tin_chunk'})
                })
            })
        //ZINC
        event.addBlock('emendatusenigmatica:zinc_netherrack_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:zinc_chunk'})
                })
            })
        event.addBlock('emendatusenigmatica:zinc_soul_soil_ore', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:zinc_chunk'})
                })
            })
        //COBALT
        event.addBlock('#forge:ores/cobalt', table => {
            table.pool(pool => {
                pool.setUniformRolls(1, 2)
                pool.survivesExplosion()
                pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:cobalt_chunk'})
                }) 
            }) 
    //
    //
    //-----END ORES-----
    //
    //
        //IRON
        event.addSimpleBlock('emendatusenigmatica:iron_end_stone_ore', 'emendatusenigmatica:iron_cluster')
        //GOLD
        event.addSimpleBlock('emendatusenigmatica:gold_end_stone_ore', 'emendatusenigmatica:gold_cluster')
        //COPPER
        event.addSimpleBlock('emendatusenigmatica:copper_end_stone_ore', 'emendatusenigmatica:copper_cluster')
        //ALUMINUM
        event.addSimpleBlock('emendatusenigmatica:aluminum_end_stone_ore', 'emendatusenigmatica:aluminum_cluster')
        //SILVER
        event.addSimpleBlock('emendatusenigmatica:silver_end_stone_ore', 'emendatusenigmatica:silver_cluster')
        //LEAD
        event.addSimpleBlock('emendatusenigmatica:lead_end_stone_ore', 'emendatusenigmatica:lead_cluster')
        //NICKEL
        event.addSimpleBlock('emendatusenigmatica:nickel_end_stone_ore', 'emendatusenigmatica:nickel_cluster')
        //URANIUM
        event.addSimpleBlock('emendatusenigmatica:uranium_end_stone_ore', 'emendatusenigmatica:uranium_cluster')
        //OSMIUM
        event.addSimpleBlock('emendatusenigmatica:osmium_end_stone_ore', 'emendatusenigmatica:osmium_cluster')
        //TIN
        event.addSimpleBlock('emendatusenigmatica:tin_end_stone_ore', 'emendatusenigmatica:tin_cluster')
        //ZINC
        event.addSimpleBlock('emendatusenigmatica:zinc_end_stone_ore', 'emendatusenigmatica:zinc_cluster')
    //
    //fin
    //
    })

    onEvent("recipes", event => {
        event.custom({
            "type": "silents_mechanisms:alloy_smelting",
            "process_time": 600,
            "ingredients": [{
                    "value": [{
                        "tag": "forge:ingots/crimson_steel"
                    }, ],
                    "count": 1
                },
                {
                    "value": {
                        "item": "silentgear:azure_electrum_ingot"
                    },
                    "count": 1
                },
                {
                    "value": {
                        "item": "silentgear:crushed_shulker_shell"
                    },
                    "count": 1
                },
                {
                    "value": {
                        "item": "minecraft:netherite_scrap"
                    },
                    "count": 1
                }
            ],
            "result": {
                "item": "silentgear:tyrian_steel_ingot",
                "count": 4
            }
    
        })
    
        event.custom({
                "type": "astralsorcery:block_transmutation",
                "input": [
                  {
                    "block": "emendatusenigmatica:iron_ore",
                    "display": {
                      "item": "emendatusenigmatica:iron_ore",
                      "count": 1
                    }
                  }
                ],
                "output": {
                  "block": "astralsorcery:starmetal_ore"
                },
                "display": {
                  "item": "astralsorcery:starmetal_ore",
                  "count": 1
                },
                "starlight": 100.0 
        })
    })

    onEvent('recipes', e => {

        e.remove({id: 'appliedenergistics2:grinder/flour'})
    
        let hided = [
        'titanium:iron_gear',
        'titanium:gold_gear',
        'titanium:diamond_gear',
        'appliedenergistics2:flour',
        'emendatusenigmatica:quartz_gear'
        ]
        //removes
        let changed = [
        
        ]
        for (let item of hided){
            e.remove({output: item})
        }
        for (let trocado of changed){
            e.remove({output: trocado, type: 'minecraft:crafting_shaped'})
            e.remove({output: trocado, type: 'minecraft:crafting_shapeless'})
            e.remove({output: trocado, type: 'silentgear:damage_item'})
        }
    
    })

    //   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//MATERIAL UNIFICATION SCRIPT
//BY NEEPNOOP & ANOKKA / 2021
//
    //TEMPLATE
	//event.replaceOutput({}, 'MOD:ITEM', 'emendatusenigmatica:ITEM')
	//                            ^the item to replace   ^the replacement
	// Favorise 'Emendatus Enigmatica' (emendatusenigmatica)
	//Else: Thermal series (thermal). Worst case just trash your computer.
	//REMEMBER TO CONFIGURE ALL ITEMS
	
events.listen('recipes', (event) => {

    //
    //
    //-----VANILLA-----
    //
    //
    
    //COAL
        //Coal dust
        event.replaceOutput({}, 'silents_mechanisms:coal_dust', 'emendatusenigmatica:coal_dust')
        event.replaceOutput({}, 'mekanism:dust_coal', 'emendatusenigmatica:coal_dust')
        event.replaceOutput({}, 'terraqueous:coal_dust', 'emendatusenigmatica:coal_dust')
    //
    //IRON
        //Iron dust
        event.replaceOutput({}, 'immersiveengineering:dust_iron', 'emendatusenigmatica:iron_dust')
        event.replaceOutput({}, 'silents_mechanisms:iron_dust', 'emendatusenigmatica:iron_dust')
        event.replaceOutput({}, 'mekanism:dust_iron', 'emendatusenigmatica:iron_dust')
        event.replaceOutput({}, 'pedestals:dustiron', 'emendatusenigmatica:iron_dust')
        event.replaceOutput({}, 'mysticalworld:iron_dust', 'emendatusenigmatica:iron_dust')
        event.replaceOutput({}, 'thermal:iron_dust', 'emendatusenigmatica:iron_dust')
        event.replaceOutput({}, 'occultism:iron_dust', 'emendatusenigmatica:iron_dust')
        event.replaceOutput({}, 'terraqueous:iron_dust', 'emendatusenigmatica:iron_dust')
        event.replaceOutput({}, 'appliedenergistics2:iron_dust', 'emendatusenigmatica:iron_dust')
        //Iron gear
        event.replaceOutput({}, 'thermal:iron_gear', 'emendatusenigmatica:iron_gear')
        event.replaceOutput({}, 'titanium:iron_gear', 'emendatusenigmatica:iron_gear')
        //Iron plate
        event.replaceOutput({}, 'immersiveengineering:plate_iron', 'emendatusenigmatica:iron_plate')
        event.replaceOutput({}, 'thermal:iron_plate', 'emendatusenigmatica:iron_plate')
        event.replaceOutput({}, 'create:iron_sheet', 'emendatusenigmatica:iron_plate')
        //Iron rod
        event.replaceOutput({}, 'silentgear:iron_rod', 'emendatusenigmatica:iron_rod')
        event.replaceOutput({}, 'immersiveengineering:stick_iron', 'emendatusenigmatica:iron_rod')
        event.replaceOutput({}, 'buildersaddition:iron_rod', 'emendatusenigmatica:iron_rod')
        event.replaceOutput({}, 'createaddition:iron_rod', 'emendatusenigmatica:iron_rod')
    //
    //GOLD
        //Gold dust
        event.replaceOutput({}, 'immersiveengineering:dust_gold', 'emendatusenigmatica:gold_dust')
        event.replaceOutput({}, 'silents_mechanisms:gold_dust', 'emendatusenigmatica:gold_dust')
        event.replaceOutput({}, 'mekanism:dust_gold', 'emendatusenigmatica:gold_dust')
        event.replaceOutput({}, 'pedestals:dustgold', 'emendatusenigmatica:gold_dust')
        event.replaceOutput({}, 'mysticalworld:dust_gold', 'emendatusenigmatica:gold_dust')
        event.replaceOutput({}, 'thermal:gold_dust', 'emendatusenigmatica:gold_dust')
        event.replaceOutput({}, 'occultism:gold_dust', 'emendatusenigmatica:gold_dust')
        event.replaceOutput({}, 'terraqueous:gold_dust', 'emendatusenigmatica:gold_dust')
        event.replaceOutput({}, 'appliedenergistics2:gold_dust', 'emendatusenigmatica:gold_dust')
        //Gold gear
        event.replaceOutput({}, 'thermal:gold_gear', 'emendatusenigmatica:gold_gear')
        event.replaceOutput({}, 'titanium:gold_gear', 'emendatusenigmatica:gold_gear')
        //Gold plate
        event.replaceOutput({}, 'thermal:gold_plate', 'emendatusenigmatica:gold_plate')
        event.replaceOutput({}, 'immersiveengineering:plate_gold', 'emendatusenigmatica:gold_plate')
        //Gold rod
        event.replaceOutput({}, 'immersiveposts:stick_gold', 'emendatusenigmatica:gold_rod')
        event.replaceOutput({}, 'createaddition:gold_rod', 'emendatusenigmatica:gold_rod')
    //
    //DIAMOND
        //Diamond dust
        event.replaceOutput({}, 'createaddition:diamond_grit', 'emendatusenigmatica:diamond_dust')
        event.replaceOutput({}, 'mekanism:dust_diamond', 'emendatusenigmatica:diamond_dust')
        event.replaceOutput({}, 'thermal:diamond_dust', 'emendatusenigmatica:diamond_dust')
        event.replaceOutput({}, 'terraqueous:diamond_dust', 'emendatusenigmatica:diamond_dust')
        //Diamond gear
        event.replaceOutput({}, 'thermal:diamond_gear', 'emendatusenigmatica:diamond_gear')
        event.replaceOutput({}, 'titanium:diamond_gear', 'emendatusenigmatica:diamond_gear')
    //
    //EMERALD
        //Emerald dust
        event.replaceOutput({}, 'mekanism:dust_emerald', 'emendatusenigmatica:emerald_dust')
        event.replaceOutput({}, 'thermal:emerald_dust', 'emendatusenigmatica:emerald_dust')
        event.replaceOutput({}, 'terraqueous:emerald_dust', 'emendatusenigmatica:emerald_dust')
        //Emerald gear
        event.replaceOutput({}, 'thermal:emerald_gear', 'emendatusenigmatica:emerald_gear')
    //
    //LAPIS LAZULI
        //Lapis dust
        event.replaceOutput({}, 'thermal:lapis_dust', 'emendatusenigmatica:lapis_dust')
        event.replaceOutput({}, 'mekanism:dust_lapis_lazuli', 'emendatusenigmatica:lapis_dust')
        //Lapis gear
        event.replaceOutput({}, 'thermal:lapis_lazuli', 'emendatusenigmatica:lapis_gear')
        //Lapis plate
        event.replaceOutput({}, 'create:lapis_sheet', 'emendatusenigmatica:lapis_plate')
    //
    //NETHER QUARTZ
        //Nether quartz dust
        event.replaceOutput({}, 'mekanism:dust_quartz', 'emendatusenigmatica:quartz_dust')
        event.replaceOutput({}, 'thermal:quartz_dust', 'emendatusenigmatica:quartz_dust')
        event.replaceOutput({}, 'appliedenergistics2:nether_quartz_dust', 'emendatusenigmatica:quartz_dust')
        //Nether quartz gear
        event.replaceOutput({}, 'thermal:quartz_gear', 'emendatusenigmatica:quartz_gear')
    //
    //
    //-----MODDED METALS-----
    //
    // man have i not been excited to do these
    
    //COPPER why the fuck do every mod add copper?
        //Copper ingot
        event.replaceOutput({}, 'silents_mechanisms:copper_ingot', 'emendatusenigmatica:copper_ingot')
        event.replaceOutput({}, 'tmechworks:copper_ingot', 'emendatusenigmatica:copper_ingot')
        event.replaceOutput({}, 'mekanism:ingot_copper', 'emendatusenigmatica:copper_ingot')
        event.replaceOutput({}, 'mysticalworld:copper_ingot', 'emendatusenigmatica:copper_ingot')
        event.replaceOutput({}, 'thermal:copper_ingot', 'emendatusenigmatica:copper_ingot')
        event.replaceOutput({}, 'immersiveengineering:ingot_copper', 'emendatusenigmatica:copper_ingot')
        event.replaceOutput({}, 'occultism:copper_ingot', 'emendatusenigmatica:copper_ingot')
        event.replaceOutput({}, 'create:copper_ingot', 'emendatusenigmatica:copper_ingot')
        event.replaceOutput({}, 'tconstruct:copper_ingot', 'emendatusenigmatica:copper_ingot')
        //Copper block
        event.replaceOutput({}, 'silents_mechanisms:copper_block', 'emendatusenigmatica:copper_block')
        event.replaceOutput({}, 'tmechworks:copper_block', 'emendatusenigmatica:copper_block')
        event.replaceOutput({}, 'mekanism:block_copper', 'emendatusenigmatica:copper_block')
        event.replaceOutput({}, 'mysticalworld:copper_block', 'emendatusenigmatica:copper_block')
        event.replaceOutput({}, 'thermal:copper_block', 'emendatusenigmatica:copper_block')
        event.replaceOutput({}, 'immersiveengineering:storage_copper', 'emendatusenigmatica:copper_block')
        event.replaceOutput({}, 'occultism:copper_block', 'emendatusenigmatica:copper_block')
        event.replaceOutput({}, 'create:copper_block', 'emendatusenigmatica:copper_block')
        event.replaceOutput({}, 'tconstruct:copper_block', 'emendatusenigmatica:copper_block')
        //Copper nugget
        event.replaceOutput({}, 'silents_mechanisms:copper_nugget', 'emendatusenigmatica:copper_nugget')
        event.replaceOutput({}, 'tmechworks:copper_nugget', 'emendatusenigmatica:copper_nugget')
        event.replaceOutput({}, 'mekanism:nugget_copper', 'emendatusenigmatica:copper_nugget')
        event.replaceOutput({}, 'mysticalworld:copper_nugget', 'emendatusenigmatica:copper_nugget')
        event.replaceOutput({}, 'thermal:copper_nugget', 'emendatusenigmatica:copper_nugget')
        event.replaceOutput({}, 'immersiveengineering:nugget_copper', 'emendatusenigmatica:copper_nugget')
        event.replaceOutput({}, 'occultism:copper_nugget', 'emendatusenigmatica:copper_nugget')
        event.replaceOutput({}, 'create:copper_nugget', 'emendatusenigmatica:copper_nugget')
        event.replaceOutput({}, 'tconstruct:copper_nugget', 'emendatusenigmatica:copper_nugget')
        //Copper dust
        event.replaceOutput({}, 'immersiveengineering:dust_copper', 'emendatusenigmatica:copper_dust')
        event.replaceOutput({}, 'silents_mechanisms:copper_dust', 'emendatusenigmatica:copper_dust')
        event.replaceOutput({}, 'mekanism:dust_copper', 'emendatusenigmatica:copper_dust')
        event.replaceOutput({}, 'pedestals:dustcopper', 'emendatusenigmatica:copper_dust')
        event.replaceOutput({}, 'mysticalworld:copper_dust', 'emendatusenigmatica:copper_dust')
        event.replaceOutput({}, 'thermal:copper_dust', 'emendatusenigmatica:copper_dust')
        event.replaceOutput({}, 'occultism:copper_dust', 'emendatusenigmatica:copper_dust')
        //Copper gear
        event.replaceOutput({}, 'thermal:copper_gear', 'emendatusenigmatica:copper_gear')
        //Copper plate
        event.replaceOutput({}, 'create:copper_sheet', 'emendatusenigmatica:copper_plate')
        event.replaceOutput({}, 'thermal:copper_plate', 'emendatusenigmatica:copper_plate')
        event.replaceOutput({}, 'immersiveengineering:plate_copper', 'emendatusenigmatica:copper_plate')
        //Copper rod
        event.replaceOutput({}, 'immersiveposts:stick_copper', 'emendatusenigmatica:copper_rod')
        event.replaceOutput({}, 'createaddition:copper_rod', 'emendatusenigmatica:copper_rod')
    //
    //ALUMINUM this one i feared too. aluminum, aluminium, bauxite? wtf?
        //Aluminum ingot
        event.replaceOutput({}, 'silents_mechanisms:aluminum_ingot', 'emendatusenigmatica:aluminum_ingot')
        event.replaceOutput({}, 'tmechworks:aluminum_ingot', 'emendatusenigmatica:aluminum_ingot')
        event.replaceOutput({}, 'immersiveengineering:ingot_aluminium', 'emendatusenigmatica:aluminum_ingot')
        //Aluminum block
        event.replaceOutput({}, 'silents_mechanisms:aluminum_block', 'emendatusenigmatica:aluminum_block')
        event.replaceOutput({}, 'tmechworks:aluminum_block', 'emendatusenigmatica:aluminum_block')
        event.replaceOutput({}, 'immersiveengineering:storage_aluminium', 'emendatusenigmatica:aluminum_block')
        //Aluminum nugget
        event.replaceOutput({}, 'silents_mechanisms:aluminum_nugget', 'emendatusenigmatica:aluminum_nugget')
        event.replaceOutput({}, 'tmechworks:aluminum_nugget', 'emendatusenigmatica:aluminum_nugget')
        event.replaceOutput({}, 'immersiveengineering:nugget_aluminium', 'emendatusenigmatica:aluminum_nugget')
        //Aluminum dust
        event.replaceOutput({}, 'silents_mechanisms:aluminum_dust', 'emendatusenigmatica:aluminum_dust')
        event.replaceOutput({}, 'pedestals:dustaluminum', 'emendatusenigmatica:aluminum_dust')
        event.replaceOutput({}, 'immersiveengineering:dust_aluminium', 'emendatusenigmatica:aluminum_dust')
        //Aluminum plate
        event.replaceOutput({}, 'immersiveengineering:plate_aluminium', 'emendatusenigmatica:aluminum_plate')
        //Aluminum rod
        event.replaceOutput({}, 'immersiveengineering:stick_aluminium', 'emendatusenigmatica:aluminum_rod')
    //
    //SILVER
        //Silver ingot
        event.replaceOutput({}, 'silents_mechanisms:silver_ingot', 'emendatusenigmatica:silver_ingot')
        event.replaceOutput({}, 'mysticalworld:silver_ingot', 'emendatusenigmatica:silver_ingot')
        event.replaceOutput({}, 'thermal:silver_ingot', 'emendatusenigmatica:silver_ingot')
        event.replaceOutput({}, 'immersiveengineering:ingot_silver', 'emendatusenigmatica:silver_ingot')
        event.replaceOutput({}, 'occultism:silver_ingot', 'emendatusenigmatica:silver_ingot')
        //Silver block
        event.replaceOutput({}, 'silents_mechanisms:silver_block', 'emendatusenigmatica:silver_block')
        event.replaceOutput({}, 'mysticalworld:silver_block', 'emendatusenigmatica:silver_block')
        event.replaceOutput({}, 'thermal:silver_block', 'emendatusenigmatica:silver_block')
        event.replaceOutput({}, 'immersiveengineering:storage_silver', 'emendatusenigmatica:silver_block')
        event.replaceOutput({}, 'occultism:silver_block', 'emendatusenigmatica:silver_block')
        //Silver nugget
        event.replaceOutput({}, 'silents_mechanisms:silver_nugget', 'emendatusenigmatica:silver_nugget')
        event.replaceOutput({}, 'mysticalworld:silver_nugget', 'emendatusenigmatica:silver_nugget')
        event.replaceOutput({}, 'thermal:silver_nugget', 'emendatusenigmatica:silver_nugget')
        event.replaceOutput({}, 'immersiveengineering:nugget_silver', 'emendatusenigmatica:silver_nugget')
        event.replaceOutput({}, 'occultism:silver_nugget', 'emendatusenigmatica:silver_nugget')
        //Silver dust
        event.replaceOutput({}, 'silents_mechanisms:silver_dust', 'emendatusenigmatica:silver_dust')
        event.replaceOutput({}, 'mysticalworld:silver_dust', 'emendatusenigmatica:silver_dust')
        event.replaceOutput({}, 'thermal:silver_dust', 'emendatusenigmatica:silver_dust')
        event.replaceOutput({}, 'immersiveengineering:dust_silver', 'emendatusenigmatica:silver_dust')
        event.replaceOutput({}, 'occultism:silver_dust', 'emendatusenigmatica:silver_dust')
        event.replaceOutput({}, 'pedestals:dustsilver', 'emendatusenigmatica:silver_dust')
        //Silver gear
        event.replaceOutput({}, 'thermal:silver_gear', 'emendatusenigmatica:silver_gear')
        //Silver plate
        event.replaceOutput({}, 'thermal:silver_plate', 'emendatusenigmatica:silver_plate')
        event.replaceOutput({}, 'immersiveengineering:plate_silver', 'emendatusenigmatica:silver_plate')
        //Silver rod
        event.replaceOutput({}, 'immersiveposts:stick_silver', 'emendatusenigmatica:silver_rod')
    //
    //LEAD
        //Lead ingot
        event.replaceOutput({}, 'silents_mechanisms:lead_ingot', 'emendatusenigmatica:lead_ingot')
        event.replaceOutput({}, 'mekanism:ingot_lead', 'emendatusenigmatica:lead_ingot')
        event.replaceOutput({}, 'mysticalworld:lead_ingot', 'emendatusenigmatica:lead_ingot')
        event.replaceOutput({}, 'thermal:lead_ingot', 'emendatusenigmatica:lead_ingot')
        event.replaceOutput({}, 'immersiveengineering:ingot_lead', 'emendatusenigmatica:lead_ingot')
        event.replaceOutput({}, 'eidolon:lead_ingot', 'emendatusenigmatica:lead_ingot')
        //Lead block
        event.replaceOutput({}, 'silents_mechanisms:lead_block', 'emendatusenigmatica:lead_block')
        event.replaceOutput({}, 'mekanism:block_lead', 'emendatusenigmatica:lead_block')
        event.replaceOutput({}, 'mysticalworld:lead_block', 'emendatusenigmatica:lead_block')
        event.replaceOutput({}, 'thermal:lead_block', 'emendatusenigmatica:lead_block')
        event.replaceOutput({}, 'immersiveengineering:storage_lead', 'emendatusenigmatica:lead_block')
        event.replaceOutput({}, 'eidolon:lead_block', 'emendatusenigmatica:lead_block')
        //Lead nugget
        event.replaceOutput({}, 'silents_mechanisms:lead_nugget', 'emendatusenigmatica:lead_nugget')
        event.replaceOutput({}, 'mekanism:nugget_lead', 'emendatusenigmatica:lead_nugget')
        event.replaceOutput({}, 'mysticalworld:lead_nugget', 'emendatusenigmatica:lead_nugget')
        event.replaceOutput({}, 'thermal:lead_nugget', 'emendatusenigmatica:lead_nugget')
        event.replaceOutput({}, 'immersiveengineering:nugget_lead', 'emendatusenigmatica:lead_nugget')
        event.replaceOutput({}, 'eidolon:lead_nugget', 'emendatusenigmatica:lead_nugget')
        //Lead dust
        event.replaceOutput({}, 'silents_mechanisms:lead_dust', 'emendatusenigmatica:lead_dust')
        event.replaceOutput({}, 'mekanism:dust_lead', 'emendatusenigmatica:lead_dust')
        event.replaceOutput({}, 'mysticalworld:lead_dust', 'emendatusenigmatica:lead_dust')
        event.replaceOutput({}, 'thermal:lead_dust', 'emendatusenigmatica:lead_dust')
        event.replaceOutput({}, 'immersiveengineering:dust_lead', 'emendatusenigmatica:lead_dust')
        event.replaceOutput({}, 'eidolon:lead_dust', 'emendatusenigmatica:lead_dust')
        event.replaceOutput({}, 'pedestals:dustlead', 'emendatusenigmatica:lead_dust')
        //Lead gear
        event.replaceOutput({}, 'thermal:lead_gear', 'emendatusenigmatica:lead_gear')
        //Lead plate
        event.replaceOutput({}, 'thermal:lead_plate', 'emendatusenigmatica:lead_plate')
        event.replaceOutput({}, 'immersiveengineering:plate_lead', 'emendatusenigmatica:lead_plate')
        //Lead rod
        event.replaceOutput({}, 'immersiveposts:stick_lead', 'emendatusenigmatica:lead_rod')
    //
    //NICKEL
        //Nickel ingot
        event.replaceOutput({}, 'silents_mechanisms:nickel_ingot', 'emendatusenigmatica:nickel_ingot')
        event.replaceOutput({}, 'thermal:nickel_ingot', 'emendatusenigmatica:nickel_ingot')
        event.replaceOutput({}, 'immersiveengineering:ingot_nickel', 'emendatusenigmatica:nickel_ingot')
        //Nickel block
        event.replaceOutput({}, 'silents_mechanisms:nickel_block', 'emendatusenigmatica:nickel_block')
        event.replaceOutput({}, 'thermal:nickel_block', 'emendatusenigmatica:nickel_block')
        event.replaceOutput({}, 'immersiveengineering:storage_nickel', 'emendatusenigmatica:nickel_block')
        //Nickel nugget
        event.replaceOutput({}, 'silents_mechanisms:nickel_nugget', 'emendatusenigmatica:nickel_nugget')
        event.replaceOutput({}, 'thermal:nickel_nugget', 'emendatusenigmatica:nickel_nugget')
        event.replaceOutput({}, 'immersiveengineering:nugget_nickel', 'emendatusenigmatica:nickel_nugget')
        //Nickel dust
        event.replaceOutput({}, 'silents_mechanisms:nickel_dust', 'emendatusenigmatica:nickel_dust')
        event.replaceOutput({}, 'thermal:nickel_dust', 'emendatusenigmatica:nickel_dust')
        event.replaceOutput({}, 'immersiveengineering:dust_nickel', 'emendatusenigmatica:nickel_dust')
        event.replaceOutput({}, 'pedestals:dustnickel', 'emendatusenigmatica:nickel_dust')
        //Nickel gear
        event.replaceOutput({}, 'thermal:nickel_gear', 'emendatusenigmatica:nickel_gear')
        //Nickel plate
        event.replaceOutput({}, 'thermal:nickel_plate', 'emendatusenigmatica:nickel_plate')
        event.replaceOutput({}, 'immersiveengineering:plate_nickel', 'emendatusenigmatica:nickel_plate')
        //Nickel rod
        event.replaceOutput({}, 'immersiveposts:stick_nickel', 'emendatusenigmatica:nickel_rod')
    //URANIUM
        //Uranium ingot (yellorium?)
        event.replaceOutput({}, 'silents_mechanisms:uranium_ingot', 'emendatusenigmatica:uranium_ingot')
        event.replaceOutput({}, 'mekanism:ingot_uranium', 'emendatusenigmatica:uranium_ingot')
        event.replaceOutput({}, 'immersiveengineering:ingot_uranium', 'emendatusenigmatica:uranium_ingot')
        //Uranium block
        event.replaceOutput({}, 'silents_mechanisms:uranium_block', 'emendatusenigmatica:uranium_block')
        event.replaceOutput({}, 'mekanism:block_uranium', 'emendatusenigmatica:uranium_block')
        event.replaceOutput({}, 'immersiveengineering:storage_uranium', 'emendatusenigmatica:uranium_block')
        //Uranium nugget
        event.replaceOutput({}, 'silents_mechanisms:uranium_nugget', 'emendatusenigmatica:uranium_nugget')
        event.replaceOutput({}, 'mekanism:nugget_uranium', 'emendatusenigmatica:uranium_nugget')
        event.replaceOutput({}, 'immersiveengineering:nugget_uranium', 'emendatusenigmatica:uranium_nugget')
        //Uranium dust
        event.replaceOutput({}, 'silents_mechanisms:uranium_dust', 'emendatusenigmatica:uranium_dust')
        event.replaceOutput({}, 'mekanism:dust_uranium', 'emendatusenigmatica:uranium_dust')
        event.replaceOutput({}, 'immersiveengineering:dust_uranium', 'emendatusenigmatica:uranium_dust')
        event.replaceOutput({}, 'pedestals:dusturanium', 'emendatusenigmatica:uranium_dust')
        //Uranium plate
        event.replaceOutput({}, 'immersiveengineering:plate_uranium', 'emendatusenigmatica:uranium_plate')
        //Uranium post
        event.replaceOutput({}, 'immersiveposts:stick_uranium', 'emendatusenigmatica:uranium_rod')
    //
    //OSMIUM
        //Osmium ingot
        event.replaceOutput({}, 'mekanism:ingot_osmium', 'emendatusenigmatica:osmium_ingot')
        //Osmium block
        event.replaceOutput({}, 'mekanism:block_osmium', 'emendatusenigmatica:osmium_block')
        //Osmium nugget
        event.replaceOutput({}, 'mekanism:nugget_osmium', 'emendatusenigmatica:osmium_nugget')
        //Osmium dust
        event.replaceOutput({}, 'mekanism:dust_osmium', 'emendatusenigmatica:osmium_dust')
        event.replaceOutput({}, 'pedestals:dustosmium', 'emendatusenigmatica:osmium_dust')
    //
    //TIN
        //Tin ingot
        event.replaceOutput({}, 'silents_mechanisms:tin_ingot', 'emendatusenigmatica:tin_ingot')
        event.replaceOutput({}, 'mekanism:ingot_tin', 'emendatusenigmatica:tin_ingot')
        event.replaceOutput({}, 'mysticalworld:tin_ingot', 'emendatusenigmatica:tin_ingot')
        event.replaceOutput({}, 'thermal:tin_ingot', 'emendatusenigmatica:tin_ingot')
        //Tin block
        event.replaceOutput({}, 'silents_mechanisms:tin_block', 'emendatusenigmatica:tin_block')
        event.replaceOutput({}, 'mekanism:block_tin', 'emendatusenigmatica:tin_block')
        event.replaceOutput({}, 'mysticalworld:tin_block', 'emendatusenigmatica:tin_block')
        event.replaceOutput({}, 'thermal:tin_block', 'emendatusenigmatica:tin_block')
        //Tin nugget
        event.replaceOutput({}, 'silents_mechanisms:tin_nugget', 'emendatusenigmatica:tin_nugget')
        event.replaceOutput({}, 'mekanism:nugget_tin', 'emendatusenigmatica:tin_nugget')
        event.replaceOutput({}, 'mysticalworld:tin_nugget', 'emendatusenigmatica:tin_nugget')
        event.replaceOutput({}, 'thermal:tin_nugget', 'emendatusenigmatica:tin_nugget')
        //Tin dust
        event.replaceOutput({}, 'silents_mechanisms:tin_dust', 'emendatusenigmatica:tin_dust')
        event.replaceOutput({}, 'mekanism:dust_tin', 'emendatusenigmatica:tin_dust')
        event.replaceOutput({}, 'mysticalworld:tin_dust', 'emendatusenigmatica:tin_dust')
        event.replaceOutput({}, 'thermal:tin_dust', 'emendatusenigmatica:tin_dust')
        event.replaceOutput({}, 'pedestals:dusttin', 'emendatusenigmatica:tin_dust')
        //Tin gear
        event.replaceOutput({}, 'thermal:tin_gear', 'emendatusenigmatica:tin_gear')
        //Tin plate
        event.replaceOutput({}, 'thermal:tin_plate', 'emendatusenigmatica:tin_plate')
    //
    //ZINC
        //Zinc ingot
        event.replaceOutput({}, 'silents_mechanisms:zinc_ingot', 'emendatusenigmatica:zinc_ingot')
        event.replaceOutput({}, 'create:zinc_ingot', 'emendatusenigmatica:zinc_ingot')
        //Zinc block
        event.replaceOutput({}, 'silents_mechanisms:zinc_block', 'emendatusenigmatica:zinc_block')
        event.replaceOutput({}, 'create:zinc_block', 'emendatusenigmatica:zinc_block')
        //Zinc nugget
        event.replaceOutput({}, 'silents_mechanisms:zinc_nugget', 'emendatusenigmatica:zinc_nugget')
        event.replaceOutput({}, 'create:zinc_nugget', 'emendatusenigmatica:zinc_nugget')
        //Zinc dust
        event.replaceOutput({}, 'silents_mechanisms:zinc_dust', 'emendatusenigmatica:zinc_dust')
        //Zinc plate
        event.replaceOutput({}, 'createaddition:zinc_sheet', 'emendatusenigmatica:zinc_plate')
    //
    //COBALT
        //Cobalt ingot
        event.replaceOutput({}, 'tconstruct:cobalt_ingot', 'emendatusenigmatica:cobalt_ingot')
        //Cobalt block
        event.replaceOutput({}, 'tconstruct:cobalt_block', 'emendatusenigmatica:cobalt_block')
        //Cobalt nugget
        event.replaceOutput({}, 'tconstruct:cobalt_nugget', 'emendatusenigmatica:cobalt_nugget')
    //
    //
    //-----AE2 GEMS-----
    //
    //
    
    //CERTUS QUARTZ
        //Certus quartz crystal
        event.replaceOutput({}, 'appliedenergistics2:certus_quartz_crystal', 'emendatusenigmatica:certus_quartz_gem')
        //Certus quartz dust
        event.replaceOutput({}, 'appliedenergistics2:certus_quartz_dust', 'emendatusenigmatica:certus_quartz_dust')
    //
    //CHARGED CERTUS QUARTZ
        //Charged certus quartz crystal
        event.replaceOutput({}, 'appliedenergistics2:charged_certus_quartz_crystal', 'emendatusenigmatica:charged_certus_quartz_gem')
    //
    //FLUIX CRYSTAL
        //Fluix crystal
        event.replaceOutput({}, 'appliedenergistics2:fluix_crystal', 'emendatusenigmatica:fluix_gem')
        //Fluix crystal dust
        event.replaceOutput({}, 'appliedenergistics2:fluix_dust', 'emendatusenigmatica:fluix_dust')
        //Fluix block
        event.replaceOutput({}, 'appliedenergistics2:fluix_block', 'emendatusenigmatica:fluix_block')
    //
    //
    //-----MODDED GEMS-----
    //
    //  - For some reason, these are not working currently. Will have to look into that.
    
    //FLUORITE
        //Fluorite crystal
        event.replaceOutput({}, 'mekanism:fluorite_gem', 'emendatusenigmatica:fluorite_gem')
        //Fluorite dust
        event.replaceOutput({}, 'mekanism:dust_fuorite', 'emendatusenigmatica:fluorite_dust')
    //
    //BITUMEN
        //Bitumen gem
        event.replaceOutput({}, 'immersivepetroleum:bitumen', 'emendatusenigmatica:bitumen_gem')
        event.replaceOutput({}, 'thermal:bitumen', 'emendatusenigmatica:bitumen_gem')
        //Bitumen block
        event.replaceOutput({}, 'thermal:bitumen_block', 'emendatusenigmatica:bitumen_block')
    //
    //CINNABAR
        //Cinnabar gem
        event.replaceOutput({}, 'thermal:cinnabar', 'emendatusenigmatica:cinnabar_gem')
        //Cinnabar block
        event.replaceOutput({}, 'thermal:cinnabar_block', 'emendatusenigmatica:cinnabar_block')
        //Cinnabar dust
        event.replaceOutput({}, 'thermal:cinnabar_dust', 'emendatusenigmatica:cinnabar_dust')
    //
    //APATITE
        //Apatite gem
        event.replaceOutput({}, 'thermal:apatite', 'emendatusenigmatica:apatite_gem')
        //Apatite block
        event.replaceOutput({}, 'thermal:apatite_block', 'emendatusenigmatica:apatite_block')
        //Apatite dust
        event.replaceOutput({}, 'thermal:apatite_dust', 'emendatusenigmatica:apatite_dust')
    //
    //SULFUR
        //Sulfur gem
        event.replaceOutput({}, 'thermal:sulfur', 'emendatusenigmatica:sulfur_gem')
        //Sulfur block
        event.replaceOutput({}, 'thermal:sulfur_block', 'emendatusenigmatica:sulfur_block')
        //Sulfur dust
        event.replaceOutput({}, 'thermal:sulfur_dust', 'emendatusenigmatica:sulfur_dust')
        event.replaceOutput({}, 'immersiveengineering:dust_sulfur', 'emendatusenigmatica:sulfur_dust')
        event.replaceOutput({}, 'mekanism:dust_sulfur', 'emendatusenigmatica:sulfur_dust')
        event.replaceOutput({}, 'eidolon:sulfur', 'emendatusenigmatica:sulfur_dust')
    //POTASSIUM NITRATE / NITER / SALTPETER
        //Potassium nitrate gem
        event.replaceOutput({}, 'thermal:niter', 'emendatusenigmatica:potassium_nitrate_gem')
        //Potassium nitrate block
        event.replaceOutput({}, 'thermal:niter_block', 'emendatusenigmatica:potassium_nitrate_block')
        //Potassium nitrate dust
        event.replaceOutput({}, 'thermal:niter_dust', 'emendatusenigmatica:potassium_nitrate_dust')
    //MANA GEM/ARCANE
        //Mana gem
        event.replaceOutput({}, 'ars_nouveau:mana_gem', 'emendatusenigmatica:arcane_gem')
        //Mana block
        event.replaceOutput({}, 'ars_nouveau:mana_gem_block', 'emendatusenigmatica:arcane_block')
    //DIMENSIONAL SHARD
    //do we even have this?
    
    //
    //
    //-----MODDED ALLOYS-----
    //
    //
    
    //BRONZE
        //Bronze ingot
        event.replaceOutput({}, 'silents_mechanisms:bronze_ingot', 'emendatusenigmatica:bronze_ingot')
        event.replaceOutput({}, 'mekanism:ingot_bronze', 'emendatusenigmatica:bronze_ingot')
        event.replaceOutput({}, 'thermal:bronze_ingot', 'emendatusenigmatica:bronze_ingot')
        //Bronze block
        event.replaceOutput({}, 'silents_mechanisms:bronze_block', 'emendatusenigmatica:bronze_block')
        event.replaceOutput({}, 'mekanism:block_bronze', 'emendatusenigmatica:bronze_block')
        event.replaceOutput({}, 'thermal:bronze_block', 'emendatusenigmatica:bronze_block')	
        //Bronze nugget
        event.replaceOutput({}, 'silents_mechanisms:bronze_nugget', 'emendatusenigmatica:bronze_nugget')
        event.replaceOutput({}, 'mekanism:nugget_bronze', 'emendatusenigmatica:bronze_nugget')
        event.replaceOutput({}, 'thermal:bronze_nugget', 'emendatusenigmatica:bronze_nugget')
        //Bronze dust
        event.replaceOutput({}, 'silents_mechanisms:bronze_dust', 'emendatusenigmatica:bronze_dust')
        event.replaceOutput({}, 'mekanism:dust_bronze', 'emendatusenigmatica:bronze_dust')
        //Bronze gear
        event.replaceOutput({}, 'thermal:bronze_gear', 'emendatusenigmatica:bronze_gear')
        //Bronze plate
        event.replaceOutput({}, 'thermal:bronze_plate', 'emendatusenigmatica:bronze_plate')
    //
    //BRASS
        //Brass ingot
        event.replaceOutput({}, 'silents_mechanisms:brass_ingot', 'emendatusenigmatica:brass_ingot')
        event.replaceOutput({}, 'create:brass_ingot', 'emendatusenigmatica:brass_ingot')
        //Brass block
        event.replaceOutput({}, 'silents_mechanisms:brass_block', 'emendatusenigmatica:brass_block')
        event.replaceOutput({}, 'create:brass_block', 'emendatusenigmatica:brass_block')
        //Brass nugget
        event.replaceOutput({}, 'silents_mechanisms:brass_nugget', 'emendatusenigmatica:brass_nugget')
        event.replaceOutput({}, 'create:brass_nugget', 'emendatusenigmatica:brass_nugget')
        //Brass dust
        event.replaceOutput({}, 'silents_mechanisms:brass_dust', 'emendatusenigmatica:brass_dust')
        //Brass plate
        event.replaceOutput({}, 'create:brass_sheet', 'emendatusenigmatica:brass_plate')
        //Brass rod
        event.replaceOutput({}, 'createaddition:brass_rod', 'emendatusenigmatica:brass_rod')
    //
    //ELECTRUM
        //Electrum ingot
        event.replaceOutput({}, 'silents_mechanisms:electrum_ingot', 'emendatusenigmatica:electrum_ingot')
        event.replaceOutput({}, 'thermal:electrum_ingot', 'emendatusenigmatica:electrum_ingot')
        event.replaceOutput({}, 'immersiveengineering:ingot_electrum', 'emendatusenigmatica:electrum_ingot')
        //Electrum block
        event.replaceOutput({}, 'silents_mechanisms:electrum_block', 'emendatusenigmatica:electrum_block')
        event.replaceOutput({}, 'thermal:electrum_block', 'emendatusenigmatica:electrum_block')
        event.replaceOutput({}, 'immersiveengineering:storage_electrum', 'emendatusenigmatica:electrum_block')
        //Electrum nugget
        event.replaceOutput({}, 'silents_mechanisms:electrum_nugget', 'emendatusenigmatica:electrum_nugget')
        event.replaceOutput({}, 'thermal:electrum_nugget', 'emendatusenigmatica:electrum_nugget')
        event.replaceOutput({}, 'immersiveengineering:nugget_electrum', 'emendatusenigmatica:electrum_nugget')
        //Electrum dust
        event.replaceOutput({}, 'silents_mechanisms:electrum_dust', 'emendatusenigmatica:electrum_dust')
        event.replaceOutput({}, 'immersiveengineering:dust_electrum', 'emendatusenigmatica:electrum_dust')
        //Electrum gear
        event.replaceOutput({}, 'thermal:electrum_gear', 'emendatusenigmatica:electrum_gear')
        //Electrum plate
        event.replaceOutput({}, 'thermal:electrum_plate', 'emendatusenigmatica:electrum_plate')
        event.replaceOutput({}, 'immersiveengineering:plate_electrum', 'emendatusenigmatica:electrum_plate')
        //Electrum rod
        event.replaceOutput({}, 'immersiveposts:stick_electrum', 'emendatusenigmatica:electrum_rod')
    //
    //CONSTANTAN
        //Constantan ingot
        event.replaceOutput({}, 'thermal:constantan_ingot', 'emendatusenigmatica:constantan_ingot')
        event.replaceOutput({}, 'immersiveengineering:ingot_constantan', 'emendatusenigmatica:constantan_ingot')
        //Constantan block
        event.replaceOutput({}, 'thermal:constantan_block', 'emendatusenigmatica:constantan_block')
        event.replaceOutput({}, 'immersiveengineering:storage_constantan', 'emendatusenigmatica:constantan_block')
        //Constantan nugget
        event.replaceOutput({}, 'thermal:constantan_nugget', 'emendatusenigmatica:constantan_nugget')
        event.replaceOutput({}, 'immersiveengineering:nugget_constantan', 'emendatusenigmatica:constantan_nugget')
        //Constantan dust
        event.replaceOutput({}, 'immersiveengineering:dust_constantan', 'emendatusenigmatica:constantan_dust')
        //Constantan gear
        event.replaceOutput({}, 'thermal:constantan_gear', 'emendatusenigmatica:constantan_gear')
        //Constantan plate
        event.replaceOutput({}, 'thermal:constantan_plate', 'emendatusenigmatica:constantan_plate')
        event.replaceOutput({}, 'immersiveengineering:plate_constantan', 'emendatusenigmatica:constantan_plate')
        //Constantan rod
        event.replaceOutput({}, 'immersiveposts:stick_constantan', 'emendatusenigmatica:constantan_rod')
    //
    //STEEL
        //Steel ingot
        event.replaceOutput({}, 'silents_mechanisms:steel_ingot', 'emendatusenigmatica:steel_ingot')
        event.replaceOutput({}, 'mekanism:ingot_steel', 'emendatusenigmatica:steel_ingot')
        event.replaceOutput({}, 'assemblylinemachines:steel_ingot', 'emendatusenigmatica:steel_ingot')
        event.replaceOutput({}, 'immersiveengineering:ingot_steel', 'emendatusenigmatica:steel_ingot')
        //Steel block
        event.replaceOutput({}, 'silents_mechanisms:steel_block', 'emendatusenigmatica:steel_block')
        event.replaceOutput({}, 'mekanism:block_steel', 'emendatusenigmatica:steel_block')
        event.replaceOutput({}, 'assemblylinemachines:steel_block', 'emendatusenigmatica:steel_block')
        event.replaceOutput({}, 'immersiveengineering:storage_steel', 'emendatusenigmatica:steel_block')
        //Steel nugget
        event.replaceOutput({}, 'silents_mechanisms:steel_nugget', 'emendatusenigmatica:steel_nugget')
        event.replaceOutput({}, 'mekanism:nugget_steel', 'emendatusenigmatica:steel_nugget')
        event.replaceOutput({}, 'assemblylinemachines:steel_nugget', 'emendatusenigmatica:steel_nugget')
        event.replaceOutput({}, 'immersiveengineering:nugget_steel', 'emendatusenigmatica:steel_nugget')
        //Steel dust
        event.replaceOutput({}, 'silents_mechanisms:steel_dust', 'emendatusenigmatica:steel_dust')
        event.replaceOutput({}, 'mekanism:dust_steel', 'emendatusenigmatica:steel_dust')
        event.replaceOutput({}, 'immersiveengineering:dust_steel', 'emendatusenigmatica:steel_dust')
        //Steel plate
        event.replaceOutput({}, 'immersiveengineering:plate_steel', 'emendatusenigmatica:steel_plate')
        //Steel rod
        event.replaceOutput({}, 'immersiveengineering:stick_steel', 'emendatusenigmatica:steel_rod')
    //
    //INVAR
        //Invar ingot
        event.replaceOutput({}, 'silents_mechanisms:invar_ingot', 'emendatusenigmatica:invar_ingot')
        event.replaceOutput({}, 'thermal:invar_ingot', 'emendatusenigmatica:invar_ingot')
        //Invar block
        event.replaceOutput({}, 'silents_mechanisms:invar_block', 'emendatusenigmatica:invar_block')
        event.replaceOutput({}, 'thermal:invar_block', 'emendatusenigmatica:invar_block')
        //Invar nugget
        event.replaceOutput({}, 'silents_mechanisms:invar_nugget', 'emendatusenigmatica:invar_nugget')
        event.replaceOutput({}, 'thermal:invar_nugget', 'emendatusenigmatica:invar_nugget')
        //Invar dust
        event.replaceOutput({}, 'silents_mechanisms:invar_dust', 'emendatusenigmatica:invar_dust')
        //Invar gear
        event.replaceOutput({}, 'thermal:invar_gear', 'emendatusenigmatica:invar_gear')
        //Invar plate
        event.replaceOutput({}, 'thermal:invar_plate', 'emendatusenigmatica:invar_plate')
    //
    //LUMIUM
        //Lumium ingot
        event.replaceOutput({}, 'silents_mechanisms:lumium_ingot', 'emendatusenigmatica:lumium_ingot')
        event.replaceOutput({}, 'thermal:lumium_ingot', 'emendatusenigmatica:lumium_ingot')
        //Lumium block
        event.replaceOutput({}, 'silents_mechanisms:lumium_block', 'emendatusenigmatica:lumium_block')
        event.replaceOutput({}, 'thermal:lumium_block', 'emendatusenigmatica:lumium_block')
        //Lumium nugget
        event.replaceOutput({}, 'silents_mechanisms:lumium_nugget', 'emendatusenigmatica:lumium_nugget')
        event.replaceOutput({}, 'thermal:lumium_nugget', 'emendatusenigmatica:lumium_nugget')
        //Lumium dust
        event.replaceOutput({}, 'silents_mechanisms:lumium_dust', 'emendatusenigmatica:lumium_dust')
        //Lumium gear
        event.replaceOutput({}, 'thermal:lumium_gear', 'emendatusenigmatica:lumium_gear')
        //Lumium plate
        event.replaceOutput({}, 'thermal:lumium_plate', 'emendatusenigmatica:lumium_plate')
    //
    //SIGNALUM
        //Signalum ingot
        event.replaceOutput({}, 'silents_mechanisms:signalum_ingot', 'emendatusenigmatica:signalum_ingot')
        event.replaceOutput({}, 'thermal:signalum_ingot', 'emendatusenigmatica:signalum_ingot')
        //Signalum block
        event.replaceOutput({}, 'silents_mechanisms:signalum_block', 'emendatusenigmatica:signalum_block')
        event.replaceOutput({}, 'thermal:signalum_block', 'emendatusenigmatica:signalum_block')
        //Signalum nugget
        event.replaceOutput({}, 'silents_mechanisms:signalum_nugget', 'emendatusenigmatica:signalum_nugget')
        event.replaceOutput({}, 'thermal:signalum_nugget', 'emendatusenigmatica:signalum_nugget')
        //Signalum dust
        event.replaceOutput({}, 'silents_mechanisms:signalum_dust', 'emendatusenigmatica:signalum_dust')
        //Signalum gear
        event.replaceOutput({}, 'thermal:signalum_gear', 'emendatusenigmatica:signalum_gear')
        //Signalum plate
        event.replaceOutput({}, 'thermal:signalum_plate', 'emendatusenigmatica:signalum_plate')
    //
    //ENDERIUM
        //Enderium ingot
        event.replaceOutput({}, 'silents_mechanisms:enderium_ingot', 'emendatusenigmatica:enderium_ingot')
        event.replaceOutput({}, 'thermal:enderium_ingot', 'emendatusenigmatica:enderium_ingot')
        //Enderium block
        event.replaceOutput({}, 'silents_mechanisms:enderium_block', 'emendatusenigmatica:enderium_block')
        event.replaceOutput({}, 'thermal:enderium_block', 'emendatusenigmatica:enderium_block')
        //Enderium nugget
        event.replaceOutput({}, 'silents_mechanisms:enderium_nugget', 'emendatusenigmatica:enderium_nugget')
        event.replaceOutput({}, 'thermal:enderium_nugget', 'emendatusenigmatica:enderium_nugget')
        //Enderium dust
        event.replaceOutput({}, 'silents_mechanisms:enderium_dust', 'emendatusenigmatica:enderium_dust')
        //Enderium gear
        event.replaceOutput({}, 'thermal:enderium_gear', 'emendatusenigmatica:enderium_gear')
        //Enderium plate
        event.replaceOutput({}, 'thermal:enderium_plate', 'emendatusenigmatica:enderium_plate')
    //
    //
    //-----OTHER/MISC-----
    //
    //
    
    //SILICON - this i will have to re-tag in another script.
        //Silicon gem
        event.replaceOutput({}, 'tinyredstone:silicon', 'emendatusenigmatica:silicon_gem')
        event.replaceOutput({}, 'appliedenergistics2:silicon', 'emendatusenigmatica:silicon_gem') // REMEMBER
    //
    //COAL COKE
        //Coal coke gem
        event.replaceOutput({}, 'immersiveengineering:coal_coke', 'emendatusenigmatica:coke_gem')
        event.replaceOutput({}, 'thermal:coal_coke', 'emendatusenigmatica:coke_gem')
        //Coal coke block
        event.replaceOutput({}, 'immersiveengineering:coke', 'emendatusenigmatica:coke_block')
        event.replaceOutput({}, 'thermal:coal_coke_block', 'emendatusenigmatica:coke_block')
        //Coal coke dust
        event.replaceOutput({}, 'immersiveengineering:dust_coke', 'emendatusenigmatica:coke_dust')
    //
    //CHARCOAL
        //Charcoal dust
        event.replaceOutput({}, 'mekanism:dust_charcoal', 'emendatusenigmatica:charcoal_dust')
        event.replaceOutput({}, 'assemblylinemachines:ground_charcoal', 'emendatusenigmatica:charcoal_dust')
    //
    //fin
    //
    });

    onEvent('recipes', event => {
        const items = [
            'emendatusenigmatica:nickel_clump',
            'emendatusenigmatica:silver_clump',
            'emendatusenigmatica:zinc_clump',
            'emendatusenigmatica:aluminum_clump',
        ]
        items.forEach(i => {
            event.recipes.mekanismInjecting('4x ' + i.slice(0, i.indexOf('_') + 1) + 'shard', '#forge:ores/' + i.slice(i.indexOf(':') + 1, i.indexOf('_')), 'mekanism:hydrogen_chloride')
            event.recipes.mekanismInjecting(i.slice(0, i.indexOf('_') + 1) + 'shard', i.slice(0, i.indexOf('_') + 1) + 'crystal', 'mekanism:hydrogen_chloride')
            event.recipes.mekanismPurifying(i, i.slice(0, i.indexOf('_') + 1) + 'shard', 'mekanism:oxygen')
            event.recipes.mekanismPurifying('3x ' + i, '#forge:ores/' + i.slice(i.indexOf(':') + 1, i.indexOf('_')), 'mekanism:oxygen')
            event.recipes.mekanismCrushing(i.slice(0, i.indexOf('_') + 1) + 'dirty_dust', i)
        })
    })

    // priority: 4

global["RECIPE_UNIFY"] = true
global["HIDE_UNIFIED_ITEMS"] = true

global["unifypriorities"] = [
    "emendatusenigmatica",
    "minecraft",
    "kubejs",
    "thermal",
    "jaopca",
    "silents_mechanisms",
    "mekanism",
    "create",
    "appliedenergistics2",
    "dustrial_decor"
]

var tags = [
    "forge:dusts/quartz",
    "forge:dusts/obsidian",
    "forge:ingots/redstone_alloy",
    "forge:dough/wheat"
]

var tagGen = [
    "lapis_lazuli=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "iron=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "gold=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "copper=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "tin=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "lead=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "bronze=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    "steel=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    "uranium=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "zinc=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "brass=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    "silver=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "nickel=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "platinum=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "aluminum=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods",
    "enderium=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    "signalum=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    "electrum=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    "lumium=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    "fluorite=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "certus_quartz=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "charged_certus_quartz=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
    "fluix=storage_blocks,ingots,nuggets,dusts,ores,gears,plates,rods,gems",
]
for (let line of tagGen) {
    let data = line.split("=")
    for (let type of data[1].split(",")) {
        tags.push("forge:" + type + "/" + data[0])
    }
}

// Replace input and output of recipes (and iterate over tags!)
onEvent("recipes", event => {
    // Iterate over tags (they should be loaded)
    var tagitems = new Map()
    tagLoop:
    for (let tag of tags) {
        let ingr = Ingredient.of("#"+tag)
        if (ingr) {
            let stacks = ingr.getStacks().toArray()
            for (let mod of global["unifypriorities"]) {
                for (let stack of stacks) {
                    if (stack.getMod() == mod) {
                        tagitems[tag] = stack.getId()
                        continue tagLoop
                    }
                }
            }
            if (stacks.length > 0) tagitems[tag] = stacks[0].getId()
        }
    }
    // Update tags
    global["unifytags"] = tags
    global["tagitems"] = tagitems
    
    // Unify the rest
    if (global["RECIPE_UNIFY"]) {
        for (let tag of global["unifytags"]) {
            let ingr = Ingredient.of("#"+tag)
            if (ingr) {
                let stacks = ingr.getStacks().toArray()
                let oItem = global["tagitems"][tag]
                for (let tItem of stacks) {
                    event.replaceInput({}, tItem.getId(), "#"+tag)
                    event.replaceOutput({}, tItem.getId(), oItem)
                }
            }
        }
    }
})
