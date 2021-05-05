import { IAddTeamInterfaces } from "../requestInterfaces/TeamInterfaces";

export interface ITeam extends IAddTeamInterfaces{
    id: number
}

export interface ITeamSlice {
    teams: ITeam[],

    isFetching: boolean,
    isSuccess: boolean,
    isError: boolean,
    errorMessage: string,
}
