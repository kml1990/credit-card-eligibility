const DependencyType = {
    QueryClient: Symbol.for('QueryClient'),
    RuleParser: Symbol.for('RuleParser'),
    CreditCardParser: Symbol.for('CreditCardParser'),
    CreditCardService: Symbol.for('CreditCardService'),
    CustomerService: Symbol.for('CustomerService'),
    CustomerParser: Symbol.for('CustomerParser'),
};

export default DependencyType;
