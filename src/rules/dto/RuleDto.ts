import Customer from '../../customer/domain/Customer';

export interface RuleValueNumberDto {
    min?: number;
    max?: number;
}

export type RuleValueDto = string | RuleValueNumberDto;

export interface RuleDto {
    field: keyof Customer;
    value: RuleValueDto;
}
