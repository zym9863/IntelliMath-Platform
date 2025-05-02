import {
  CardContent, Typography, Accordion, AccordionSummary,
  AccordionDetails, Box, Paper, Chip, Divider, useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VerifiedIcon from '@mui/icons-material/Verified';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { Theorem } from '../../types/calculus';
import FormulaCard from './FormulaCard';

interface TheoremCardProps {
  theorem: Theorem;
}

const TheoremCard = ({ theorem }: TheoremCardProps) => {
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
          backgroundColor: theme.palette.primary.main,
          borderRadius: '4px 0 0 4px',
        }
      }}
      className="theorem-card"
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <AutoAwesomeIcon
            color="primary"
            sx={{ mr: 1.5, fontSize: 20 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main
            }}
          >
            {theorem.name}
          </Typography>
        </Box>

        <Box
          sx={{
            p: 2,
            mb: 3,
            bgcolor: 'rgba(25, 118, 210, 0.04)',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'rgba(25, 118, 210, 0.1)'
          }}
        >
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.6,
              fontSize: '1.05rem'
            }}
          >
            <Latex>{theorem.statement}</Latex>
          </Typography>
        </Box>

        {theorem.proof && (
          <Accordion
            elevation={0}
            sx={{
              mb: 2,
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
                <VerifiedIcon
                  color="primary"
                  fontSize="small"
                  sx={{ mr: 1 }}
                />
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.primary.main
                  }}
                >
                  查看证明
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 3, bgcolor: 'background.paper' }}>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  color: 'text.primary'
                }}
              >
                <Latex>{theorem.proof}</Latex>
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}

        {theorem.formulas && theorem.formulas.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2
            }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: 'text.secondary'
                }}
              >
                相关公式
              </Typography>
              <Chip
                label={`${theorem.formulas.length}个`}
                size="small"
                sx={{ ml: 2, fontWeight: 500 }}
                color="primary"
                variant="outlined"
              />
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ pl: 1 }}>
              {theorem.formulas?.map(formula => (
                <FormulaCard key={formula.id} formula={formula} />
              ))}
            </Box>
          </Box>
        )}
      </CardContent>
    </Paper>
  );
};

export default TheoremCard;
