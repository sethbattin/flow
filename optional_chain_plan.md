Adding the optional chain operator
==================================
Notes while making this attempt.

Context
-------
My org's discussion around the syntactic sugar of optional chain started with 
noting that babel support had been added.  We control our babel config, and use
experimental features, so we asked if we could start using this feature as well.
It was noted that flow does not support the flag.  Some naive discussion 
followed regarding workarounds.  For example: add an explicit maybetype cast.

But quickly it was pointed out that workarounds were irrelvant because the mere 
presence of the operator caused a parser error, which meant no ignore comment or
other workaround was feasible.

So my goal with PR was to make it possible _at all_ to include usage of this 
operator and continue to use flow checking.  My stretch goal is to fully support 
it and infer correct types.

Already done
------------
- Install ocaml (for first time)
- build and run tests
- add new functional tests including the `.?`
- add a token `T_OPT_CHAIN`
- add config option `esproposal_optional_chain`
- add the option variation to the test cases
- resolve compile errors due to extra token and option
- detect the new token (still an unexpected token error)

In progress/plan
----------------
- [ ] define correct AST output for this operator
- [ ] run the code in debug mode 
- [ ] ask for help from the irc channel

### correct AST
The idea here is to declare what should actually happen in the parser with this operator

### debug mode
Increase experimentation and iteration time.  Ocaml is still greek to me, and reading the
code is proving to be less than enlightening.  I have barely found my bearings yet.  I need
to start running code and observing behavior.  stdout is good; debugging is better.

### irc help
Obvious, but daunting.  Although I don't really want to seem the fool, worst case scenario 
the locals think I'm doing it wrong, so it's tough to care.  I _do_ want to have my poop 
in a group before I ask.  So to do that, I want to know what I'm asking and what context
I'm giving when i do.
