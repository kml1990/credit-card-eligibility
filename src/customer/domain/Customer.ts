import { CustomerParams, EmploymentStatus, Title } from '../../types/Types';

export default class Customer {
    private readonly _id: string;

    private readonly _title: Title;

    private readonly _name: string;

    private readonly _lastName: string;

    private readonly _dob: string;

    private readonly _employmentStatus: EmploymentStatus;

    private readonly _income: number;

    private readonly _houseNo: string;

    private readonly _postCode: string;

    constructor(customer: CustomerParams) {
        const {
            id,
            title,
            name,
            lastName,
            dob,
            employmentStatus,
            income,
            houseNo,
            postCode,
        } = customer;
        this._id = id;
        this._title = title;
        this._name = name;
        this._lastName = lastName;
        this._dob = dob;
        this._employmentStatus = employmentStatus;
        this._income = income;
        this._houseNo = houseNo;
        this._postCode = postCode;
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get name(): string {
        return this._name;
    }

    get lastName(): string {
        return this._lastName;
    }

    get dob(): string {
        return this._dob;
    }

    get employmentStatus(): EmploymentStatus {
        return this._employmentStatus;
    }

    get income(): number {
        return this._income;
    }

    get houseNo(): string {
        return this._houseNo;
    }

    get postCode(): string {
        return this._postCode;
    }
}
