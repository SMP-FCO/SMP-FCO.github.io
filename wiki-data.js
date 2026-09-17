/* =============================================================================
   FORGED — WIKI CONTENT
   =============================================================================

   THIS IS THE ONLY FILE YOU EDIT TO UPDATE THE WIKI.

   index.html is the layout and never needs touching. Everything a reader sees
   — every weapon, ability, command, recipe and FAQ answer — is below.

   HOW TO UPDATE
   -------------
   1. Edit the values below.
   2. Bump META.updated to today's date.
   3. Add a line to CHANGELOG at the top of the list.
   4. Re-publish (see docs/wiki/README.md).

   RULES THAT KEEP IT HONEST
   -------------------------
   * Ability names must match AbilityId.java. That enum is the source of truth,
     not the design docs — several abilities were renamed and docs/design/
     still carries the old names.
   * Balance numbers are deliberately NOT listed here. They live in
     abilities.yml and change often; a wiki that quotes them goes stale in a
     week, and players trust a stale number less than no number at all.
   ============================================================================= */

const META = {
  name: "FORGED",
  tagline: "One weapon. Earned in blood. Lost the same way.",
  blurb:
    "FORGED is a Minecraft SMP plugin built around a single idea: you do not choose your weapon, and you only ever have one. " +
    "The server hands it to you the moment you first join, it grows with every player you kill, and it shrinks every time you die. " +
    "Seven weapons, three Maces won by server-wide ritual, and one Clock that can turn day into night.",
  minecraft: "Paper 1.21.11",
  java: "Java 21",
  updated: "2026-09-16",
  version: "Season build",
};

/* At-a-glance figures shown under the intro. Keep to four. */
const FACTS = [
  { value: "7",  label: "Chosen Weapons", note: "one per player, randomly dealt" },
  { value: "3",  label: "Maces",          note: "one of each on the server" },
  { value: "22", label: "Abilities",      note: "two on every weapon" },
  { value: "6",  label: "Tiers",          note: "Wood through Netherite" },
];

/* -------------------------------------------------------------------------- */
/* THE SEVEN CHOSEN WEAPONS                                                   */
/* -------------------------------------------------------------------------- */
const WEAPONS = [
  {
    name: "Sword",
    role: "Chase and pressure",
    identity: "Close range and relentless. The Sword is built to catch people who are trying to leave.",
    stats: "Movement speed and attack speed climb with every tier.",
    abilities: [
      { name: "Nitoryu Strike", slot: "Ability 1",
        text: "A forward dash that phases through everyone on its path and damages each of them. Made for punishing a runner." },
      { name: "Kagemusha", slot: "Ability 2",
        text: "Arms a shadow double. The next hit you land chooses its victim — the double blinks onto them and strikes three times before burning away. It has to keep up, so getting far enough away breaks the leash and it dissipates early." },
    ],
  },
  {
    name: "Axe",
    role: "Burst and area control",
    identity: "A heavy weapon that rewards committing to the swing rather than trading pokes.",
    stats: "Gains sweeping reach from Iron onward.",
    abilities: [
      { name: "Berserk", slot: "Ability 1",
        text: "A rage that makes you faster on your feet and faster on the swing for its duration, with Strength on top." },
      { name: "Fellstroke", slot: "Ability 2",
        text: "A committed overhead swing that cleaves the ground in front of you and tears a fissure away from the blow. The wind-up is the price — for that moment you are doing nothing else." },
    ],
  },
  {
    name: "Bow",
    role: "Precision at range",
    identity: "Rewards holding distance and landing shots. The most patient weapon in the pool.",
    stats: "Movement speed, plus quiet movement while sneaking at Netherite.",
    abilities: [
      { name: "Spectral Volley", slot: "Ability 1",
        text: "Hold the key to conjure spectral arrows that hang over your shoulders. Your next bow releases launch from those arrows instead of from the bow, and the battery drains one per shot." },
      { name: "Arrow Rain", slot: "Ability 2",
        text: "Marks a patch of ground; after a warning, arrows fall across it. What you see is exactly what hurts — inside the ring is dangerous, outside it is not, and no terrain is destroyed." },
    ],
  },
  {
    name: "Crossbow",
    role: "Setup and single big shots",
    identity: "Tactical rather than sustained. One high-value bolt beats five cheap ones.",
    stats: "Knockback resistance climbs with tier — you hold your ground while you aim.",
    abilities: [
      { name: "Chainshot", slot: "Ability 1",
        text: "Empowers your next crossbow shot. Whoever it hits is chained to the spot they were struck and cannot walk out of the tether — real chain, hung from a stake and coiled around their body. Missing still burns the cooldown." },
      { name: "Siege Bolt", slot: "Ability 2",
        text: "Charged by landing crossbow hits. The next shot fires a bolt straight down the same line — instant, through the target and out the far side, bypassing armour and a raised shield." },
    ],
  },
  {
    name: "Trident",
    role: "Displacement and mobility",
    identity: "Moves people who do not want to be moved, and moves you further than anything else.",
    stats: "Water efficiency and breath. It is the only weapon at home in the ocean.",
    abilities: [
      { name: "Whirlpool", slot: "Ability 1",
        text: "Arms the throw. Cock the Trident back and hurl it for real — whoever it lands on is grappled toward you. Missing still burns the cooldown, which starts the moment you press the key." },
      { name: "Aqua Jet", slot: "Ability 2",
        text: "Empowers your next riptide charge, on dry land as well as in water, launching you far further and faster than vanilla allows. Brief fall protection after the landing." },
    ],
  },
  {
    name: "Shield",
    role: "Survival and control",
    identity: "The defensive Chosen Weapon. It wins fights by outlasting them, not by out-damaging them.",
    stats: "Knockback resistance, and bonus hearts at the top two tiers. No armour — deliberately.",
    abilities: [
      { name: "Shield Bash", slot: "Ability 1",
        text: "Only works while the shield is actually raised. A short forward charge; the first enemy you reach is knocked back and slowed." },
      { name: "Guardian Angel", slot: "Ability 2",
        text: "Your shield cannot lose durability for the duration. It does not repair existing damage, and abilities built to disable shields still work on it." },
    ],
  },
  {
    name: "Spear",
    role: "Lockdown and commitment",
    identity: "High risk, high reward. Creates the opening, then takes it with one enormous attack.",
    stats: "Reach, and nothing else. The longest weapon in the game by a wide margin.",
    abilities: [
      { name: "Impale", slot: "Ability 1",
        text: "Throws the spear. A player it hits is pinned where they stand, with the spear visibly lodged in them, until you hit them again. One target at a time. Retrieving the spear ends it early." },
      { name: "Incinerate", slot: "Ability 2",
        text: "Sneak and hold to charge, release to fire a concentrated beam that shreds players and chews through the durability of a raised shield. Taking damage mid-charge cancels it." },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* THE THREE MACES                                                            */
/* -------------------------------------------------------------------------- */
const MACES = [
  {
    name: "Breach",
    enchant: "Breach",
    flavour: "Armour is a suggestion.",
    materials: ["4× Netherite Ingot", "4× Ancient Debris", "1× Heavy Core"],
    abilities: [
      { name: "Breaking Point", slot: "Upgrade 2",
        text: "Charged by landing hits. The next one strips the target's armour effectiveness and leaves them badly exposed." },
      { name: "Fault Line", slot: "Upgrade 3",
        text: "Drive the Mace into the ground and tear a crack forward in a straight line, slabs of real world heaving up along the seam. Hold longer for a longer crack. The payload is raw force and nothing else, and anything more than half a width off the seam is not hit." },
    ],
  },
  {
    name: "Density",
    enchant: "Density",
    flavour: "Everything falls. Some things fall harder.",
    materials: ["6× Echo Shard", "2× Netherite Ingot", "1× Heavy Core"],
    abilities: [
      { name: "Meteor Strike", slot: "Upgrade 2",
        text: "Mark the point you are looking at; a meteor lands on it a couple of seconds later and blows a real crater, leaving its own wreckage lying in the hole. The delay is the ability — it is the window your target has to get out of the circle." },
      { name: "Gravitational Pull", slot: "Upgrade 3",
        text: "Opens a black hole that drags nearby players toward a point and holds them there, arms of light spiralling in but never reaching the core." },
    ],
  },
  {
    name: "Wind Burst",
    enchant: "Wind Burst",
    flavour: "No damage. Just a very long way down.",
    materials: ["4× Breeze Rod", "4× Phantom Membrane", "2× Netherite Ingot", "1× Heavy Core"],
    abilities: [
      { name: "Wind Step", slot: "Upgrade 2",
        text: "Propels you through the air. Pure mobility — the fastest repositioning tool any weapon has." },
      { name: "Raging Tornado", slot: "Upgrade 3",
        text: "Wind up a funnel and release it. Below full charge it stands where you are; at full charge it walks forward across the ground. Anyone caught is carried up a helix and dropped. It deals no damage at all — the fall is the entire point — and it outlives its caster." },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* EXTRA WEAPONS                                                              */
/* -------------------------------------------------------------------------- */
const EXTRAS = [
  {
    name: "The Vigil",
    item: "A Clock",
    flavour: "The only weapon that touches the whole server at once.",
    upgrades: [
      { level: "Upgrade 1",
        text: "Turn the Hour — flips the Overworld between day and night, server-wide, on the real world clock. Mobs spawn, phantoms come, and a team that sleeps can undo it. No damage, no buff, no combat effect at all." },
      { level: "Upgrade 2",
        text: "Dead Hour — drops a field anchored at your feet at the moment of the cast. It does not follow you. Everyone inside except you is slowed, swings slower, and has their sky forced to midnight while they stand in it." },
      { level: "Upgrade 3",
        text: "Stopped Clock — improves Dead Hour and shortens both cooldowns. Not a third ability." },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* COMMANDS — what a player types. Nothing else belongs in this list.         */
/* -------------------------------------------------------------------------- */
const COMMANDS = [
  { cmd: "/forged",
    what: "Your weapon, your tier, your upgrade level, your unlocked abilities and their cooldowns." },
  { cmd: "/forged withdraw <amount>",
    what: "Turns upgrade levels back into physical Fragments — one Fragment per level given up. You cannot go below your weapon's minimum, and it fails harmlessly if your inventory is full." },
  { cmd: "/forged trust <player>",
    what: "Your abilities stop landing on them. One-way: they still have to trust you back." },
  { cmd: "/forged untrust <player>",
    what: "Your abilities can hit them again." },
  { cmd: "/forged trust list",
    what: "Who your abilities currently skip." },
  { cmd: "/forged trust clear",
    what: "Empties the list." },
];

/* -------------------------------------------------------------------------- */
/* CRAFTING                                                                   */
/* -------------------------------------------------------------------------- */
const RECIPES = [
  { name: "Weapon Fragment",
    purpose: "One upgrade level.",
    items: ["2× Netherite Ingot", "4× Diamond Block", "2× Echo Shard", "1× Nether Star"],
    note: "Deliberately absurd. Killing people is meant to be the cheap way." },
  { name: "Reroll",
    purpose: "Throws your weapon away and deals you a different one.",
    items: ["2× Netherite Block", "4× Diamond Block", "4× Echo Shard", "2× Nether Star"],
    note: "Your progression does not come with you. The new weapon starts at the bottom, and it will never be the one you just had." },
];

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */
const FAQ = [
  { q: "Can I pick my weapon?",
    a: "No. The Choosing deals it to you on your first join — every weapon circles you and one takes you. The only way to change it afterwards is a Reroll, which wipes your progression and can never give you back the weapon you just had." },
  { q: "Do I lose my weapon when I die?",
    a: "No. A Chosen Weapon is bound to you permanently and is never dropped. You lose one upgrade level and drop one Fragment, and the weapon is handed back on respawn. A Mace is the exception — it returns to its altar and the whole server is told." },
  { q: "Can I hold two weapons?",
    a: "One Chosen Weapon, always. An Extra Weapon like the Vigil is the single exception: it sits alongside your Chosen Weapon and costs you nothing to hold." },
  { q: "Do FORGED weapons hit harder than vanilla ones?",
    a: "Not through hidden stats. No weapon in FORGED adds attack damage or damage reduction — that is a standing design rule, enforced by the build. Damage comes from the material you are at and from the enchantment ladder, both of which you can see. Tiers buy you speed, reach, footing and mobility instead." },
  { q: "Why is my weapon a purple and black cube?",
    a: "The resource pack is not loaded. FORGED's art is delivered by a pack you install yourself — see Resource Pack." },
  { q: "Does anything break?",
    a: "No. Every Chosen Weapon, every Mace and every Extra Weapon is unbreakable. Durability never removes one." },
  { q: "Can I put my weapon in a chest?",
    a: "No. Chosen Weapons are barred from containers — that is the anti-duplication system, and it is why the Forge reads ingredients straight out of your inventory rather than asking you to place them in a slot." },
  { q: "What are the weapon colours?",
    a: "Every player is dealt one of six — crimson, ember, verdant, tide, cobalt or amethyst — and their weapon art is recoloured to match. Maces and Extra Weapons are never recoloured." },
];

/* -------------------------------------------------------------------------- */
/* CHANGELOG — newest first. Add a line every time you edit this file.         */
/* -------------------------------------------------------------------------- */
const CHANGELOG = [
  { date: "2026-09-16",
    text: "Wiki published. Covers the seven Chosen Weapons, the three Maces, the Vigil, progression, death, the Forge, crafting and player commands." },
];
