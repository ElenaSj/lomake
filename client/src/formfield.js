import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

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
              size='small'
              required
              id="outlined-required"
              label="Henkilötunnus"
            />
            <TextField
              size='small'
              required
              id="outlined-required"
              label="Etunimi"
            />
            <TextField
              size='small'
              required
              id="outlined-required"
              label="Sukunimi"
            />
            <TextField
              size='small'
              required
              id="outlined-required"
              label="Lähiosoite"
            />
            <TextField
              size='small'
              required
              id="outlined-required"
              label="Postinumero"
              type="number"
            />
            <TextField
              size='small'
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
              size='small'
              required
              id="outlined-required"
              label="Henkilötunnus"
            />
            <TextField
              size='small'
              required
              id="outlined-required"
              label="Etunimi"
            />
            <TextField
              size='small'
              required
              id="outlined-required"
              label="Sukunimi"
            />
            <TextField
              size='small'
              required
              id="outlined-required"
              label="Puhelinnumero"
            />
            <TextField
              size='small'
              required
              id="outlined-required"
              label="Sähköpostiosoite"
            />
            <TextField
              size='small'
              required
              id="outlined-required"
              label="Lähiosoite"
            />
            <TextField
              size='small'
              id="outlined-number"
              label="Postinumero"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              size='small'
              required
              id="outlined-required"
              label="Postitoimipaikka"
            />
            <FormGroup>
              <FormControlLabel onClick={()=>setbox(!checkbox)} control={<Checkbox />} label="Lapsella on toinen huoltaja" />
            </FormGroup>
            {checkbox && <><p>Täytä toisen huoltajan tiedot</p>
              <FormControlLabel control={<Checkbox />} label="Toinen huoltaja asuu samassa taloudessa" />
              <TextField
                size='small'
                required
                id="outlined-required"
                label="Henkilötunnus"
              />
              <TextField
                size='small'
                required
                id="outlined-required"
                label="Etunimi"
              />
              <TextField
                size='small'
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