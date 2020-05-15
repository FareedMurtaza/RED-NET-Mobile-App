class Notification {
    constructor(id, name, requestType, locationFrom, locationTo, distance, time, message, profilePic) {
        this.id = id,
            this.name = name,
            this.requestType = requestType,
            this.locationFrom = locationFrom,
            this.locationTo = locationTo,
            this.distance = distance,
            this.time = time,
            this.message = message,
            this.profilePic = profilePic
    }
}

export default Notification