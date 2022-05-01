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
          color: '#d0d1d3',
          background: '#2b2a33',
        }}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon style={{ color: '#d0d1d3' }} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography
            sx={{
              fontWeight: '600',
            }}
          >
            Some Content
          </Typography>
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
          color: '#d0d1d3',
          background: '#2b2a33',
          borderTop: '0.0625rem solid #59585f',
        }}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon style={{ color: '#d0d1d3' }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography
            sx={{
              fontWeight: '600',
            }}
          >
            Some Content
          </Typography>
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
          color: '#d0d1d3',
          background: '#2b2a33',
          borderTop: '0.0625rem solid #59585f',
        }}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon style={{ color: '#d0d1d3' }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography
            sx={{
              fontWeight: '600',
            }}
          >
            Some Content
          </Typography>
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
