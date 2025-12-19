import { TagColour } from '../../shared-types';

export interface TagProps extends React.AllHTMLAttributes<HTMLElement> {
    colour?: TagColour;
}
