import React from 'react';
import schema from './products.json';

export const ComponentsProducts = {
    MeasureNames: props => {
        return (
            <label>
                Measure Name
                <select name="measure_name"
                    id={props.id}
                    value={props.measure_name}
                    onChange={props.handleChange}
                    disabled={props.disabled}>
                    {
                        schema.measure_names.map((m, i) => {
                            return <option key={i} value={m}>{m}</option>
                        })
                    }
                </select>
            </label>
        )
    },
    Groups: props => {
        return (
            <label>
                Group:
                <select name="parent_id" id={props.id}
                    value={props.parent_id} onChange={props.handleChange} disabled={props.disabled}>
                    <option key='0' value='0'>Root</option>
                    {props.groups.map(g => {
                        return <option key={g.id} value={g.id}>{g.label}</option>
                    })}
                </select>
            </label>
        )
    }
}