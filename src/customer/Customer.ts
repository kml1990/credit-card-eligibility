export enum EmploymentStatus {
    STUDENT = 'student',
    FULL_TIME = 'fullTime',
    PART_TIME = 'partTime',
}

export interface CustomerParams {
    name: string;
    lastName: string;
    employmentStatus: EmploymentStatus;
    income: number;
}

export default class Customer {
    private _name: string;

    private _lastName: string;

    private _employmentStatus: EmploymentStatus;

    private _income: number;

    constructor(customer: CustomerParams) {
        const { name, lastName, employmentStatus, income } = customer;
        this._name = name;
        this._lastName = lastName;
        this._employmentStatus = employmentStatus;
        this._income = income;
    }

    get name(): string {
        return this._name;
    }

    get lastName(): string {
        return this._lastName;
    }

    get employmentStatus(): EmploymentStatus {
        return this._employmentStatus;
    }

    get income(): number {
        return this._income;
    }
}
