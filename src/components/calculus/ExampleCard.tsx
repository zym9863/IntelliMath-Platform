import {
  CardContent, Typography, Accordion, AccordionSummary,
  AccordionDetails, Box, Paper, useTheme, Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { Example } from '../../types/calculus';

interface ExampleCardProps {
  example: Example;
}

const ExampleCard = ({ example }: ExampleCardProps) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        mb: 3,
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '4px',
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '4px 0 0 4px',
        }
      }}
      className="example-card"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.default'
        }}
      >
        <MenuBookIcon
          sx={{
            mr: 1.5,
            fontSize: 20,
            color: theme.palette.secondary.main
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            color: theme.palette.secondary.main
          }}
        >
          {example.title}
        </Typography>
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            p: 2.5,
            mb: 3,
            bgcolor: 'rgba(245, 0, 87, 0.03)',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'rgba(245, 0, 87, 0.1)'
          }}
        >
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.6,
              fontSize: '1.05rem'
            }}
          >
            <Latex>{example.problem}</Latex>
          </Typography>
        </Box>

        <Accordion
          elevation={0}
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '8px !important',
            '&::before': {
              display: 'none'
            },
            '& .MuiAccordionSummary-root': {
              borderRadius: '8px',
              '&.Mui-expanded': {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }
            }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              bgcolor: 'background.default',
              '&:hover': {
                bgcolor: 'background.default',
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LightbulbIcon
                sx={{
                  mr: 1,
                  fontSize: 20,
                  color: theme.palette.secondary.main
                }}
              />
              <Typography
                sx={{
                  fontWeight: 500,
                  color: theme.palette.secondary.main
                }}
              >
                查看解答
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3, bgcolor: 'background.paper' }}>
            <Divider sx={{ mb: 2 }} />
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.6,
                color: 'text.primary'
              }}
            >
              <Latex>{example.solution}</Latex>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Paper>
  );
};

export default ExampleCard;
