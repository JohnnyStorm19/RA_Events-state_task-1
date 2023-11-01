import { IToolbarProps } from "../models";
import '../css/Toolbar.css'

export function Toolbar({ filters, selected, onSelectFilter }: IToolbarProps) {
    return (
        <div className="filters">
            {filters.map((filter, index) => {
                const filterClass = filter.split(' ').join('').toLowerCase();
                console.log(filter) // ? почему этот лог вызывается 8 раз вместо 4-х?
                return (
                    <span 
                        className={ `filter filter-${filterClass}` }
                        key={ index }
                        onClick={() => {
                            onSelectFilter(filter);
                            console.log('Selected:', selected); // ? здесь отображается прошлый стэйт, но в ProjectList передается актуальный. Правильно ли все сделано? Судя по всему стэйт изменяется позже и лог не успевает
                        } }
                    >
                        { filter }
                    </span>
                )
            })}
        </div>
    )
}