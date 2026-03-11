import { FormFieldBase } from '../../shared-types';

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

export interface FileUploadProps extends FormFieldBase<HTMLElement> {
    accept?: string,
    capture?: boolean | 'user' | 'environment'
    className?: string
    files?: File[]
    id: string
    isMultiple?: boolean
    name?: string
    text?: Partial<TextArgs>
}
