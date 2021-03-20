export interface Parser<Dto, Domain> {
    parse: (dto: Dto) => Domain;
}

export const EmploymentStatuses = ['Student', 'Part Time', 'Full Time'];
export const Titles = ['Mr.', 'Miss', 'Mrs.'];

export type EmploymentStatus = typeof EmploymentStatuses[number];
export type Title = typeof Titles[number];

export interface CustomerParams {
    id: string;
    title: Title;
    name: string;
    lastName: string;
    dob: string;
    employmentStatus: EmploymentStatus;
    income: number;
    houseNo: string;
    postCode: string;
}

export type CustomerForm = Omit<CustomerParams, 'id'>;
