export const formatStringToDate = (dateString: string) => {
    const parts = dateString.split("/");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; 
    const day = parseInt(parts[2], 10);
    
    const date = new Date(year, month, day);
    
    return date
}