import React from 'react';
import fetch from 'cross-fetch';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {SuggestPermission} from "../../../../../functions/ServerConnection";


export default function AutoSuggestMU(props) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [inputValue, setinputValue] = React.useState('a');
    const loading = open && options.length === 0;


    const handelChange = async (event) => {
        let {value} = event.target;
        setinputValue(value);
        let parents = await props.getOption(inputValue);
        setOptions(parents);
    }


    const handelSubmit = (event, value) => {

        props.GetValues(value);
    };

    React.useEffect(() => {
        console.log('useEffect')
        let active = true;

        if (!loading) {
            return undefined;
        }

        async function anyNameFunction() {
            let parents = await props.getOption(inputValue);
            setOptions(parents);
        }

        anyNameFunction()

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            multiple
            id="asynchronous-demo"
            className={"col-12"}
            // style={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => option.permission_name === value.permission_name}
            getOptionLabel={(option) => option.permission_name}
            options={options}
            loading={loading}

            onChange={handelSubmit}
            renderInput={(params) => (
                <TextField
                    {...params}
                    // error
                    // helperText="Incorrect entry."
                    label="permission"
                    onChange={handelChange}
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}

                            </React.Fragment>
                        ),
                    }}
                />


            )}


        />

    );

}