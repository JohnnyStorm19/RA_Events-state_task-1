import { IToolbarProps } from "../models";
import '../css/Toolbar.css'
import { useEffect } from "react";

export function Toolbar({ filters, selected, onSelectFilter }: IToolbarProps) {
    useEffect(() => {
        console.log('Selected:', selected); 
    }, [selected]);

    return (
        <div className="filters">
            {filters.map((filter, index) => {
                const filterClass = filter.split(' ').join('').toLowerCase();
                return (
                    <span 
                        className={ `filter filter-${filterClass}` }
                        key={ index }
                        onClick={() => {
                            onSelectFilter(filter);
                        } }
                    >
                        { filter }
                    </span>
                )
            })}
        </div>
    )
}