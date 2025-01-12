# Port Coercion and Signal Driving

The key to understanding this approach lies in the concept of port coercion:

- Net ports, particularly when declared as inputs, can be coerced to inout ports by the SystemVerilog compiler.
- This coercion occurs when the compiler detects potential drivers for these ports, even if they are initially declared as inputs.

## Why Net Ports?

- **Flexibility**: Net ports, especially when declared as inputs, provide more flexibility than variable ports (like logic).
- **Coercion Behavior**: SystemVerilog allows net ports to be coerced to inout, enabling bidirectional signal flow when needed.
- **Resolving Multiple Drivers**: Net ports can handle multiple drivers more gracefully than variable ports, which is crucial for the harness technique.

## Driving Signals

Contrary to the initial assumption, these net ports can indeed be driven, but through a specific mechanism:

- **Virtual Interface Driving**: The paper states, "VCS also coerces ports of an interface if there is any code that drives it from a virtual interface reference"[3.2.1].
- **Runtime Flexibility**: This allows for dynamic changes in signal direction and driving capability without modifying the interface definition.

## Detailed Explanation

- **Initial Declaration**: The ports are initially declared as inputs, which are net types by default.
- **Compilation Process**: During compilation, if the compiler detects any potential drivers (e.g., from virtual interfaces or testbench code), it automatically coerces these input ports to inout.
- **Runtime Behavior**: This coercion allows the ports to be driven from the testbench side when needed, while still being able to receive signals from the DUT.
- **Bidirectional Support**: This approach enables the same interface to work for both master and slave configurations without requiring separate definitions.
- **Avoiding Restrictions**: Using inout directly would impose restrictions on connecting to signals of different widths, which is avoided by this coercion technique.

## Practical Implications

- **Testbench Flexibility**: This approach allows testbench components to drive signals when needed, without hardcoding the direction in the interface definition.
- **Stub Compatibility**: It supports working with both active RTL and stub modules without changing the interface connections.
- **Dynamic Role Changes**: Agents can switch between master and slave roles dynamically, as the signal directions are not fixed in the interface definition.

## Summary

In summary, while the ports are declared as nets (typically inputs), the paper's approach leverages SystemVerilog's port coercion feature to enable driving these signals when needed, providing a flexible and powerful mechanism for testbench-DUT interactions.## WE GOT:
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

