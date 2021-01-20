import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

type SelectSectionProps = {
    arrayName: string,
};

const SelectSection: React.FC<SelectSectionProps> = props => {

    const [mediaType, setMediaType] = React.useState('');
    const [genre, setGenre] = React.useState('');
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');

    const now = new Date().getUTCFullYear();
    const years = Array(now - (now - 22)).fill({text: '', value: ''}).map((v, idx) =>  {return { text: (now - idx).toString(),  value: (now - idx).toString()} })

    const selectData = [
        {
            class: 'select',
            name: 'mediaType',
            value: mediaType,
            onChange: (event: React.ChangeEvent<{ value: unknown }>) => setMediaType(event.target.value as string),
            text: 'Media Type',
            menuItems: [
                {
                    text: 'All',
                    value: 'All'
                },
                {
                    text: 'Series',
                    value: 'Series'
                },
                {
                    text: 'Movies',
                    value: 'Movie'
                },
                {
                    text: 'Telenovelas',
                    value: 'Telenovela'
                },
                {
                    text: 'Comics',
                    value: 'Comics'
                },
                {
                    text: 'Yuri',
                    value: 'Yuri'
                }
            ]
        },
        {
            class: 'select',
            name: 'genre',
            value: genre,
            onChange: (event: React.ChangeEvent<{ value: unknown }>) => setGenre(event.target.value as string),
            text: 'Genre',
            menuItems: [
                {
                    text: 'All',
                    value: 'All'
                },
                {
                    text: 'Action',
                    value: 'Action'
                },
                {
                    text: 'Comedy',
                    value: 'Comedy'
                },
                {
                    text: 'Drama',
                    value: 'Drama'
                },
                {
                    text: 'Sci-Fi',
                    value: 'Sci-Fi'
                }
            ]
        }
    ]
    const selectYearsData = [
        {
            class: 'selectYears',
            name: 'from',
            value: from,
            onChange: (event: React.ChangeEvent<{ value: unknown }>) => setFrom(event.target.value as string),
            text: 'From',
            menuItems: years
        },
        {
            class: 'selectYears',
            name: 'to',
            value: to,
            onChange: (event: React.ChangeEvent<{ value: unknown }>) => setTo(event.target.value as string),
            text: 'To',
            menuItems: years
        }
    ]

    const array = (props.arrayName === 'selectData') ? selectData : selectYearsData;
    // const array = selectData;


    return (
        <div className="Fandoms__SearchSection--SearchContainer__FiltersBox--Section selectContainer">
            {
                array.map(select => {
                    return (
                        <FormControl
                            className={select.class}
                            key={select.name}
                        >
                            <InputLabel htmlFor={select.name}>{select.text}</InputLabel>
                            <Select
                                id={select.name}
                                value={select.value}
                                displayEmpty
                                onChange={select.onChange}
                            >
                                {
                                    select.menuItems.map(item => {
                                        return <MenuItem value={item.value} key={item.text}>{item.text}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    )
                })
            }
        </div>
    )
}

export default SelectSection
