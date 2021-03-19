export type EmploymentStatus = 'Student' | 'Part Time' | 'Full Time';

export interface CustomerParams {
    id: string;
    name: string;
    lastName: string;
    employmentStatus: EmploymentStatus;
    income: number;
}

export default class Customer {
    private _id: string;

    private _name: string;

    private _lastName: string;

    private _employmentStatus: EmploymentStatus;

    private _income: number;

    constructor(customer: CustomerParams) {
        const { id, name, lastName, employmentStatus, income } = customer;
        this._id = id;
        this._name = name;
        this._lastName = lastName;
        this._employmentStatus = employmentStatus;
        this._income = income;
    }

    get id(): string {
        return this._id;
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
