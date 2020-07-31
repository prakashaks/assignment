export interface UserList {
    members: Array<MembeObject>;
}

export interface ActivePeriod {
    activity_periods: Array<Activityperiods>;
}

interface MembeObject {
    id: string;
    real_name: string;
    tz: string;
    activity_periods: Array<Activityperiods>;
}
interface Activityperiods {
    start_time: string;
    end_time: string;
}
