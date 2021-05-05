export interface IAuthSlice {
    username: string,
    avatar: string,
    login: string,

    isFetching: boolean,
    isSuccess: boolean,
    isError: boolean,
    errorMessage: string,
}