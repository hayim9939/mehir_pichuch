export type User = {
    username: String,
    password: String,
};

export type RegisterUser = User & {
    email: String,
};

export type City = {
    hebName: string,
    enName: string,
    cityId: number,
    lat: string,
    lng: string,
    boundingBox: [string, string, string, string]
}