import React from 'react';
import { Checkbox, Tooltip, FormControl } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';

const CheckboxSection = () => {

    const [code307, setCode307] = React.useState(true);
    const [canon, setCanon] = React.useState(true);

    const checkboxesData = [
        {
            name: 'code307',
            checked: code307,
            onChange: () => setCode307(!code307),
            text: 'With 307 Code',
            classname: 'red',
            tooltip: "Only Valid For Fandoms That Ended - Ended Bad (probably one of them got killed :/ ) If not marked will return only Happy Ending"
        },
        {
            name: 'canon',
            checked: canon,
            onChange: () => setCanon(!canon),
            text: 'Only Canon',
            classname: 'orange',
            tooltip: "Officially part of the Series/Movie/Comic.."

        }
    ]
    return (
        <div className="Fandoms__SearchSection--SearchContainer__FiltersBox--Section CheckboxContainer">
            {
                checkboxesData.map(checkbox => {
                    return (
                        <FormControl
                            className="Checkbox"
                            key={checkbox.name}
                        >
                            <Checkbox
                                checked={checkbox.checked}
                                onChange={checkbox.onChange}
                                name={checkbox.name}
                                className={checkbox.classname}
                            />
                            {checkbox.text}&nbsp;
                            <Tooltip title={checkbox.tooltip}>
                                <HelpIcon className={'helpIcon'} />
                            </Tooltip>
                        </FormControl>
                    )
                })
            }
        </div>
    )
}

export default CheckboxSection
