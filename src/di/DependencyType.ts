const DependencyType = {
    QueryClient: Symbol.for('QueryClient'),
    RuleParser: Symbol.for('RuleParser'),
    CardParser: Symbol.for('CardParser'),
    CardService: Symbol.for('CardService'),
    CustomerService: Symbol.for('CustomerService'),
    CustomerParser: Symbol.for('CustomerParser'),
};

export default DependencyType;
