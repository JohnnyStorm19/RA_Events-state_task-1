import { useState } from 'react';
import { ProjectList } from "./ProjectList.tsx";
import { Toolbar } from "./Toolbar.tsx";

export function Portfolio() {
    const [toolbarState, setToolbarState] = useState('All');

    const handleToolbarClick = (toolbarState: string) => {
        setToolbarState(toolbarState);
    }

    return (
        <div className="portfolio-container">
            <Toolbar
                filters={ ["All", "Websites", "Flayers", "Business Cards"] } 
                selected={ toolbarState } 
                onSelectFilter={ (toolbarState) => handleToolbarClick(toolbarState) }
            />
            <ProjectList category={ toolbarState }/>
        </div>
    )
}