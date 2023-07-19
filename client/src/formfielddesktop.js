import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Divider from '@mui/material/Divider'

const checkedBoolean ={
  'same': false,
  'different': false
}

const FormFieldDesktop = ({step}) => {

  const [household, checkHousehold] = useState(checkedBoolean)

  const [additionals, checkAdditionals] = useState({
    allergy: false,
    diet: false,
    support: false,
    disability: false
  })
  const [address, changeAddress] = useState('')
  //const [zipcode, changeZipcode] = useState('')
  //const [postarea, changePostarea] = useState('')

  const handleCheck = (event) => {
    checkAdditionals({
      ...additionals,
      [event.target.name]: event.target.checked,
    })
  }

  const handleHousehold = (event) => {
    checkHousehold(checkedBoolean)
    checkHousehold({[event.target.name]: event.target.checked})
  }

  const {allergy, diet, support, disability} = additionals
  const {same, different} = household

  return (
    <div>
      {step===0 && <div>
        <FormControl sx={{marginTop: 4}}>
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
        <Divider sx={{marginTop: 2, marginBottom: 2}} variant="middle" />
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <FormLabel>Anna lapsen henkilötiedot</FormLabel>
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
          <Divider sx={{marginTop: 2, marginBottom: 2}} variant="middle" />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Lisätiedot</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={allergy} onChange={handleCheck} name="allergy" />} label="Lapsella on allergia" />
              <FormControlLabel control={<Checkbox checked={diet} onChange={handleCheck} name="diet" />} label="Lapsella on erityisruokavalio" />
              <FormControlLabel control={<Checkbox checked={support} onChange={handleCheck} name="support"/>} label="Lapsella on erityisen tuen tarve" />
              <FormControlLabel control={<Checkbox checked={disability} onChange={handleCheck} name="disability" />} label="Lapsella on sairaus tai vamma" />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormGroup>
              {(additionals.allergy||additionals.diet||additionals.support||additionals.disability) && <TextField
                id="outlined-multiline-static"
                label="Kuvaile tarkemmin"
                multiline
                rows={6}
                sx={{width: '50ch'}}
              /> }
            </FormGroup>
          </FormControl>
        </Box></div>}

      {step===1 && <div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <FormLabel id="demo-row-radio-buttons-group-label">Täytä huoltajan henkilö- ja yhteystiedot</FormLabel>
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
              label="Puhelinnumero"
              variant="standard"
            />
            <TextField
              required
              id="standard-required"
              label="Sähköpostiosoite"
              variant="standard"
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Lähiosoite"
              variant="standard"
              value={address}
              onChange={ev=>changeAddress(ev.target.value)}
            />
            <TextField
              id="standard-number"
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
          <FormControl>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={same} onChange={handleHousehold} name="same" />} label="Toinen huoltaja asuu samassa taloudessa" />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={different} onChange={handleHousehold} name="different" />} label="Toinen huoltaja asuu eri taloudessa" />
            </FormGroup>
          </FormControl>
          {(same || different) && <div><FormLabel id="demo-row-radio-buttons-group-label">Täytä toisen huoltajan tiedot</FormLabel>
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
                label="Puhelinnumero"
                variant="standard"
              />
              <TextField
                required
                id="standard-required"
                label="Sähköpostiosoite"
                variant="standard"
              />
            </div>
            {different &&
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
        </div>}
            {same && <div>
              <TextField
                disabled
                id="standard-required"
                label="Lähiosoite"
                variant="standard"
                value={address}
              />
              <TextField
                disabled
                id="standard-required"
                label="Postinumero"
                type="number"
                variant="standard"
                //value={zipcode}
              />
              <TextField
                disabled
                id="standard-required"
                label="Postitoimipaikka"
                variant="standard"
                //value={postarea}
              />
            </div>}
          </div>}

       
        </Box></div>}
    </div>
  )

}

export default FormFieldDesktop