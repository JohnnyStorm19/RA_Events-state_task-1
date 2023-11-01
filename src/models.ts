export interface IDataImages {
    img: string;
    category: string;
}

export interface IToolbarProps {
    filters: string[];
    selected: string;
    onSelectFilter: (toolbarState: string) => void;
}

export interface IProjectListProps {
    category: string;
}