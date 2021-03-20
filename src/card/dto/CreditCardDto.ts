import { RuleDto } from '../../rules/dto/RuleDto';

export interface CreditCardDto {
    id: string;
    name: string;
    apr: number;
    balance_transfer_offer_duration: number;
    purchase_offer_duration: number;
    credit_available: number;
    eligibility_rules: RuleDto[];
}
