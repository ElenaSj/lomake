import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormField from './formfield';
import { useMediaQuery } from 'react-responsive'
import FormFieldDesktop from './formfielddesktop';

const steps = [
  {
    label: 'Lapsen tiedot',
    description: `Täytä lapsen tiedot`,
  },
  {
    label: 'Huoltajan tiedot',
    description:
      'Täytä huoltajan tai huoltajien tiedot',
  },
  {
    label: 'Hoitopaikka',
    description: `Täytä haettavan hoitopaikan tiedot`,
  },
  {
    label: 'Lisätiedot',
    description: `Lisätietoa täytetään tänne`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const isDesktop = useMediaQuery({query: '(min-width: 1224px)'})
  const isMobile = useMediaQuery({query: '(max-width: 1224px'})

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (<>
    {isMobile &&
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Viimeinen vaihe</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <FormField label={step.label} />
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Tarkasta ja lähetä' : 'Seuraava'}
                  </Button>
                  { index!==0 &&
                  <Button
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Edellinen
                  </Button>
}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>}
    {isDesktop && <Box sx={{ mt: 3, width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
          <React.Fragment>
            <FormFieldDesktop step={activeStep} />
            <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ ml: 1, mt: 1, mr: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Tarkasta ja lähetä' : 'Seuraava'}
                  </Button>

                  { activeStep!==0 &&
                  <Button
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Edellinen
                  </Button>
}
<div>                  <Button
                    sx={{ ml: 1, mt: 1, mr: 1 }}
                  >
                    Tallenna ja jatka myöhemmin
                  </Button>
                  </div>
                </div>
              </Box>
          </React.Fragment>
      </div>
    </Box>}
    </>
  );
}