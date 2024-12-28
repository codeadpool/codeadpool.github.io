## Reuse:
- In simple terms,
- `Vertical Reuse` = Inheritence, using a verification component in a different hierarchical level, usually with an implied change of role.
- `Horizantal Reuse` = Composition. using a verification component in a different project but at same abstraction level.
  
## Active/Passive operations:
- Complete `Environment` must consider active/passive configuration not only verification components.
- Active components like `drivers/sequencers` must not be created in passive-mode.
- Donot connect scoreboard to active components.
