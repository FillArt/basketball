interface IRoutePath {
    [key: string]: string;
}

export const routePaths: IRoutePath = {
    signIn: '/',
    signUp: '/signup',
    teams: '/teams',
    teamItem: '/teams/:id',
    teamAdd: '/teams/add',
};