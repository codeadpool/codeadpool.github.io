## WE GOT:
- We removed the instantiation of interfaces.
- We removed the `DEFINES for the parameters.
- Eliminated "two-pass randomization":
  - randomization of ONE-SET of variables depend upon another, first pass: RTL parametrization and then those are packed and imported to test-bench building.

## DO:
#### Define an interface with all signals declared as ports which are all wire and input:
- with each interface port corresponding to the name of a DUT port (henceforth called the DUT interface).
- all ports must be wire and input:
  - `port coercion`: simulator forces the ports to their proper direction.
  -  `inout`: Inout doesn't work cause both directions require same length.
    
- Define a wrapper interface (henceforth called a harness) and make the harness instantiate the DUT interface.
- Connect the DUT interface’s ports to the DUT using an upward reference to the module name.

- Bind the harness into the DUT, Syntax:
```ruby
bind <module_type> <interface_type> <interface_name>
```

#### Variable Width support:
#### Extract RTL Parameters: 
- Put this function in a module and bind it to the harness.
- RTL Bug may not manifest in one RTL configuration but can be in other.

