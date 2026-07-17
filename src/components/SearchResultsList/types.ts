export interface SearchResultsListProps extends React.AllHTMLAttributes<HTMLOListElement> {
    totalResults?: number
    type?: "1" | "a" | "A" | "i" | "I" | undefined
}
