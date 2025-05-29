import db from '../config/db.ts'

interface launchSchema {

    flightNumber: {
        type: number,
        required: true,
        unique: true,
        autoIncrement: true
    },
    mission: {
        type: string,
        required: true
    },
    rocket: {
        type: string,
        required: true
    },
    launchDate: {
        type: Date,
        required: true
    },
    target: {
        type: string,
        required: true
    },
    customers: [string],
    upcoming: {
        type: boolean,
        required: true
    },
    success: {
        type: boolean,
        required: true,
        default: true
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
};

const Launches = db.collection <launchSchema>('launches');
export default Launches;