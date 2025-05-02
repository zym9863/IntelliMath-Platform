import { CardContent, Typography, Box, Paper, useTheme } from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { Formula } from '../../types/calculus';

interface FormulaCardProps {
  formula: Formula;
}

const FormulaCard = ({ formula }: FormulaCardProps) => {
  const theme = useTheme();

  const handleCopyLatex = () => {
    navigator.clipboard.writeText(formula.latex);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        mb: 3,
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          borderColor: theme.palette.primary.light,
        }
      }}
      className="formula-card"
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
        <FunctionsIcon
          color="primary"
          sx={{ mr: 1.5, fontSize: 20 }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            flexGrow: 1
          }}
        >
          {formula.name}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: '50%',
            cursor: 'pointer',
            color: 'text.secondary',
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.04)',
              color: theme.palette.primary.main
            }
          }}
          onClick={handleCopyLatex}
          title="复制LaTeX代码"
        >
          <ContentCopyIcon fontSize="small" />
        </Box>
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            my: 2,
            p: 2,
            bgcolor: 'rgba(25, 118, 210, 0.03)',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60px',
            border: '1px dashed',
            borderColor: 'rgba(25, 118, 210, 0.2)',
          }}
        >
          <Typography
            component="div"
            sx={{
              fontSize: '1.3rem',
              lineHeight: 1.8,
              textAlign: 'center',
              width: '100%',
              overflowX: 'auto',
              py: 1
            }}
          >
            <Latex>{`$${formula.latex}$`}</Latex>
          </Typography>
        </Box>

        {formula.description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 2,
              lineHeight: 1.6
            }}
          >
            {formula.description}
          </Typography>
        )}
      </CardContent>
    </Paper>
  );
};

export default FormulaCard;
