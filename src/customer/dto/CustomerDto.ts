export type EmploymentStatusDto = 'Student' | 'Part Time' | 'Full Time';
export type Title = 'Mr.' | 'Miss' | 'Mrs.';
export interface CustomerDto {
    id: string;
    title: Title;
    name: string;
    last_name: string;
    dob: string;
    employment_status: EmploymentStatusDto;
    income: number;
    house_number: string;
    post_code: string;
}
