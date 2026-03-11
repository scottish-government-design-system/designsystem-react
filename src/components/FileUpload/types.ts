type TextArgs = {
    buttonText: string
    buttonTextPlural: string
    defaultStatusText: string
    defaultStatusTextPlural: string
    enteredDropzone: string
    filesAddedText: string
    filesListHeading: string
    instructionText: string
    instructionTextPlural: string
    leftDropzone: string
}

export interface FileUploadProps extends React.AllHTMLAttributes<HTMLElement> {
    accept?: string,
    capture?: boolean | 'user' | 'environment'
    className?: string
    errorMessage?: string | React.ReactNode
    files?: File[]
    hasError?: boolean
    hintText?: string | React.ReactNode
    id: string
    isMultiple?: boolean
    label: string
    name?: string
    text?: Partial<TextArgs>
}
