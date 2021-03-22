const DependencyType = {
    QueryClient: Symbol.for('QueryClient'),
    RuleParser: Symbol.for('RuleParser'),
    CreditCardParser: Symbol.for('CreditCardParser'),
    CreditCardService: Symbol.for('CreditCardService'),
    CreditCardCalculator: Symbol.for('CreditCardCalculator'),
    CustomerService: Symbol.for('CustomerService'),
    CustomerParser: Symbol.for('CustomerParser'),
};

export default DependencyType;
