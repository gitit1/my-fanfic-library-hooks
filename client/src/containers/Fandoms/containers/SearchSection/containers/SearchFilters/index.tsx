import React from 'react';
// import { Checkbox, Tooltip, Select, MenuItem, InputLabel, FormLabel, RadioGroup, FormControlLabel, Radio, FormControl } from '@material-ui/core';

import CheckboxSection from './containers/CheckboxSection';
import SelectSection from './containers/SelectSection';
import RadioSection from './containers/RadioSection';
type SearchFiltersProps = {
    classname: string,
};

const SearchFilters: React.FC<SearchFiltersProps> = props => {

    return (
        <div className="Fandoms__SearchSection--SearchContainer__FiltersBox">
            <CheckboxSection />
            <SelectSection arrayName='selectData' />
            <RadioSection />
            <SelectSection arrayName='selectYearsData' />
        </div>
    )
};

export default SearchFilters
