# Dependency-Free Software

Dependency-free software is the idea that software will increasingly be built without library dependencies, because [coding agents](../concepts/coding-agent.md) make generating and maintaining custom implementations cheap enough to outweigh the convenience of importing a library.

## Details

Four forces drive this shift:

- **Generation is cheap.** [Coding agents](../concepts/coding-agent.md) - both [local](../example-systems/local-coding-agent.md) and [cloud](../example-systems/cloud-coding-agent.md) - can produce working implementations at negligible cost compared to the human time previously required to write equivalent code from scratch. When generating code is nearly free, the economic rationale for importing a library - saving development time - weakens.
- **Full control.** Self-contained code is fully visible, debuggable, and modifiable without working around library abstractions, versioning constraints, or opaque internals.
- **Tailored to the exact use case.** A generated implementation covers only the specific behavior needed, with no unused features, unnecessary abstraction layers, or configuration surface. This can result in simpler, smaller, and sometimes faster code than the general-purpose library equivalent.
- **No [supply chain](../threats/supply-chain-attack.md) risk.** Eliminating external dependencies removes exposure to malicious packages, transitive vulnerabilities, and breaking upstream changes.

## Examples

- An agent extracting fp8 training functionality from a large library into 150 lines of standalone code that runs 3% faster than the library version, eliminating the library as a project dependency.
- Replacing a utility library dependency with a handful of purpose-built functions that cover only the specific behaviors the project actually uses.

## Counterarguments

- Library maintainers continuously fix bugs, patch security vulnerabilities, and adapt to upstream changes. Generated code freezes at a point in time and shifts the maintenance burden entirely to the project owner, who may not notice when the original library addresses a critical issue.
- The approach works best for well-isolated, computationally focused functionality. Libraries with complex state management, plugin systems, or cross-cutting concerns may not decompose cleanly into standalone reimplementations.
- Widespread adoption fragments the ecosystem: instead of one well-tested library with thousands of users finding bugs, there are thousands of bespoke implementations each tested only against their own narrow use case.
- Productized services - the same kind of software built repeatedly for many customers around shared domain concepts - invert the economics. A shared library encapsulates domain logic once and propagates fixes across every customer project, while bespoke generated code must be patched, audited, and evolved independently in each instance. At scale, the maintenance cost of owning duplicated implementations across many customer projects far exceeds the cost of depending on a shared library.

## Confidence

**Low.** The counterarguments - particularly about maintenance burden of frozen code, ecosystem fragmentation, and the inverted economics of productized services - largely outweigh the thesis for most practical scenarios. The idea holds for isolated utility code where the library dependency is disproportionate to the functionality used, but the note overgeneralizes from that narrow case.

## External references

- https://x.com/karpathy/status/2021633574089416993
