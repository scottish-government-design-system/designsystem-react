import React, { Children } from 'react';
import WrapperTag from "../../common/WrapperTag";
import { CategoryListProps } from './types';
import { CategoryItemProps } from '../CategoryItem/types';

const CategoryList = ({
    children,
    className,
    isGrid,
    isOrdered,
    ...props
}: CategoryListProps) => {
    function processChild(child: React.ReactNode) {
        const thisChild = child as React.ReactElement<CategoryItemProps>
        return React.cloneElement(thisChild, {tagName: 'li'})
    }

    return (
        <WrapperTag
            tagName={isOrdered ? 'ol' : 'ul'}
            className={[
                'ds_category-list',
                isGrid && 'ds_category-list--grid',
                className
            ].join(' ')}
            {...props}
        >
            {Children.map(children, child => processChild(child))}
        </WrapperTag>
    );
};

CategoryList.displayName = 'CategoryList';

export default CategoryList;
