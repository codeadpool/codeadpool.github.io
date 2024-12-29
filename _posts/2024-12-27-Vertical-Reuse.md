## Reuse:
- In simple terms,
- `Vertical Reuse` = Inheritence, using a verification component in a different hierarchical level, usually with an implied change of role.
- `Horizantal Reuse` = Composition. using a verification component in a different project but at same abstraction level.
  
## Active/Passive operations:
- Complete `Environment` must consider active/passive configuration not only verification components.
- Active components like `drivers/sequencers` must not be created in passive-mode.
- Donot connect scoreboard to active components.
- Perform functional checks in passivle components.
- Collect functional coverage in passive components.
- Update configuration only from passive components.
- Generate important messages in passive components.
- Don't control end-of-test from components in passive mode.
- Put user constraints in sequences not sequence items.
- Encapsulate all sub-components in a single-reusable Environment.
- SVAs in interface, combine multiple signal interfaces into a hierarchical interface.
