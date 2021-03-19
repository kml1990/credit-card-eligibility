export type EmploymentStatusDto = 'Student' | 'Part Time' | 'Full Time';

export interface CustomerDto {
    id: string;
    name: string;
    lastName: string;
    employmentStatus: EmploymentStatusDto;
    income: number;
}
