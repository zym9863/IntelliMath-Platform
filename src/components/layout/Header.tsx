import { AppBar, Toolbar, Typography, Box, Button, Container, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FunctionsIcon from '@mui/icons-material/Functions';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            gap: 1
          }}>
            <FunctionsIcon sx={{
              fontSize: isMobile ? 28 : 32,
              color: 'white',
              mr: 1
            }} />
            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="div"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #ffffff 30%, #e3f2fd 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.5px'
              }}
            >
              智学高数
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            gap: { xs: 1, sm: 2 }
          }}>
            <Button
              color="inherit"
              component={RouterLink}
              to="/"
              sx={{
                fontWeight: 500,
                borderRadius: '20px',
                px: { xs: 1.5, sm: 2 },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              首页
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/chapters"
              sx={{
                fontWeight: 500,
                borderRadius: '20px',
                px: { xs: 1.5, sm: 2 },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              章节
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
