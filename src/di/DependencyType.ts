const DependencyType = {
    QueryClient: Symbol.for('QueryClient'),
    CardService: Symbol.for('CardService'),
    CardParser: Symbol.for('CardParser'),
    RuleParser: Symbol.for('RuleParser'),
    CustomerService: Symbol.for('CustomerService'),
};

export default DependencyType;
