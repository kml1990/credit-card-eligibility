import { inject, injectable } from 'inversify';
import RuleParser from '../../rules/parser/RuleParser';
import { Parser } from '../../types/Types';
import EligibilityValidator from '../../validators/EligibilityValidator';
import Card, { CardParams } from '../domain/Card';
import { CardDto } from '../dto/CardDto';
import DependencyType from '../../di/DependencyType';

@injectable()
export default class CardParser implements Parser<CardDto, Card> {
    private readonly _ruleParser: RuleParser;

    constructor(@inject(DependencyType.RuleParser) ruleParser: RuleParser) {
        this._ruleParser = ruleParser;
    }

    parse(card: CardDto): Card {
        const {
            name,
            apr,
            balance_transfer_offer_duration,
            purchase_offer_duration,
            credit_available,
            eligibility_rules,
        } = card;

        const cardParams: CardParams = {
            name,
            apr,
            balanceTransferOfferDuration: balance_transfer_offer_duration,
            purchaseOfferDuration: purchase_offer_duration,
            creditAvailable: credit_available,
        };

        const rules = eligibility_rules.map(rule => this._ruleParser.parse(rule));
        const validators = new EligibilityValidator(rules);
        return new Card(cardParams, validators);
    }
}
