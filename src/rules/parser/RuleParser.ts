import { injectable } from 'inversify';
import Customer, { EmploymentStatus } from '../../customer/domain/Customer';
import EmploymentStatusRule from '../EmploymentStatusRule';
import IncomeRule, { IcomeRulesParams } from '../IncomeRule';
import { Rule } from '../Rule';
import { Parser } from '../../types/Types';
import { RuleDto, RuleValueDto, RuleValueNumberDto } from '../dto/RuleDto';

@injectable()
export default class RuleParser implements Parser<RuleDto[], Rule<Customer>[]> {
    parse(eligibilities: RuleDto[]): Rule<Customer>[] {
        return eligibilities.reduce((customerEligibilities: Rule<Customer>[], eligibility) => {
            const { field, value } = eligibility;
            if (field === 'employmentStatus' && this.isStringValue(value)) {
                customerEligibilities.push(this.getEmploymentStatusRule(value));
            }
            if (field === 'income' && this.isNumberValue(value)) {
                customerEligibilities.push(this.getIncomeRule(value));
            }
            return customerEligibilities;
        }, []);
    }

    private getEmploymentStatusRule(employmentStatus: string): Rule<Customer> {
        return new EmploymentStatusRule(employmentStatus as EmploymentStatus);
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
