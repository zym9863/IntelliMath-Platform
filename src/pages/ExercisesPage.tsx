import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Container, Typography, Box, Breadcrumbs, Link, Paper,
  Divider, Button, useTheme, useMediaQuery, Fade
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Exercise } from '../types/calculus';
import { getChapterExercises } from '../data/exercisesData';
import ExerciseList from '../components/exercises/ExerciseList';
import ExerciseCard from '../components/exercises/ExerciseCard';
import calculusCourse from '../data/calculusData';

const ExercisesPage = () => {
  const { chapterId } = useParams<{ chapterId: string }>();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [chapterTitle, setChapterTitle] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (chapterId) {
      // 获取章节标题
      const chapter = calculusCourse.chapters.find(ch => ch.id === chapterId);
      if (chapter) {
        setChapterTitle(chapter.title);
      }

      // 获取章节练习题
      const chapterExercises = getChapterExercises(chapterId);
      setExercises(chapterExercises);
      setSelectedExercise(null); // 重置选中的练习题
    }
  }, [chapterId]);

  // 处理练习题完成事件
  const handleExerciseComplete = (exerciseId: string, isCorrect: boolean) => {
    console.log(`练习题 ${exerciseId} 完成，答案${isCorrect ? '正确' : '错误'}`);
    // 这里可以添加更多逻辑，如更新进度、记录统计等
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <Link component={RouterLink} to="/" color="inherit">
            首页
          </Link>
          <Link component={RouterLink} to="/chapters" color="inherit">
            章节列表
          </Link>
          <Link 
            component={RouterLink} 
            to={`/chapters/${chapterId}`} 
            color="inherit"
          >
            {chapterTitle}
          </Link>
          <Typography color="text.primary">练习题</Typography>
        </Breadcrumbs>

        <Box sx={{ 
          display: 'flex', 
          mb: 4,
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            mb: isMobile ? 2 : 0,
            width: isMobile ? '100%' : 'auto'
          }}>
            <AssignmentIcon 
              sx={{ 
                fontSize: 40, 
                mr: 2, 
                color: theme.palette.secondary.main 
              }} 
            />
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ fontWeight: 600 }}
            >
              {chapterTitle} - 练习题
            </Typography>
          </Box>

          {selectedExercise && (
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => setSelectedExercise(null)}
              sx={{ ml: isMobile ? 0 : 'auto' }}
            >
              返回题目列表
            </Button>
          )}
        </Box>

        <Divider sx={{ mb: 4 }} />

        {exercises.length === 0 ? (
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4, 
              textAlign: 'center',
              bgcolor: 'background.default',
              border: '1px dashed',
              borderColor: 'divider',
              borderRadius: 2
            }}
          >
            <Typography variant="h6" color="text.secondary" gutterBottom>
              暂无练习题
            </Typography>
            <Typography variant="body2" color="text.secondary">
              该章节暂未添加练习题，请选择其他章节
            </Typography>
            <Button
              component={RouterLink}
              to="/chapters"
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              返回章节列表
            </Button>
          </Paper>
        ) : selectedExercise ? (
          <Fade in={!!selectedExercise}>
            <Box>
              <ExerciseCard 
                exercise={selectedExercise} 
                onComplete={handleExerciseComplete}
              />
            </Box>
          </Fade>
        ) : (
          <Fade in={!selectedExercise}>
            <Box>
              <ExerciseList 
                exercises={exercises} 
                onSelectExercise={setSelectedExercise} 
              />
            </Box>
          </Fade>
        )}
      </Box>
    </Container>
  );
};

export default ExercisesPage;