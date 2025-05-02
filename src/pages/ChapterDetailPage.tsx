import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Container, Typography, Box, Breadcrumbs, Link, Grid, Paper,
  Chip, useTheme, useMediaQuery, Fade
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ConceptCard from '../components/calculus/ConceptCard';
import calculusCourse from '../data/calculusData';
import { Chapter } from '../types/calculus';

const ChapterDetailPage = () => {
  const { chapterId } = useParams<{ chapterId: string }>();
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [activeConceptId, setActiveConceptId] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (chapterId) {
      const foundChapter = calculusCourse.chapters.find(ch => ch.id === chapterId);
      if (foundChapter) {
        setChapter(foundChapter);

        // Set the first concept as active by default
        if (foundChapter.concepts.length > 0) {
          setActiveConceptId(foundChapter.concepts[0].id);
        }
      }
    }

    // Handle hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveConceptId(hash);

        // Smooth scroll to the element
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    // Check for hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [chapterId]);

  // Handle scroll to track active concept
  useEffect(() => {
    if (!chapter) return;

    const handleScroll = () => {
      const conceptElements = chapter.concepts.map(c =>
        document.getElementById(c.id)
      ).filter(Boolean);

      for (let i = conceptElements.length - 1; i >= 0; i--) {
        const element = conceptElements[i];
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveConceptId(element.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [chapter]);

  if (!chapter) {
    return (
      <Container maxWidth="lg">
        <Box sx={{
          my: 8,
          textAlign: 'center',
          p: 4,
          borderRadius: 2,
          bgcolor: 'background.paper',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          <Typography variant="h5" gutterBottom color="text.secondary">
            章节未找到
          </Typography>
          <Link
            component={RouterLink}
            to="/chapters"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              mt: 2,
              fontWeight: 500
            }}
          >
            <NavigateNextIcon sx={{ transform: 'rotate(180deg)' }} />
            返回章节列表
          </Link>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: { xs: 3, md: 5 } }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          sx={{
            mb: 3,
            '& .MuiBreadcrumbs-ol': {
              flexWrap: 'nowrap'
            },
            '& .MuiBreadcrumbs-li': {
              whiteSpace: 'nowrap'
            }
          }}
        >
          <Link
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              '&:hover': { color: 'primary.main' }
            }}
          >
            首页
          </Link>
          <Link
            color="inherit"
            component={RouterLink}
            to="/chapters"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            章节
          </Link>
          <Typography
            color="text.primary"
            sx={{
              maxWidth: { xs: '120px', sm: 'none' },
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {chapter.title}
          </Typography>
        </Breadcrumbs>

        <Box sx={{
          mb: 5,
          pb: 4,
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Chip
              icon={<MenuBookIcon />}
              label={`第 ${chapter.order} 章`}
              color="primary"
              size="small"
              sx={{ mr: 2, fontWeight: 500 }}
            />
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: 600 }}
            >
              {chapter.title}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: '1.1rem',
              color: 'text.secondary',
              maxWidth: '800px'
            }}
          >
            {chapter.description}
          </Typography>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 3,
            color: 'text.secondary'
          }}>
            <AutoStoriesIcon sx={{ mr: 1, fontSize: 20 }} />
            <Typography variant="body2">
              本章包含 {chapter.concepts.length} 个知识点
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box sx={{ position: 'relative' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  position: { xs: 'relative', md: 'sticky' },
                  top: 24,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  mb: { xs: 3, md: 0 }
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    pb: 1.5,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    mb: 2
                  }}
                >
                  知识点列表
                </Typography>
                <Box sx={{
                  maxHeight: { xs: 'auto', md: 'calc(100vh - 250px)' },
                  overflowY: 'auto',
                  pr: 1
                }}>
                  {chapter.concepts.map((concept, index) => (
                    <Box
                      key={concept.id}
                      sx={{
                        mb: 1.5,
                        borderLeft: '2px solid',
                        borderColor: activeConceptId === concept.id ? 'primary.main' : 'transparent',
                        pl: 1.5,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Link
                        href={`#${concept.id}`}
                        underline="none"
                        sx={{
                          display: 'block',
                          py: 0.75,
                          px: 1,
                          borderRadius: 1,
                          bgcolor: activeConceptId === concept.id ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                          color: activeConceptId === concept.id ? 'primary.main' : 'text.primary',
                          fontWeight: activeConceptId === concept.id ? 600 : 400,
                          '&:hover': {
                            bgcolor: 'rgba(25, 118, 210, 0.04)',
                            color: 'primary.main'
                          }
                        }}
                      >
                        {index + 1}. {concept.name}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            {chapter.concepts.map((concept, index) => (
              <Fade
                key={concept.id}
                in={true}
                timeout={300}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Box
                  id={concept.id}
                  sx={{
                    scrollMarginTop: '100px',
                    mb: 5
                  }}
                >
                  <ConceptCard concept={concept} />
                </Box>
              </Fade>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ChapterDetailPage;
