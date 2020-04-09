const now = new Date();

export const getHoursDifference = (oldDate) => {
    const difference = now - new Date(oldDate),
        differenceInHours = difference > 0 ? Math.round(difference / (1000 * 3600)) : 0;

    return differenceInHours;
}