export interface Parser<Dto, Domain> {
    parse: (dto: Dto) => Domain;
}
