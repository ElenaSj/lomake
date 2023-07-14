import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FormField = ({label}) => {
    const [checkbox, setbox] = useState(false)

    return (
        <div>
            {label==='Lapsen tiedot' && <div>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { marginTop: 1, marginBottom: 1, width: '80vw' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-required"
          label="Henkilötunnus"
        />
        <TextField
          required
          id="outlined-required"
          label="Etunimi"
        />
                <TextField
          required
          id="outlined-required"
          label="Sukunimi"
        />
                <TextField
          required
          id="outlined-required"
          label="Lähiosoite"
        />
                <TextField
          id="outlined-number"
          label="Postinumero"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
                <TextField
          required
          id="outlined-required"
          label="Postitoimipaikka"
        />
       
      </div>    </Box></div>}
      {label==='Huoltajan tiedot' && <div>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { marginTop: 1, marginBottom: 1, width: '80vw' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-required"
          label="Henkilötunnus"
        />
        <TextField
          required
          id="outlined-required"
          label="Etunimi"
        />
                <TextField
          required
          id="outlined-required"
          label="Sukunimi"
        />
                        <TextField
          required
          id="outlined-required"
          label="Puhelinnumero"
        />
                        <TextField
          required
          id="outlined-required"
          label="Sähköpostiosoite"
        />
                <TextField
          required
          id="outlined-required"
          label="Lähiosoite"
        />
                <TextField
          id="outlined-number"
          label="Postinumero"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
                <TextField
          required
          id="outlined-required"
          label="Postitoimipaikka"
        />
            <FormGroup>
      <FormControlLabel onClick={()=>setbox(!checkbox)} control={<Checkbox />} label="Lapsen toinen huoltaja asuu samassa taloudessa" />
    </FormGroup>
    {checkbox && <><p>Täytä toisen huoltajan tiedot</p>
    <TextField
          required
          id="outlined-required"
          label="Henkilötunnus"
        />
        <TextField
          required
          id="outlined-required"
          label="Etunimi"
        />
                <TextField
          required
          id="outlined-required"
          label="Sukunimi"
        />
    </>}

       
      </div>    </Box></div>}
        </div>
    )

}

export default FormField