import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const FormFieldDesktop = ({step}) => {
    const [checkbox, setbox] = useState(false)

    return (
        <div>
            {step===0 && <div>
                <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Hakemuksen tyyppi</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="new"
      >
        
        <FormControlLabel value="new" control={<Radio />} label="Uusi hakemus / lapsi ei ole päivähoidossa" />
        <FormControlLabel value="transfer" control={<Radio />} label="Siirtohakemus / lapsi on päivähoidossa ja haen siirtoa toiseen hoitopaikkaan" />
        </RadioGroup>
    </FormControl>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
        <FormLabel id="demo-row-radio-buttons-group-label">Anna lapsen henkilötiedot</FormLabel>
      <div>
      
      <TextField
          required
          id="standard-required"
          label="Henkilötunnus"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Etunimi"
          variant="standard"
        />
                <TextField
          required
          id="standard-required"
          label="Sukunimi"
          variant="standard"
        />
        </div>
        <div>
                <TextField
          required
          id="standard-required"
          label="Lähiosoite"
          variant="standard"
        />
                <TextField
                required
                id="standard-required"
          label="Postinumero"
          type="number"
          variant="standard"
        />
                <TextField
          required
          id="standard-required"
          label="Postitoimipaikka"
          variant="standard"
        />
       
      </div>
        
      <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Lapsella on allergia" />
      <FormControlLabel control={<Checkbox />} label="Lapsella on erityisruokavalio" />
      <FormControlLabel control={<Checkbox />} label="Lapsella on erityisen tuen tarvetta" />
      <FormControlLabel control={<Checkbox />} label="Lapsella on sairaus tai vamma" />
    </FormGroup>
    <TextField
          id="standard-textarea"
          label="Kuvaile tarkemmin"
          multiline
          variant="standard"
        /> 
       </Box></div>}
      {step===1 && <div>
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
          id="standard-required"
          label="Henkilötunnus"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Etunimi"
          variant="standard"
        />
                <TextField
          required
          id="standard-required"
          label="Sukunimi"
          variant="standard"
        />
                        <TextField
          required
          id="standard-required"
          label="Puhelinnumero"
          variant="standard"
        />
                        <TextField
          required
          id="standard-required"
          label="Sähköpostiosoite"
          variant="standard"
        />
                <TextField
          required
          id="standard-required"
          label="Lähiosoite"
          variant="standard"
        />
                <TextField
          id="standard-number"
          label="Postinumero"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
                <TextField
          required
          id="standard-required"
          label="Postitoimipaikka"
          variant="standard"
        />
            <FormGroup>
      <FormControlLabel onClick={()=>setbox(!checkbox)} control={<Checkbox />} label="Lapsen toinen huoltaja asuu samassa taloudessa" />
    </FormGroup>
    {checkbox && <><p>Täytä toisen huoltajan tiedot</p>
    <TextField
          required
          id="standard-required"
          label="Henkilötunnus"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Etunimi"
          variant="standard"
        />
                <TextField
          required
          id="standard-required"
          label="Sukunimi"
          variant="standard"
        />
    </>}

       
      </div>    </Box></div>}
        </div>
    )

}

export default FormFieldDesktop