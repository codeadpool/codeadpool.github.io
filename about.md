---
layout: page
title: "About Me"
permalink: /about/
---

## Yokoso

## Work Experience

### University, Graduate Assistant  
**Jan. 2024 - Present**  
- Developed Verilog model for custom SRAM with timing model emulating physical design. Conducted 10,000-iteration Monte Carlo simulations, revealing 3σ variation of 5% in c2d delay for verification under PVT conditions.  
- Created UVM/SV testbench for SRAM using CRV, directed tests for corner cases, SVAs for protocol checking, factory overrides for test specifics, and a comprehensive functional coverage model driving verification closure.  
- Focused on vertical reuse by optimizing passive components and sequences for better integration with the top-level testbench. Planned integration into processor cache.  

### University VIP Processor Design Verification, Developer  
**Sep. 2023 - Dec. 2023**  
- Implemented Verilator-based verification environment for multi-level cache system, validating L1 (direct-mapped) with WBB and L2 (4-way set-associative) caches with LRU replacement.  
- Executed test suite validating single-cycle L1 read hits, L2 cache operations, and Write Back Buffer performance, analyzing hit rates, miss penalties, and average memory access time (AMAT) to quantify cache efficiency.  
- Conducted fault injection tests for SECDED ECC verification and stress tests assessing cache resilience under concurrent accesses and full cache conditions.  

### University, Graduate Research  
**Jan. 2023 - Dec. 2023**  
- Designed and simulated high-efficiency Boost and Buck converters with voltage mode control and dynamic frequency scaling for wireless power transfer to mobile devices on PCB.  

### University, Course Assistant  
**Sep. 2023 - Dec. 2023**

### SDL Power Generation PVT. Ltd. (6.198 MW), Technical Intern  
**Aug. 2021 - May 2022**  
- Utilized Siemens Simatic S7-1500 PLCs, improving grid synchronization by 15% and reducing power losses by 20%.  

---

# Projects

### UVM-Based Verification of 5-Stage MIPS Pipeline Processor  
**May 2023 - Jun. 2023**  
- Implemented and verified a 5-stage MIPS pipeline processor on Basys3 FPGA, conducting post-synthesis verification of register file integrity, interrupt handling, and memory access protocols using SystemVerilog Assertions (SVA) with the Symbiyosis formal tool.  
- Developed UVM-based testbench using constrained-random techniques, creating custom functional coverage bins for RC5 encryption/decryption algorithms, and capturing edge cases including race conditions and memory access corner cases.  

### UVM-Based Verification of Asynchronous FIFO UVC  
**Nov. 2024 – Dec. 2024**  
- Verified an asynchronous FIFO with independent read/write interfaces and clock domain crossing. Implemented coverage-driven verification and assertion-based checks for protocol compliance.  
- Designed modular UVM testbench using harness and BFM proxy approach for agent communication, prioritizing vertical reuse. Implemented base tests for initialization, virtual sequences for multi-agent sequencers, and extended test cases using constrained random stimulus for corner-case testing.  

### UVM-Based Verification Environment for YAPP Router  
**Apr. 2024 – May 2024**  
- Developed a comprehensive UVM testbench with custom UVCs for multi-port packet router verification. Implemented advanced stimulus generation, layered architecture, and CDV with cross-coverage between packet attributes and routing decisions.  
- Integrated SystemVerilog Assertions (SVAs) for protocol compliance and temporal logic validation. Engineered a sophisticated scoreboard with dynamic data structures for real-time transaction matching.  

### Verification of AXI2APB Bridge Design  
**May 2023 - Jun. 2023**  
- Designed and verified a 32-bit AXI2APB bridge, seamlessly integrating AXI4-Lite and APB3 protocols for efficient transaction processing. Implemented optimized architecture for read/write/burst transfers, ensured clock domain crossing (CDC) synchronization, and enabled protocol conversion for maximum efficiency.  

---

# Education

- **Master of Computer Engineering**, New York University (2022 - 2024)  
- **Bachelor of Electrical Engineering**, RVR&JC CE (2017 - 2021)  

---

# Skills

- **Languages**: Verilog, SystemVerilog (UVM), VHDL, C, C++ (data structures, OOP), Python  
- **EDA Tools**: Synopsys (VCS, Verdi), Cadence (Virtuoso, Innovus, Genus), OpenROAD  
- **Tool Chains**: Vivado Design Suite, YoSys Open Synthesis Suite, Verilator
 
# Certifications:  
- SystemVerilog Assertions v5.1 by Cadence Design Systems  
- SystemVerilog Accelerated Verification with UVM v1.2.6 by Cadence Design Systems  
- Jasper Formal Expert v22.09, Jasper Formal Fundamentals v2212 by Cadence Design Systems  
- SystemVerilog for Design and Verification v21.10 by Cadence Design Systems  
