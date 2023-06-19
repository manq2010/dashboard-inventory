export default function getFormattedDate(dateString) {
    return new Intl.DateTimeFormat('en-ZA', { dateStyle: 'long' }).format(new Date(dateString));
}
