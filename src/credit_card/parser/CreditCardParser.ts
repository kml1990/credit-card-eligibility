import { inject, injectable } from 'inversify';
import RuleParser from '../../rules/parser/RuleParser';
import { Parser } from '../../types/Types';
import EligibilityValidator from '../../validators/EligibilityValidator';
import CreditCard, { CreditCardParams } from '../domain/CreditCard';
import { CreditCardDto } from '../dto/CreditCardDto';
import DependencyType from '../../di/DependencyType';

@injectable()
export default class CreditCardParser implements Parser<CreditCardDto, CreditCard> {
    private readonly _ruleParser: RuleParser;

    constructor(@inject(DependencyType.RuleParser) ruleParser: RuleParser) {
        this._ruleParser = ruleParser;
    }

    parse(card: CreditCardDto): CreditCard {
        const {
            id,
            name,
            apr,
            balance_transfer_offer_duration,
            purchase_offer_duration,
            credit_available,
            eligibility_rules,
        } = card;

        const cardParams: CreditCardParams = {
            id,
            name,
            apr,
            balanceTransferOfferDuration: balance_transfer_offer_duration,
            purchaseOfferDuration: purchase_offer_duration,
            creditAvailable: credit_available,
        };

        const rules = eligibility_rules.map(rule => this._ruleParser.parse(rule));
        const validators = new EligibilityValidator(rules);
        return new CreditCard(cardParams, validators);
    }
}
