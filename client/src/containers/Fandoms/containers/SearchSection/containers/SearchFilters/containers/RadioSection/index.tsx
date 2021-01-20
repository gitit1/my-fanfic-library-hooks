import React from 'react';
import { FormLabel, RadioGroup, FormControlLabel, Radio, FormControl } from '@material-ui/core';


const RadioSection = () => {

    const [mediaStatus, setMediaStatus] = React.useState('running');
    const [fandomStatus, setFandomStatus] = React.useState('running');

    const radioData = [
        {
            label: 'mediaStatus',
            text: 'Media Status',
            value: mediaStatus,
            onChange: (event: React.ChangeEvent<{ value: unknown }>) => setMediaStatus((event.target as HTMLInputElement).value),
            controls: [
                {
                    value: 'running',
                    label: 'Running'
                },
                {
                    value: 'ended',
                    label: 'Ended'
                }
            ]
        },
        {
            label: 'fandomStatus',
            text: 'Fandom Status',
            value: fandomStatus,
            onChange: (event: React.ChangeEvent<{ value: unknown }>) => setFandomStatus((event.target as HTMLInputElement).value),
            controls: [
                {
                    value: 'running',
                    label: 'On Going'
                },
                {
                    value: 'ended',
                    label: 'Ended'
                }
            ]
        }
    ]

    return (
        <div className="Fandoms__SearchSection--SearchContainer__FiltersBox--Section RadioContainer">
            {
                radioData.map((radio, index) => {
                    return (

                        <FormControl
                            component="fieldset"
                            className="Radio"
                            key={radio.label}
                        >
                            <FormLabel component="legend">{radio.text}</FormLabel>
                            <RadioGroup
                                aria-label={radio.label}
                                name={`${radio.label}${index}`}
                                value={radio.value}
                                onChange={radio.onChange}
                            >
                                {
                                    radio.controls.map(item => {
                                        return <FormControlLabel
                                            value={item.value}
                                            control={<Radio />}
                                            label={item.label}
                                            key={item.value}
                                        />
                                    })
                                }
                            </RadioGroup>
                        </FormControl>
                    )
                })
            }
        </div>
    )
}

export default RadioSection
