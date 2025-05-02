import { CardContent, Typography, Box, Paper, Chip, useTheme } from '@mui/material';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import FunctionsIcon from '@mui/icons-material/Functions';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Concept } from '../../types/calculus';
import TheoremCard from './TheoremCard';
import FormulaCard from './FormulaCard';
import ExampleCard from './ExampleCard';

interface ConceptCardProps {
  concept: Concept;
}

const ConceptCard = ({ concept }: ConceptCardProps) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        mb: 4,
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box
        sx={{
          p: 3,
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            position: 'relative',
            zIndex: 1
          }}
        >
          {concept.name}
        </Typography>
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: '1.1rem',
            lineHeight: 1.6,
            color: 'text.primary'
          }}
        >
          <Latex>{concept.description}</Latex>
        </Typography>

        {concept.theorems && concept.theorems.length > 0 && (
          <Box sx={{ mb: 4 }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              pb: 1,
              borderBottom: '1px solid',
              borderColor: 'divider'
            }}>
              <AutoAwesomeIcon
                color="primary"
                sx={{ mr: 1.5 }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 600 }}
              >
                定理
              </Typography>
              <Chip
                label={`${concept.theorems.length}个`}
                size="small"
                sx={{ ml: 2, fontWeight: 500 }}
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              {concept.theorems.map(theorem => (
                <TheoremCard key={theorem.id} theorem={theorem} />
              ))}
            </Box>
          </Box>
        )}

        {concept.formulas && concept.formulas.length > 0 && (
          <Box sx={{ mb: 4 }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              pb: 1,
              borderBottom: '1px solid',
              borderColor: 'divider'
            }}>
              <FunctionsIcon
                color="primary"
                sx={{ mr: 1.5 }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 600 }}
              >
                公式
              </Typography>
              <Chip
                label={`${concept.formulas.length}个`}
                size="small"
                sx={{ ml: 2, fontWeight: 500 }}
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              {concept.formulas.map(formula => (
                <FormulaCard key={formula.id} formula={formula} />
              ))}
            </Box>
          </Box>
        )}

        {concept.examples && concept.examples.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              pb: 1,
              borderBottom: '1px solid',
              borderColor: 'divider'
            }}>
              <MenuBookIcon
                color="primary"
                sx={{ mr: 1.5 }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 600 }}
              >
                例题
              </Typography>
              <Chip
                label={`${concept.examples.length}个`}
                size="small"
                sx={{ ml: 2, fontWeight: 500 }}
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              {concept.examples.map(example => (
                <ExampleCard key={example.id} example={example} />
              ))}
            </Box>
          </Box>
        )}
      </CardContent>
    </Paper>
  );
};

export default ConceptCard;
