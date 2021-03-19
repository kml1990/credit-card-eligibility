import { injectable } from 'inversify';
import Customer from '../../customer/domain/Customer';
import { EmploymentStatusDto } from '../../customer/dto/CustomerDto';
import { Parser } from '../../types/Types';
import EmploymentStatusRule from '../domain/EmploymentStatusRule';
import EmptyRule from '../domain/EmptyRule';
import IncomeRule, { IcomeRulesParams } from '../domain/IncomeRule';
import { Rule } from '../domain/Rule';
import { RuleDto, RuleValueDto, RuleValueNumberDto } from '../dto/RuleDto';

@injectable()
export default class RuleParser implements Parser<RuleDto, Rule<Customer>> {
    parse(rule: RuleDto): Rule<Customer> {
        const { field, value } = rule;
        if (field === 'employmentStatus' && this.isStringValue(value)) {
            return this.getEmploymentStatusRule(value as EmploymentStatusDto);
        }
        if (field === 'income' && this.isNumberValue(value)) {
            return this.getIncomeRule(value);
        }

        return this.getEmptyRule();
    }

    private getEmptyRule() {
        return new EmptyRule();
    }

    private getEmploymentStatusRule(employmentStatus: EmploymentStatusDto): Rule<Customer> {
        return new EmploymentStatusRule(employmentStatus);
    }

    private getIncomeRule(incomeRuleParams: IcomeRulesParams): Rule<Customer> {
        return new IncomeRule(incomeRuleParams);
    }

    private isStringValue(value: RuleValueDto): value is string {
        return typeof value === 'string';
    }

    private isNumberValue(value: RuleValueDto): value is RuleValueNumberDto {
        return typeof value !== 'string';
    }
}
