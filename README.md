# FORGED — player wiki

The public wiki for the FORGED Minecraft SMP.

**Live at:** https://tanner412.github.io/forgedsmp/

## Editing it

Everything a reader sees lives in **`wiki-data.js`** — weapons, abilities, Maces,
the Vigil, commands, recipes, FAQ, changelog. It is plain lists of text.

`index.html` is the layout and never needs touching to change wording.

To update: edit `wiki-data.js`, bump `META.updated`, add a `CHANGELOG` line, commit.
The site rebuilds itself within a minute.

## What is deliberately not here

* **Balance numbers** — cooldowns, damage, radii. They change often, and a stale
  number costs more trust than a missing one.
* **Anything a player cannot type.** The commands list is the player's own kit.
