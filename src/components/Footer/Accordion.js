import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion
        sx={{
          color: 'white',
          background: '#1e1e1e',
        }}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon style={{ color: '#fff' }} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Some Content</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          color: 'white',
          background: '#1e1e1e',
        }}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon style={{ color: '#fff' }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Some Content</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
