// Function to format date as dd/mm/yyyy
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Function to format time as hh.mm.ss
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}.${minutes}.${seconds}`;
}

// Function to get relative time
function getRelativeTime(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(seconds / 3600);
    const days = Math.floor(seconds / 86400);
    const months = now.getMonth() - date.getMonth() + (12 * (now.getFullYear() - date.getFullYear()));

    if (months > 0) {
        return months === 1 ? '1 month ago' : `${months} months ago`;
    } else if (days > 0) {
        return days === 1 ? '1 day ago' : `${days} days ago`;
    } else if (hours > 0) {
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else if (minutes > 0) {
        return minutes === 1 ? '1 min ago' : `${minutes} mins ago`;
    } else {
        return seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
    }
}

// Example date (e.g., a post timestamp)
const postDate = new Date('2024-01-01T12:00:00'); // Change this to any date

// Displaying formatted date, time, and relative time
document.getElementById('formattedDate').innerText = `Date: ${formatDate(postDate)}`;
document.getElementById('formattedTime').innerText = `Time: ${formatTime(postDate)}`;
document.getElementById('relativeTime').innerText = getRelativeTime(postDate);
