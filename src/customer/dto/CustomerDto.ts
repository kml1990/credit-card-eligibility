export type EmploymentStatusDto = 'Student' | 'Part Time' | 'Full Time';
export interface CustomerDto {
    id: string;
    name: string;
    last_name: string;
    employment_status: EmploymentStatusDto;
    income: number;
}
